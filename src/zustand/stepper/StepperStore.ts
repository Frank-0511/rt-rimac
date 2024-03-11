import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type StepperStore = {
  activeStep: number
  setActiveStep: (index: number) => void
}

const useStepperStore = create<StepperStore>()(
  persist(
    (set) => ({
      activeStep: 1,
      setActiveStep: (index: number) => set({ activeStep: index })
    }),
    {
      name: 'stepper-storage'
    }
  )
)

export default useStepperStore
