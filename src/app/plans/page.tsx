'use client'

import useStepperStore, { StepperStore } from '@/zustand/stepper/StepperStore'

import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from '@/components/ErrorFallback'
import PlansContainer from './components/PlansContainer'
import Stepper from './components/Stepper'
import StepperMobile from './components/StepperMobile'
import SummaryContainer from './components/SummaryContainer'
import useGetPlans from '@/hooks/useGetPlans'
import useStore from '@/zustand/useStore'

export default function Plans() {
  const { data: StepperStore, loading } = useStore<StepperStore, StepperStore>(
    useStepperStore,
    (state: any) => state,
    {
      activeStep: 1,
      setActiveStep: () => {}
    }
  )

  useGetPlans({ loadingStepper: loading })

  const { activeStep } = StepperStore

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <main className="">
        <Stepper className="hidden md:flex" />
        <StepperMobile className="flex md:hidden" />
        {activeStep === 1 && <PlansContainer />}
        {activeStep === 2 && <SummaryContainer />}
      </main>
    </ErrorBoundary>
  )
}
