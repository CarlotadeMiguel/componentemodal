import React, { useState } from 'react';
import Modal from './components/Modal/Modal';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={handleOpen}
      >
        Abrir Modal
      </button>

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={handleClose} />
    </div>
  );
};

export default App;
