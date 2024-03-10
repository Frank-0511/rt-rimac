'use client'

import { ChangeEvent, FC, MouseEvent, useEffect, useRef, useState } from 'react'

import ChevronIcon from '../icons/ChevronIcon'
import { RefCallBack } from 'react-hook-form'

interface Option {
  value: string
  label: string
}

interface DropdownWithInputProps {
  label: string
  options: Option[]
  inputValue: string
  nameInput: string
  refInput: RefCallBack
  errorInput?: string
  onChangeInput: (value: string) => void
  onChangeDropdown: (value: string) => void
}

const DropdownWithInput: FC<DropdownWithInputProps> = ({
  label,
  options,
  refInput,
  inputValue,
  nameInput,
  onChangeInput,
  errorInput,
  onChangeDropdown
}) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(options[0])
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isInputFocused, setIsInputFocused] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeInput(e.target.value)
  }

  const toggleDropdown = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    event.preventDefault()
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleOptionSelect = (option: Option): void => {
    setSelectedOption(option)
    onChangeDropdown(option.value)
    setIsDropdownOpen(false)
  }

  const handleInputFocus = () => {
    setIsInputFocused(true)
  }

  const handleInputBlur = () => {
    if (inputValue === '') {
      setIsInputFocused(false)
    }
  }

  const handleClickOutside = (event: MouseEvent<Element, MouseEvent>) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside as unknown as EventListener)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside as unknown as EventListener)
    }
  }, [])

  return (
    <div>
      <div className="relative flex rounded-lg border border-slate-blue">
        <div ref={dropdownRef} className="relative h-14">
          <button
            onClick={toggleDropdown}
            className="flex items-center justify-between px-4 py-2 rounded-l-lg focus:outline-none border-r border-slate-blue text-base h-full w-[140px]"
          >
            {selectedOption ? selectedOption.label : ''}
            <ChevronIcon
              className={`transition-transform ${isDropdownOpen ? 'transform rotate-180' : ''}`}
            />
          </button>
          {isDropdownOpen && (
            <div className="absolute w-full left-0 mt-1 border bg-white border-gray-300 rounded-b-lg shadow-md z-20">
              <ul>
                {options.map((option, index) => (
                  <li
                    key={index}
                    className={`px-4 py-2 cursor-pointer text-sm ${
                      selectedOption && selectedOption.value === option.value ? 'bg-gray-200' : ''
                    }`}
                    onClick={(event) => {
                      event.stopPropagation()
                      event.preventDefault()
                      handleOptionSelect(option)
                    }}
                  >
                    {option.label}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="relative flex-1 h-14 px-4 py-2 flex items-end">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            className={`pt-2 h-full w-full bg-transparent outline-none border-none z-10 text-base`}
            id="inputDropdown"
            ref={refInput}
            name={nameInput}
          />
          <label
            htmlFor="inputDropdown"
            className={`absolute px-2 left-2 text-slate-blue ${
              isInputFocused || inputValue !== '' ? 'top-[0.3rem] text-xs' : 'top-4 text-md'
            } transition-all`}
          >
            {label}
          </label>
        </div>
      </div>
      <span className="text-xs text-red-600">{errorInput}</span>
    </div>
  )
}

export default DropdownWithInput
