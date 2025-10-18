import { measureElement } from '@tanstack/virtual-core';

/**
 * A custom measureElement function that uses cached measurements when scrolling up to prevent stuttering.
 *
 * Solve [Scrolling up with dynamic heights stutters and jumps](https://github.com/TanStack/virtual/issues/659#issuecomment-2915244925)
 *
 * @param element - The DOM element to measure.
 * @param entry - The ResizeObserverEntry for the element.
 * @param instance - The virtualizer instance.
 */
export const defaultMeasureElement: typeof measureElement = (element, entry, instance) => {
  const direction = instance.scrollDirection;

  if (!(direction === 'forward' || direction === null)) {
    // When scrolling up, use cached measurement to prevent stuttering

    const indexKey = Number(element.getAttribute('data-index'));
    const cachedMeasurement = instance.measurementsCache[indexKey]?.size;

    if (cachedMeasurement) {
      return cachedMeasurement;
    }
  }
  return measureElement(element, entry, instance);
};
