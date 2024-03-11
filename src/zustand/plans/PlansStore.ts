import { Recipient } from '@/types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Plan = {
  name: string
  price: number
  description: string[]
  age: number
}

export type PlansStore = {
  listPlans: Plan[]
  setListPlans: (plans: Plan[]) => void
  selectedPlan: Plan
  setSelectedPlan: (plan: Plan) => void
  selectedRecipient: Recipient
  setSelectedRecipient: (recipient: Recipient) => void
}

const initialStatePlan = {
  name: '',
  price: 0,
  description: [],
  age: 0
}

export const initialState = {
  listPlans: [],
  setListPlans: () => {},
  selectedPlan: initialStatePlan,
  setSelectedPlan: () => {},
  selectedRecipient: {
    id: null,
    icon: null,
    title: '',
    subtitle: ''
  },
  setSelectedRecipient: () => {}
}

const usePlansStore = create<PlansStore>()(
  persist(
    (set) => ({
      listPlans: [],
      setListPlans: (plans: Plan[]) => set({ listPlans: plans }),
      selectedPlan: initialStatePlan,
      setSelectedPlan: (plan: Plan) => set({ selectedPlan: plan }),
      setSelectedRecipient: (recipient: Recipient) => set({ selectedRecipient: recipient }),
      selectedRecipient: {
        id: null,
        icon: null,
        title: '',
        subtitle: ''
      }
    }),
    {
      name: 'plans-storage'
    }
  )
)

export default usePlansStore
