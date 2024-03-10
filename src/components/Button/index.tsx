import { ButtonHTMLAttributes } from 'react'
import classNames from 'classnames'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

const Button = ({ text, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={classNames(
        'w-full md:w-max py-[18px] md:py-5 px-10 text-lg md:text-xl font-semibold text-white bg-primary rounded-full',
        'hover:bg-opacity-90'
      )}
    >
      {text}
    </button>
  )
}

export default Button
