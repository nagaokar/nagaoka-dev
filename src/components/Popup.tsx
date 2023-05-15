import React, { useState } from 'react';

interface PopupProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Popup: React.FC<PopupProps> = ({ children, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
    if (onClick) {
      onClick();
    }
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-10">
        <div className="flex flex-col bg-white p-4 md:w-1/2 h-content border-2 border-black mx-6
        ">
          <button className="flex justify-end text-end hover:font-bold" 
          onClick={togglePopup}
          >
            Close
          </button>
          <div className="flex flex-col justify-center items-center">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
