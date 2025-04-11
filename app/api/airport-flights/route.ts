import { NextRequest, NextResponse } from 'next/server'
import { getAirportFlights } from '@/app/actions/airport-data'

// export const dynamic = 'force-dynamic' // No caching - always fetch fresh data
// export const maxDuration = 10 // Allow up to 10s for the API call

export const revalidate = 86400 // 24 hours

export async function GET(request: NextRequest) {
  // Get the ICAO code from the URL query parameters
  const searchParams = request.nextUrl.searchParams
  const icaoCode = searchParams.get('icao')

  // Return 400 if no ICAO code is provided
  if (!icaoCode) {
    return NextResponse.json(
      { error: 'Missing required parameter: icao' },
      { status: 400 }
    )
  }

  try {
    // Fetch flight data using the server action
    const [error, flightData] = await getAirportFlights(icaoCode)
    // Handle errors during data fetch
    if (error || !flightData) {
      return NextResponse.json(
        { error: 'Failed to fetch flight data' },
        { status: 500 }
      )
    }

    // Return successful response with flight data
    return NextResponse.json({
      timestamp: Date.now(),
      data: flightData
    })
  } catch (err) {
    console.error('Error in airport-flights API route:', err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 