import usePlansStore, { PlansStore, initialState } from '@/zustand/plans/PlansStore'

import CheckMark from '@public/img/checkmark.png'
import Image from 'next/image'
import { Recipient } from '@/types'
import useStore from '@/zustand/useStore'

type Option = {
  id: string | null
  icon: JSX.Element | null
  title: string
  subtitle: string
}

const CardCheckGroup: React.FC<{ options: Option[] }> = ({ options }) => {
  const { data: PlansStore } = useStore<PlansStore, PlansStore>(
    usePlansStore,
    (state: any) => state,
    initialState
  )

  const { selectedRecipient, setSelectedRecipient } = PlansStore

  const handleSelect = (item: Option) => {
    if (item) setSelectedRecipient(item as Recipient)
  }

  return (
    <div className="col-span-full w-full grid grid-rows-2 gap-6 md:grid-rows-1 md:grid-cols-2 md:gap-8">
      {options.map((option, index) => (
        <Card
          key={option.id}
          index={index}
          selected={selectedRecipient.id === option.id}
          onClick={handleSelect}
          item={option}
        />
      ))}
    </div>
  )
}

export default CardCheckGroup

const Card: React.FC<{
  index: number
  selected: boolean
  item: Option
  onClick: (item: Option) => void
}> = ({ index, selected, item, onClick }) => {
  return (
    <div
      className={`row-span-1 h-[160px] md:justify-self-${index === 0 ? 'end' : 'start'} md:w-[256px] md:h-[212px] md:col-span-1 ${selected ? 'border-primary' : 'border-white'} border-solid border-[3px] bg-white rounded-3xl flex flex-col pt-4 px-6 pb-10 cursor-pointer`}
      onClick={() => onClick(item)}
    >
      <div className="w-full flex justify-end">
        <Checkmark selected={selected} />
      </div>
      <div className="flex flex-col gap-2 items-start">
        <div className="flex items-center gap-2 md:flex-col md:items-start">
          {item.icon}
          <h3 className="font-lato font-bold text-xl text-dark-navy-blue">{item.title}</h3>
        </div>
        <p className="font-lato text-xs text-dark-navy-blue">{item.subtitle}</p>
      </div>
    </div>
  )
}

const Checkmark: React.FC<{ selected: boolean }> = ({ selected }) => {
  const borderColor = selected ? '#389E0D' : '#A9AFD9'

  return (
    <div
      className={`w-6 h-6 border border-solid border-1 border-${borderColor} rounded-full flex justify-center items-center ${
        selected && 'bg-[#389E0D]'
      }`}
    >
      {selected && <Image src={CheckMark} alt="checkmark" />}
    </div>
  )
}
