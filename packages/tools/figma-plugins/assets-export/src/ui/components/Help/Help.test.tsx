import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import '@testing-library/jest-dom';
import Help from './Help';

describe('Help Component', () => {
  it('open modal on click of help button', async () => {
    const user = userEvent.setup();
    render(<Help tooltipContent='test tooltip' />);
    const mockShowModal = jest.fn();
    const mockCloseModal = jest.fn();
    window.HTMLDialogElement.prototype.showModal = mockShowModal;
    window.HTMLDialogElement.prototype.close = mockCloseModal;

    const button = screen.getByTitle('Help');
    const dialog = screen.getByTestId('dialog');
    expect(button).toBeInTheDocument();
    expect(dialog).toBeInTheDocument();

    await user.click(button);
    expect(mockShowModal).toHaveBeenCalled();

    await user.click(dialog);
    expect(mockCloseModal).toHaveBeenCalled();
  });
});
