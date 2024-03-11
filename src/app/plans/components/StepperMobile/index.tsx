import BackIcon from '@/components/icons/BackIcon'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface StepperMobileProps {
  className?: string
}

const StepperMobile = ({ className }: StepperMobileProps) => {
  const [currentStep, setCurrentStep] = useState(1)
  const router = useRouter()

  const handlePrevious = () => {
    if (currentStep === 1) {
      router.push('/')
    } else {
      setCurrentStep((prev) => prev - 1)
    }
  }

  return (
    <div className={`w-full flex flex-col ${className}`}>
      <div className="w-[93.75%]">
        <div className="flex items-center justify-start gap-4 w-full py-4 pl-6">
          <div className="flex items-center">
            <button
              className="flex items-center justify-center rounded-md bg-transparent"
              onClick={handlePrevious}
            >
              <BackIcon width={24} height={24} color="#A9AFD9" />
            </button>
            <h1 className="ml-4 text-xs font-black font-lato text-[#141938] w-max">
              Paso {currentStep} de 2
            </h1>
          </div>
          <div
            className="bg-[#D7DBF5] rounded-full h-[6px] w-full overflow-hidden"
            style={{ width: `100%` }}
          >
            <div
              className="bg-[#4F4FFF] rounded-full h-[6px] w-10"
              style={{
                width: currentStep === 2 ? '100%' : '10px',
                transition: 'width 0.5s ease-in-out'
              }}
            />
          </div>
        </div>
        <div className="flex justify-start">
          <hr className="w-full h-[1px] bg-[#D7DBF5]" />
        </div>
      </div>
    </div>
  )
}

export default StepperMobile
