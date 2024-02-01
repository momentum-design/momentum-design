import React from "react";

import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Tab from "./Tab";

describe("Tab Component", () => {
  it("should render without crashing", () => {
    render(
      <Tab active={false} handleClick={() => {}}>
        Test Tab
      </Tab>
    );
    expect(screen.getByRole("button")).toBeTruthy();
  });

  it("should render children correctly", () => {
    render(
      <Tab active={false} handleClick={() => {}}>
        Test Tab
      </Tab>
    );
    expect(screen.getByText("Test Tab")).toBeTruthy();
  });

  it('should have "active" class when active prop is passed', () => {
    render(
      <Tab active={true} handleClick={() => {}}>
        Test Tab
      </Tab>
    );
    expect(screen.getByText("Test Tab")).toHaveClass("active");
  });

  it('should not have "active" class when active prop is not passed', () => {
    render(
      <Tab active={false} handleClick={() => {}}>
        Test Tab
      </Tab>
    );
    expect(screen.getByText("Test Tab")).not.toHaveClass("active");
  });

  it("should call handleClick when clicked", () => {
    const handleClick = jest.fn();
    render(
      <Tab active={false} handleClick={handleClick}>
        Test Tab
      </Tab>
    );
    fireEvent.click(screen.getByText("Test Tab"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
