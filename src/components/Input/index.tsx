'use client'

import { HTMLInputTypeAttribute } from 'react'
import { useState } from 'react'

interface InputProps {
  label: string
  type: HTMLInputTypeAttribute
  placeholder: string
}

const Input = (props: InputProps) => {
  const [isInputFocused, setIsInputFocused] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (props.type !== 'tel') return event.target.value
    const newValue = event.target.value.replace(/[^0-9]/g, '')
    setInputValue(newValue)
  }

  const handleInputFocus = () => {
    setIsInputFocused(true)
  }

  const handleInputBlur = () => {
    if (inputValue === '') {
      setIsInputFocused(false)
    }
  }

  return (
    <div className="relative h-14 px-4 py-2 flex items-end rounded-lg border border-solid border-slate-blue ">
      <input
        type={props.type}
        className="pt-2 h-full w-full bg-transparent outline-none block text-base placeholder-transparent z-10"
        id="floatingInput"
        placeholder={props.placeholder}
        value={inputValue}
        onInput={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      <label
        htmlFor="floatingInput"
        className={`absolute left-3 transition-all text-slate-blue ${
          isInputFocused || inputValue !== '' ? 'top-[0.3rem] text-xs' : 'top-4 text-md'
        }`}
      >
        {props.label}
      </label>
    </div>
  )
}

export default Input
