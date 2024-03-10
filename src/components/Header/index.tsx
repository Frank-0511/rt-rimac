import Link from 'next/link'
import LogoRimacIcon from '../icons/LogoRimacIcon'
import PhoneIcon from '../icons/PhoneIcon'
import styles from './styles.module.css'

const Header = () => {
  return (
    <header className="r-grid">
      <div className="col-span-2 md:col-span-6 py-[14px]">
        <div className="flex">
          <Link href="/">
            <LogoRimacIcon />
          </Link>
        </div>
      </div>
      <nav className={styles['nav-header']}>
        <span className="font-semibold text-xs hidden md:block">¡Compra por este medio!</span>
        <a
          href="tel:(01) 411 6001"
          aria-label="Llamar al (01) 411 6001"
          className="flex items-center gap-2 cursor-pointer"
        >
          <PhoneIcon />
          <span className="font-bold text-lg">(01) 411 6001</span>
        </a>
      </nav>
    </header>
  )
}

export default Header
