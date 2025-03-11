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
  @property({ type: Boolean, reflect: true }) selected = false;

  constructor() {
    super();

    this.color = DEFAULTS.COLOR;
  }

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

  public static override styles: Array<CSSResult> = [...Chip.styles];
}

export default Filterchip;
