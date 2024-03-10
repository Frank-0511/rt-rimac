import Hero from './components/Hero'
import classNames from 'classnames'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={classNames('r-grid', styles.main)}>
      <div className={styles['blur-left']}></div>
      <div className={styles['blur-right']}></div>
      <Hero />
    </main>
  )
}
