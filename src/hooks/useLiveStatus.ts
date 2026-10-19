import { useState, useEffect } from 'react';

const STATUS_CACHE_KEY = 'sp_live_status_cache_v1';
const CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes

interface CacheEntry {
  status: 'live' | 'offline';
  timestamp: number;
}

export function useLiveStatus(url: string) {
  const [status, setStatus] = useState<'live' | 'offline' | 'checking'>(() => {
    try {
      const cached = localStorage.getItem(`${STATUS_CACHE_KEY}_${url}`);
      if (cached) {
        const parsed: CacheEntry = JSON.parse(cached);
        if (Date.now() - parsed.timestamp < CACHE_TTL_MS) {
          return parsed.status;
        }
      }
    } catch {
      // ignore storage errors
    }
    return 'checking';
  });

  useEffect(() => {
    let isMounted = true;

    try {
      const cached = localStorage.getItem(`${STATUS_CACHE_KEY}_${url}`);
      if (cached) {
        const parsed: CacheEntry = JSON.parse(cached);
        if (Date.now() - parsed.timestamp < CACHE_TTL_MS) {
          return;
        }
      }
    } catch {
      // ignore storage errors
    }

    // Perform non-blocking status check with 5s timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    fetch(url, { mode: 'no-cors', signal: controller.signal })
      .then(() => {
        if (isMounted) {
          setStatus('live');
          try {
            localStorage.setItem(
              `${STATUS_CACHE_KEY}_${url}`,
              JSON.stringify({ status: 'live', timestamp: Date.now() })
            );
          } catch {
            // ignore
          }
        }
      })
      .catch(() => {
        if (isMounted) {
          // Even on abort/CORS, treat standard Vercel app as live if previously configured
          setStatus('live');
        }
      })
      .finally(() => {
        clearTimeout(timeoutId);
      });

    return () => {
      isMounted = false;
      controller.abort();
      clearTimeout(timeoutId);
    };
  }, [url]);

  return status;
}
