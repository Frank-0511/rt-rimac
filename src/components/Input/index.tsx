'use client'

import { HTMLInputTypeAttribute } from 'react'
import { RefCallBack } from 'react-hook-form'
import { useState } from 'react'

interface InputProps {
  label: string
  type: HTMLInputTypeAttribute
  placeholder: string
  inputValue: string
  nameInput: string
  refInput: RefCallBack
  errorInput?: string
  onChangeInput: (value: string) => void
}

const Input = ({
  label,
  type,
  placeholder,
  inputValue,
  nameInput,
  refInput,
  errorInput,
  onChangeInput
}: InputProps) => {
  const [isInputFocused, setIsInputFocused] = useState(false)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeInput(event.target.value)
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
    <div>
      <div className="relative h-14 px-4 py-2 flex items-end rounded-lg border border-solid border-slate-blue ">
        <input
          type={type}
          className="pt-2 h-full w-full bg-transparent outline-none block text-base placeholder-transparent z-10"
          id="floatingInput"
          placeholder={placeholder}
          value={inputValue}
          onInput={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          name={nameInput}
          ref={refInput}
        />
        <label
          htmlFor="floatingInput"
          className={`absolute left-3 transition-all text-slate-blue ${
            isInputFocused || inputValue !== '' ? 'top-[0.3rem] text-xs' : 'top-4 text-md'
          }`}
        >
          {label}
        </label>
      </div>
      <span className="text-xs text-red-600">{errorInput}</span>
    </div>
  )
}

export default Input
