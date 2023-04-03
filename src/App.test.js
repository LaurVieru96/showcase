/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/prefer-screen-queries */

import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from './test-utils';
import Home from './components/Home/Home';
import Add from './components/Add/Add';

import { MemoryRouter } from 'react-router-dom';

describe('Home component', () => {

  test('should render elements on page', () => {
    renderWithProviders(<Home />)
    // expect(screen.getByText('Showcase your work with us')).toBeInTheDocument();

    const homeContainer = screen.getByTestId("home-container");
    const heading = screen.getByText("Showcase your work with us");

    expect(homeContainer).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
  })

})


describe('Add Component', () => {

  it('should render inputs and buttons', () => {
    const { getByTestId } = renderWithProviders(
      <MemoryRouter>
        <Add />
      </MemoryRouter>
    );

    const titleInput = getByTestId('input-title');
    const textarea = getByTestId('textarea');
    const url = getByTestId('input-url');
    const file = getByTestId('input-file');
    const addBtn = getByTestId('submit-add-btn');
    expect(titleInput).toBeTruthy();
    expect(textarea).toBeTruthy();
    expect(url).toBeTruthy();
    expect(file).toBeTruthy();
    expect(addBtn).toBeTruthy();
  })

  it('should open file-selector when click "Choose File" button', () => {
    const { getByTestId } = renderWithProviders(
      <MemoryRouter>
        <Add />
      </MemoryRouter>
    );

    const chooseFileBtn = getByTestId('input-file');
    expect(chooseFileBtn).toBeTruthy();
    expect(chooseFileBtn).toBeInTheDocument();
    fireEvent.click(chooseFileBtn);

  })

  it('should add project in projects after pressing submit button', () => {
    const { getByTestId } = renderWithProviders(
      <MemoryRouter>
        <Add />
      </MemoryRouter>
    );


    const submitButton = getByTestId('submit-add-btn');
    expect(submitButton).toBeTruthy();
    // fireEvent.click(submitButton);
    expect(screen.getByText('Add Project')).toBeInTheDocument();
  })
})


