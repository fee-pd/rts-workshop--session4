import React from "react";
import { prettyDOM } from '@testing-library/react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('Testing counter app', () => {
  // Analizar componente con una img en la ppt y que participen para escribir los casos a testear

  it('Should render App', () => {
    render(<App />);

    const element = screen.getByText('React Counter');
    // screen.debug();
    console.log(prettyDOM(element));

    // expect(element).toBeDefined();
  });

  // it('Should fire click and count +1', () => {
  //   render(<App />);

  //   const btn = screen.getByText('Count is 0');
  //   fireEvent.click(btn);

  //   expect(screen.getByText('Count is 1'));
  // });
});
