import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import Select from "./Select";

describe("Select Component", () => {
  it("should select option", () => {
    const setSelectValue = jest.fn();
    const { getByRole, container } = render(
      <Select setSelectValue={setSelectValue} className="test-class">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </Select>
    );

    expect(container).toBeTruthy();
    expect(getByRole("combobox")).toHaveClass("test-class");

    const select = getByRole("combobox");
    fireEvent.change(select, { target: { value: "option2" } });

    expect(setSelectValue).toHaveBeenCalledWith("option2");
  });

  // Add more tests based on your requirements
});
