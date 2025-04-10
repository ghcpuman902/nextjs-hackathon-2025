import fs from 'fs'
import path from 'path'

const CACHE_DIR = path.join(process.cwd(), '.cache')
const AIRPORT_CACHE_FILE = path.join(CACHE_DIR, 'airport-details.json')

// Ensure cache directory exists
if (!fs.existsSync(CACHE_DIR)) {
  fs.mkdirSync(CACHE_DIR, { recursive: true })
}

export type CachedAirportDetails = {
  icao_code: string
  details: any
  error?: string
  timestamp: number
}

export function readCache(): CachedAirportDetails[] {
  try {
    if (fs.existsSync(AIRPORT_CACHE_FILE)) {
      const data = fs.readFileSync(AIRPORT_CACHE_FILE, 'utf-8')
      return JSON.parse(data)
    }
  } catch (error) {
    console.error('Error reading cache:', error)
  }
  return []
}

export function writeCache(data: CachedAirportDetails[]) {
  try {
    fs.writeFileSync(AIRPORT_CACHE_FILE, JSON.stringify(data, null, 2))
  } catch (error) {
    console.error('Error writing cache:', error)
  }
}

export function getCachedAirport(icaoCode: string): CachedAirportDetails | undefined {
  const cache = readCache()
  return cache.find(item => item.icao_code === icaoCode)
} 