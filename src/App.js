import React, { useState } from 'react';
import Modal from './components/Modal/Modal';

const App = () => {
  const [isModalConfirmacionOpen, setIsModalConfirmacionOpen] = useState(false);
  const [isFormularioOpen, setIsModalFormularioOpen] = useState(false);
  const [isGaleriaOpen, setIsModalGaleriaOpen] = useState(false);

  // Modal con confirmación
  const ModalConfirmacion = () => (
    <div>
      <h2 className="text-xl font-semibold">¿Estás seguro?</h2>
      <p>¿Quieres eliminar este elemento?</p>
      <div className="mt-4 flex justify-end space-x-4">
        <button className="px-4 py-2 bg-gray-300 rounded" onClick={() => { console.log("Cancelado"); setIsModalConfirmacionOpen(false) }}>
          Cancelar
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={() => { console.log("Elemento eliminado"); setIsModalConfirmacionOpen(false) }}>
          Aceptar
        </button>
      </div>
    </div>
  );

  // Modal con formulario
  const ModalFormulario = () => (
    <div>
      <h2 className="text-xl font-semibold">Formulario de Contacto</h2>
      <form className="mt-4">
        <div className="mb-4">
          <label className="block">Nombre</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Ingresa tu nombre"
          />
        </div>
        <div className="mb-4">
          <label className="block">Email</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Ingresa tu correo"
          />
        </div>
        <div>
          <label className="block">Mensaje</label>
          <textarea className="w-full p-2 border border-gray-300 rounded" rows="4" />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
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
        Abrir Modal de Formulario
      </button>
      <button
        className="px-6 py-3 bg-blue-500 text-white rounded"
        onClick={() => setIsModalGaleriaOpen(true)}
      >
        Abrir Modal de Galería
      </button>

      {/* Modales */}
      {/* Modal de confirmacion */}
      <Modal
        isOpen={isModalConfirmacionOpen}
        onClose={() => setIsModalConfirmacionOpen(false)}
        contentClassName="max-w-lg w-full"
        disableBackdropClick={false}
        showCloseButton={true}
      >
        <ModalConfirmacion />
      </Modal>

      {/* Modal de Formulario */}
      <Modal
        isOpen={isFormularioOpen}
        onClose={() => setIsModalFormularioOpen(false)}
        contentClassName="max-w-lg w-full"
        disableBackdropClick={false}
        showCloseButton={true}
      >
        <ModalFormulario />
      </Modal>

      {/* Modal de Galería */}
      <Modal
        isOpen={isGaleriaOpen}
        onClose={() => setIsModalGaleriaOpen(false)}
        contentClassName="max-w-3xl w-full"
        disableBackdropClick={false}
        showCloseButton={true}
      >
        <ModalGaleria />
      </Modal>
    </div>
  );
};

export default App;
