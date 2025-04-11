import { geolocation } from '@vercel/functions';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const location = geolocation(request);
  
  return NextResponse.json({
    city: location.city,
    country: location.country,
    region: location.region,
    latitude: location.latitude,
    longitude: location.longitude
  });
} 