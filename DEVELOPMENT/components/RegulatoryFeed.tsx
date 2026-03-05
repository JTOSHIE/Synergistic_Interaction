// V7 §4: Regulatory Intelligence Feed component
// Displays live updates from ACCC, CAV, TGA, ESV (V7 — ESV added)
'use client';

import { useState, useEffect } from 'react';

interface RegulatoryUpdate {
  id: string;
  source: 'ACCC' | 'CAV' | 'TGA' | 'ESV';
  title: string;
  summary: string;
  urgency?: 'Critical' | 'High' | 'Medium' | 'Low';
  url: string;
  publishedAt: string;
  categories: string[];
}

interface RegulatoryFeedProps {
  maxItems?: number;
  limit?: number;        // Alias for maxItems — use either
  showFilter?: boolean;
  categories?: string[];
}

// V7 §4: Source colour coding — ESV is orange (electrical safety regulator)
const sourceColors: Record<string, string> = {
  ACCC: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
  CAV: 'bg-purple-500/10 border-purple-500/30 text-purple-400',
  TGA: 'bg-green-500/10 border-green-500/30 text-green-400',
  ESV: 'bg-orange-500/10 border-orange-500/30 text-orange-400',
};

const urgencyColors: Record<string, string> = {
  Critical: 'bg-si-error/10 border-si-error/30 text-si-error',
  High: 'bg-orange-500/10 border-orange-500/30 text-orange-400',
  Medium: 'bg-si-warning/10 border-si-warning/30 text-si-warning',
  Low: 'bg-white/5 border-white/10 text-si-white-dim',
};

const allCategories = ['Product Safety', 'Electrical', 'Baby & Toys', 'Labelling', 'Recalls', 'Enforcement'];

export default function RegulatoryFeed({
  maxItems = 5,
  limit,
  showFilter = false,
  categories: initialCategories,
}: RegulatoryFeedProps) {
  const effectiveLimit = limit ?? maxItems;
  const [updates, setUpdates] = useState<RegulatoryUpdate[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilters, setActiveFilters] = useState<string[]>(initialCategories ?? []);
  const [lastUpdated, setLastUpdated] = useState<string>('');

  useEffect(() => {
    async function fetchUpdates() {
      try {
        const params = new URLSearchParams({ limit: String(effectiveLimit) });
        if (activeFilters.length > 0) {
          params.set('categories', activeFilters.join(','));
        }
        const res = await fetch(`/api/regulatory-feed?${params}`);
        if (!res.ok) throw new Error('Feed unavailable');
        const data = await res.json() as { updates: RegulatoryUpdate[]; updatedAt: string };
        setUpdates(data.updates);
        setLastUpdated(data.updatedAt);
      } catch {
        // Graceful degradation — feed is non-critical
        setUpdates([]);
      } finally {
        setLoading(false);
      }
    }

    fetchUpdates();
  }, [effectiveLimit, activeFilters]);

  const toggleFilter = (category: string) => {
    setActiveFilters((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  return (
    <div className="space-y-4">
      {/* Feed header */}
      <div className="flex items-center justify-between">
        {lastUpdated && (
          <p className="text-xs text-si-white-dim">
            Updated {new Date(lastUpdated).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' })}
          </p>
        )}
      </div>

      {/* Category filters */}
      {showFilter && (
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => toggleFilter(category)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors border ${
                activeFilters.includes(category)
                  ? 'bg-si-teal/20 border-si-teal/50 text-si-teal'
                  : 'bg-white/5 border-white/10 text-si-white-muted hover:border-white/20'
              }`}
              aria-pressed={activeFilters.includes(category)}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* Feed items */}
      {loading ? (
        <div className="space-y-3">
          {Array.from({ length: effectiveLimit }).map((_, i) => (
            <div key={i} className="bg-white/5 rounded-xl p-4 animate-pulse">
              <div className="h-4 bg-white/10 rounded w-3/4 mb-2" />
              <div className="h-3 bg-white/5 rounded w-full mb-1" />
              <div className="h-3 bg-white/5 rounded w-2/3" />
            </div>
          ))}
        </div>
      ) : updates.length === 0 ? (
        <div className="bg-white/5 rounded-xl p-6 text-center text-si-white-muted text-sm">
          No regulatory updates available at this time.
        </div>
      ) : (
        <div className="space-y-3">
          {updates.map((update) => (
            <a
              key={update.id}
              href={update.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white/5 border border-white/10 rounded-xl p-4
                         hover:border-white/20 hover:bg-white/[0.07] transition-colors group"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2 flex-wrap mb-2">
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-semibold border ${
                      sourceColors[update.source] ?? 'bg-gray-500/10 border-gray-500/30 text-gray-400'
                    }`}
                  >
                    {update.source}
                  </span>
                  {update.urgency && update.urgency !== 'Low' && (
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-semibold border ${
                        urgencyColors[update.urgency] ?? urgencyColors.Low
                      }`}
                    >
                      {update.urgency}
                    </span>
                  )}
                  <span className="text-xs text-si-white-dim">
                    {new Date(update.publishedAt).toLocaleDateString('en-AU', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </span>
                </div>
                <svg
                  className="w-4 h-4 text-si-white-dim flex-shrink-0 group-hover:text-si-teal transition-colors mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-si-white group-hover:text-si-teal transition-colors mb-1.5">
                {update.title}
              </h3>
              <p className="text-xs text-si-white-muted leading-relaxed">{update.summary}</p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
