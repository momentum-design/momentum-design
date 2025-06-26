import { CSSResult, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';

import Chip from '../chip/chip.component';
import type { IconNames } from '../icon/icon.types';

import styles from './filterchip.styles';
import { DEFAULTS } from './filterchip.constants';

/**
 * mdc-filterchip component is an interactive chip that consumers can use to select or deselect.
 * They can be found with lists or tables as quick filters.
 *
 * This component is built on top of the mdc-chip component.
 *
 * @tagname mdc-filterchip
 *
 */
class FilterChip extends Chip {
  /**
   * The selected state of the filterchip.
   *
   * @default false
   */
  @property({ type: Boolean, reflect: true }) selected = false;

  override connectedCallback(): void {
    super.connectedCallback();
    this.color = DEFAULTS.COLOR;
  }

  /**
   * Sets the selected state of the filterchip along with the icon.
   * aria-pressed attribute is also set to true or false.
   * @param selected - The selected state of the filterchip.
   */
  private setSelected(selected: boolean) {
    if (selected) {
      this.iconName = DEFAULTS.ICON_NAME;
      this.setAttribute('aria-pressed', 'true');
    } else {
      this.iconName = undefined as unknown as IconNames;
      this.setAttribute('aria-pressed', 'false');
    }
  }

  protected override executeAction(): void {
    this.selected = !this.selected;
  }

  public override update(changedProperties: PropertyValues) {
    super.update(changedProperties);
    if (changedProperties.has('selected')) {
      this.setSelected(this.selected);
    }
  }

  public static override styles: Array<CSSResult> = [...Chip.styles, ...styles];
}

export default FilterChip;
