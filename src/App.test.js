import React from "react";
import { prettyDOM } from '@testing-library/react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('Testing counter app', () => {
  beforeEach(() => {
    render(<App />);

    // Aquí inicializamos el contador con un más 1.
    fireEvent.click(screen.getByText('+'));
  });
  it('Should render App', () => {
    const element = screen.getByText('React Counter');
    // screen.debug();
    // console.log(prettyDOM(element));
    // expect(element).toBeDefined();
  });

  // To do: Estado inicial Count is 1
  test('Debería tener texto Count is 1', () => {
    expect(screen.getByText('Count is 1')).toBeInTheDocument();
  });

  // To do: Botón + incremente Count is 2
  test('Botón + incremente Count is 2', () => {

    fireEvent.click(screen.getByText('+'));

    expect(screen.getByText('Count is 2')).toBeInTheDocument();
  });

  // To do: Botón - disminuya Count is 0
  test('Botón - incremente Count is 0', () => {
    fireEvent.click(screen.getByText('-'));

    expect(screen.getByText('Count is 0')).toBeInTheDocument();
  });


  // To do: Botón Reset, resetear contador
  test('Botón RESET incremente Count is 0', () => {

    fireEvent.click(screen.getByText('Reset'));

    expect(screen.getByText('Count is 0')).toBeInTheDocument();
  });

  // To do: Botón Save Data, guardar información en la tabla, agregar una fila
 
  test('Botón - Save Data', () => {
    fireEvent.click(screen.getByTestId('save'));
    const element = screen.getAllByRole('cell');
    expect(element[0]).toHaveTextContent("1");
  });

  test('Tabla título columna "Data"', () => {
    fireEvent.click(screen.getByTestId('save'));
    const element = screen.getAllByRole('columnheader');
    expect(element[0]).toHaveTextContent("Data");
  });
  


});
