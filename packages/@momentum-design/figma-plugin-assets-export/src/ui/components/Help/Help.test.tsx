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
    window.HTMLDialogElement.prototype.showModal = mockShowModal;

    const button = screen.getByTitle('Help');
    expect(button).toBeInTheDocument();

    const dialog = screen.queryByRole('dialog') as HTMLDialogElement;
    expect(dialog).not.toBeInTheDocument();

    await user.click(button);

    expect(mockShowModal).toHaveBeenCalled();
  });
});
