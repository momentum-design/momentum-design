import { calculateForegroundColor } from "./index";

describe("calculateForegroundColor", () => {
  const colors = {
    inverted: {
      tokenName: "color-theme-common-inverted-text-primary-normal",
      tokenValue: "#000000f2",
    },
    primary: {
      tokenName: "color-theme-common-text-primary-normal",
      tokenValue: "#fffffff2",
    },
  };

  it.each([
    ["#ffffff", colors.inverted],
    ["#000000", colors.primary],
    ["#ff0000", colors.inverted],
    ["#0000ff", colors.primary],
  ])("should calculate the foreground color for a given background color", (backgroundColor, expected) => {
    expect(calculateForegroundColor(backgroundColor)).toEqual(expected);
  });

  it("should throw an error for invalid hex color", () => {
    expect(() => calculateForegroundColor("#ggg")).toThrow("Invalid HEX color format");
  });
});
