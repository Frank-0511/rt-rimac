import { UserState, userSlice } from './userSlice'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type UserStore = {
  user: UserState
  setUser: (user: Partial<UserState>) => void
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      ...userSlice(set)
    }),
    {
      name: 'user-storage'
    }
  )
)
