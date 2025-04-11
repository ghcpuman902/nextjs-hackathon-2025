export const runtime = 'edge'

import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient().$extends(withAccelerate())

// Define allowed origins - replace with your actual domain
const allowedOrigins = ['https://nextjs-hackathon-2025-eight.vercel.app', 'http://localhost:3000']

// Helper function to check if origin is allowed
const isOriginAllowed = (origin: string | null) => {
  if (!origin) return false
  return allowedOrigins.includes(origin)
}

// Helper function to set CORS headers
const setCorsHeaders = (origin: string | null) => {
  const headers = new Headers()
  headers.set('Access-Control-Allow-Credentials', 'true')
  headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  
  if (origin && isOriginAllowed(origin)) {
    headers.set('Access-Control-Allow-Origin', origin)
  }
  
  return headers
}

export async function OPTIONS(request: Request) {
  const origin = request.headers.get('origin')
  const headers = setCorsHeaders(origin)
  return new NextResponse(null, { headers })
}

export async function GET(request: Request) {
  const origin = request.headers.get('origin')
  if (!isOriginAllowed(origin)) {
    return new NextResponse('Forbidden', { status: 403 })
  }

  const metrics = await prisma.metric.findMany({
    include: {
      metrics: {
        include: {
          navigationTiming: true
        }
      },
      connection: true
    }
  })
  
  const headers = setCorsHeaders(origin)
  return NextResponse.json(metrics, { headers })
}

export async function POST(request: Request) {
  const origin = request.headers.get('origin')
  if (!isOriginAllowed(origin)) {
    return new NextResponse('Forbidden', { status: 403 })
  }

  try {
    const data = await request.json()
    
    // Create navigation timing first
    const navigationTiming = await prisma.navigationTiming.create({
      data: {
        domComplete: data.metrics.navigationTiming.domComplete,
        domInteractive: data.metrics.navigationTiming.domInteractive,
        domContentLoadedEventEnd: data.metrics.navigationTiming.domContentLoadedEventEnd,
        loadEventEnd: data.metrics.navigationTiming.loadEventEnd
      }
    })

    // Create metric data with navigation timing relation
    const metricData = await prisma.metricData.create({
      data: {
        CLS: data.metrics.CLS,
        FCP: data.metrics.FCP,
        INP: data.metrics.INP,
        LCP: data.metrics.LCP,
        TTFB: data.metrics.TTFB,
        navigationTimingId: navigationTiming.id
      }
    })

    // Create connection data if it exists
    let connectionData = null
    if (data.connection) {
      connectionData = await prisma.connectionData.create({
        data: {
          effectiveType: data.connection.effectiveType,
          rtt: data.connection.rtt,
          downlink: data.connection.downlink
        }
      })
    }

    // Finally create the main metric record
    const metric = await prisma.metric.create({
      data: {
        path: data.path,
        userAgent: data.userAgent,
        metricDataId: metricData.id,
        ...(connectionData && { connectionDataId: connectionData.id })
      },
      include: {
        metrics: {
          include: {
            navigationTiming: true
          }
        },
        connection: true
      }
    })

    const headers = setCorsHeaders(origin)
    return NextResponse.json(metric, { headers, status: 201 })
  } catch (error) {
    console.error('Error creating metric:', error)
    const headers = setCorsHeaders(origin)
    return NextResponse.json(
      { error: 'Failed to create metric' },
      { headers, status: 500 }
    )
  }
}