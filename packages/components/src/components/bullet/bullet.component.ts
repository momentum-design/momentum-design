import { property } from 'lit/decorators.js';
import type { CSSResult } from 'lit';
import styles from './bullet.styles';
import { Component } from '../../models';
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
   * Size of the bullet
   *
   * Possible values: 'small', 'medium', 'large'
   * @default small
   */
  @property({ type: String, reflect: true })
  public size: Size = SIZE.SMALL;

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Bullet;
