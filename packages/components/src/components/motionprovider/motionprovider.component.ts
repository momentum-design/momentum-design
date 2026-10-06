import { CSSResult, html } from 'lit';
import { property } from 'lit/decorators.js';

import { Component } from '../../models';

import {
  DEFAULTS,
  MOTION_MODE_CLASSES,
  MOTION_SCOPE_CLASSES,
  VALID_MOTION_VALUES,
} from './motionprovider.constants';
import styles from './motionprovider.styles';
import type { MotionMode } from './motionprovider.types';

/**
 * @tagname mdc-motionprovider
 *
 * @slot - children
 */
class MotionProvider extends Component {
  /** @internal */
  private privateMotion: MotionMode = DEFAULTS.MOTION;

  /**
   * Controls token-based motion for the subtree.
   *
   * - `full` — keep full motion regardless of the operating system preference
   * - `reduce` — reduce motion regardless of the operating system preference
   * - `system` — follow `prefers-reduced-motion`
   *
   * @default 'full'
   */
  @property({ type: String, reflect: true })
  set motion(value: MotionMode) {
    if (VALID_MOTION_VALUES.includes(value)) {
      this.privateMotion = value;
    }
  }

  get motion() {
    return this.privateMotion;
  }

  public override connectedCallback(): void {
    super.connectedCallback();
    this.syncMotionClasses();
  }

  protected override updated(changedProperties: Map<string, unknown>): void {
    super.updated(changedProperties);

    if (changedProperties.has('motion')) {
      this.syncMotionClasses();
    }
  }

  public override render() {
    return html`<slot></slot>`;
  }

  /** @internal */
  private syncMotionClasses(): void {
    MOTION_SCOPE_CLASSES.forEach((className) => {
      this.classList.add(className);
    });

    Object.values(MOTION_MODE_CLASSES).flat().forEach((className) => {
      this.classList.remove(className);
    });
    MOTION_MODE_CLASSES[this.privateMotion].forEach((className) => {
      this.classList.add(className);
    });
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default MotionProvider;
