import { UserStore, useUserStore } from '@/zustand/user/userStore'
import usePlansStore, { PlansStore, initialState } from '@/zustand/plans/PlansStore'

import PlanService from '@/services/PlanService'
import { getAgeFromBirthDate } from '@/utils'
import { initialState as initialStateUSer } from '@/zustand/user/userSlice'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import useStore from '@/zustand/useStore'

interface UseGetPlans {
  loadingStepper: boolean
}

const useGetPlans = ({ loadingStepper }: UseGetPlans) => {
  const router = useRouter()
  const { data: PlansStore, loading } = useStore<PlansStore, PlansStore>(
    usePlansStore,
    (state: any) => state,
    initialState
  )

  const { data: UserStore, loading: loadingUser } = useStore<UserStore, UserStore>(
    useUserStore,
    (state: any) => state,
    {
      setUser: () => {},
      user: initialStateUSer
    }
  )

  const { user } = UserStore

  const { setListPlans, listPlans } = PlansStore

  const getPlans = async () => {
    const response = await PlanService.getDataPlans()
    const ageFilter = getAgeFromBirthDate(user.birthDay)
    const listPlansFilter = response.filter((plan) => plan.age >= ageFilter)
    setListPlans(listPlansFilter)
  }

  useEffect(() => {
    if (user.birthDay === '' && !loadingUser) router.push('/')
  }, [loadingUser])

  useEffect(() => {
    if (!loading && listPlans.length === 0 && !loadingStepper && !loadingUser) getPlans()
  }, [loading, listPlans, loadingStepper, loadingUser])

  return {
    getPlans
  }
}

export default useGetPlans
