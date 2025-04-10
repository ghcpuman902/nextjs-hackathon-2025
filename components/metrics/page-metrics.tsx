'use client';

import { useEffect, useState } from 'react';
import { onFCP, onLCP, onFID, Metric } from 'web-vitals';

interface Metrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  domLoaded: number | null;
  reactMount: number | null;
}

const metricDescriptions = {
  fcp: 'First Contentful Paint: Time until first text or image is rendered',
  lcp: 'Largest Contentful Paint: Time until largest image or text block is rendered',
  fid: 'First Input Delay: Time until the page becomes interactive',
  domLoaded: 'DOM Load: Time until the DOM is fully loaded',
  reactMount: 'React Mount: Time until React finishes initial rendering'
};

export const PageMetrics = () => {
  const [mountTime, setMountTime] = useState<number | null>(null);

  useEffect(() => {
    const metricsContainer = document.querySelector('[data-metrics]');
    if (!metricsContainer) return;

    const metrics: Metrics = {
      fcp: null,
      lcp: null,
      fid: null,
      domLoaded: null,
      reactMount: mountTime
    };

    // Track DOM load time
    if (document.readyState === 'complete') {
      metrics.domLoaded = performance.now();
      updateMetrics();
    } else {
      window.addEventListener('load', () => {
        metrics.domLoaded = performance.now();
        updateMetrics();
      });
    }

    // Track React mount time
    const startTime = performance.now();
    const handleMount = () => {
      const mountDuration = performance.now() - startTime;
      setMountTime(mountDuration);
      metrics.reactMount = mountDuration;
      updateMetrics();
    };

    // Use requestAnimationFrame to ensure we capture the mount time after React is done
    requestAnimationFrame(handleMount);

    // Web Vitals
    onFCP((metric: Metric) => {
      metrics.fcp = metric.value;
      updateMetrics();
    });

    onLCP((metric: Metric) => {
      metrics.lcp = metric.value;
      updateMetrics();
    });

    onFID((metric: Metric) => {
      metrics.fid = metric.value;
      updateMetrics();
    });

    // Force LCP update on interaction
    const handleInteraction = () => {
      if (metrics.lcp === null) {
        const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
        if (lcpEntries.length > 0) {
          const lastLcp = lcpEntries[lcpEntries.length - 1] as PerformanceEntry;
          metrics.lcp = lastLcp.startTime;
          updateMetrics();
        }
      }
    };

    window.addEventListener('click', handleInteraction);
    window.addEventListener('keydown', handleInteraction);

    function updateMetrics() {
      const formatMetric = (value: number | null): string => {
        return value ? Math.round(value) + 'ms' : '--';
      };
      
      const container = metricsContainer as HTMLElement;
      container.innerHTML = `
        <div class="flex items-center justify-center gap-4 font-mono text-xs text-zinc-400 dark:text-zinc-500">
          <div class="flex items-center gap-2 group relative">
            <span>FCP:</span>
            <span>${formatMetric(metrics.fcp)}</span>
            <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-zinc-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              ${metricDescriptions.fcp}
            </div>
          </div>
          <div class="flex items-center gap-2 group relative">
            <span>LCP:</span>
            <span>${formatMetric(metrics.lcp)}</span>
            <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-zinc-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              ${metricDescriptions.lcp}
            </div>
          </div>
          <div class="flex items-center gap-2 group relative">
            <span>FID:</span>
            <span>${formatMetric(metrics.fid)}</span>
            <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-zinc-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              ${metricDescriptions.fid}
            </div>
          </div>
          <div class="flex items-center gap-2 group relative">
            <span>DOM:</span>
            <span>${formatMetric(metrics.domLoaded)}</span>
            <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-zinc-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              ${metricDescriptions.domLoaded}
            </div>
          </div>
          <div class="flex items-center gap-2 group relative">
            <span>React:</span>
            <span>${formatMetric(metrics.reactMount)}</span>
            <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-zinc-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              ${metricDescriptions.reactMount}
            </div>
          </div>
        </div>
      `;
    }

    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
    };
  }, [mountTime]);

  return (
    <div data-metrics suppressHydrationWarning>
      <div className="flex items-center justify-center gap-4 font-mono text-xs text-zinc-400 dark:text-zinc-500">
        <div className="flex items-center gap-2">
          <span>Loading metrics...</span>
        </div>
      </div>
    </div>
  );
}; 