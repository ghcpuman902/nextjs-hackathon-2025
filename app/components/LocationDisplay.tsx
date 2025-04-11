'use client';

import { useEffect, useState } from 'react';

interface LocationData {
  city: string | undefined;
  country: string | undefined;
  region: string | undefined;
  latitude: string | undefined;
  longitude: string | undefined;
}

export default function LocationDisplay() {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch('/api/geo');
        if (!response.ok) {
          throw new Error('Failed to fetch location data');
        }
        const data = await response.json();
        setLocation(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      }
    };

    fetchLocation();
  }, []);

  if (error) {
    return (
      <div className="text-sm text-red-500">
        Error: {error}
      </div>
    );
  }

  if (!location) {
    return (
      <div className="text-sm text-muted-foreground animate-pulse">
        Loading location...
      </div>
    );
  }

  return (
    <div className="text-sm text-muted-foreground">
      {location.city && location.country ? (
        <span>
          Your location: {location.city}, {location.country}
        </span>
      ) : (
        <span>Location data not available</span>
      )}
    </div>
  );
} 