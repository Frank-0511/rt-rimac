'use client'

import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from '@/components/ErrorFallback'
import Footer from './components/Footer'
import Hero from './components/Hero'
import classNames from 'classnames'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <main className={classNames('r-grid', styles.main)}>
          <div className={styles['blur-left']}></div>
          <div className={styles['blur-right']}></div>
          <div className={styles['blur-left-mobile']}></div>
          <Hero />
        </main>
      </ErrorBoundary>

      <Footer />
    </>
  )
}
