import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Star,
  GitFork,
  RefreshCw,
  Radio,
  FileText,
  Activity,
  Code,
  X,
} from 'lucide-react';
import { useGithubData } from '../hooks/useGithubData';
import type { GithubRepoItem } from '../data/fallbackProjects';
import { GithubIcon } from './Icons';
import { ChatUIMockup, N8nWorkflowMockup, ChurnDashboardMockup, SalesTimeSeriesMockup } from './ProjectMockups';
import { TiltCard } from './TiltCard';

interface ReadmeModalState {
  isOpen: boolean;
  repo: GithubRepoItem | null;
  content: string;
  loading: boolean;
}

// Pure helper for relative timestamp display
function formatRelativeTime(isoString: string): string {
  try {
    const diffDays = Math.floor((Date.now() - new Date(isoString).getTime()) / (1000 * 60 * 60 * 24));
    if (diffDays <= 0) return 'updated today';
    if (diffDays === 1) return 'updated yesterday';
    return `updated ${diffDays} days ago`;
  } catch {
    return 'recently updated';
  }
}

export const GithubShowcase: React.FC = () => {
  const {
    repos,
    events,
    languages,
    isLoading,
    isRefreshing,
    isLive,
    lastSyncTime,
    errorNotice,
    refresh,
    fetchReadmeSnippet,
  } = useGithubData();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('All');
  const [readmeModal, setReadmeModal] = useState<ReadmeModalState>({
    isOpen: false,
    repo: null,
    content: '',
    loading: false,
  });

  // Filter repos by search and language
  const filteredRepos = repos.filter((r) => {
    const matchesSearch =
      r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.topics?.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesLang =
      selectedLanguage === 'All' ||
      r.language?.toLowerCase() === selectedLanguage.toLowerCase();

    return matchesSearch && matchesLang;
  });

  const handleOpenReadme = async (repo: GithubRepoItem) => {
    setReadmeModal({ isOpen: true, repo, content: repo.longReadme || '', loading: true });
    if (!repo.longReadme) {
      const snippet = await fetchReadmeSnippet(repo.name);
      setReadmeModal((prev) => ({
        ...prev,
        content: snippet || repo.description,
        loading: false,
      }));
    } else {
      setReadmeModal((prev) => ({ ...prev, loading: false }));
    }
  };

  const renderFallbackMockup = (mockupType?: string) => {
    switch (mockupType) {
      case 'chat':
        return <ChatUIMockup className="h-44" />;
      case 'n8n':
        return <N8nWorkflowMockup className="h-44" />;
      case 'churn':
        return <ChurnDashboardMockup className="h-44" />;
      case 'sales':
        return <SalesTimeSeriesMockup className="h-44" />;
      default:
        return <ChatUIMockup className="h-44" />;
    }
  };

  return (
    <div className="space-y-10">
      {/* ================= GITHUB STATUS & CONTROLS BAR ================= */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-cream-50 dark:bg-darkgreen-surface border border-sand-200 dark:border-darkgreen-border shadow-sm">
        {/* Live Status Badge */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-sage-500/15 border border-sage-500/30 text-ink-900 dark:text-sage-300 text-xs font-mono font-medium">
            <span className="w-2 h-2 rounded-full bg-sage-500 animate-pulse" />
            <span>{isLive ? 'Live from GitHub API' : 'Cached / Curated Offline'}</span>
          </div>

          <span className="text-[11px] text-ink-700/60 dark:text-cream-50/50 font-mono">
            Synced: {lastSyncTime}
          </span>
        </div>

        {/* Manual Refresh & Search */}
        <div className="flex items-center gap-3">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search repositories, topics..."
            className="px-3.5 py-1.5 rounded-xl bg-sand-200/20 dark:bg-darkgreen-border/30 border border-sand-200 dark:border-darkgreen-border text-xs text-ink-900 dark:text-cream-50 placeholder:text-ink-700/40 focus:outline-none focus:ring-1 focus:ring-terracotta w-44 sm:w-56 font-mono"
          />

          <button
            onClick={refresh}
            disabled={isRefreshing}
            className="p-2 rounded-xl bg-ink-700 hover:bg-ink-900 text-cream-50 text-xs flex items-center gap-1.5 transition-all disabled:opacity-60"
            title="Refresh from GitHub REST API"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
            <span className="hidden sm:inline text-[11px] font-mono">Sync</span>
          </button>
        </div>

        {/* Language Filter Pills */}
        <div className="w-full flex flex-wrap items-center gap-2 pt-3 border-t border-sand-200 dark:border-darkgreen-border">
          <span className="text-[10px] uppercase tracking-widest text-ink-700/60 dark:text-cream-50/50 font-mono">Filter by language:</span>
          {['All', 'Python', 'TypeScript', 'JavaScript'].map((lang) => (
            <button
              key={lang}
              onClick={() => setSelectedLanguage(lang)}
              className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono transition-colors ${
                selectedLanguage === lang
                  ? 'bg-terracotta text-cream-50 font-medium'
                  : 'bg-sand-200/40 dark:bg-darkgreen-border/30 text-ink-700 dark:text-cream-50/70 hover:bg-sand-200/60'
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>

      {errorNotice && (
        <div className="px-4 py-2.5 rounded-xl bg-sand-200/40 border border-sand-400 text-ink-900 dark:text-cream-50 text-xs font-mono">
          Note: {errorNotice}
        </div>
      )}

      {/* ================= REPOSITORIES GRID ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {isLoading
          ? Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="h-80 rounded-2xl bg-gradient-to-r from-sand-200/20 via-blush-100/40 to-sand-200/20 bg-[length:200%_100%] animate-pulse border border-sand-200 p-5 space-y-4"
              >
                <div className="h-40 rounded-xl bg-sand-200/30 animate-pulse" />
                <div className="h-5 w-3/4 bg-sand-200/30 rounded" />
                <div className="h-10 w-full bg-sand-200/20 rounded" />
              </div>
            ))
          : filteredRepos.map((repo, idx) => (
              <TiltCard key={repo.id || repo.name} className="h-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="group relative h-full rounded-2xl bg-cream-50 dark:bg-darkgreen-surface border border-sand-200 dark:border-darkgreen-border p-5 shadow-editorial hover:shadow-editorial-hover transition-all flex flex-col justify-between overflow-hidden"
                >
                  <div>
                    {/* Repo Preview Card */}
                    <div className="relative rounded-xl overflow-hidden mb-4 border border-sand-200 dark:border-darkgreen-border bg-ink-900 transition-transform">
                      {/* Render OpenGraph image with error fallback to custom SVG mockup */}
                      <img
                        src={`https://opengraph.githubassets.com/1/xsarveshpandey21/${repo.name}`}
                        alt={repo.name}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const fallbackElem = document.getElementById(`fallback-mockup-${repo.id}`);
                          if (fallbackElem) fallbackElem.style.display = 'block';
                        }}
                        className="w-full h-40 object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-[1.06] transition-all duration-500"
                        loading="lazy"
                      />

                      <div
                        id={`fallback-mockup-${repo.id}`}
                        style={{ display: 'none' }}
                        className="w-full group-hover:scale-[1.06] transition-transform duration-500"
                      >
                        {renderFallbackMockup(repo.mockupType)}
                      </div>

                      <div className="absolute top-2.5 right-2.5 flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded-full bg-ink-900/80 text-cream-50 text-[10px] font-mono backdrop-blur-sm">
                          {formatRelativeTime(repo.pushed_at)}
                        </span>
                      </div>
                    </div>

                    {/* Header: Name + Stars */}
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h4 className="font-serif text-lg font-normal text-ink-900 dark:text-cream-50 group-hover:text-terracotta transition-colors capitalize">
                        {repo.name.replace(/-/g, ' ')}
                      </h4>

                      <div className="flex items-center gap-2 text-xs font-mono text-ink-700/70 dark:text-cream-50/70 shrink-0">
                        <span className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                          <span>{repo.stargazers_count}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <GitFork className="w-3.5 h-3.5 text-ink-700/60 dark:text-cream-50/60" />
                          <span>{repo.forks_count}</span>
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-ink-700 dark:text-cream-50/80 font-light leading-relaxed line-clamp-3 mb-4">
                      {repo.description}
                    </p>

                    {/* Topics Chips sliding up slightly on hover */}
                    <div className="flex flex-wrap gap-1.5 mb-4 transform transition-transform duration-300 group-hover:-translate-y-1">
                      {repo.topics?.slice(0, 4).map((topic) => (
                        <span
                          key={topic}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-sand-200/40 dark:bg-darkgreen-border/30 text-ink-900 dark:text-cream-50 font-mono shadow-2xs"
                        >
                          #{topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer Actions */}
                  <div className="pt-3 border-t border-sand-200 dark:border-darkgreen-border flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{
                        backgroundColor: repo.language === 'Python' ? '#5F7A6B' : '#8FA89A',
                      }}
                    />
                    <span className="text-[11px] font-mono text-ink-700/70 dark:text-cream-50/70">
                      {repo.language || 'Python'}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleOpenReadme(repo)}
                      className="px-2.5 py-1 rounded-lg bg-sand-200/40 hover:bg-sand-200/60 text-ink-900 dark:text-cream-50 text-[11px] font-mono flex items-center gap-1 transition-colors"
                      title="View Readme Overview"
                    >
                      <FileText className="w-3 h-3 text-terracotta" />
                      <span>README</span>
                    </button>

                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noreferrer"
                        className="px-2.5 py-1 rounded-lg bg-sage-100 hover:bg-sage-300/40 text-ink-900 dark:text-cream-50 text-[11px] font-mono flex items-center gap-1 transition-colors"
                      >
                        <span>Demo</span>
                        <ExternalLink className="w-3 h-3 text-sage-700" />
                      </a>
                    )}

                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg bg-ink-700 hover:bg-ink-800 text-cream-50 transition-colors"
                      title="View Code on GitHub"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </TiltCard>
          ))}
      </div>

      {/* ================= GITHUB SPREAD 5 EXTRAS: HEATMAP, DONUT & TICKER ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 border-t border-sand-200 dark:border-darkgreen-border">
        {/* Left: Live Contribution Heatmap */}
        <div className="lg:col-span-7 bg-cream-50 dark:bg-darkgreen-surface p-6 rounded-2xl border border-sand-200 dark:border-darkgreen-border shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-terracotta" />
              <h4 className="font-serif text-base font-normal text-ink-900 dark:text-cream-50">
                Live GitHub Activity Graph
              </h4>
            </div>
            <a
              href="https://github.com/xsarveshpandey21"
              target="_blank"
              rel="noreferrer"
              className="text-[11px] font-mono text-terracotta hover:underline"
            >
              @xsarveshpandey21
            </a>
          </div>

          <div className="overflow-x-auto py-2">
            <img
              src="https://ghchart.rshah.org/8FA89A/xsarveshpandey21"
              alt="Sarvesh Pandey GitHub Contribution Calendar"
              className="w-full min-w-[580px] filter dark:invert dark:hue-rotate-180"
              loading="lazy"
            />
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-ink-700/60 dark:text-cream-50/50 pt-1">
            <span>Less Contributions</span>
            <div className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-sm bg-sand-200/40 dark:bg-darkgreen-border" />
              <span className="w-2.5 h-2.5 rounded-sm bg-[#E4EBE4]" title="Low" />
              <span className="w-2.5 h-2.5 rounded-sm bg-[#B7C8BA]" title="Medium" />
              <span className="w-2.5 h-2.5 rounded-sm bg-[#8FA89A]" title="High" />
              <span className="w-2.5 h-2.5 rounded-sm bg-[#5F7A6B]" title="Peak" />
            </div>
            <span>More Contributions</span>
          </div>
        </div>

        {/* Right: Languages Donut & Events Ticker */}
        <div className="lg:col-span-5 space-y-6">
          {/* Top Languages Breakdown */}
          <div className="bg-cream-50 dark:bg-darkgreen-surface p-6 rounded-2xl border border-sand-200 dark:border-darkgreen-border shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Code className="w-4 h-4 text-sage-500" />
              <h4 className="font-serif text-base font-normal text-ink-900 dark:text-cream-50">
                Top Language Distribution
              </h4>
            </div>

            <div className="space-y-2.5">
              {languages.slice(0, 5).map((lang) => (
                <div key={lang.language} className="space-y-1">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="flex items-center gap-2 text-ink-900 dark:text-cream-50">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: lang.color }}
                      />
                      {lang.language}
                    </span>
                    <span className="text-ink-700/60 dark:text-cream-50/50">
                      {lang.percentage}% ({lang.count} repos)
                    </span>
                  </div>
                  <div className="h-1.5 rounded-full bg-sand-200/30 dark:bg-darkgreen-border/40 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${lang.percentage}%`,
                        backgroundColor: lang.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Latest GitHub Public Events Ticker */}
          <div className="bg-cream-50 dark:bg-darkgreen-surface p-5 rounded-2xl border border-sand-200 dark:border-darkgreen-border shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Radio className="w-3.5 h-3.5 text-sage-700 animate-pulse" />
              <span className="text-xs uppercase tracking-widest font-mono text-ink-700/70 dark:text-cream-50/70 font-medium">
                Live Public Event Stream
              </span>
            </div>

            <div className="space-y-2 max-h-36 overflow-y-auto pr-1">
              {events.length > 0 ? (
                events.slice(0, 4).map((evt) => (
                  <div
                    key={evt.id}
                    className="p-2 rounded-lg bg-sand-200/20 dark:bg-darkgreen-border/30 text-[11px] font-mono flex items-center justify-between text-ink-900 dark:text-cream-50"
                  >
                    <span className="truncate max-w-[200px]">
                      {evt.type.replace('Event', '')} on {evt.repo?.name.split('/')[1] || evt.repo?.name}
                    </span>
                    <span className="text-[10px] text-ink-700/50 dark:text-cream-50/40 shrink-0">
                      {new Date(evt.created_at).toLocaleDateString()}
                    </span>
                  </div>
                ))
              ) : (
                <div className="text-xs text-ink-700/60 dark:text-cream-50/50 font-mono py-2">
                  Active push events logged on xsarveshpandey21.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ================= README PREVIEW MODAL ================= */}
      <AnimatePresence>
        {readmeModal.isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setReadmeModal({ ...readmeModal, isOpen: false })}
              className="fixed inset-0 bg-ink-900/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-cream-50 dark:bg-darkgreen-surface rounded-2xl p-6 shadow-2xl border border-sand-200 dark:border-darkgreen-border z-10 space-y-4"
            >
              <div className="flex items-start justify-between border-b border-sand-200 dark:border-darkgreen-border pb-3">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-terracotta" />
                  <h3 className="font-serif text-xl font-normal text-ink-900 dark:text-cream-50 capitalize">
                    {readmeModal.repo?.name.replace(/-/g, ' ')} / README
                  </h3>
                </div>
                <button
                  onClick={() => setReadmeModal({ ...readmeModal, isOpen: false })}
                  className="p-1 rounded-full hover:bg-sand-200/40 text-ink-700 dark:text-cream-50"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4 rounded-xl bg-sand-200/20 dark:bg-darkgreen-border/30 text-sm font-light leading-relaxed text-ink-900 dark:text-cream-50/90 max-h-72 overflow-y-auto">
                {readmeModal.loading ? (
                  <div className="flex items-center gap-2 text-xs font-mono text-ink-700/60">
                    <span className="w-3.5 h-3.5 border-2 border-terracotta border-t-transparent rounded-full animate-spin" />
                    <span>Fetching live repository README snippet...</span>
                  </div>
                ) : (
                  <p>{readmeModal.content}</p>
                )}
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs font-mono text-ink-700/60 dark:text-cream-50/50">
                  {readmeModal.repo?.full_name}
                </span>
                <a
                  href={readmeModal.repo?.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-ink-700 hover:bg-ink-800 text-cream-50 text-xs font-mono"
                >
                  <span>Inspect Full Repo on GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
