/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/prefer-screen-queries */

import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from './test-utils';
import Home from './components/Home/Home';
import Add from './components/Add/Add';

import { Router } from 'react-router-dom';

describe('Home component', () => {


  test('should render elements on page', () => {
    renderWithProviders(<Home />)
    expect(screen.getByText('Showcase your work with us')).toBeInTheDocument();
  })

})


describe('Add Component', () => {

  it('should render inputs and buttons', () => {
    renderWithProviders(
      <Router>
        <Add />
      </Router>
    );
  })
  // let getByTestId;

  // beforeEach(() => {
  //   ({ getByTestId } = renderWithProviders(
  //     <Router>
  //       <Add />
  //     </Router>));
  // });

  // it('should render inputs and buttons', () => {
  //   // const titleInput = getByTestId('input-title');
  //   // const textarea = getByTestId('textarea');
  //   // const url = getByTestId('input-url');
  //   // const file = getByTestId('input-file');
  //   const addBtn = getByTestId('submit-add-btn');
  //   // expect(titleInput).toBeTruthy();
  //   // expect(textarea).toBeTruthy();
  //   // expect(url).toBeTruthy();
  //   // expect(file).toBeTruthy();
  //   expect(addBtn).toBeTruthy();
  // })

})



