/**
 * Preloading utility that initiates data fetching without waiting for the result
 * This allows data fetching to start as early as possible in the rendering cycle
 */
export function preload<T>(dataFn: () => Promise<T>): () => Promise<T> {
  // Start the request immediately
  const dataPromise = dataFn()

  // Return a function that returns the promise
  return () => dataPromise
}
