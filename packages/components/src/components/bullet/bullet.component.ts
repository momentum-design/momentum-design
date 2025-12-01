import { property } from 'lit/decorators.js';
import type { CSSResult } from 'lit';

import { Component } from '../../models';

import styles from './bullet.styles';
import { SIZE } from './bullet.constants';
import type { Size } from './bullet.types';

/**
 * Bullet component, which is a visual marker
 * and be used to organize and present items in a list format.
 *
 * @tagname mdc-bullet
 *
 * @cssproperty --mdc-bullet-background-color - background color of the bullet
 * @cssproperty --mdc-bullet-size-small - small size value of the bullet
 * @cssproperty --mdc-bullet-size-medium - medium size value of the bullet
 * @cssproperty --mdc-bullet-size-large - large size value of the bullet
 */
class Bullet extends Component {
  /**
   * Specifies the size of the bullet visual indicator.
   *
   * - `small` (default): 0.25rem (4px) - Compact bullet for dense layouts
   * - `medium`: 0.5rem (8px) - Standard bullet for most use cases
   * - `large`: 1rem (16px) - Prominent bullet for emphasis
   *
   * @default small
   */
  @property({ type: String, reflect: true })
  public size: Size = SIZE.SMALL;

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Bullet;
