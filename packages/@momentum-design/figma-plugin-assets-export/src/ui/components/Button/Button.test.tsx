import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Button from "./Button";

describe("Button Component", () => {
  it("render button in disable state", () => {
    render(<Button disabled />);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("render button with given class", () => {
    render(<Button className="secondary" disabled />);
    expect(screen.getByRole("button")).toHaveClass("secondary");
  });
});
