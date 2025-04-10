import { createStore, Row } from 'tinybase';

interface Metric {
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

// Convert Metric to Row type
type MetricRow = Row & {
  id: string;
  timestamp: string;
  path: string;
  metrics: string; // Serialized JSON
  userAgent: string;
  connection: string; // Serialized JSON
};

const store = createStore();
const MAX_METRICS = 100;

// Initialize the store with a metrics table
store.setTable('metrics', {});

export const metricsStore = {
  addMetric: (metric: Metric) => {
    const id = crypto.randomUUID();
    // Convert metric to Row type with serialized complex objects
    const row: MetricRow = {
      id,
      timestamp: metric.timestamp,
      path: metric.path,
      metrics: JSON.stringify(metric.metrics),
      userAgent: metric.userAgent,
      connection: JSON.stringify(metric.connection)
    };
    store.setRow('metrics', id, row);
    
    // Keep only the last MAX_METRICS entries
    const metrics = store.getTable('metrics');
    if (Object.keys(metrics).length > MAX_METRICS) {
      const oldestId = Object.keys(metrics)
        .sort((a, b) => (metrics[a] as MetricRow).timestamp.localeCompare((metrics[b] as MetricRow).timestamp))[0];
      store.delRow('metrics', oldestId);
    }
  },
  
  getMetrics: (): Metric[] => {
    return Object.values(store.getTable('metrics'))
      .sort((a, b) => (b as MetricRow).timestamp.localeCompare((a as MetricRow).timestamp))
      .map(row => {
        const { metrics, connection, ...rest } = row as MetricRow;
        return {
          ...rest,
          metrics: JSON.parse(metrics),
          connection: connection ? JSON.parse(connection) : null
        };
      });
  },
  
  getLatestMetric: (): Metric | undefined => {
    const metrics = Object.values(store.getTable('metrics'));
    const sorted = metrics.sort((a, b) => (b as MetricRow).timestamp.localeCompare((a as MetricRow).timestamp));
    if (sorted.length === 0) return undefined;
    const { metrics: metricsStr, connection: connectionStr, ...rest } = sorted[0] as MetricRow;
    return {
      ...rest,
      metrics: JSON.parse(metricsStr),
      connection: connectionStr ? JSON.parse(connectionStr) : null
    };
  }
}; 