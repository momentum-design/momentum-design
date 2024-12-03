import { CSSResult } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './marker.styles';
import { Component } from '../../models';
import type { MarkerVariants } from './marker.types';
import { MARKER_VARIANTS } from './marker.constants';

/**
 * `mdc-marker` which renders the default form which is a vertical line (4px wide)
 * Marker Variants:
 * - **solid**: Solid marker.
 * - **striped**: Striped marker.
 *
 * @tagname mdc-marker
 *
 */
class Marker extends Component {
  /**
   * There are two variants of marker: solid and striped. They are styled differently.
   * - **solid**: Solid marker.
   * - **striped**: Striped marker.
   * @default solid
   */
  @property({ type: String }) variant: MarkerVariants = MARKER_VARIANTS.SOLID;

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Marker;
