import React, { useState } from 'react';
import Modal from './components/Modal/Modal';

const App = () => {

  const [isModalConfirmacionOpen, setIsModalConfirmacionOpen] = useState(false);
  const [isModalFormularioOpen, setIsModalFormularioOpen] = useState(false);
  const [isModalGaleriaOpen, setIsModalGaleriaOpen] = useState(false);

  // Modal de confirmación
const ModalConfirmacion = () => (
  <div>
    <h2 className="text-xl font-semibold">¿Estás seguro?</h2>
    <p>¿Quieres eliminar este elemento?</p>
    <div className="mt-4 flex justify-end space-x-4">
      <button className="px-4 py-2 bg-gray-300 rounded" onClick={() => {console.log("Cancelado"); setIsModalConfirmacionOpen(false)}}>
        Cancelar
      </button>
      <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={() => {console.log("Elemento eliminado"); setIsModalConfirmacionOpen(false)}}>
        Aceptar
      </button>
    </div>
  </div>
);

// Modal con formulario
const ModalFormulario = () => (
  <div>
    <h2 className="text-xl font-semibold">Formulario de Contacto</h2>
    <form className="space-y-4 mt-4">
      <div>
        <label className="block text-sm font-medium">Nombre</label>
        <input type="text" className="w-full px-4 py-2 border rounded-md" />
      </div>
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input type="email" className="w-full px-4 py-2 border rounded-md" />
      </div>
      <div>
        <label className="block text-sm font-medium">Mensaje</label>
        <textarea className="w-full px-4 py-2 border rounded-md" rows="4" />
      </div>
      <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Enviar
      </button>
    </form>
  </div>
);

// Modal con galería de imágenes
const ModalGaleria = () => (
  <div>
    <h2 className="text-xl font-semibold">Galería de Imágenes</h2>
    <div className="mt-4 grid grid-cols-3 gap-4">
      <img src="https://picsum.photos/150" alt="Imagen 1" className="w-full h-auto rounded-md" />
      <img src="https://picsum.photos/150" alt="Imagen 2" className="w-full h-auto rounded-md" />
      <img src="https://picsum.photos/150" alt="Imagen 3" className="w-full h-auto rounded-md" />
    </div>
  </div>
);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
      {/* Botones para abrir los modales */}
      <button
        className="px-6 py-3 bg-blue-500 text-white rounded"
        onClick={() => setIsModalConfirmacionOpen(true)}
      >
        Abrir Modal de Confirmación
      </button>
      <button
        className="px-6 py-3 bg-blue-500 text-white rounded"
        onClick={() => setIsModalFormularioOpen(true)}
      >
        Abrir Modal con Formulario
      </button>
      <button
        className="px-6 py-3 bg-blue-500 text-white rounded"
        onClick={() => setIsModalGaleriaOpen(true)}
      >
        Abrir Modal con Galería
      </button>

      {/* Modales */}
      <Modal isOpen={isModalConfirmacionOpen} onClose={() => setIsModalConfirmacionOpen(false)}>
        <ModalConfirmacion />
      </Modal>

      <Modal isOpen={isModalFormularioOpen} onClose={() => setIsModalFormularioOpen(false)}>
        <ModalFormulario />
      </Modal>

      <Modal isOpen={isModalGaleriaOpen} onClose={() => setIsModalGaleriaOpen(false)}>
        <ModalGaleria />
      </Modal>
    </div>
  );
};

export default App;
