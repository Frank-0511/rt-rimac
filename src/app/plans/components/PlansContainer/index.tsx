import AddUserLightIcon from '@/components/icons/AddUserLightIcon'
import BackIcon from '@/components/icons/BackIcon'
import CardCheckGroup from '../CardCheckGroup'
import ProtectionLightIcon from '@/components/icons/ProtectionLightIcon'

const PlansContainer = () => {
  const options = [
    {
      icon: <ProtectionLightIcon />,
      title: 'Para mi',
      subtitle: 'Cotiza tu seguro de salud y agrega familiares si así lo deseas.'
    },
    {
      icon: <AddUserLightIcon />,
      title: 'Para alguien más',
      subtitle: 'Realiza una cotización para uno de tus familiares o cualquier persona.'
    }
  ]

  return (
    <div className="r-grid px-6 pt-8 md:pl-24 md:pt-10 md:pb-20 md:pr-[131px]">
      <div className="col-span-full hidden md:flex items-center gap-2">
        <BackIcon />
        <span className="text-[#4F4FFF] text-lg font-bold">Volver</span>
      </div>
      <div className="col-span-full justify-self-center">
        <div className="w-full md:w-[544px] text-center">
          <h2 className="text-2xl md:text-5xl font-bold font-lato">
            Rocío ¿Para quién deseas cotizar?
          </h2>
          <p className="font-lato text-base pt-2">
            Selecciona la opción que se ajuste más a tus necesidades.
          </p>
        </div>
      </div>
      <CardCheckGroup options={options} />
    </div>
  )
}

export default PlansContainer
