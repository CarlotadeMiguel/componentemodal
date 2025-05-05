import React from 'react';

const Modal = ({ isOpen, onClose }) => {
  // Si isOpen es false, no renderizar nada
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      {/* El contenedor principal del modal */}
      <div
        className="bg-white p-8 rounded-lg relative"
        onClick={(e) => e.stopPropagation()} // Evitar que se cierre al hacer clic dentro
      >
        {/* Botón de cierre */}
        <button
          className="absolute top-2 right-2 text-2xl font-bold"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Aquí iría el contenido del modal */}
        <div>
          <h2 className="text-xl font-semibold">Este es el Modal</h2>
          <p>Contenido del modal...</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
