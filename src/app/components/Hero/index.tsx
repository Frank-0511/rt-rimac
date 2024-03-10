import Button from '@/components/Button'
import Checkbox from '@/components/Checkbox'
import HeaderForm from '../HeaderForm'
import HeroImage from '@public/img/hero.png'
import Image from 'next/image'
import Input from '@/components/Input'
import Link from 'next/link'
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
          <div className="grid gap-4">
            <Input label="Celular" type="tel" placeholder="999-999-999" />
          </div>

          <div className="grid gap-3">
            <Checkbox label="Acepto lo Política de Privacidad" />
            <Checkbox label="Acepto la Política Comunicaciones Comerciales" />
            <Link href="/terms">
              <span className="text-xs font-semibold underline">
                Aplican Términos y Condiciones
              </span>
            </Link>
          </div>

          <Button text="Cotiza aquí" />
        </div>
      </div>
    </section>
  )
}

export default Hero
