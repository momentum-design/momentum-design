import { calculateForegroundColor } from "./public/index.js";

const bgElementInput = document.getElementById("background-color");
const fgElementText = document.getElementById("fg-color-text");
const bgElementText = document.getElementById("bg-color-text");
const exampleDiv = document.getElementById("example");

// update colors in the HTML after a change happened to the color input
const updateColors = (bgColorValue) => {
  bgElementText.innerHTML = bgColorValue;

  const fgColor = calculateForegroundColor(bgColorValue);

  fgElementText.innerHTML = `${fgColor.tokenValue} (${fgColor.tokenName})`;
  exampleDiv.style.backgroundColor = bgColorValue;
  exampleDiv.style.color = fgColor.tokenValue;
};

// add event listener to the color input
bgElementInput.addEventListener("change", (element) => {
  const bgColorValue = element.target.value;
  updateColors(bgColorValue);
});

// initial update of the colors
updateColors(bgElementInput.value);
