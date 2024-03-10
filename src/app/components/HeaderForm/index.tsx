import HeroImage from '@public/img/hero.png'
import Image from 'next/image'
import Tag from '@/components/Tag'
import styles from './styles.module.css'

const HeaderForm = () => {
  return (
    <div className={styles['header-form']}>
      <div className={styles['title-form']}>
        <Tag text="Seguro Salud Flexible" type="promo" className="mb-2 md:mb-4" />
        <h2 className="text-2xl md:text-3xl font-bold md:pb-2">Creado para ti y tu familia</h2>
      </div>
      <p className={styles['subtitle-form']}>
        Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.
      </p>
      <div className={styles['image-form']}>
        <Image src={HeroImage} alt="Hero image" width={136} height={160} />
      </div>
    </div>
  )
}

export default HeaderForm
