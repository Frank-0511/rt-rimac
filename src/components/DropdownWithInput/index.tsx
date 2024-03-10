'use client'

import { ChangeEvent, FC, useEffect, useRef, useState } from 'react'

import ChevronIcon from '../icons/ChevronIcon'

interface Option {
  value: string
  label: string
}

interface Props {
  label: string
  options: Option[]
}

const DropdownWithInput: FC<Props> = ({ label, options }) => {
  const [inputValue, setInputValue] = useState('')
  const [selectedOption, setSelectedOption] = useState<Option | null>(options[0])
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isInputFocused, setIsInputFocused] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/, '')
    setInputValue(value)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleOptionSelect = (option: Option) => {
    setSelectedOption(option)
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

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
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
                  onClick={() => handleOptionSelect(option)}
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
  )
}

export default DropdownWithInput
