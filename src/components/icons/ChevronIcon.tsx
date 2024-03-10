import { SvgIconProps } from '@/types'
import { memo } from 'react'

const ChevronIcon = memo((props: SvgIconProps) => {
  const { width = 20, height = 20, ...rest } = props
  return (
    <svg {...rest} xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none">
      <path
        fill="#03050F"
        d="M10 14.894 3.494 8.38 5.256 6.62 10 11.356l4.744-4.737 1.762 1.762L10 14.894Z"
      />
    </svg>
  )
})

ChevronIcon.displayName = 'ChevronIcon'

export default ChevronIcon
