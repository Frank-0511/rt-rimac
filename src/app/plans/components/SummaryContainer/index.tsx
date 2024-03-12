import { UserStore, useUserStore } from '@/zustand/user/userStore'
import usePlansStore, {
  PlansStore,
  initialState as initialStatePlan
} from '@/zustand/plans/PlansStore'
import useStepperStore, { StepperStore } from '@/zustand/stepper/StepperStore'

import BackIcon from '@/components/icons/BackIcon'
import FamilyIcon from '@/components/icons/FamilyIcon'
import { ForMeRecipient } from '@/types'
import { initialState } from '@/zustand/user/userSlice'
import useStore from '@/zustand/useStore'

const SummaryContainer = () => {
  const { data: UserStore } = useStore<UserStore, UserStore>(useUserStore, (state: any) => state, {
    setUser: () => {},
    user: initialState
  })

  const { data: PlansStore } = useStore<PlansStore, PlansStore>(
    usePlansStore,
    (state: any) => state,
    initialStatePlan
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
  const { user } = UserStore
  const { selectedPlan, selectedRecipient } = PlansStore

  const handleBack = () => {
    setActiveStep(1)
  }

  return (
    <div className="r-grid pt-8 md:pt-16 !gap-y-0">
      <div className="col-span-full hidden md:flex">
        <button className="flex items-center gap-2 pb-8" onClick={handleBack}>
          <BackIcon />
          <span className="text-[#4F4FFF] text-lg font-bold">Volver</span>
        </button>
      </div>
      <div className="col-span-full pb-10 md:pb-12">
        <h2 className="text-dark-navy-blue font-lato text-3xl md:text-5xl font-bold">
          Resumen del seguro{' '}
        </h2>
      </div>
      <div className="col-span-full bg-white rounded-3xl py-6 px-8">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-dark-navy-blue font-black font-lato text-[10px] leading-4">
              Precios calculados para:
            </span>
            <div className="flex gap-3 items-center">
              <FamilyIcon />
              <span className="text-dark-navy-blue font-bold font-lato text-xl">
                {user.name} {user.lastName}
              </span>
            </div>
          </div>
          <hr className="w-full h-[1px] bg-light-steel-blue" />
          <div className="flex flex-col gap-1">
            <h3 className="font-lato font-bold text-base text-dark-navy-blue">
              Responsable de pago
            </h3>
            <span className="font-lato text-sm text-dark-navy-blue">
              {user.document.typeDocument.toUpperCase()}: {user.document.numberDocument}
            </span>
            <span className="font-lato text-sm text-dark-navy-blue">Celular: {user.cellphone}</span>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-lato font-bold text-base text-dark-navy-blue">Plan elegido</h3>
            <span className="font-lato text-sm text-dark-navy-blue">{selectedPlan.name}</span>
            <span className="font-lato text-sm text-dark-navy-blue">
              Costo del Plan: $
              {selectedRecipient.id === ForMeRecipient
                ? selectedPlan.price
                : selectedPlan.price * 0.95}{' '}
              al mes
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SummaryContainer
