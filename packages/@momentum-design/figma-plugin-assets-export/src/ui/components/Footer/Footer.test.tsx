import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "./Footer";

describe("Footer Component", () => {
  it("render footer with classname footer and copyright", () => {
    const { container } = render(<Footer />);
    const divElement = container.querySelector(".footer > .copyright");
    expect(divElement).toBeInTheDocument();
  });
});
