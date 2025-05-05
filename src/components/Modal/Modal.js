import React, { useState, useEffect, useRef } from 'react';

const Modal = ({ isOpen, onClose, children, contentClassName = '' }) => {
  const [showModal, setShowModal] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
      // Activar animación después de montar
      setTimeout(() => {
        setAnimateIn(true);
        closeButtonRef.current?.focus();
      }, 10);
    } else {
      setAnimateIn(false);
      const timer = setTimeout(() => setShowModal(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!showModal) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-500 ease-in-out ${
        animateIn ? 'opacity-100 bg-black bg-opacity-50' : 'opacity-0 bg-black bg-opacity-0'
      } backdrop-blur-sm`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`bg-white p-8 rounded-lg relative transform transition-transform duration-500 ease-in-out ${
          animateIn ? 'translate-y-0' : '-translate-y-full'
        } ${contentClassName}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          className="absolute top-2 right-2 text-2xl font-bold"
          onClick={onClose}
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
