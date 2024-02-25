// components/Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className=" bg-slate-800 rounded-lg p-4 max-w-4xl border-2 border-slate-50">
          {children}
      </div>
    </div>
  );
};

export default Modal;
