import CheckMark from '@public/img/checkmark.png'
import Image from 'next/image'
import { useState } from 'react'

type Option = {
  icon: JSX.Element
  title: string
  subtitle: string
}

const CardCheckGroup: React.FC<{ options: Option[] }> = ({ options }) => {
  const [selected, setSelected] = useState<number | null>(null)

  const handleSelect = (index: number) => {
    setSelected(index)
  }

  return (
    <div className="col-span-full w-full grid grid-rows-2 gap-6 md:grid-rows-1 md:grid-cols-2 md:gap-8">
      {options.map((option, index) => (
        <Card
          key={option.title}
          index={index}
          selected={selected === index}
          onClick={handleSelect}
          icon={option.icon}
          title={option.title}
          subtitle={option.subtitle}
        />
      ))}
    </div>
  )
}

export default CardCheckGroup

const Card: React.FC<{
  index: number
  selected: boolean
  icon: JSX.Element
  title: string
  subtitle: string
  onClick: (index: number) => void
}> = ({ index, selected, icon, title, subtitle, onClick }) => {
  const borderColor = selected ? 'black' : 'white'

  return (
    <div
      className={`row-span-1 h-[160px] md:justify-self-${index === 0 ? 'end' : 'start'} md:w-[256px] md:h-[212px] md:col-span-1 border-solid border-[3px] border-${borderColor} bg-white rounded-3xl flex flex-col pt-4 px-6 pb-10 cursor-pointer`}
      onClick={() => onClick(index)}
    >
      <div className="w-full flex justify-end">
        <Checkmark selected={selected} />
      </div>
      <div className="flex flex-col gap-2 items-start">
        <div className="flex items-center gap-2 md:flex-col md:items-start">
          {icon}
          <h3 className="font-lato font-bold text-xl text-[#141938]">{title}</h3>
        </div>
        <p className="font-lato text-xs text-[#141938]">{subtitle}</p>
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
