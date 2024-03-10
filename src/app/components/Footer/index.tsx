import LogoRimacIcon from '@/components/icons/LogoRimacIcon'

const Footer = () => {
  return (
    <footer className="r-grid md:items-center bg-black py-8">
      <LogoRimacIcon
        className="col-span-4 justify-self-center md:justify-self-start md:col-span-6"
        color="white"
        height={42}
        width={85}
      />
      <div className="md:hidden md:border-none col-span-4 border-t border-[#2B304E] w-full"></div>
      <span className="col-span-4 justify-self-center md:justify-self-end md:col-span-6 text-white text-xs md:text-sm h-max">
        © {new Date().getFullYear()} RIMAC Seguros y Reaseguros.
      </span>
    </footer>
  )
}

export default Footer
