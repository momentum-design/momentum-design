import { property } from 'lit/decorators.js';
import type { CSSResult } from 'lit';

import { Component } from '../../models';

import styles from './bullet.styles';
import { SIZE } from './bullet.constants';
import type { Size } from './bullet.types';

/**
 * The Bullet component displays a small circular visual indicator used to organize and present
 * items in a list format. It provides a simple, consistent way to mark list items or emphasize
 * content points.
 *
 * Bullets are available in three sizes (small, medium, large) to accommodate different layout
 * densities and visual hierarchies.
 *
 * ## When to use
 * Use bullets to create unordered lists, mark navigation items, or provide visual indicators
 * for list content. Choose bullet size based on content importance and layout density.
 *
 * ## Accessibility
 * - Bullets are purely decorative and should be used alongside meaningful text content
 * - Do not rely solely on bullet size or color to convey information
 *
 * @tagname mdc-bullet
 *
 * @cssproperty --mdc-bullet-background-color - Background color of the bullet.
 * @cssproperty --mdc-bullet-size - Height of the bullet.
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
