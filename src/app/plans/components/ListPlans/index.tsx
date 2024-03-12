import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Slider, { Settings } from 'react-slick'
import usePlansStore, { Plan, PlansStore, initialState } from '@/zustand/plans/PlansStore'
import { useRef, useState } from 'react'

import BackIcon from '@/components/icons/BackIcon'
import CardPlan from '../CardPlan'
import HomeLightIcon from '@/components/icons/HomeLightIcon'
import HospitalLightIcon from '@/components/icons/HospitalLightIcon'
import styles from './styles.module.css'
import useStore from '@/zustand/useStore'

interface Slide {
  key: number
  content: JSX.Element
}

export const ListPlansMobile = () => {
  const sliderRef = useRef<Slider>(null)
  const [slideIndex, setSlideIndex] = useState(0)

  const { data: PlansStore } = useStore<PlansStore, PlansStore>(
    usePlansStore,
    (state: any) => state,
    initialState
  )

  const { listPlans } = PlansStore

  const next = () => {
    sliderRef.current?.slickNext()
  }
  const previous = () => {
    sliderRef.current?.slickPrev()
  }

  const settings: Settings = {
    centerMode: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 2,
    centerPadding: '24px',
    variableWidth: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 601,
        settings: {
          slidesToScroll: 1
        }
      }
    ],
    afterChange: (current: number) => {
      setSlideIndex(current)
    }
  }

  return (
    <div className="slider-container pl-12 overflow-x-hidden pb-14 lg:pb-0 lg:hidden">
      <Slider ref={sliderRef} {...settings}>
        {listPlans.map((plan, index) => {
          return (
            <CardPlan
              key={index}
              index={index}
              plan={plan}
              className="w-[288px] h-[687px] mr-4 mt-5"
            />
          )
        })}
      </Slider>
      <div className="mt-[68px] w-full flex justify-center items-center gap-8">
        <button className="button w-max" disabled={slideIndex === 0} onClick={previous}>
          <BackIcon color={slideIndex === 0 ? '#A9AFD9' : '#4F4FFF'} width={32} height={32} />
        </button>
        <div className="flex gap-1 items-center py-1">
          <span>{slideIndex + 1}</span>
          <span>/</span>
          <span>{listPlans.length}</span>
        </div>
        <button
          className="button w-max"
          disabled={slideIndex + 1 === listPlans.length}
          onClick={next}
        >
          <BackIcon
            className="rotate-180"
            color={slideIndex + 1 === listPlans.length ? '#A9AFD9' : '#4F4FFF'}
            width={32}
            height={32}
          />
        </button>
      </div>
    </div>
  )
}

export const ListPlansDesktop = () => {
  const { data: PlansStore } = useStore<PlansStore, PlansStore>(
    usePlansStore,
    (state: any) => state,
    initialState
  )

  const { listPlans } = PlansStore

  return (
    <div className={styles['container-plans']}>
      {listPlans.map((plan, index) => {
        return <CardPlan key={index} index={index} plan={plan} />
      })}
    </div>
  )
}
