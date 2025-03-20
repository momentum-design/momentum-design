import type { TemplateResult } from 'lit';
import { CSSResult, html, nothing } from 'lit';
import { property, queryAssignedElements, state } from 'lit/decorators.js';
import { KEYS } from '../../utils/keys';
import { DisabledMixin } from '../../utils/mixins/DisabledMixin';
import { FormInternalsMixin } from '../../utils/mixins/FormInternalsMixin';
import FormfieldWrapper from '../formfieldwrapper';
import { DEFAULTS as FORMFIELD_DEFAULTS } from '../formfieldwrapper/formfieldwrapper.constants';
import type { IconNames } from '../icon/icon.types';
import { TAG_NAME as OPTION_GROUP_TAG_NAME } from '../optgroup/optgroup.constants';
import { TAG_NAME as OPTION_TAG_NAME } from '../option/option.constants';
import { POPOVER_PLACEMENT } from '../popover/popover.constants';
import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';
import { ARROW_ICON } from './select.constants';
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
  /**
   * The placeholder text which will be shown on the text if provided.
   */
  @property({ type: String }) placeholder?: string;

  /**
   * readonly attribute of the select field. If true, the select is read-only.
   */
  @property({ type: Boolean }) readonly = false;

  /** @internal */
  @queryAssignedElements() optionsList!: Array<HTMLElement>;

  /** @internal */
  @state() private baseIconName: IconNames = ARROW_ICON.ARROW_DOWN;

  /** @internal */
  @state() selectedValue?: string;

  /** @internal */
  @state() showPopover = false;

  /** @internal */
  @state() activeDescendant = '';

  constructor() {
    super();
    this.value = undefined as unknown as string;

    this.addEventListener('keydown', this.handleKeydown);
  }

  private getAllValidOptions() {
    return this.optionsList
      ?.map((option) => {
        if (option.tagName.toLowerCase() === OPTION_TAG_NAME) {
          return option;
        }
        if (option.tagName.toLowerCase() === OPTION_GROUP_TAG_NAME) {
          return Array.from(option.children).filter((optgroup) => optgroup.tagName.toLowerCase() === OPTION_TAG_NAME);
        }
        return [];
      }).flat() || [];
  }

  private handlePopoverOpen(): void {
    this.baseIconName = ARROW_ICON.ARROW_UP;
  }

  private handlePopoverClose(): void {
    this.baseIconName = ARROW_ICON.ARROW_DOWN;
  }

  private handleOptionsClick(event: MouseEvent): void {
    this.updateTabIndexAndSetSelectedOnOptions(event.target);
  }

  private handleSlotChange(): void {
    this.updateTabIndexAndSetSelectedOnOptions();
  }

  private updateTabIndexAndSetSelectedOnOptions(selectedOption?: EventTarget | null): void {
    let isTabIndexSet = false;
    this.getAllValidOptions().forEach((option) => {
      if (option === selectedOption) {
        this.setSelectedValue(option);
        isTabIndexSet = true;
        option.setAttribute('selected', '');
        option.setAttribute('tabindex', '0');
      } else {
        option?.setAttribute('tabindex', '-1');
        option?.removeAttribute('selected');
      }
    });

    if (isTabIndexSet) {
      return;
    }
    // if no option is selected, set the first option as focused
    this.getAllValidOptions()[0]?.setAttribute('tabindex', '0');
  }

  private setSelectedValue(option: Element): void {
    this.selectedValue = option?.getAttribute('label') ?? option?.textContent ?? '';
  }

  private setPlaceholderValue(placeholder: string): void {
    this.selectedValue = placeholder;
  }

  private handleArrowUpDownEvent(key: string, target: EventTarget | null): void {
    const currentIndex = this.getAllValidOptions().findIndex((option) => option === target);
    const optionsLength = this.getAllValidOptions().length;
    let newIndex: number | undefined;
    if (key === KEYS.ARROW_DOWN) {
      newIndex = (currentIndex + 1) % optionsLength;
    } else if (key === KEYS.ARROW_UP) {
      newIndex = (currentIndex - 1 + optionsLength) % optionsLength;
    }
    if (newIndex !== undefined) {
      (this.getAllValidOptions()[newIndex] as HTMLElement)?.focus();
      this.getAllValidOptions().forEach((node, index) => {
        const newTabindex = newIndex === index ? '0' : '-1';
        node?.setAttribute('tabindex', newTabindex);
      });
    }
  }

  private updateActivedescendant(target: EventTarget | null): void {
    const currentIndex = this.getAllValidOptions().findIndex((option) => option === target);
    this.activeDescendant = this.getAllValidOptions()[currentIndex]?.id;
  }

  private resetActivedescendant(): void {
    this.activeDescendant = '';
  }

  private handleKeydown(event: KeyboardEvent): void {
    switch (event.key) {
      case KEYS.SPACE:
        this.showPopover = true;
        this.resetActivedescendant();
        break;
      case KEYS.ESCAPE:
        this.showPopover = false;
        this.resetActivedescendant();
        break;
      case KEYS.ENTER:
        this.updateTabIndexAndSetSelectedOnOptions(event.target);
        break;
      case KEYS.ARROW_DOWN:
      case KEYS.ARROW_UP:
        this.handleArrowUpDownEvent(event.key, event.target);
        this.updateActivedescendant(event.target);
        break;
      default:
        break;
    }
  }

  public override firstUpdated() {
    const selectedOptionIndex = this.getAllValidOptions().findIndex((option) => option?.hasAttribute('selected'));
    if (selectedOptionIndex !== -1) {
      this.setSelectedValue(this.getAllValidOptions()[selectedOptionIndex]);
    } else if (this.placeholder) {
      this.setPlaceholderValue(this.placeholder);
    } else {
      // We will set the first option as selected.
      this.setSelectedValue(this.getAllValidOptions()[0]);
    }
  }

  private shouldFocusSelect(): boolean {
    if (this.disabled || this.readonly) {
      return false;
    }
    return true;
  }

  private getPopoverContent(): TemplateResult | typeof nothing {
    if (this.disabled || this.readonly) {
      return nothing;
    }
    return html`
      <mdc-popover
        id="options-popover"
        triggerid="select-base-triggerid"
        interactive
        ?visible="${this.showPopover}"
        hide-on-outside-click
        focus-back-to-trigger
        role="listbox"
        placement="${POPOVER_PLACEMENT.BOTTOM_START}"
        @popover-on-show="${this.handlePopoverOpen}"
        @popover-on-hide="${this.handlePopoverClose}"   
        style="--mdc-popover-max-width: 100%;"
      >
        <slot @click="${this.handleOptionsClick}" @slotchange="${this.handleSlotChange}"></slot>
      </mdc-popover>
    `;
  }

  public override render() {
    return html`
      ${this.renderLabel()}
      <div part="container">
        <div
          id="select-base-triggerid"
          part="base-container"
          class="${this.shouldFocusSelect() ? 'mdc-focus-ring' : ''}"
          tabindex="${this.shouldFocusSelect() ? '0' : '-1'}"
          aria-labelledby="${FORMFIELD_DEFAULTS.HEADING_ID}"
          role="combobox"
          aria-haspopup="listbox"
          aria-expanded="${this.showPopover}"
          aria-controls="options-popover"
          aria-activedescendant="${this.activeDescendant}"
        >
          <mdc-text part="placeholder-text" type="${TYPE.BODY_MIDSIZE_REGULAR}" tagname="${VALID_TEXT_TAGS.SPAN}">
            ${this.selectedValue}
          </mdc-text>
          <div part="icon-container">
            <mdc-icon size="1" length-unit="rem" name="${this.baseIconName}"></mdc-icon>
          </div>
        </div>
        ${this.getPopoverContent()}
      </div>
      ${this.renderHelperText()}
    `;
  }

  public static override styles: Array<CSSResult> = [...FormfieldWrapper.styles, ...styles];
}

export default Select;
