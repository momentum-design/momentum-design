import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import TextArea from './TextArea';

describe('TextArea Component', () => {
  it('should render without crashing', () => {
    render(<TextArea value='test' />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should render initial value correctly', () => {
    render(<TextArea value='test' />);
    expect(screen.getByRole('textbox')).toHaveValue(JSON.stringify('test', null, 2));
  });

  it('should be disabled when disabled prop is passed', () => {
    render(<TextArea value='test' disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('should update localValue when value changes', async () => {
    const user = userEvent.setup();
    render(<TextArea value='test' />);
    const textBox = screen.getByRole('textbox');
    const textBoxOldValue = textBox.innerHTML;
    await user.type(screen.getByRole('textbox'), 'new value');
    expect(screen.getByRole('textbox')).toHaveValue(`${textBoxOldValue}new value`);
  });

  it('should update localValue when parentValue changes', () => {
    const { rerender, getByRole } = render(<TextArea value='test' />);
    expect(getByRole('textbox')).toHaveValue(JSON.stringify('test', null, 2));
    rerender(<TextArea value='new value' />);
    expect(getByRole('textbox')).toHaveValue(JSON.stringify('new value', null, 2));
  });
});
