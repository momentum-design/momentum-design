import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import Tabs from "./Tabs";

describe("Tabs Component", () => {
  it("should render without crashing", () => {
    const setActiveTab = jest.fn();
    render(<Tabs activeTab="export" setActiveTab={setActiveTab} />);
    expect(screen.getByText("Export")).toBeTruthy();
    expect(screen.getByText("Tools")).toBeTruthy();
    expect(screen.getByText("Settings")).toBeTruthy();
  });

  it("should activate the correct tab", () => {
    const setActiveTab = jest.fn();
    render(<Tabs activeTab="export" setActiveTab={setActiveTab} />);
    expect(screen.getByText("Export")).toHaveClass("active");
    expect(screen.getByText("Tools")).not.toHaveClass("active");
    expect(screen.getByText("Settings")).not.toHaveClass("active");
  });

  it("should call setActiveTab with correct tab name when a tab is clicked", () => {
    const setActiveTab = jest.fn();
    render(<Tabs activeTab="export" setActiveTab={setActiveTab} />);
    fireEvent.click(screen.getByText("Tools"));
    expect(setActiveTab).toHaveBeenCalledWith("tools");
  });
});
