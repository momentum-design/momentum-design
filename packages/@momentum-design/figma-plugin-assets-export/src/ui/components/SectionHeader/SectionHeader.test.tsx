import React from "react";
import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import SectionHeader from "./SectionHeader";

describe("SectionHeader Component", () => {
  it("renders with proper classname and children", () => {
    const { container } = render(<SectionHeader>child</SectionHeader>);
    const sectionElement = container.querySelector(".section-header");
    expect(sectionElement).toBeInTheDocument();
    const childElement = screen.getByText("child");
    expect(childElement).toBeInTheDocument();
  });
});
