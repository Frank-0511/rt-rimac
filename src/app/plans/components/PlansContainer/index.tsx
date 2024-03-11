import { UserStore, useUserStore } from '@/zustand/user/userStore'
import usePlansStore, {
  PlansStore,
  initialState as initialStatePlans
} from '@/zustand/plans/PlansStore'

import BackIcon from '@/components/icons/BackIcon'
import CardCheckGroup from '../CardCheckGroup'
import ListPlans from '../ListPlans'
import { initialState } from '@/zustand/user/userSlice'
import { listRecipients } from '@/data'
import useStore from '@/zustand/useStore'

const PlansContainer = () => {
  const { data: UserStore, loading } = useStore<UserStore, UserStore>(
    useUserStore,
    (state: any) => state,
    {
      setUser: () => {},
      user: initialState
    }
  )

  const { data: PlansStore, loading: loadingPlan } = useStore<PlansStore, PlansStore>(
    usePlansStore,
    (state: any) => state,
    initialStatePlans
  )

  if (loading || loadingPlan) return null

  const { user } = UserStore

  const { selectedRecipient } = PlansStore

  return (
    <div className="r-grid px-6 pt-8 md:pl-24 md:pt-10 md:pb-20 md:pr-[131px]">
      <div className="col-span-full hidden md:flex items-center gap-2">
        <BackIcon />
        <span className="text-[#4F4FFF] text-lg font-bold">Volver</span>
      </div>
      <div className="col-span-full justify-self-center">
        <div className="w-full md:w-[544px] text-center">
          <h2 className="text-2xl md:text-5xl font-bold font-lato">
            {user.name} ¿Para quién deseas cotizar?
          </h2>
          <p className="font-lato text-base pt-2">
            Selecciona la opción que se ajuste más a tus necesidades.
          </p>
        </div>
      </div>
      <CardCheckGroup options={listRecipients} />
      {/* selectedRecipient.id && <ListPlans /> */}
    </div>
  )
}

export default PlansContainer
