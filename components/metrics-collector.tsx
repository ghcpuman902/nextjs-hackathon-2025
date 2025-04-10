'use client';

import { useEffect } from 'react';
import { onCLS, onFCP, onINP, onLCP, onTTFB, Metric } from 'web-vitals';

interface MetricsCollectorProps {
  onMetricsCollected?: (metrics: any) => void;
}

export const MetricsCollector = ({ onMetricsCollected }: MetricsCollectorProps) => {
  useEffect(() => {
    const metrics: any = {
      timestamp: new Date().toISOString(),
      path: window.location.pathname,
      metrics: {
        CLS: null,
        FCP: null,
        INP: null,
        LCP: null,
        TTFB: null,
        navigationTiming: {
          domComplete: null,
          domInteractive: null,
          domContentLoadedEventEnd: null,
          loadEventEnd: null,
        },
      },
    };

    // Collect navigation timing
    const collectNavigationTiming = () => {
      const timing = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (timing) {
        metrics.metrics.navigationTiming = {
          domComplete: timing.domComplete,
          domInteractive: timing.domInteractive,
          domContentLoadedEventEnd: timing.domContentLoadedEventEnd,
          loadEventEnd: timing.loadEventEnd,
        };
      }
    };

    // Save metrics
    const saveMetrics = async () => {
      try {
        const response = await fetch('/api/metrics', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(metrics),
        });
        
        if (response.ok && onMetricsCollected) {
          onMetricsCollected(metrics);
        }
      } catch (error) {
        console.error('Error saving metrics:', error);
      }
    };

    // Set up Web Vitals tracking
    onCLS((metric) => {
      metrics.metrics.CLS = metric.value;
      saveMetrics();
    });

    onFCP((metric) => {
      metrics.metrics.FCP = metric.value;
      saveMetrics();
    });

    onINP((metric) => {
      metrics.metrics.INP = metric.value;
      saveMetrics();
    });

    onLCP((metric) => {
      metrics.metrics.LCP = metric.value;
      saveMetrics();
    });

    onTTFB((metric) => {
      metrics.metrics.TTFB = metric.value;
      saveMetrics();
    });

    // Collect navigation timing when page loads
    window.addEventListener('load', () => {
      collectNavigationTiming();
      saveMetrics();
    });

    return () => {
      window.removeEventListener('load', collectNavigationTiming);
    };
  }, [onMetricsCollected]);

  return null; // This component doesn't render anything
}; 