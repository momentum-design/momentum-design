import { calculateForegroundColor } from '../../dist/module/index.js';

const bgElement = document.getElementById('background-color');
const fgElement = document.getElementById('foreground-color');
const fgElementText = document.getElementById('fg-color-text');
const bgElementText = document.getElementById('bg-color-text');

bgElement.style.width = '100px';
fgElement.style.width = '100px';
fgElement.style.height = '50px';
bgElement.style.margin = '1rem';
fgElement.style.margin = '1rem';

bgElement.addEventListener('change', () => {
  const bgColor = bgElement.value;
  bgElementText.innerHTML = bgColor;
  const fgColor = calculateForegroundColor(bgColor);
  fgElementText.innerHTML = `${fgColor.tokenValue} (${fgColor.tokenName})`;
  fgElement.style.backgroundColor = fgColor.tokenValue;
});
