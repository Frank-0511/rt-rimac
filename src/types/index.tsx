export type SvgIconProps = {
  width?: number
  height?: number
  color?: string
  className?: string
}

export type Recipient = {
  id: string | null
  icon: JSX.Element | null
  title: string
  subtitle: string
}
