import { UserStore, useUserStore } from '@/zustand/user/userStore'

import { FormData } from '@/app/components/QuoteForm/schema'
import UserService from '@/services/UserService'
import { initialState } from '@/zustand/user/userSlice'
import { useRouter } from 'next/navigation'
import useStore from '@/zustand/useStore'

const useGetAndSaveUser = () => {
  const router = useRouter()
  const UserStore = useStore<UserStore, UserStore>(useUserStore, (state: any) => state, {
    setUser: () => {},
    user: initialState
  })

  const { setUser } = UserStore

  const handleSubmitUser = async (data: FormData) => {
    const userData = await UserService.getUserData()
    setUser({ ...data, ...userData })
    router.push('/plans')
  }
  return {
    handleSubmitUser
  }
}

export default useGetAndSaveUser
