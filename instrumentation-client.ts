import { onCLS, onFCP, onINP, onLCP, onTTFB, Metric } from 'web-vitals';

// Define the metrics interface
interface PageMetrics {
  timestamp: string;
  path: string;
  metrics: {
    CLS: number | null;
    FCP: number | null;
    INP: number | null;
    LCP: number | null;
    TTFB: number | null;
    navigationTiming: {
      domComplete: number | null;
      domInteractive: number | null;
      domContentLoadedEventEnd: number | null;
      loadEventEnd: number | null;
    };
  };
  userAgent: string;
  connection: {
    effectiveType: string;
    rtt: number;
    downlink: number;
  } | null;
}

// Create a unique identifier for this page view
const pageViewId = crypto.randomUUID();

// Function to create a fresh metrics object
const createMetricsObject = (): PageMetrics => ({
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
  userAgent: navigator.userAgent,
  connection: 'connection' in navigator ? {
    effectiveType: (navigator as any).connection.effectiveType,
    rtt: (navigator as any).connection.rtt,
    downlink: (navigator as any).connection.downlink,
  } : null,
});

// Initialize metrics object
let metrics = createMetricsObject();

// Track metrics collection state
const state = {
  finalMetricsSent: false,
  lastSentTimestamp: 0,
  pendingSaveTimeout: null as number | null,
  metricsUpdated: false,
  // Track which metrics we've collected
  collectedMetrics: new Set<string>()
};

// Function to collect navigation timing metrics
const collectNavigationTiming = () => {
  try {
    const navEntries = performance.getEntriesByType('navigation');
    if (navEntries.length > 0) {
      const timing = navEntries[0] as PerformanceNavigationTiming;
      metrics.metrics.navigationTiming = {
        domComplete: timing.domComplete,
        domInteractive: timing.domInteractive,
        domContentLoadedEventEnd: timing.domContentLoadedEventEnd,
        loadEventEnd: timing.loadEventEnd,
      };
      state.metricsUpdated = true;
    }
  } catch (error) {
    console.error('Error collecting navigation timing:', error);
  }
};

// Minimum time between API calls to prevent flooding (2000ms = 2s)
const MIN_API_CALL_INTERVAL = 2000;

// Function to schedule metrics save with throttling
const scheduleSaveMetrics = (isFinal = false, delay = 0) => {
  // Clear any pending timeout
  if (state.pendingSaveTimeout !== null) {
    clearTimeout(state.pendingSaveTimeout);
    state.pendingSaveTimeout = null;
  }
  
  // If final metrics already sent, don't schedule again
  if (isFinal && state.finalMetricsSent) return;
  
  // Schedule the save
  state.pendingSaveTimeout = window.setTimeout(() => {
    saveMetrics(isFinal);
    state.pendingSaveTimeout = null;
  }, delay) as unknown as number;
};

// Function to save metrics to API
const saveMetrics = async (isFinal = false) => {
  // Don't send if final already sent
  if (isFinal && state.finalMetricsSent) {
    console.log(`[${pageViewId}] Skipping final metrics - already sent`);
    return;
  }
  
  // Don't send if nothing has changed and it's not final
  if (!state.metricsUpdated && !isFinal) {
    console.log(`[${pageViewId}] Skipping metrics - no updates since last send`);
    return;
  }
  
  // For intermediate saves, only send if we have at least 3 metrics
  if (!isFinal && state.collectedMetrics.size < 3) {
    console.log(`[${pageViewId}] Skipping intermediate save - only have ${state.collectedMetrics.size} metrics`);
    return;
  }
  
  try {
    // First collect navigation timing
    collectNavigationTiming();
    
    // Make a copy to avoid race conditions
    const currentMetrics = {
      ...metrics,
      timestamp: new Date().toISOString(),
      pageViewId
    };

    console.log(`[${pageViewId}] Sending metrics (${isFinal ? 'final' : 'intermediate'}):`, {
      timestamp: currentMetrics.timestamp,
      path: currentMetrics.path,
      metrics: Object.keys(currentMetrics.metrics).filter(key => currentMetrics.metrics[key as keyof typeof currentMetrics.metrics] !== null),
      isFinal,
      collectedMetrics: Array.from(state.collectedMetrics)
    });
    
    const response = await fetch('/api/metrics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(currentMetrics),
    });
    
    if (!response.ok) {
      console.error(`[${pageViewId}] Failed to save metrics:`, response.statusText);
    } else {
      console.log(`[${pageViewId}] Successfully saved metrics (${isFinal ? 'final' : 'intermediate'})`);
      if (isFinal) {
        state.finalMetricsSent = true;
      }
    }
    
    // Reset flags and update timestamp
    state.lastSentTimestamp = Date.now();
    state.metricsUpdated = false;
  } catch (error) {
    console.error(`[${pageViewId}] Error saving metrics:`, error);
  }
};

// Update a metric value and mark as updated
const updateMetricValue = (name: keyof PageMetrics['metrics'], value: number) => {
  if (name !== 'navigationTiming') {
    (metrics.metrics[name] as number | null) = value;
    state.metricsUpdated = true;
    state.collectedMetrics.add(name);
    console.log(`[${pageViewId}] Updated metric ${name}: ${value}ms (Total collected: ${state.collectedMetrics.size})`);
  }
};

// Set up Web Vitals tracking
onCLS((metric) => {
  updateMetricValue('CLS', metric.value);
});

onFCP((metric) => {
  updateMetricValue('FCP', metric.value);
  console.log(`[${pageViewId}] First Contentful Paint detected: ${metric.value}ms`);
});

onINP((metric) => {
  updateMetricValue('INP', metric.value);
});

onLCP((metric) => {
  updateMetricValue('LCP', metric.value);
  console.log(`[${pageViewId}] Largest Contentful Paint detected: ${metric.value}ms`);
});

onTTFB((metric) => {
  updateMetricValue('TTFB', metric.value);
});

// Setup events for metric collection

// 1. On page load - collect initial timing metrics
window.addEventListener('load', () => {
  console.log(`[${pageViewId}] Page load event triggered`);
  // Schedule a metrics save shortly after load
  collectNavigationTiming();
  // Don't send immediately, wait for more metrics
});

// 2. On user interaction - most metrics should be available
const handleInteraction = () => {
  console.log(`[${pageViewId}] User interaction detected`);
  // Schedule final metrics on first interaction
  scheduleSaveMetrics(true, 500);
  
  // Remove event listeners after first interaction
  window.removeEventListener('click', handleInteraction);
  window.removeEventListener('keydown', handleInteraction);
};

window.addEventListener('click', handleInteraction);
window.addEventListener('keydown', handleInteraction);

// 3. Final collection before unload
window.addEventListener('beforeunload', () => {
  console.log(`[${pageViewId}] Page unload event triggered`);
  // For beforeunload we need to send synchronously
  if (!state.finalMetricsSent) {
    saveMetrics(true);
  }
});

// 4. Final fallback for delayed metrics
setTimeout(() => {
  if (!state.finalMetricsSent) {
    console.log(`[${pageViewId}] 10-second timeout reached, sending final metrics`);
    scheduleSaveMetrics(true, 0);
  }
}, 10000); // 10 seconds max wait

// Error tracking
window.addEventListener('error', (event) => {
  console.error(`[${pageViewId}] Unhandled error:`, event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error(`[${pageViewId}] Unhandled promise rejection:`, event.reason);
}); 