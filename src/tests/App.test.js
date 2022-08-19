import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';
import { Context, Provider } from '../context/Provider';
import userEvent from '@testing-library/user-event';


describe('Testing environment', () => {
  it('Should render everything', async () => {
    render(
      <Provider>
        <App />
      </Provider>
    )
    
    const nameInput = screen.getByTestId('name-filter');
    const columnInput = screen.getByTestId('column-filter');
    const comparisonInput = screen.getByTestId('comparison-filter');
    const valueInput = screen.getByTestId('value-filter');
    const button = screen.getByTestId('button-filter');



    expect(nameInput).toBeInTheDocument();
    expect(columnInput).toBeInTheDocument();
    expect(comparisonInput).toBeInTheDocument();
    expect(valueInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    expect(columnInput.length).toBe(5);
    expect(comparisonInput.length).toBe(3);
    expect(typeof valueInput.value).toBe('string');

    await new Promise((r) => setTimeout(r, 1000))

    const tatooineName = screen.getByText(/tatooine/i);
    expect(tatooineName).toBeInTheDocument();

    fireEvent.change(columnInput, {
      target: { value: 'orbital_period' }
    })

    expect(columnInput.value).toBe('orbital_period');

    fireEvent.change(comparisonInput, {
      target: { value: 'igual a' }
    })

    expect(comparisonInput.value).toBe('igual a');

    userEvent.type(valueInput, "364");
    
    userEvent.click(button);

    await new Promise((r) => setTimeout(r, 1000))

    const alderaanName = screen.getByText(/alderaan/i);
    expect(alderaanName).toBeInTheDocument();
    expect(tatooineName).not.toBeInTheDocument();
  });

  it('Should render with name input', async () => {
    render(
      <Provider>
        <App />
      </Provider>
    )
    
    const nameInput = screen.getByTestId('name-filter');
    const columnInput = screen.getByTestId('column-filter');
    const comparisonInput = screen.getByTestId('comparison-filter');
    const valueInput = screen.getByTestId('value-filter');
    const button = screen.getByTestId('button-filter');
  });
});
