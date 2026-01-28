/* eslint-disable max-classes-per-file,no-bitwise */

import type { OverflowMixinInterface } from './mixins/OverflowMixin';

/**
 * Options for finding focusable elements.
 */
type FindFocusableOptions = {
  /** Elements to exclude from the search. */
  excludedElements?: HTMLElement[];
  /** Selectors to include in the search. */
  includeSelectors?: string[];
};

/**
 * nodeB precedes nodeA in either a pre-order depth-first traversal of a tree containing both
 * (e.g., as a descendant or preceding sibling or a descendant of a preceding sibling or
 * preceding sibling of an ancestor) or (if they are disconnected) in an arbitrary but
 * consistent ordering.
 *
 * @param nodeA - The first node to compare.
 * @param nodeB - The second node to compare.
 * @returns - True if nodeA is after nodeB, false otherwise.
 *
 * @see [compareDocumentPosition](https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition)
 */
export const isAfter = (nodeA: Element, nodeB: Element): boolean =>
  !!(nodeA.compareDocumentPosition(nodeB) & Node.DOCUMENT_POSITION_PRECEDING);

/**
 * nodeB follows nodeA in either a pre-order depth-first traversal of a tree containing both
 * (e.g., as a descendant or following sibling or a descendant of a following sibling or
 * following sibling of an ancestor) or (if they are disconnected) in an arbitrary but
 * consistent ordering.
 *
 * @param nodeA - The first node to compare.
 * @param nodeB - The second node to compare.
 * @returns - True if nodeA is before nodeB, false otherwise.
 *
 * @see [compareDocumentPosition](https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition)
 */
export const isBefore = (nodeA: Element, nodeB: Element): boolean =>
  !!(nodeA.compareDocumentPosition(nodeB) & Node.DOCUMENT_POSITION_FOLLOWING);

/**
 * Checks if the element has no client rectangles (not visible in the viewport).
 *
 * @param element - The element to check.
 * @returns True if the element has no client rectangles.
 */
export const hasNoClientRects = (element: HTMLElement) => element.getClientRects().length === 0;

/**
 * Checks if the element has zero dimensions (width and height are both 0).
 *
 * @param element - The element to check.
 * @returns True if the element has zero dimensions.
 */
export const hasZeroDimensions = (element: HTMLElement) => {
  const { width, height } = element.getBoundingClientRect();
  const { offsetWidth, offsetHeight } = element;

  return offsetWidth + offsetHeight + height + width === 0;
};

/**
 * Checks if the element is scrollable (has overflow content).
 *
 * @param element - The element to check.
 * @returns True if the element is scrollable.
 */
export const isScrollable = (element: HTMLElement): boolean => {
  if (!(element instanceof Element)) return false;
  const computedStyle = getComputedStyle(element);
  const { overflowX, overflowY } = computedStyle;

  // Check if overflow is set to scrollable values
  return overflowX === 'auto' || overflowX === 'scroll' || overflowY === 'auto' || overflowY === 'scroll';
};

/**
 * Determines if the element is not visible in the DOM.
 *
 * @param element - The element to check.
 * @returns True if the element is not visible.
 */
export const isNotVisible = (element: HTMLElement) => hasZeroDimensions(element) || hasNoClientRects(element);

/**
 * Checks if the element has inline styles that make it hidden.
 *
 * @param element - The element to check.
 * @returns True if the element has inline styles that make it hidden.
 */
export const hasHiddenStyle = (element: HTMLElement) => {
  const { display, opacity, visibility } = element.style;
  return display === 'none' || opacity === '0' || visibility === 'hidden' || visibility === 'collapse';
};

/**
 * Checks if the element is hidden by a computed style.
 *
 * @param element - The element to check.
 * @returns True if the element is hidden by a computed style.
 */
export const hasComputedHidden = (element: HTMLElement) => {
  const computedStyle = getComputedStyle(element);
  return computedStyle.visibility === 'hidden' || computedStyle.height === '0' || computedStyle.display === 'none';
};

const isDisplayContents = (element: HTMLElement) => {
  const computedStyle = getComputedStyle(element);
  return computedStyle.display === 'contents';
};

/**
 * Checks if the element is hidden from the user.
 *
 * @param element - The element to check.
 * @returns True if the element is hidden.
 */
export const isHidden = (element: HTMLElement) =>
  element.hasAttribute('hidden') ||
  element.getAttribute('aria-hidden') === 'true' ||
  hasHiddenStyle(element) ||
  (!isDisplayContents(element) && (hasComputedHidden(element) || isNotVisible(element)));

/**
 * Checks if the element is disabled.
 *
 * @param element - The element to check.
 * @returns True if the element is disabled.
 */
export const isDisabled = (element: any) => element.disabled;

