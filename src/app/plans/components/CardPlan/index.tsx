import usePlansStore, { Plan, PlansStore, initialState } from '@/zustand/plans/PlansStore'
import useStepperStore, { StepperStore } from '@/zustand/stepper/StepperStore'

import HomeLightIcon from '@/components/icons/HomeLightIcon'
import HospitalLightIcon from '@/components/icons/HospitalLightIcon'
import useStore from '@/zustand/useStore'

interface CardPlanProps {
  plan: Plan
  index: number
  className?: string
}

const CardPlan: React.FC<CardPlanProps> = ({ plan, index, className }) => {
  const { name, price, description } = plan
  const { data: PlansStore } = useStore<PlansStore, PlansStore>(
    usePlansStore,
    (state: any) => state,
    initialState
  )

  const { data: StepperStore } = useStore<StepperStore, StepperStore>(
    useStepperStore,
    (state: any) => state,
    {
      activeStep: 1,
      setActiveStep: () => {}
    }
  )
  const { setActiveStep } = StepperStore

  const { setSelectedPlan } = PlansStore

  const handleSelectedPlan = () => {
    setSelectedPlan(plan)
    setActiveStep(2)
  }

  return (
    <div
      className={`bg-white rounded-3xl px-8 pb-12 pt-[68px] flex flex-col justify-between ${className}`}
    >
      <div className="flex flex-col gap-6">
        <div className="flex gap-4">
          <div className="flex flex-col items-start flex-1 gap-6">
            <h2 className="text-[24px] leading-8 font-black font-lato text-dark-navy-blue">
              {name}
            </h2>
            <div className="flex flex-col gap-1">
              <span className="text-blue-gray text-xs font-lato font-black">Costo del plan</span>
              <span className="text-dark-navy-blue text-xl font-lato font-black">
                ${price} al mes
              </span>
            </div>
          </div>
          {index % 2 === 1 ? <HospitalLightIcon /> : <HomeLightIcon />}
        </div>
        <div className="w-full border-t border-solid border-light-steel-blue" />
        <ul className="list-disc flex flex-col gap-6">
          {description.map((item) => {
            const highlightedText = highlightText(item, phrases)
            return (
              <li key={item}>
                <div
                  className="font-lato text-dark-navy-blue text-base"
                  dangerouslySetInnerHTML={{ __html: highlightedText }}
                />
              </li>
            )
          })}
        </ul>
      </div>
      <button
        className="bg-[#FF1C44] text-white text-lg font-lato rounded-[32px] py-[14px] px-8 mt-8 font-bold"
        onClick={handleSelectedPlan}
      >
        Seleccionar Plan
      </button>
    </div>
  )
}

function highlightText(text: string, phrases: string[]): string {
  const regex = new RegExp(`(${phrases.join('|')})`, 'gi')
  return text.replace(regex, '<strong className=" font-bold">$1</strong>')
}

const phrases = [
  'Médico general a domicilio',
  'Videoconsulta',
  'Indemnización',
  'Consultas en clínica',
  'Medicinas y exámenes',
  'más de 200 clínicas del país.',
  'Un Chequeo preventivo general',
  'Vacunas',
  'Incluye todos los beneficios del Plan en Casa.'
]

export default CardPlan
