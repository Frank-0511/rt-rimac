import useStepperStore, { StepperStore } from '@/zustand/stepper/StepperStore'

import React from 'react'
import StepIndicatorIcon from '@/components/icons/StepIndicatorIcon'
import useStore from '@/zustand/useStore'

interface StepperProps {
  className?: string
}

const Stepper: React.FC<StepperProps> = ({ className }) => {
  const { data: StepperStore } = useStore<StepperStore, StepperStore>(
    useStepperStore,
    (state: any) => state,
    {
      activeStep: 1,
      setActiveStep: () => {}
    }
  )
  const { activeStep } = StepperStore

  return (
    <div className={`w-full bg-[#EDEFFC] justify-center py-4 ${className}`}>
      <div className="flex flex-row justify-between items-center px-16 gap-4">
        <Step active={activeStep === 1} label="Paso 1" index={1} />
        <StepIndicatorIcon />
        <Step active={activeStep === 2} label="Paso 2" index={2} />
      </div>
    </div>
  )
}

const Step: React.FC<{ active: boolean; label: string; index: number }> = ({
  active,
  label,
  index
}) => {
  return (
    <div className={`flex items-center gap-4 `}>
      <div
        className={`w-8 h-8 rounded-full border  flex justify-center items-center ${
          active ? 'bg-[#4F4FFF] border-[#4F4FFF]' : 'bg-transparent border-blue-gray'
        }`}
      >
        <p className={`${!active ? 'text-blue-gray' : 'text-white font-bold'}`}>{index}</p>
      </div>
      <p className={`text-sm ${active ? 'text-primary font-bold' : 'text-blue-gray'}`}>{label}</p>
    </div>
  )
}

export default Stepper
