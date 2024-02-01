import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Option from "./Option";

describe("Option Component", () => {
  it("should render without crashing", () => {
    render(<Option value="test">Test Option</Option>);
    expect(screen.getByRole("option")).toBeTruthy();
  });

  it("should render children correctly", () => {
    render(<Option value="test">Test Option</Option>);
    expect(screen.getByText("Test Option")).toBeTruthy();
  });

  it("should have correct value attribute", () => {
    render(<Option value="test">Test Option</Option>);
    expect(screen.getByText("Test Option")).toHaveAttribute("value", "test");
  });

  it("should be disabled when disabled prop is passed", () => {
    render(
      <Option value="test" disabled>
        Test Option
      </Option>
    );
    expect(screen.getByText("Test Option")).toBeDisabled();
  });

  it("should be selected when selected prop is passed in parent Select", () => {
    const { getByRole } = render(
      <select value={"test"} onChange={() => {}}>
        <Option value="test" selected>
          Test Option
        </Option>
      </select>
    );
    const select = getByRole("combobox") as HTMLSelectElement;
    expect(select.value).toBe("test");
  });
});
