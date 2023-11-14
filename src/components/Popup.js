import React, { useState } from 'react';
import './AlertPopup.css'; // Import your Tailwind CSS file

const Popup = ({ message, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center ${isVisible ? '' : 'hidden'}`}>
      <div className="bg-white p-6 rounded shadow-md">
        <p>{message}</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;