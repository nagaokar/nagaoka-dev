import React, { useState } from 'react'

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
      <div className="fixed inset-0 z-10 flex items-center justify-center">
        <div
          className="h-content mx-6 flex flex-col border-2 border-black bg-white p-4 md:w-1/2
        "
        >
          <button
            className="flex justify-end text-end hover:font-bold"
            onClick={togglePopup}
          >
            Close
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
