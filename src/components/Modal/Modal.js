import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

const Modal = ({
  isOpen,
  onClose,
  children,
  contentClassName = '',
  disableBackdropClick = false,
  showCloseButton = true,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const closeButtonRef = useRef(null);

  const modalRoot = document.getElementById('modal-root') || document.body;

  const titleId = 'modal-title';
  const descId = 'modal-description';

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
      setTimeout(() => {
        setAnimateIn(true);
        closeButtonRef.current?.focus();
      }, 10);
    } else {
      setAnimateIn(false);
      const timer = setTimeout(() => setShowModal(false), 300);
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

  return ReactDOM.createPortal(
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out ${
        animateIn ? 'opacity-100 bg-black bg-opacity-50' : 'opacity-0 bg-black bg-opacity-0'
      } backdrop-blur-sm`}
      onClick={() => !disableBackdropClick && onClose()}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={descId}
    >
      <div
        className={`bg-white p-8 rounded-lg relative transform transition-transform duration-300 ease-in-out ${
          animateIn ? 'translate-y-0' : '-translate-y-8'
        } ${contentClassName}`}
        onClick={(e) => e.stopPropagation()}
      >
        {showCloseButton && (
          <button
            ref={closeButtonRef}
            className="absolute top-2 right-2 text-2xl font-bold"
            onClick={onClose}
            aria-label="Cerrar modal"
          >
            ✕
          </button>
        )}
        <div id={titleId} className="sr-only">Modal</div>
        <div id={descId}>{children}</div>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
