import { NextResponse } from 'next/server';
import { metricsStore } from '@/lib/metrics-store';

export async function GET() {
  try {
    const metrics = metricsStore.getMetrics();
    return NextResponse.json(metrics);
  } catch (error) {
    console.error('Error reading metrics:', error);
    return NextResponse.json(
      { error: 'Failed to read metrics' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    metricsStore.addMetric(data);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving metrics:', error);
    return NextResponse.json(
      { error: 'Failed to save metrics' },
      { status: 500 }
    );
  }
} 