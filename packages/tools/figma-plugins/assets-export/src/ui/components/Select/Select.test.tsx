import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Select from './Select';

describe('Select Component', () => {
  it('should select option', async () => {
    const setSelectValue = jest.fn();
    render(
      <Select setSelectValue={setSelectValue} className='test-class'>
        <option value='option1'>Option 1</option>
        <option value='option2'>Option 2</option>
      </Select>,
    );

    const option1 = screen.getByText('Option 1');
    expect(option1).toBeInTheDocument();

    const option2 = screen.getByText('Option 2');
    expect(option2).toBeInTheDocument();

    const selectElement = screen.getByRole('combobox') as HTMLSelectElement;

    expect(selectElement).toBeInTheDocument();
    expect(selectElement).toHaveClass('test-class');

    await userEvent.selectOptions(selectElement, 'option2');
    expect(selectElement.value).toBe('option2');

    expect(setSelectValue).toHaveBeenCalled();
  });
});
