import HeaderForm from '../HeaderForm'
import HeroImage from '@public/img/hero.png'
import Image from 'next/image'
import QuoteForm from '../QuoteForm'
import styles from './styles.module.css'

const Hero = () => {
  return (
    <section className="contents">
      <div className="hidden md:block md:col-span-6 md:self-start md:pt-8 md:pb-12">
        <Image src={HeroImage} alt="Hero image" width={480} height={560} />
      </div>

      <div className={styles['container-form']}>
        <div className="grid gap-6">
          <HeaderForm />

          <QuoteForm />
        </div>
      </div>
    </section>
  )
}

export default Hero
