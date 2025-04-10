import fs from 'fs'
import path from 'path'
import type { AirportDelays, CachedAirportDetails } from './types'

const CACHE_DIR = path.join(process.cwd(), '.cache')
const AIRPORT_CACHE_FILE = path.join(CACHE_DIR, 'airports.json')

// Ensure cache directory exists
if (!fs.existsSync(CACHE_DIR)) {
  fs.mkdirSync(CACHE_DIR, { recursive: true })
}

// Initialize cache file if it doesn't exist
if (!fs.existsSync(AIRPORT_CACHE_FILE)) {
  fs.writeFileSync(AIRPORT_CACHE_FILE, JSON.stringify([]))
}

interface CachedAirportDelays {
  airport_code: string
  delay_data: AirportDelays
  timestamp: number
}

/**
 * Read the airport cache file
 */
function readCache(): Array<CachedAirportDetails | CachedAirportDelays> {
  try {
    const data = fs.readFileSync(AIRPORT_CACHE_FILE, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error reading cache file:', error)
    return []
  }
}

/**
 * Write data to the airport cache file
 */
export function writeCache(data: Array<CachedAirportDetails | CachedAirportDelays>): void {
  try {
    const existingCache = readCache()
    const newCache = [...existingCache, ...data]
    fs.writeFileSync(AIRPORT_CACHE_FILE, JSON.stringify(newCache, null, 2))
  } catch (error) {
    console.error('Error writing to cache file:', error)
  }
}

/**
 * Get cached airport details by ICAO code
 */
export function getCachedAirport(icaoCode: string): CachedAirportDetails | null {
  const cache = readCache()
  const cachedAirport = cache.find(
    (item) => 
      'icao_code' in item && 
      item.icao_code === icaoCode && 
      // Cache for 24 hours (86400000 ms)
      item.timestamp > Date.now() - 86400000
  ) as CachedAirportDetails | undefined
  
  return cachedAirport || null
}

/**
 * Get cached airport delays data for all airports
 */
export function getCachedDelays(): CachedAirportDelays | null {
  const cache = readCache()
  const cachedDelays = cache.find(
    (item) => 
      'airport_code' in item && 
      item.airport_code === 'ALL' && 
      // Cache for 15 minutes (900000 ms) since delay data changes frequently
      item.timestamp > Date.now() - 900000
  ) as CachedAirportDelays | undefined
  
  return cachedDelays || null
}

/**
 * Write delay data to cache
 */
export function writeDelaysCache(delayData: AirportDelays): void {
  const cacheData: CachedAirportDelays = {
    airport_code: 'ALL',
    delay_data: delayData,
    timestamp: Date.now()
  }
  
  // Filter out old delay cache entries before writing
  const cache = readCache().filter(item => !('airport_code' in item && item.airport_code === 'ALL'))
  writeCache([...cache, cacheData])
} 