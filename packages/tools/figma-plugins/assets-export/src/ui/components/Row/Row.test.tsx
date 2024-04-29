import React from 'react';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import Row from './Row';

describe('Row Component', () => {
  it('renders with children react node', () => {
    render(<Row ><div>children </div></Row>);
    const childElement = screen.getByText('children');
    expect(childElement).toBeInTheDocument();
  });
  it('renders with small types', () => {
    render(<Row type='small'><div>child</div></Row>);
    const rowElement = screen.getByTestId('row');
    expect(rowElement).toBeInTheDocument();
    expect(rowElement).toHaveClass('row');
    expect(rowElement).toHaveClass('row-small');
  });

  it('renders with large types', () => {
    render(<Row type='large'><div>child</div></Row>);
    const rowElement = screen.getByTestId('row');
    expect(rowElement).toBeInTheDocument();
    expect(rowElement).toHaveClass('row');
    expect(rowElement).toHaveClass('row-large');
  });
  it('renders with normal types', () => {
    render(<Row><div>child</div></Row>);
    const rowElement = screen.getByTestId('row');
    expect(rowElement).toBeInTheDocument();
    expect(rowElement).toHaveClass('row');
  });
});
