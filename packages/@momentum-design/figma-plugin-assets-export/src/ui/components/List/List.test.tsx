import React from "react";
import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import List from "./List";

describe("List Component", () => {
  it("renders list with react nodes", () => {
    const { container } = render(
      <List>
        <div>child list</div>
      </List>
    );

    const listComponent = container.querySelector(".list");
    expect(listComponent).toBeInTheDocument();
    const childNode = screen.getByText("child list");
    expect(childNode).toBeInTheDocument();
  });
});
