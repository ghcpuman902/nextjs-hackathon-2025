export interface Airport {
  name: string
  city: string
  country_code: string
  iata_code: string
  icao_code: string
  lat: number
  lon: number
  delay_status: {
    color: 'red' | 'yellow' | 'green'
    category: string
    delay_secs: number
  }
} 