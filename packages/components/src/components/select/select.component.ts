import type { TemplateResult } from 'lit';
import { CSSResult, html, nothing } from 'lit';
import { property, queryAssignedElements, state } from 'lit/decorators.js';
import { DisabledMixin } from '../../utils/mixins/DisabledMixin';
import { FormInternalsMixin } from '../../utils/mixins/FormInternalsMixin';
import FormfieldWrapper from '../formfieldwrapper';
import type { IconNames } from '../icon/icon.types';
import { POPOVER_PLACEMENT } from '../popover/popover.constants';
import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';
import styles from './select.styles';

/**
 * select component, which ...
 *
 * @tagname mdc-select
 *
 * @slot default - This is a default/unnamed slot
 *
 * @event click - (React: onClick) This event is a Click Event, update the description
 */
class Select extends FormInternalsMixin(DisabledMixin(FormfieldWrapper)) {
  /** @internal */
  @state() private baseIconName: IconNames = 'arrow-down-bold';

  /** @internal */
  @queryAssignedElements({ selector: 'mdc-option' })
  options!: Array<HTMLElement>;

  /** @internal */
  @queryAssignedElements({ selector: 'mdc-optgroup' })
  optionGroups!: Array<Element>;

  /** @internal */
  @state() selectedValue?: string;

  @property({ type: String })
  placeholder?: string;

  constructor() {
    super();
    this.value = undefined as unknown as string;

    this.addEventListener('keydown', this.handleKeydown);
  }

  private handlePopoverOpen(): void {
    this.baseIconName = 'arrow-up-bold';
  }

  private handlePopoverClose(): void {
    this.baseIconName = 'arrow-down-bold';
  }

  private handleOptionsClick(event: MouseEvent): void {
    [...this.options, ...this.optionGroups.map((optGroup) => [...optGroup.children])]
      .flat()
      .filter((option) => option.tagName.toLowerCase() === 'mdc-option')
      .forEach((option) => {
        if (option === event.target) {
          this.setSelectedValue(option);
          option.setAttribute('selected', '');
        } else {
          option.removeAttribute('selected');
        }
      });
    this.updateTabIndexOnOptions();
  }

  private setSelectedValue(option: Element): void {
    this.selectedValue = option?.getAttribute('label') ?? option?.textContent ?? '';
  }

  private setPlaceholderValue(placeholder: string): void {
    this.selectedValue = placeholder;
  }

  private getPopoverContent(): TemplateResult | typeof nothing {
    if (this.disabled) {
      return nothing;
    }
    return html`
      <mdc-popover
        triggerid="select-base-triggerid"
        interactive
        hide-on-outside-click
        focus-back-to-trigger
        placement="${POPOVER_PLACEMENT.BOTTOM_START}"
        @popover-on-show="${this.handlePopoverOpen}"
        @popover-on-hide="${this.handlePopoverClose}"        
      >
        <slot @click="${this.handleOptionsClick}" @slotchange="${this.handleSlotChange}"></slot>
      </mdc-popover>
    `;
  }

  private handleSlotChange(): void {
    this.updateTabIndexOnOptions();
  }

  private updateTabIndexOnOptions(): void {
    let isTabIndexSet = false;
    this.options.forEach((option) => {
      if (option.hasAttribute('selected')) {
        isTabIndexSet = true;
        option.setAttribute('tabindex', '0');
      } else {
        option.setAttribute('tabindex', '-1');
      }
    });
    if (isTabIndexSet) {
      return;
    }
    // if no option is selected, set the first option as focused
    this.options[0].setAttribute('tabindex', '0');
  }

  /**
  private handleKeydown(event: KeyboardEvent): void {
    // TODO: add key down handler for select options.
    switch (event.key) {
      case 'Space': {
        return;
      }
      case 'ArrowDown':
        this.options[0].setAttribute('tabindex', '0');
        break;
      case 'ArrowUp':
        this.options[0].setAttribute('tabindex', '-1');
        break;
      default:
        break;
    }
  }
  */

  public override firstUpdated() {
    const selectedOptionIndex = this.options.findIndex((option) => option.hasAttribute('selected'));
    if (selectedOptionIndex !== -1) {
      this.setSelectedValue(this.options[selectedOptionIndex]);
    } else if (this.placeholder) {
      this.setPlaceholderValue(this.placeholder);
    } else {
      // We will set the first option as selected.
      this.setSelectedValue(this.options[0]);
    }
  }

  public override render() {
    return html`
      ${this.renderLabel()}
      <div
        id="select-base-triggerid"
        part="base-container"
        class="mdc-focus-ring"
        tabindex="${!this.disabled ? '0' : '-1'}"
      >
        <mdc-text part="placeholder-text" type="${TYPE.BODY_MIDSIZE_REGULAR}" tagname="${VALID_TEXT_TAGS.SPAN}">
          ${this.selectedValue}
        </mdc-text>
        <div part="icon-container">
          <mdc-icon size="1" length-unit="rem" name="${this.baseIconName}"></mdc-icon>
        </div>
      </div>
      ${this.renderHelperText()}
      ${this.getPopoverContent()}
    `;
  }

  public static override styles: Array<CSSResult> = [...FormfieldWrapper.styles, ...styles];
}

export default Select;
