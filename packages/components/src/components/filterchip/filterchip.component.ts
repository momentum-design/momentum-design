import { CSSResult, html, nothing, PropertyValues } from 'lit';
import { property, state } from 'lit/decorators.js';

import Chip from '../chip/chip.component';
import { DEFAULTS as CHIP_DEFAULTS } from '../chip/chip.constants';

import styles from './filterchip.styles';
import { DATA_MOTION, DEFAULTS, REDUCED_MOTION_QUERY } from './filterchip.constants';

/**
 * @tagname mdc-filterchip
 *
 * @dependency mdc-icon
 * @dependency mdc-text
 *
 * @csspart icon - The checkmark icon part of the chip.
 * @csspart label - The label part of the chip.
 *
 * @cssproperty --mdc-chip-color - The color of the chip.
 * @cssproperty --mdc-chip-border-color - The border color of the chip.
 * @cssproperty --mdc-chip-background-color - The background color of the chip.
 *
 * @event click - (React: onClick) This event is dispatched when the chip is clicked.
 * @event keydown - (React: onKeyDown) This event is dispatched when a key is pressed down on the chip.
 * @event keyup - (React: onKeyUp) This event is dispatched when a key is released on the chip.
 * @event focus - (React: onFocus) This event is dispatched when the chip receives focus.
 */
class FilterChip extends Chip {
  /**
   * The selected state of the filterchip.
   *
   * @default false
   */
  @property({ type: Boolean, reflect: true }) selected = false;

  @state()
  private showCheckIcon = false;

  override connectedCallback(): void {
    super.connectedCallback();
    this.color = DEFAULTS.COLOR;
    this.addEventListener('transitionend', this.handleTransitionEnd);
    this.syncSelectedState(this.selected);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('transitionend', this.handleTransitionEnd);
  }

  private prefersReducedMotion(): boolean {
    return window.matchMedia(REDUCED_MOTION_QUERY).matches;
  }

  private handleTransitionEnd = (event: TransitionEvent) => {
    if (event.target === this && event.propertyName === 'background-color') {
      this.removeAttribute(DATA_MOTION.SURFACE);
    }
  };

  private handleIconTransitionEnd = (event: TransitionEvent) => {
    if (event.target !== event.currentTarget || event.propertyName !== 'opacity' || this.selected) {
      return;
    }

    this.showCheckIcon = false;
  };

  private syncSelectedState(selected: boolean) {
    this.setAttribute('aria-pressed', selected ? 'true' : 'false');
  }

  private applyMotionAttributes() {
    this.setAttribute(DATA_MOTION.SURFACE, '');

    if (this.prefersReducedMotion()) {
      this.removeAttribute(DATA_MOTION.SURFACE);
    }

    if (!this.hasAttribute(DATA_MOTION.ACTIVE)) {
      this.setAttribute(DATA_MOTION.ACTIVE, '');
    }
  }

  protected override executeAction(): void {
    this.selected = !this.selected;
  }

  public override update(changedProperties: PropertyValues) {
    super.update(changedProperties);
    if (changedProperties.has('selected')) {
      this.syncSelectedState(this.selected);
      this.applyMotionAttributes();

      if (this.selected) {
        this.showCheckIcon = true;
      } else if (this.prefersReducedMotion()) {
        this.showCheckIcon = false;
      }
    }
  }

  private renderCheckIcon() {
    if (!this.showCheckIcon) return nothing;

    return html`<span class="check-icon-wrapper" part="icon" @transitionend=${this.handleIconTransitionEnd}>
      <mdc-icon aria-hidden="true" name="${DEFAULTS.ICON_NAME}" length-unit="rem" size="1"></mdc-icon>
    </span>`;
  }

  public override render() {
    return html`
      ${this.renderCheckIcon()}
      ${this.label
        ? html`<mdc-text part="label" type="${CHIP_DEFAULTS.TEXT_TYPE}" tagname="${CHIP_DEFAULTS.TAG_NAME}"
            >${this.label}</mdc-text
          >`
        : nothing}
    `;
  }

  public static override styles: Array<CSSResult> = [...Chip.styles, ...styles];
}

export default FilterChip;