/**
 * Checks if the element is not tabbable.
 *
 * @param element - The element to check.
 * @returns True if the element is not tabbable.
 */
export const isTabbable = (element: HTMLElement) => element.getAttribute('tabindex') !== '-1';

/**
 * Checks if the element is interactive.
 *
 * @param element - The element to check.
 * @returns True if the element is interactive.
 */
export const isInteractiveElement = (element: HTMLElement): boolean => {
  const interactiveTags = new Set(['BUTTON', 'DETAILS', 'EMBED', 'IFRAME', 'SELECT', 'TEXTAREA']);

  if (interactiveTags.has(element.tagName)) {
    return true;
  }
  if (element instanceof HTMLAnchorElement && element.hasAttribute('href')) {
    return true;
  }
  if (element instanceof HTMLInputElement && element.type !== 'hidden') {
    return true;
  }
  if (
    (element instanceof HTMLAudioElement || element instanceof HTMLVideoElement) &&
    element.hasAttribute('controls')
  ) {
    return true;
  }
  if ((element instanceof HTMLImageElement || element instanceof HTMLObjectElement) && element.hasAttribute('usemap')) {
    return true;
  }
  if (element.hasAttribute('tabindex') && element.tabIndex > -1) {
    return true;
  }

  return false;
};

/**
 * Checks if the element matches any of the given selectors.
 *
 * @param element - The element to check.
 * @param selectors - The list of selectors to match against.
 * @returns True if the element matches any of the selectors.
 */
export const isMatchAny = (element: HTMLElement, selectors: string[]): boolean =>
  selectors.some(selector => element.matches(selector));

/**
 * Checks if the element is focusable.
 *
 * @param element - The element to check.
 * @returns True if the element is focusable.
 */
export const isFocusable = (element: HTMLElement) =>
  !isDisabled(element) && isTabbable(element) && !isHidden(element) && isInteractiveElement(element);

/**
 * Recursively finds all focusable elements within the given root and its descendants.
 *
 * Make sure this is performant, as it will be called multiple times.
 *
 * @param root - The root element to search for focusable elements.
 * @param options - Options to customize the search.
 * @returns The list of focusable elements.
 */
export const findFocusable = (
  root: ShadowRoot | HTMLElement | null,
  options: FindFocusableOptions = {},
): HTMLElement[] => {
  if (!root) {
    return [];
  }

  const excludesSet = new Set(options?.excludedElements ?? []);
  const includeSelectors = options?.includeSelectors ?? [];
  const matches = new Set<HTMLElement>();

  const focusableCheck = (element: HTMLElement) => {
    if (!(element instanceof HTMLSlotElement) && (isHidden(element) || isDisabled(element))) {
      return 'stop';
    }
    return isMatchAny(element, includeSelectors) || isInteractiveElement(element) ? 'focusable' : 'continue';
  };

  const finder = (root: ShadowRoot | HTMLElement) => {
    if (excludesSet.has(root as HTMLElement)) {
      return;
    }
    if (root instanceof HTMLElement && !matches.has(root) && focusableCheck(root) === 'focusable') {
      matches.add(root);
    }

    let children: HTMLElement[] = [];
    if (root instanceof HTMLElement && root.shadowRoot) {
      children = Array.from(root.shadowRoot.children) as HTMLElement[];
    } else if (root.children.length) {
      children = Array.from(root.children) as HTMLElement[];
    }

    children.forEach((child: Node) => {
      const element = child as HTMLElement;
      const isFocusableResult = focusableCheck(element);

      if (isFocusableResult === 'focusable') {
        matches.add(element);
      }

      if (isFocusableResult === 'stop') {
        return;
      }

      if (element.shadowRoot) {
        finder(element.shadowRoot);
      } else if (element.tagName === 'SLOT') {
        const assignedNodes = (element as HTMLSlotElement).assignedElements({ flatten: true });
        assignedNodes.forEach(node => {
          if (node instanceof HTMLElement) {
            finder(node);
          }
        });
      } else {
        finder(element);
      }
    });
  };

  finder(root);
  return [...matches];
};

/**
 * Get the active element from the DOM, including shadow DOMs
 */
export const getDomActiveElement = (root: Document = document): Element | null => {
  let { activeElement } = root;

  while (activeElement?.shadowRoot?.activeElement) activeElement = activeElement.shadowRoot.activeElement;

  return activeElement;
};

/**
 * Type guard to check if an element inherits the OverflowMixin.
 *
 * @param element - The element to check
 * @returns True if the element has the OverflowMixin methods
 */
export const hasOverflowMixin = <T extends HTMLElement>(element: T): element is T & OverflowMixinInterface =>
  'isWidthOverflowing' in element && typeof (element as any).isWidthOverflowing === 'function';
