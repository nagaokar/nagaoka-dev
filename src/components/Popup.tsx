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
        <div className="flex flex-col bg-white p-4 rounded shadow-lg">
          <button className="flex justify-end" onClick={togglePopup}>
            Close
          </button>
          {children}
        </div>
      </div>
    </>
  );
};

export default Popup;
