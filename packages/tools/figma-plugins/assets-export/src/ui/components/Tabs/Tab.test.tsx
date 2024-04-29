import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Tab from './Tab';

describe('Tab Component', () => {
  it('should render without crashing', () => {
    render(
      <Tab active={false} handleClick={() => {}}>
        Test Tab
      </Tab>,
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render children correctly', () => {
    render(
      <Tab active={false} handleClick={() => {}}>
        Test Tab
      </Tab>,
    );
    expect(screen.getByText('Test Tab')).toBeInTheDocument();
  });

  it('should have "active" class when active prop is passed', () => {
    render(
      <Tab active={true} handleClick={() => {}}>
        Test Tab
      </Tab>,
    );
    expect(screen.getByText('Test Tab')).toHaveClass('active');
  });

  it('should not have "active" class when active prop is not passed', () => {
    render(
      <Tab active={false} handleClick={() => {}}>
        Test Tab
      </Tab>,
    );
    expect(screen.getByText('Test Tab')).not.toHaveClass('active');
  });

  it('should call handleClick when clicked', async () => {
    const handleClick = jest.fn();
    const user = userEvent.setup();
    render(
      <Tab active={false} handleClick={handleClick}>
        Test Tab
      </Tab>,
    );
    await user.click(screen.getByText('Test Tab'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
