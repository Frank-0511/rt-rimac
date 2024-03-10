import { UserState, userSlice } from './userSlice'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type RTStore = {
  user: UserState
  setUser: (user: Partial<UserState>) => void
}

export const useRTStore = create<RTStore>()(
  persist(
    (set) => ({
      ...userSlice(set)
    }),
    {
      name: 'user-storage'
    }
  )
)
