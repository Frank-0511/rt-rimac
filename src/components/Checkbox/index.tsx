'use client'

import { MouseEvent } from 'react'
import classNames from 'classnames'
import styles from './styles.module.css'

interface CheckboxProps {
  label: string
  onChange: (checked: boolean) => void
  checked: boolean
  error?: string
}

const Checkbox = (props: CheckboxProps) => {
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.stopPropagation()
    props.onChange(!props.checked)
  }

  return (
    <div>
      <div className="flex items-center" onClick={handleClick}>
        <div
          className={classNames(
            styles['container-input'],
            props.checked && styles['container-input--checked']
          )}
        >
          <input
            id="link-checkbox"
            type="checkbox"
            defaultChecked={props.checked}
            className={styles.input}
          />
        </div>
        <label
          htmlFor="link-checkbox"
          className="ms-3 text-sm md:text-xs font-medium text-gray-900 tracking-[0.2px]"
        >
          {props.label}
        </label>
      </div>
      <span className="text-xs text-red-600">{props.error}</span>
    </div>
  )
}

export default Checkbox
