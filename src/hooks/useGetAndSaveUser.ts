import { UserStore, useUserStore } from '@/zustand/user/userStore'
import usePlansStore, {
  Plan,
  PlansStore,
  initialState as initialStatePlans,
  initialStateRecipient
} from '@/zustand/plans/PlansStore'
import useStepperStore, { StepperStore } from '@/zustand/stepper/StepperStore'

import { FormData } from '@/app/components/QuoteForm/schema'
import UserService from '@/services/UserService'
import { initialState } from '@/zustand/user/userSlice'
import { useRouter } from 'next/navigation'
import useStore from '@/zustand/useStore'

interface UseGetAndSaveUserReturn {
  handleSubmitUser: (data: FormData) => Promise<void>
}

const useGetAndSaveUser = (): UseGetAndSaveUserReturn => {
  const router = useRouter()
  const { data: UserStore } = useStore<UserStore, UserStore>(useUserStore, (state: any) => state, {
    setUser: () => {},
    user: initialState
  })

  const { data: StepperStore } = useStore<StepperStore, StepperStore>(
    useStepperStore,
    (state: any) => state,
    {
      activeStep: 1,
      setActiveStep: () => {}
    }
  )

  const { data: PlansStore } = useStore<PlansStore, PlansStore>(
    usePlansStore,
    (state: any) => state,
    initialStatePlans
  )

  const { setActiveStep } = StepperStore

  const { setUser } = UserStore

  const { setSelectedPlan, setSelectedRecipient } = PlansStore

  const handleSubmitUser = async (data: FormData) => {
    const userData = await UserService.getUserData()
    setUser({ ...data, ...userData })
    setActiveStep(1)
    setSelectedRecipient(initialStateRecipient)
    setSelectedPlan({} as Plan)
    router.push('/plans')
  }
  return {
    handleSubmitUser
  }
}

export default useGetAndSaveUser
