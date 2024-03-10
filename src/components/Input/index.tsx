'use client'

import { HTMLInputTypeAttribute } from 'react'

interface InputProps {
  label: string
  type: HTMLInputTypeAttribute
  placeholder: string
}

const Input = (props: InputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (props.type !== 'tel') return event.target.value
    const newValue = event.target.value.replace(/[^0-9]/g, '')
    event.target.value = newValue
  }

  return (
    <div className="relative mb-3">
      <input
        type={props.type}
        className="peer m-0 block h-[56px] w-full rounded-lg border border-solid border-slate-blue bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-150 ease-linear placeholder:text-transparent focus:border-black focus:border-1 focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem] focus:outline-black focus:outline-1"
        id="floatingInput"
        placeholder={props.placeholder}
        onInput={handleInputChange}
      />
      <label
        htmlFor="floatingInput"
        className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-150 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none "
      >
        {props.label}
      </label>
    </div>
  )
}

export default Input
