'use client'

import useStepperStore, { StepperStore } from '@/zustand/stepper/StepperStore'

import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from '@/components/ErrorFallback'
import PlansContainer from './components/PlansContainer'
import Stepper from './components/Stepper'
import StepperMobile from './components/StepperMobile'
import useStore from '@/zustand/useStore'

export default function Plans() {
  const StepperStore = useStore<StepperStore, StepperStore>(
    useStepperStore,
    (state: any) => state,
    {
      activeStep: 1,
      setActiveStep: () => {}
    }
  )

  const { activeStep } = StepperStore

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <main>
        <Stepper className="hidden md:flex" />
        <StepperMobile className="flex md:hidden" />
        {activeStep === 1 && <PlansContainer />}
      </main>
    </ErrorBoundary>
  )
}
