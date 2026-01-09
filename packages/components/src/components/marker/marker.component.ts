import { CSSResult } from 'lit';
import { property } from 'lit/decorators.js';

import { Component } from '../../models';

import styles from './marker.styles';
import type { MarkerVariants } from './marker.types';
import { MARKER_VARIANTS } from './marker.constants';

/**
 * The Marker component displays a vertical line (0.25rem wide) used to draw attention to specific content
 * or signify important information. It provides visual emphasis through color and pattern variations.
 *
 * Markers are commonly used alongside list items, cards, or content blocks to indicate status,
 * priority, or categorization.
 *
 * ## When to use
 * Use markers to highlight important content, indicate status or priority levels, or provide
 * visual categorization in lists and layouts.
 *
 * ## Accessibility
 * - Markers are purely decorative and should not convey information solely through color
 * - Always pair markers with text labels or other indicators to convey meaning
 * - Ensure sufficient color contrast for visibility
 *
 * @tagname mdc-marker
 *
 * @cssproperty --mdc-marker-solid-background-color - Background color for solid variant markers.
 * @cssproperty --mdc-marker-striped-color - Stripe color for striped variant markers.
 * @cssproperty --mdc-marker-striped-background-color - Background color for striped variant markers.
 * @cssproperty --mdc-marker-width - Width (thickness) of the marker line.
 */
class Marker extends Component {
  /**
   * Visual style of the marker.
   * - **solid**: Solid colored vertical line
   * - **striped**: Vertical line with diagonal stripes pattern
   * @default solid
   */
  @property({ type: String, reflect: true })
  public variant: MarkerVariants = MARKER_VARIANTS.SOLID;

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Marker;
