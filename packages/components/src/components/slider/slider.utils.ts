/**
 * Gets the width of the slider thumb in pixels.
 * @param input - The input element representing the slider thumb.
 * @returns The width of the thumb in pixels.
 */
export const getThumbWidthPx = (input: HTMLElement): number => {
  // Try to get the CSS variable from the input element, fallback to documentElement
  const style = getComputedStyle(input);
  let thumbSize = style.getPropertyValue('--mdc-slider-thumb-size');
  if (!thumbSize) {
    thumbSize = getComputedStyle(document.documentElement).getPropertyValue('--mdc-slider-thumb-size');
  }
  // Remove whitespace and handle units (assume px or rem)
  thumbSize = thumbSize.trim();
  if (thumbSize.endsWith('px')) {
    return parseFloat(thumbSize);
  }
  if (thumbSize.endsWith('rem')) {
    const htmlFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    return parseFloat(thumbSize) * htmlFontSize;
  }
  return 0;
};

/**
 * Gets the pixel value of a normalized element value.
 * @param normalizedValue - The normalized value (between 0 and 1) of the slider.
 * @param sliderWidthInPx - The total width of the slider in pixels.
 * @param thumbWidthInPx - The width of the slider thumb in pixels.
 * @returns The pixel value of the slider thumb's position.
 */
export const getElementValueInPx = (
  normalizedValue: number,
  sliderWidthInPx: number,
  thumbWidthInPx: number,
): number => {
  const availableWidth = sliderWidthInPx - thumbWidthInPx;
  return normalizedValue * availableWidth + thumbWidthInPx / 2;
};
