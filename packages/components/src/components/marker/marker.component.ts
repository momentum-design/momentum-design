import { CSSResult } from 'lit';
import { property } from 'lit/decorators.js';

import { Component } from '../../models';

import styles from './marker.styles';
import type { MarkerVariants } from './marker.types';
import { MARKER_VARIANTS } from './marker.constants';

/**
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
