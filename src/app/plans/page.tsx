'use client'

import { RTStore, useRTStore } from '@/zustand/store'

import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from '@/components/ErrorFallback'
import useStore from '@/zustand/useStore'

export default function Plans() {
  const RTStore = useStore<RTStore, RTStore>(useRTStore, (state: any) => state)
  if (!RTStore) return <div></div>
  const { user } = RTStore
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <main>{JSON.stringify(user)}</main>
    </ErrorBoundary>
  )
}
