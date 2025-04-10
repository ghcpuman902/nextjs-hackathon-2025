'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface MetricData {
  timestamp: string;
  path: string;
  metrics: {
    CLS: number | null;
    FCP: number | null;
    FID: number | null;
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

type NavigationTimingMetric = keyof MetricData['metrics']['navigationTiming'];

export default function MetricsDashboard() {
  const [metrics, setMetrics] = useState<MetricData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await fetch('/api/metrics');
        const data = await response.json();
        setMetrics(data);
      } catch (error) {
        console.error('Error fetching metrics:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMetrics();
  }, []);

  const formatMetric = (value: number | null) => {
    if (value === null) return '--';
    return `${Math.round(value)}ms`;
  };

  const getMetricValue = (metricName: keyof MetricData['metrics']): number | null => {
    if (!metrics.length || !metrics[0]?.metrics) return null;
    const value = metrics[0].metrics[metricName];
    return typeof value === 'number' ? value : null;
  };

  const getNavigationTimingValue = (metricName: NavigationTimingMetric): number | null => {
    if (!metrics.length || !metrics[0]?.metrics?.navigationTiming) return null;
    return metrics[0].metrics.navigationTiming[metricName];
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
      </div>
    );
  }

  if (!metrics.length) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">Performance Metrics Dashboard</h1>
        <div className="text-center py-8">
          <p className="text-gray-500">No metrics data available yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold mb-6">Performance Metrics Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Core Web Vitals</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Metric</TableHead>
                  <TableHead>Value</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>LCP</TableCell>
                  <TableCell>{formatMetric(getMetricValue('LCP'))}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>FID</TableCell>
                  <TableCell>{formatMetric(getMetricValue('FID'))}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>CLS</TableCell>
                  <TableCell>{formatMetric(getMetricValue('CLS'))}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Loading Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Metric</TableHead>
                  <TableHead>Value</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>FCP</TableCell>
                  <TableCell>{formatMetric(getMetricValue('FCP'))}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>TTFB</TableCell>
                  <TableCell>{formatMetric(getMetricValue('TTFB'))}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>INP</TableCell>
                  <TableCell>{formatMetric(getMetricValue('INP'))}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Navigation Timing</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Metric</TableHead>
                  <TableHead>Value</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>DOM Complete</TableCell>
                  <TableCell>{formatMetric(getNavigationTimingValue('domComplete'))}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>DOM Interactive</TableCell>
                  <TableCell>{formatMetric(getNavigationTimingValue('domInteractive'))}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Load Event End</TableCell>
                  <TableCell>{formatMetric(getNavigationTimingValue('loadEventEnd'))}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Metrics History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Timestamp</TableHead>
                <TableHead>Path</TableHead>
                <TableHead>LCP</TableHead>
                <TableHead>FID</TableHead>
                <TableHead>CLS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {metrics.map((metric, index) => (
                <TableRow key={index}>
                  <TableCell>{new Date(metric.timestamp).toLocaleString()}</TableCell>
                  <TableCell>{metric.path}</TableCell>
                  <TableCell>{formatMetric(metric.metrics?.LCP ?? null)}</TableCell>
                  <TableCell>{formatMetric(metric.metrics?.FID ?? null)}</TableCell>
                  <TableCell>{formatMetric(metric.metrics?.CLS ?? null)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
} 