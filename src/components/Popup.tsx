import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import escBtn from '../icons/undraw/undraw_escape-button.svg'

interface PopupProps {
  children: React.ReactNode
  onClick?: () => void
}

const Popup: React.FC<PopupProps> = ({ children, onClick }) => {
  const [isOpen, setIsOpen] = useState(false)

  const togglePopup = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen)
    if (onClick) {
      onClick()
    }
  }

  return (
    <>
      <div className="fixed inset-0 z-10 flex items-start py-5 justify-center overflow-y-scroll md:items-center xl:items-center 2xl:items-center">
        <div
          className="h-content mx-6 flex flex-col border-2 border-black bg-white p-4 
          md:w-2/3 
          ">
            {/* START REFACTOR?: BUTTONS  */}
          <button className="flex justify-start text-end mb-6" onClick={togglePopup}>
            <Image
              className='absolute hover:w-[50px]'
              src={escBtn}
              width={45}
              height={40}
              alt='escape button'
            />
          </button>
          {/* END REFACTOR?: BUTTONS  */}
          <div className="flex flex-col items-center justify-center">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default Popup
