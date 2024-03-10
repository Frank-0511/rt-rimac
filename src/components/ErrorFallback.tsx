import { FallbackProps } from 'react-error-boundary'
import React from 'react'

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <strong className="font-bold">Something went wrong:</strong>
      <span className="block sm:inline"> {error.message}</span>
      <button className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={resetErrorBoundary}>
        Try again
      </button>
    </div>
  )
}

export default ErrorFallback
