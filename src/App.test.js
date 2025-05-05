import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

describe('App integration with Modal', () => {
  beforeEach(() => {
    const root = document.createElement('div');
    root.setAttribute('id', 'modal-root');
    document.body.appendChild(root);
  });

  test('abre y cierra modal de confirmación', async () => {
    render(<App />);
    const btnConfirmacion = screen.getByText(/Abrir Modal de Confirmación/i);
    fireEvent.click(btnConfirmacion);
    expect(screen.getByText(/¿Estás seguro\?/)).toBeInTheDocument();

    const btnCancelar = screen.getByText('Cancelar');
    fireEvent.click(btnCancelar);
    await waitFor(() => {
      expect(screen.queryByText(/¿Estás seguro\?/)).not.toBeInTheDocument();
    });
  });

  test('abre modal de formulario y muestra campos', () => {
    render(<App />);
    fireEvent.click(screen.getByText(/Abrir Modal de Formulario/i));

    const inputNombre = screen.getByText(/Nombre/i);
    const inputEmail = screen.getByText(/Email/i);
    const inputMensaje = screen.getByText(/Mensaje/i);
    const btnEnviar = screen.getByText(/Enviar/i);
    expect(inputNombre).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(inputMensaje).toBeInTheDocument();
    expect(btnEnviar).toBeInTheDocument();
  });

  test('abre modal de galería y muestra imágenes', () => {
    render(<App />);
    fireEvent.click(screen.getByText(/Abrir Modal de Galería/i));
    const imgs = screen.getAllByRole('img');
    expect(imgs.length).toBeGreaterThanOrEqual(3);
  });
});
