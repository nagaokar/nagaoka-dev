import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import escBtn from '../icons/undraw/undraw_escape-button.svg'

export interface PopupProps {
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerHeight < document.documentElement.scrollHeight) {
        setIsOpen(true)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <div
        className={`fixed inset-0 z-10 flex items-${
          isOpen ? 'start' : 'center'
        } justify-center overflow-y-scroll py-1 xs:items-start sm:items-start md:items-center xl:items-center 2xl:items-center`}
      >
        <div
          className={`h-content m-2 flex flex-col border-2 border-black bg-white p-4 md:w-2/3 ${
            isOpen ? 'mt-4' : ''
          }`}
        >
          {/* BUTTON */}
          <button className="mb-6 flex justify-start" onClick={togglePopup}>
            <Image
              className="absolute hover:w-[50px]"
              src={escBtn}
              width={45}
              height={40}
              alt="escape button"
            />
          </button>

          <div className="flex flex-col items-center justify-center">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default Popup
