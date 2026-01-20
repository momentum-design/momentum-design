/* eslint-disable max-classes-per-file,no-bitwise */

import type { OverflowMixinInterface } from './mixins/OverflowMixin';

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
 * Type guard to check if an element inherits the OverflowMixin.
 *
 * @param element - The element to check
 * @returns True if the element has the OverflowMixin methods
 */
export const doesElementInheritOverflowMixin = <T extends HTMLElement>(
  element: T,
): element is T & OverflowMixinInterface =>
  'isWidthOverflowing' in element && typeof (element as any).isWidthOverflowing === 'function';
