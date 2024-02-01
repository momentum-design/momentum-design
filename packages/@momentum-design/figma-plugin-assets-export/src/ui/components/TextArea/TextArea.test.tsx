import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TextArea from "./TextArea";

describe("TextArea Component", () => {
  it("should render without crashing", () => {
    render(<TextArea value="test" />);
    expect(screen.getByRole("textbox")).toBeTruthy();
  });

  it("should render initial value correctly", () => {
    render(<TextArea value="test" />);
    expect(screen.getByRole("textbox")).toHaveValue(JSON.stringify("test", null, 2));
  });

  it("should be disabled when disabled prop is passed", () => {
    render(<TextArea value="test" disabled />);
    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  it("should update localValue when value changes", () => {
    render(<TextArea value="test" />);
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "new value" } });
    expect(screen.getByRole("textbox")).toHaveValue("new value");
  });

  it("should update localValue when parentValue changes", () => {
    const { rerender, getByRole } = render(<TextArea value="test" />);
    rerender(<TextArea value="new value" />);
    expect(getByRole("textbox")).toHaveValue(JSON.stringify("new value", null, 2));
  });
});
