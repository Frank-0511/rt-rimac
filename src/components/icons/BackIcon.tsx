import { SvgIconProps } from '@/types'
import { memo } from 'react'

const BackIcon = memo((props: SvgIconProps) => {
  const { width = 20, height = 20, color = '#4F4FFF', ...rest } = props
  return (
    <svg
      {...rest}
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="10" r="9" transform="rotate(90 10 10)" stroke={color} strokeWidth="2" />
      <path
        d="M7.55317 10L10.8094 6.74689L11.6907 7.62814L9.32192 10L11.6907 12.3719L10.8094 13.2531L7.55317 10Z"
        fill={color}
      />
    </svg>
  )
})

BackIcon.displayName = 'BackIcon'

export default BackIcon
