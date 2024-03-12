import AddUserLightIcon from '@/components/icons/AddUserLightIcon'
import ProtectionLightIcon from '@/components/icons/ProtectionLightIcon'
import { Recipient } from '@/types'

export const listRecipients: Recipient[] = [
  {
    id: 'for-me',
    icon: <ProtectionLightIcon />,
    title: 'Para mi',
    subtitle: 'Cotiza tu seguro de salud y agrega familiares si así lo deseas.'
  },
  {
    id: 'for-someone-else',
    icon: <AddUserLightIcon />,
    title: 'Para alguien más',
    subtitle: 'Realiza una cotización para uno de tus familiares o cualquier persona.'
  }
]
