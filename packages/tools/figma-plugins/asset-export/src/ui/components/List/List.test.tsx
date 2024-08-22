import React from 'react';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import List from './List';

describe('List Component', () => {
  it('renders list with react nodes', () => {
    render(
      <List>
        <div>child list</div>
      </List>,
    );

    const listComponent = screen.getByTestId('list');
    expect(listComponent).toBeInTheDocument();
    expect(listComponent).toHaveClass('list');
    const childNode = screen.getByText('child list');
    expect(childNode).toBeInTheDocument();
  });
});
