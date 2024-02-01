import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import "@testing-library/jest-dom";
import Help from "./Help";

describe("Help Component", () => {
  it("open modal on click of help button", async () => {
    render(<Help tooltipContent="test tooltip" />);
    const mockShowModal = jest.fn();
    window.HTMLDialogElement.prototype.showModal = mockShowModal;

    const button = screen.getByTitle("Help");
    expect(button).toBeInTheDocument();

    let dialog = screen.queryByRole("dialog");
    expect(dialog).not.toBeInTheDocument();

    // Simulate a click event on the button
    fireEvent.click(button);

    expect(mockShowModal).toHaveBeenCalled();
  });
});
