import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

describe('Nav component', () => {
    // baseline test
    it('renders', () => {
      render(<Nav />);
    });
  
    describe('Nav component', () => {
        // baseline test
        it('renders', () => {
          render(<Nav />);
        });
      
        // snapshot test
        it('matches snapshot', () => {
          const { asFragment } = render(<Nav />);
          // assert value comparison
        });
      })
  })

  describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
    // Arrange
    // Assert
    })
  })


afterEach(cleanup);