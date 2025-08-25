/* eslint-disable max-classes-per-file,no-bitwise */

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
