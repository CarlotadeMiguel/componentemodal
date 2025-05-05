import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Modal from './Modal';

describe('Modal', () => {
  const onClose = jest.fn();

  const renderModal = (props = {}) =>
    render(
      <Modal isOpen={true} onClose={onClose} {...props}>
        <div>Contenido del Modal</div>
      </Modal>,
      {
        container: (() => {
          const root = document.createElement('div');
          root.setAttribute('id', 'modal-root');
          document.body.appendChild(root);
          return root;
        })(),
      }
    );

  afterEach(() => {
    onClose.mockClear();
  });

  test('renderiza contenido cuando isOpen es true', () => {
    renderModal();
    expect(screen.getByText('Contenido del Modal')).toBeInTheDocument();
  });

  test('no renderiza cuando isOpen es false', () => {
    const { queryByText } = render(
      <Modal isOpen={false} onClose={onClose}>
        <div>Oculto</div>
      </Modal>,
      {
        container: (() => {
          const root = document.createElement('div');
          root.setAttribute('id', 'modal-root');
          document.body.appendChild(root);
          return root;
        })(),
      }
    );
    expect(queryByText('Oculto')).not.toBeInTheDocument();
  });

  test('dispara onClose al hacer clic fuera del contenido', () => {
    renderModal();
    fireEvent.click(document.querySelector('[role="dialog"]'));
    expect(onClose).toHaveBeenCalled();
  });

  test('no cierra al hacer clic fuera si disableBackdropClick=true', () => {
    renderModal({ disableBackdropClick: true });
    fireEvent.click(document.querySelector('[role="dialog"]'));
    expect(onClose).not.toHaveBeenCalled();
  });

  test('dispara onClose al presionar tecla ESC', () => {
    renderModal();
    fireEvent.keyDown(window, { key: 'Escape' });
    expect(onClose).toHaveBeenCalled();
  });
});
