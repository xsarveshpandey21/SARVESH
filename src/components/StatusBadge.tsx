import React from 'react';

interface StatusBadgeProps {
  status: 'live' | 'offline' | 'checking';
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className = '' }) => {
  if (status === 'live') {
    return (
      <span
        className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sage-100 text-sage-700 dark:bg-darkgreen-border dark:text-sage-300 text-[10px] font-mono border border-sage-300/60 ${className}`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-sage-500 animate-pulse" />
        <span>Live</span>
      </span>
    );
  }

  if (status === 'checking') {
    return (
      <span
        className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sand-200/40 text-ink-500 text-[10px] font-mono border border-sand-200 ${className}`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-sand-400 animate-pulse" />
        <span>Checking</span>
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sand-200/50 text-ink-700 text-[10px] font-mono border border-sand-300 ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-sand-400" />
      <span>Standby</span>
    </span>
  );
};
