import { CSSResult } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './marker.styles';
import { Component } from '../../models';
import type { MarkerVariants } from './marker.types';
import { MARKER_VARIANTS } from './marker.constants';

/**
 * `mdc-marker`, which is a vertical line and
 * used to draw attention to specific parts of
 * the content or to signify important information.
 *
 * **Marker Variants**:
 * - **solid**: Solid marker.
 * - **striped**: Striped marker.
 *
 * @tagname mdc-marker
 *
 * @cssproperty --mdc-marker-solid-background-color - Allows customization of the default background color
 * in solid variant.
 * @cssproperty --mdc-marker-striped-color - Allows customization of the default stripes in striped variant.
 * @cssproperty --mdc-marker-striped-background-color - Allows customization of the default background color
 * in striped variant.
 * @cssproperty --mdc-marker-width - Allows customization of the default width.
 */
class Marker extends Component {
  /**
   * There are two variants of markers, each with a width of 0.25rem:
   * - **solid**: Solid marker.
   * - **striped**: Striped marker.
   * @default solid
   */
  @property({ type: String, reflect: true })
  public variant: MarkerVariants = MARKER_VARIANTS.SOLID;

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Marker;
