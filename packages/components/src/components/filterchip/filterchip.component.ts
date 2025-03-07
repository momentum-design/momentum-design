import { CSSResult, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';
import Chip from '../chip/chip.component';
import { IconNames } from '../icon/icon.types';
import { DEFAULTS } from './filterchip.constants';

/**
 * filterchip component, which ...
 *
 * @tagname mdc-filterchip
 *
 * @cssprop --custom-property-name - Description of the CSS custom property
 */
class Filterchip extends Chip {
  @property({ type: Boolean }) selected = false;

  constructor() {
    super();

    this.color = DEFAULTS.COLOR;
    this.avatarInitials = undefined as unknown as string;
    this.avatarSrc = undefined as unknown as string;
  }

  private setSelected(selected: boolean) {
    if (selected) {
      this.iconName = DEFAULTS.ICON_NAME;
    } else {
      this.iconName = undefined as unknown as IconNames;
    }
  }

  public override update(changedProperties: PropertyValues) {
    super.update(changedProperties);
    if (changedProperties.has('selected')) {
      this.setSelected(this.selected);
    }
  }

  public static override styles: Array<CSSResult> = [...Chip.styles];
}

export default Filterchip;
