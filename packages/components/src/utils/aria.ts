/**
 * Get the aria-label of an element, falling back to aria-labelledby if necessary.
 *
 * @param element - The element to get the aria-label from.
 */
export const getAriaLabel = (element: Element | null): string | null => {
  if (!element) return null;
  let ariaLabel = element.getAttribute('aria-label');

  // fall back to aria-labelledby if aria-label is not present
  if (!ariaLabel && element.hasAttribute('aria-labelledby')) {
    const labelledbyId = element.getAttribute('aria-labelledby')!;
    const labelledbyElement = document.getElementById(labelledbyId);

    if (labelledbyElement) {
      ariaLabel = labelledbyElement.getAttribute('aria-label');
    }
  }

  return ariaLabel;
};
