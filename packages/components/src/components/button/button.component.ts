import { CSSResult, html, PropertyValueMap } from 'lit';
import { property, state } from 'lit/decorators.js';
import styles from './button.styles';
import { Component } from '../../models';
import { BUTTON_COLORS, BUTTON_TYPE, BUTTON_VARIANTS, DEFAULTS } from './button.constants';
import { getIconSize, isValidIconSize, isValidPillSize } from './button.utils';

/**
 * button component, which ...
 *
 * @tagname mdc-button
 *
 * @slot default - This is a default/unnamed slot
 *
 * @cssprop --custom-property-name - Description of the CSS custom property
 */
class Button extends Component {
  @property({ type: Boolean }) active: boolean = false;

  @property({ type: Boolean }) disabled: boolean = false;

  @property({ type: Boolean, attribute: 'soft-disabled' }) softDisabled: boolean = false;

  @property({ type: String, attribute: 'aria-label' }) override ariaLabel: string = '';

  @property({ type: String }) variant = DEFAULTS.VARIANT;

  @property({ type: Number }) size = DEFAULTS.SIZE;

  @property({ type: String }) color = DEFAULTS.COLOR;

  @property({ type: Number }) override tabIndex = 0;

  @state() private type = DEFAULTS.TYPE;

  @state() private iconSize = 1;

  constructor() {
    super();
    this.role = 'button';
  }

  public override connectedCallback() {
    super.connectedCallback();
    this.addEventListener('click', this.handleClick);
    this.addEventListener('keydown', this.handleKeyDown);
    this.addEventListener('keyup', this.handleKeyUp);
    this.addEventListener('focus', this.handleFocus);
    this.addEventListener('blur', this.handleBlur);
  }

  public override disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('click', this.handleClick);
    this.removeEventListener('keydown', this.handleKeyDown);
    this.removeEventListener('keyup', this.handleKeyUp);
    this.removeEventListener('focus', this.handleFocus);
    this.removeEventListener('blur', this.handleBlur);
  }

  public override update(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    super.update(changedProperties);

    if (changedProperties.has('disabled')) {
      this.setDisabled(this, this.disabled);
    }
    if (changedProperties.has('softDisabled')) {
      this.setSoftDisabled(this, this.softDisabled);
    }
    if (changedProperties.has('arialabel')) {
      this.setAriaLabel(this, this.ariaLabel);
    }
    if (changedProperties.has('active')) {
      this.setAriaPressed(this, this.active);
    }
    if (changedProperties.has('size')) {
      this.setSize(this.size);
    }
    if (changedProperties.has('variant')) {
      this.setVariant(this.variant);
      this.setSize(this.size);
    }
    if (changedProperties.has('color')) {
      this.setColor(this.color);
    }
    if (changedProperties.has('type')) {
      this.setSize(this.size);
      this.setClassBasedOnType(this.type);
    }
  }

  private setClassBasedOnType(type: string) {
    if (type === BUTTON_TYPE.ICON) {
      this.classList.add('icon');
    } else {
      this.classList.remove('icon');
    }
  }

  private setVariant(variant: string) {
    if (!Object.values(BUTTON_VARIANTS).includes(variant)) {
      this.setAttribute('variant', `${DEFAULTS.VARIANT}`);
    } else {
      this.setAttribute('variant', variant);
    }
  }

  private setSize(size: number) {
    const isIconType = this.type === BUTTON_TYPE.ICON;
    const isValidSize = isIconType
      ? isValidIconSize(size, this.variant)
      : isValidPillSize(size);

    if (!isValidSize) {
      this.setAttribute('size', `${DEFAULTS.SIZE}`);
    } else {
      this.setAttribute('size', `${size}`);
    }
    this.iconSize = getIconSize(size);
  }

  private setColor(color: string) {
    if (!Object.values(BUTTON_COLORS).includes(color) || this.variant === 'tertiary') {
      this.setAttribute('color', `${DEFAULTS.COLOR}`);
    } else {
      this.setAttribute('color', color);
    }
  }

  private setAriaPressed(element: HTMLElement, active: boolean) {
    if (active) {
      element.setAttribute('aria-pressed', 'true');
    } else {
      element.removeAttribute('aria-pressed');
    }
  }

  private setAriaLabel(element: HTMLElement, ariaLabel: string) {
    if (ariaLabel) {
      element.setAttribute('aria-label', ariaLabel);
    } else {
      element.removeAttribute('aria-label');
    }
  }

  private setSoftDisabled(element: HTMLElement, softDisabled: boolean) {
    if (softDisabled) {
      element.setAttribute('soft-disabled', 'true');
      element.setAttribute('aria-disabled', 'true');
    } else {
      element.removeAttribute('soft-disabled');
      element.removeAttribute('aria-disabled');
    }
  }

  private prevTabindex = 0;

  private setDisabled(element: HTMLElement, disabled: boolean) {
    if (disabled) {
      element.setAttribute('disabled', 'true');
      element.setAttribute('aria-disabled', 'true');
      this.prevTabindex = this.tabIndex;
      this.tabIndex = -1;
      element.setAttribute('tabindex', `${this.tabIndex}`);
    } else {
      this.tabIndex = this.prevTabindex;
      element.removeAttribute('disabled');
      element.removeAttribute('aria-disabled');
      element.setAttribute('tabindex', `${this.tabIndex}`);
    }
  }

  private handleClick(event: MouseEvent) {
    if (!this.disabled && !this.softDisabled) {
      if (this.onclick) {
        this.onclick(event);
      }
    }
  }

  private handleFocus(event: FocusEvent) {
    if (this.softDisabled) {
      event.preventDefault();
    }
  }

  private handleBlur(event: FocusEvent) {
    if (this.softDisabled) {
      event.preventDefault();
    }
    this.classList.remove('pressed');
  }

  private handleKeyDown(event: KeyboardEvent) {
    if (!this.disabled && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      this.classList.add('pressed');
    }
  }

  private handleKeyUp(event: KeyboardEvent) {
    if (!this.disabled && (event.key === 'Enter' || event.key === ' ')) {
      this.handleClick(event as unknown as MouseEvent);
      this.classList.remove('pressed');
    }
  }

  private inferButtonType(children: HTMLCollection) {
    if (children.length === 1) {
      if (children[0].nodeName === 'MDC-ICON') {
        this.type = BUTTON_TYPE.ICON;
        this.setIconSize(children[0]);
      } else {
        this.type = BUTTON_TYPE.PILL;
      }
    } else if (Array.from(children).some((node) => node.nodeName === 'MDC-ICON')) {
      this.type = BUTTON_TYPE.PILL_WITH_ICON;
      Array.from(children).forEach((el) => {
        if (el.nodeName === 'MDC-ICON') {
          this.setIconSize(el);
        }
      });
    }
  }

  private setIconSize(node: ChildNode) {
    const icon = node as HTMLElement;
    icon.setAttribute('size', `${this.iconSize}`);
    icon.setAttribute('length-unit', 'rem');
  }

  public override render() {
    this.inferButtonType(this.children);

    return html`
      <slot name="prefix-icon"></slot>
      <slot></slot>
      <slot name="postfix-icon"></slot>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Button;
