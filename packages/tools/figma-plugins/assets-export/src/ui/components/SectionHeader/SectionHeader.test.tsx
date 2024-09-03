import React from 'react';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import SectionHeader from './SectionHeader';

describe('SectionHeader Component', () => {
  it('renders with proper classname and children', () => {
    render(<SectionHeader>child</SectionHeader>);
    const sectionElement = screen.getByTestId('section-header');
    expect(sectionElement).toBeInTheDocument();
    const childElement = screen.getByText('child');
    expect(childElement).toBeInTheDocument();
  });
});
