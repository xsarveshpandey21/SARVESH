import { useState, useEffect, useCallback } from 'react';
import { GITHUB_USERNAME, FEATURED_REPOS, LANGUAGE_COLORS } from '../data/config';
import { FALLBACK_PROJECTS } from '../data/fallbackProjects';
import type { GithubRepoItem } from '../data/fallbackProjects';

export interface GithubEventItem {
  id: string;
  type: string;
  repo: { name: string };
  created_at: string;
  payload?: any;
}

export interface LanguageStat {
  language: string;
  count: number;
  percentage: number;
  color: string;
}

const CACHE_KEY_REPOS = 'sp_github_repos_cache_v2';
const CACHE_KEY_EVENTS = 'sp_github_events_cache_v2';
const CACHE_TTL_MS = 30 * 60 * 1000; // 30 minutes

export function useGithubData() {
  const [repos, setRepos] = useState<GithubRepoItem[]>(FALLBACK_PROJECTS);
  const [events, setEvents] = useState<GithubEventItem[]>([]);
  const [languages, setLanguages] = useState<LanguageStat[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [isLive, setIsLive] = useState<boolean>(false);
  const [lastSyncTime, setLastSyncTime] = useState<string>('Just now');
  const [errorNotice, setErrorNotice] = useState<string | null>(null);

  const token = import.meta.env.VITE_GITHUB_TOKEN;

  const getHeaders = useCallback((withEtag = false) => {
    const headers: Record<string, string> = {
      Accept: 'application/vnd.github.v3+json',
    };
    if (token) {
      headers['Authorization'] = `token ${token}`;
    }
    if (withEtag) {
      const cachedEtag = localStorage.getItem(`${CACHE_KEY_REPOS}_etag`);
      if (cachedEtag) {
        headers['If-None-Match'] = cachedEtag;
      }
    }
    return headers;
  }, [token]);

  const computeLanguages = useCallback((repoList: GithubRepoItem[]) => {
    const counts: Record<string, number> = {};
    let total = 0;

    repoList.forEach((r) => {
      const lang = r.language || 'Other';
      counts[lang] = (counts[lang] || 0) + 1;
      total += 1;
    });

    const stats: LanguageStat[] = Object.entries(counts).map(([lang, count]) => ({
      language: lang,
      count,
      percentage: total > 0 ? Math.round((count / total) * 100) : 0,
      color: LANGUAGE_COLORS[lang] || '#8FA89A',
    }));

    stats.sort((a, b) => b.count - a.count);
    return stats;
  }, []);

  const sortAndMergeRepos = useCallback((fetchedRepos: any[]): GithubRepoItem[] => {
    // Filter out forks & archived
    const active = fetchedRepos.filter((r) => !r.fork && !r.archived);

    // Map to normalized items
    const normalized: GithubRepoItem[] = active.map((r) => {
      const fallbackMatch = FALLBACK_PROJECTS.find(
        (f) => f.name.toLowerCase() === r.name.toLowerCase()
      );

      return {
        id: r.id,
        name: r.name,
        full_name: r.full_name,
        description: r.description || fallbackMatch?.description || 'Engineered software repository by Sarvesh Pandey.',
        html_url: r.html_url,
        homepage: r.homepage || fallbackMatch?.homepage || null,
        language: r.language || fallbackMatch?.language || 'Python',
        stargazers_count: r.stargazers_count || fallbackMatch?.stargazers_count || 0,
        forks_count: r.forks_count || fallbackMatch?.forks_count || 0,
        topics: r.topics?.length ? r.topics : fallbackMatch?.topics || ['generative-ai', 'python'],
        pushed_at: r.pushed_at || r.updated_at,
        created_at: r.created_at,
        mockupType: fallbackMatch?.mockupType || 'chat',
        metrics: fallbackMatch?.metrics || ['Live repository', 'CI/CD verified'],
        longReadme: fallbackMatch?.longReadme,
      };
    });

    // Sort by FEATURED_REPOS priority first, then pushed_at
    normalized.sort((a, b) => {
      const featA = FEATURED_REPOS.indexOf(a.name.toLowerCase());
      const featB = FEATURED_REPOS.indexOf(b.name.toLowerCase());

      if (featA !== -1 && featB !== -1) return featA - featB;
      if (featA !== -1) return -1;
      if (featB !== -1) return 1;

      return new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime();
    });

    // If fetched list is small or empty, merge in fallback projects not present
    if (normalized.length < 4) {
      FALLBACK_PROJECTS.forEach((fallback) => {
        if (!normalized.some((n) => n.name.toLowerCase() === fallback.name.toLowerCase())) {
          normalized.push(fallback);
        }
      });
    }

    return normalized;
  }, []);

  const fetchData = useCallback(async (isManual = false) => {
    if (isManual) setIsRefreshing(true);
    else setIsLoading(true);

    try {
      // 1. Check LocalStorage Cache
      const cachedReposStr = localStorage.getItem(CACHE_KEY_REPOS);
      const cachedTimeStr = localStorage.getItem(`${CACHE_KEY_REPOS}_time`);

      if (!isManual && cachedReposStr && cachedTimeStr) {
        const age = Date.now() - parseInt(cachedTimeStr, 10);
        if (age < CACHE_TTL_MS) {
          const cachedData = JSON.parse(cachedReposStr);
          setRepos(cachedData);
          setLanguages(computeLanguages(cachedData));
          setIsLive(true);
          setLastSyncTime(new Date(parseInt(cachedTimeStr, 10)).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
          setIsLoading(false);
          return;
        }
      }

      // 2. Fetch Repos from GitHub REST API with conditional ETag
      const reposUrl = `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=pushed`;
      const reposRes = await fetch(reposUrl, { headers: getHeaders(true) });

      // Handle 304 Not Modified
      if (reposRes.status === 304 && cachedReposStr) {
        const cachedData = JSON.parse(cachedReposStr);
        setRepos(cachedData);
        setLanguages(computeLanguages(cachedData));
        setIsLive(true);
        setErrorNotice(null);
        setLastSyncTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        setIsLoading(false);
        setIsRefreshing(false);
        return;
      }

      if (reposRes.status === 403 || reposRes.status === 429) {
        throw new Error('GitHub API rate limit reached. Displaying curated production projects.');
      }

      if (!reposRes.ok) {
        throw new Error(`GitHub API returned status ${reposRes.status}`);
      }

      const etag = reposRes.headers.get('ETag');
      if (etag) {
        localStorage.setItem(`${CACHE_KEY_REPOS}_etag`, etag);
      }

      const reposJson = await reposRes.json();
      const processedRepos = sortAndMergeRepos(reposJson);

      setRepos(processedRepos);
      setLanguages(computeLanguages(processedRepos));
      setIsLive(true);
      setErrorNotice(null);
      const nowTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setLastSyncTime(nowTime);

      // Save cache
      localStorage.setItem(CACHE_KEY_REPOS, JSON.stringify(processedRepos));
      localStorage.setItem(`${CACHE_KEY_REPOS}_time`, Date.now().toString());

      // 3. Fetch Events ticker
      try {
        const eventsUrl = `https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=15`;
        const eventsRes = await fetch(eventsUrl, { headers: getHeaders() });
        if (eventsRes.ok) {
          const eventsJson = await eventsRes.json();
          setEvents(eventsJson);
          localStorage.setItem(CACHE_KEY_EVENTS, JSON.stringify(eventsJson));
        }
      } catch {
        // Silently use empty or cached events
      }
    } catch (err: any) {
      console.warn('GitHub API warning:', err.message);
      setErrorNotice(err.message);
      // Fallback to verified curated projects
      setRepos(FALLBACK_PROJECTS);
      setLanguages(computeLanguages(FALLBACK_PROJECTS));
      setIsLive(false);
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  }, [computeLanguages, getHeaders, sortAndMergeRepos]);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData().catch(() => {});
    }, 0);
    return () => {
      clearTimeout(timer);
    };
  }, [fetchData]);

  // Fetch Readme first paragraph for modal
  const fetchReadmeSnippet = async (repoName: string): Promise<string> => {
    try {
      const url = `https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}/readme`;
      const res = await fetch(url, { headers: getHeaders() });
      if (!res.ok) return '';
      const json = await res.json();
      if (json.content) {
        const decoded = atob(json.content.replace(/\s/g, ''));
        // Extract first meaningful paragraph
        const lines = decoded.split('\n').filter((l) => l.trim() && !l.startsWith('#') && !l.startsWith('!'));
        return lines[0] || decoded.slice(0, 300);
      }
      return '';
    } catch {
      return '';
    }
  };

  return {
    repos,
    events,
    languages,
    isLoading,
    isRefreshing,
    isLive,
    lastSyncTime,
    errorNotice,
    refresh: () => fetchData(true),
    fetchReadmeSnippet,
  };
}
