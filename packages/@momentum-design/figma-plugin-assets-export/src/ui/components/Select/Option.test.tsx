import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Option from './Option';

describe('Option Component', () => {
  it('should render without crashing', () => {
    render(<Option value='test'>Test Option</Option>);
    expect(screen.getByRole('option')).toBeInTheDocument();
  });

  it('should render children correctly', () => {
    render(<Option value='test'>Test Option</Option>);
    expect(screen.getByText('Test Option')).toBeInTheDocument();
  });

  it('should have correct value attribute', () => {
    render(<Option value='test'>Test Option</Option>);
    expect(screen.getByText('Test Option')).toHaveAttribute('value', 'test');
  });

  it('should be disabled when disabled prop is passed', () => {
    render(
      <Option value='test' disabled>
        Test Option
      </Option>,
    );
    expect(screen.getByText('Test Option')).toBeDisabled();
  });

  it('should have option selected to be true when select have that value', () => {
    render(
      <select value="option1" onChange={() => {}}>
        <Option value='option1'>Option1</Option>,
        <Option value='option2'>Option2</Option>,
      </select>,
    );
    const option = screen.getByRole('option', { name: 'Option1' }) as HTMLOptionElement;
    expect(option.selected).toBe(true);
  });

  it('should have option selected to be false when select have not that value', () => {
    render(
      <select value="option1" onChange={() => {}}>
        <Option value='option1'>Option1</Option>,
        <Option value='option2'>Option2</Option>,
      </select>,
    );
    const option = screen.getByRole('option', { name: 'Option2' }) as HTMLOptionElement;
    expect(option.selected).toBe(false);
  });

  it('should be selected when user change from select', async () => {
    const user = userEvent.setup();

    const mockSelectOnChange = jest.fn();
    const SelectTestComponent = () => {
      const [value, setValue] = useState('option1');
      const handleChange = (event: any) => {
        setValue(event.target.value);
        mockSelectOnChange(event);
      };
      return (
        <select value={value} onChange={handleChange}>
          <Option value='option1'>Option1</Option>
          <Option value='option2'>Option2</Option>
        </select>
      );
    };
    render(
      <SelectTestComponent />,
    );

    const select = screen.getByRole('combobox') as HTMLSelectElement;
    expect(select.value).toBe('option1');
    await user.selectOptions(select, 'option2');

    expect(mockSelectOnChange).toHaveBeenCalledTimes(1);
    expect(select.value).toBe('option2');
  });
});
