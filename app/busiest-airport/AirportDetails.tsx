'use client'

import { useState, useEffect, useRef } from 'react'
import { Search } from 'lucide-react'
import { Airport } from './types'
import { Input } from '@/components/ui/input'

interface AirportDetailsProps {
  airports: Airport[]
  selectedAirport: Airport | null
  onAirportSelect: (airport: Airport) => void
  className?: string
}

export default function AirportDetails({ 
  airports, 
  selectedAirport, 
  onAirportSelect,
  className
}: AirportDetailsProps) {
  const [searchQuery, setSearchQuery] = useState(selectedAirport?.iata_code || '')
  const [isAutoCycling, setIsAutoCycling] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const [searchResults, setSearchResults] = useState<Airport[]>([])


  // Auto-cycling logic
  useEffect(() => {
    if (isAutoCycling && airports.length > 0) {
      intervalRef.current = setInterval(() => {
        const currentIndex = selectedAirport 
          ? airports.findIndex(airport => airport.icao_code === selectedAirport.icao_code)
          : -1
        const nextIndex = (currentIndex + 1) % airports.length
        onAirportSelect(airports[nextIndex])
        setSearchQuery(airports[nextIndex].iata_code)
      }, 10000) // Cycle every 10 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [airports, isAutoCycling, selectedAirport, onAirportSelect])

  // Handle manual airport selection (from map or search results)
  const handleAirportSelect = (airport: Airport) => {
    onAirportSelect(airport)
    setIsAutoCycling(false) // Stop auto-cycling when user selects manually
  }

  // Handle search query input
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    
    // Mock search functionality (placeholder for API implementation)
    if (e.target.value.trim() === '') {
      setSearchResults([])
    } else {
      // Simple mock filtering - this will be replaced with API call later
      const filtered = airports.filter(airport => 
        airport.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        airport.city.toLowerCase().includes(e.target.value.toLowerCase()) ||
        airport.iata_code.toLowerCase().includes(e.target.value.toLowerCase())
      ).slice(0, 5) // Limit to 5 results for dropdown
      
      setSearchResults(filtered)
    }
  }

  // Handle search form submission
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Mock search selection - select first result if available
    if (searchResults.length > 0) {
      handleAirportSelect(searchResults[0])
      setSearchResults([]) // Clear results after selection
    }
  }

  return (
    <div className={`p-4 w-full flex flex-col ${className}`}>
      
      {/* Search Bar */}
      <div className="relative mb-6">
        <form onSubmit={handleSearchSubmit} className="relative">
          <Input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search for airports..."
            className="w-full pl-10 pr-4 py-2 font-mono rounded-none border border-foreground bg-background"
            aria-label="Search for airports"
          />
          <button 
            type="submit" 
            className="absolute left-3 top-1/2 transform -translate-y-1/2"
            aria-label="Search"
          >
            <Search className="h-4 w-4 text-muted-foreground" />
          </button>
        </form>
        
        {/* Search Results Dropdown - Mock UI */}
        {searchResults.length > 0 && (
          <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
            <ul className="py-1">
              {searchResults.map(airport => (
                <li 
                  key={airport.icao_code}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    handleAirportSelect(airport)
                    setSearchQuery('')
                    setSearchResults([])
                  }}
                >
                  <div className="flex items-center">
                    <span className="font-medium">{airport.name}</span>
                    <span className="ml-2 text-sm text-gray-500">({airport.iata_code})</span>
                  </div>
                  <p className="text-sm text-gray-500">{airport.city}, {airport.country_code}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Selected Airport Details */}
      {selectedAirport ? (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full bg-${selectedAirport.delay_status.color}-500`} />
            <h3 className="text-lg font-bold">{selectedAirport.name}</h3>
          </div>
          
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="space-y-1">
              <p className="text-muted-foreground">City</p>
              <p>{selectedAirport.city}</p>
            </div>
            <div className="space-y-1">
              <p className="text-muted-foreground">Country</p>
              <p>{selectedAirport.country_code}</p>
            </div>
            <div className="space-y-1">
              <p className="text-muted-foreground">IATA Code</p>
              <p>{selectedAirport.iata_code}</p>
            </div>
            <div className="space-y-1">
              <p className="text-muted-foreground">ICAO Code</p>
              <p>{selectedAirport.icao_code}</p>
            </div>
            <div className="space-y-1 col-span-2">
              <p className="text-muted-foreground">Status</p>
              <div className="flex items-center gap-2">
                <p>{selectedAirport.delay_status.category}</p>
                {selectedAirport.delay_status.delay_secs > 0 && (
                  <p className="text-muted-foreground">
                    ({Math.floor(selectedAirport.delay_status.delay_secs / 60)} min delay)
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-muted-foreground">No airport selected</p>
      )}
    </div>
  )
} 