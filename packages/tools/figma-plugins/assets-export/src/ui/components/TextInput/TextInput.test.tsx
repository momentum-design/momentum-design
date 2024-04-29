import React from 'react';
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextInput from './TextInput';

describe('TextInput Component', () => {
  it('should render without crashing', () => {
    render(<TextInput value='test' onChange={() => {}} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should render initial value correctly', () => {
    render(<TextInput value='test' onChange={() => {}} />);
    expect(screen.getByRole('textbox')).toHaveValue('test');
  });

  it('should be disabled when disabled prop is passed', () => {
    render(<TextInput value='test' onChange={() => {}} disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('should call onchange when typing', async () => {
    const user = userEvent.setup();
    const onChangeMock = jest.fn();
    render(<TextInput onChange={onChangeMock} />);
    const input = screen.getByRole('textbox');
    await user.type(input, 'new value');
    expect(onChangeMock).toHaveBeenCalledTimes(9);
    expect(input).toHaveValue('new value');
  });

  it('should have the class "text-input"', () => {
    render(<TextInput value='test' onChange={() => {}}/>);
    expect(screen.getByRole('textbox')).toHaveClass('text-input');
  });
});
