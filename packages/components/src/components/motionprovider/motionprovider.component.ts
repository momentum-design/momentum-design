import { CSSResult, html } from 'lit';
import { property, state } from 'lit/decorators.js';

import { Component } from '../../models';

import { DEFAULTS, MOTION_SCOPE_CLASSES, VALID_MOTION_VALUES } from './motionprovider.constants';
import styles from './motionprovider.styles';
import type { MotionMode } from './motionprovider.types';

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

/**
 * @tagname mdc-motionprovider
 *
 * @slot - children
 */
class MotionProvider extends Component {
  @state()
  private prefersReducedMotion = false;

  /** @internal */
  private privateMotion: MotionMode = DEFAULTS.MOTION;

  /** @internal */
  private mediaQueryList?: MediaQueryList;

  /** @internal */
  private mediaQueryListener?: (event: MediaQueryListEvent) => void;

  /**
   * Controls token-based motion for the subtree.
   *
   * - `full` — apply `mds-motion` and `mds-animation` on the host
   * - `reduce` — remove motion scope classes
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
    this.syncSystemPreference();
    this.bindSystemListener();
    this.syncMotionClasses();
  }

  public override disconnectedCallback(): void {
    this.unbindSystemListener();
    super.disconnectedCallback();
  }

  protected override updated(changedProperties: Map<string, unknown>): void {
    super.updated(changedProperties);

    if (changedProperties.has('motion')) {
      this.bindSystemListener();
      this.syncMotionClasses();
    }
  }

  public override render() {
    return html`<slot></slot>`;
  }

  /** @internal */
  private computeMotionAllowed(): boolean {
    if (this.privateMotion === 'full') {
      return true;
    }

    if (this.privateMotion === 'reduce') {
      return false;
    }

    return !this.prefersReducedMotion;
  }

  /** @internal */
  private syncMotionClasses(): void {
    const motionAllowed = this.computeMotionAllowed();

    MOTION_SCOPE_CLASSES.forEach((className) => {
      if (motionAllowed) {
        this.classList.add(className);
      } else {
        this.classList.remove(className);
      }
    });
  }

  /** @internal */
  private syncSystemPreference(): void {
    this.prefersReducedMotion = window.matchMedia(REDUCED_MOTION_QUERY).matches;
  }

  /** @internal */
  private bindSystemListener(): void {
    this.unbindSystemListener();

    if (this.privateMotion !== 'system') {
      return;
    }

    this.mediaQueryList = window.matchMedia(REDUCED_MOTION_QUERY);
    this.mediaQueryListener = () => {
      this.prefersReducedMotion = this.mediaQueryList?.matches ?? false;
      this.syncMotionClasses();
    };

    this.mediaQueryList.addEventListener('change', this.mediaQueryListener);
    this.syncSystemPreference();
  }

  /** @internal */
  private unbindSystemListener(): void {
    if (this.mediaQueryList && this.mediaQueryListener) {
      this.mediaQueryList.removeEventListener('change', this.mediaQueryListener);
    }

    this.mediaQueryList = undefined;
    this.mediaQueryListener = undefined;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default MotionProvider;
