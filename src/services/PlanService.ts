import { Plan } from '@/zustand/plans/PlansStore'
import { getPlans } from '@/apis/PlansAPI'

const PlanService = {
  async getDataPlans() {
    const data = await getPlans()

    return data.list as Plan[]
  }
}

export default PlanService
