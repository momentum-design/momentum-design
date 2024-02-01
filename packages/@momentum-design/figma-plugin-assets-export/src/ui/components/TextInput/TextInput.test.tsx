import React from "react";
import "@testing-library/jest-dom";

import { render, fireEvent, screen } from "@testing-library/react";
import TextInput from "./TextInput";

describe("TextInput Component", () => {
  it("should render without crashing", () => {
    render(<TextInput value="test" />);
    expect(screen.getByRole("textbox")).toBeTruthy();
  });

  it("should render initial value correctly", () => {
    render(<TextInput value="test" />);
    expect(screen.getByRole("textbox")).toHaveValue("test");
  });

  it("should be disabled when disabled prop is passed", () => {
    render(<TextInput value="test" disabled />);
    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  it("should not change its value when typing", () => {
    render(<TextInput value="initial value" />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "new value" } });
    expect(input).toHaveValue("initial value");
  });

  it('should have the class "text-input"', () => {
    render(<TextInput value="test" />);
    expect(screen.getByRole("textbox")).toHaveClass("text-input");
  });
});
