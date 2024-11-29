import { CSSResult } from 'lit';
import styles from './marker.styles';
import { Component } from '../../models';
import { property } from 'lit/decorators.js';
import type { MarkerVariant } from './marker.constants';
import { MARKER_VARIANTS, MARKER_VARIANTS_CLASS_MAPPING} from './marker.constants';

type MarkerChangedProperties = Map<keyof Marker, Marker[keyof Marker]>;

/**
 * `mdc-marker` which renders the default form which is a vertical line (4px wide)
 * Marker Variants:
 * - **Solid**: Solid marker.
 * - **Striped**: Striped marker.
 * 
 * @tagname mdc-marker
 *
 * @slot default - This is a default/unnamed slot
 *
 * @cssprop --custom-property-name - Description of the CSS custom property
 */
class Marker extends Component {
  @property({ type: String }) variant: MarkerVariant = MARKER_VARIANTS.SOLID;

  override connectedCallback() {
    super.connectedCallback();
    this.classList.add(MARKER_VARIANTS_CLASS_MAPPING[this.variant]);
  }
  
  override updated(changedProperties: MarkerChangedProperties) {
    super.updated(changedProperties);

    if (changedProperties.has('variant')) {
      this.updateHostClass();
    }
  }

  private updateHostClass() {
    this.classList.add(MARKER_VARIANTS_CLASS_MAPPING[this.variant]);
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Marker;
