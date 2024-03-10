'use client'

import classNames from 'classnames'
import styles from './styles.module.css'

interface CheckboxProps {
  label: string
  onChange: (checked: boolean) => void
  checked: boolean
  error?: string
}

const Checkbox = (props: CheckboxProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(event.target.checked)
  }

  return (
    <div>
      <div className="flex items-center">
        <div
          className={classNames(
            styles['container-input'],
            props.checked && styles['container-input--checked']
          )}
        >
          <input
            id="link-checkbox"
            type="checkbox"
            checked={props.checked}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
        <label htmlFor="link-checkbox" className="ms-2 text-xs font-medium text-gray-900">
          {props.label}
        </label>
      </div>
      <span className="text-xs text-red-600">{props.error}</span>
    </div>
  )
}

export default Checkbox
