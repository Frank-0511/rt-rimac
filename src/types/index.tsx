export type SvgIconProps = {
  width?: number
  height?: number
  color?: string
  className?: string
}

export const ForMeRecipient = 'for-me'
export const ForSomeoneElseRecipient = 'for-someone-else'

export type Recipient = {
  id: typeof ForMeRecipient | typeof ForSomeoneElseRecipient | null
  icon: JSX.Element | null
  title: string
  subtitle: string
}
