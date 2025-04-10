"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function FlightSearch({ flightId }: { flightId: string }) {
  const [flightNumber, setFlightNumber] = useState(flightId || "DAL2267")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!flightNumber.trim()) return

    setIsSubmitting(true)

    // Convert to uppercase and remove spaces
    const formattedFlightNumber = flightNumber.toUpperCase().replace(/\s+/g, "")

    // Redirect to the flight details page
    router.push(`/flights/${formattedFlightNumber}`)
  }

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <div className="flex-grow">
          <label htmlFor="flight-search" className="block text-sm font-medium text-gray-700 mb-1">
            Search for a flight
          </label>
          <input
            type="text"
            id="flight-search"
            placeholder="Enter flight number (e.g., DAL2267)"
            value={flightNumber}
            onChange={(e) => setFlightNumber(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isSubmitting}
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting || !flightNumber.trim()}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed self-end h-10"
        >
          {isSubmitting ? "Searching..." : "Search"}
        </button>
      </form>
      <p className="mt-2 text-sm text-gray-500">Example flight numbers: DAL2267, DAL2272, UAL123</p>
    </div>
  )
}
