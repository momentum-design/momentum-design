import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Link from "./Link";

describe("Link Component", () => {
  it("renders correct link and text", () => {
    render(<Link url={"www.test.com"} children={"go to text"} target="_blank" />);
    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveAttribute("href", "www.test.com");
    expect(linkElement).toHaveAttribute("target", "_blank");
  });
});
