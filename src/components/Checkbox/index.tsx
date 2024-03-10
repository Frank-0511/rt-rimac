'use client'

import classNames from 'classnames'
import styles from './styles.module.css'
import { useState } from 'react'

interface CheckboxProps {
  label: string
}

const Checkbox = (props: CheckboxProps) => {
  const [checked, setChecked] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }

  return (
    <div className="flex items-center">
      <div
        className={classNames(
          styles['container-input'],
          checked && styles['container-input--checked']
        )}
      >
        <input
          id="link-checkbox"
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          className={styles.input}
        />
      </div>
      <label htmlFor="link-checkbox" className="ms-2 text-xs font-medium text-gray-900">
        {props.label}
      </label>
    </div>
  )
}

export default Checkbox
