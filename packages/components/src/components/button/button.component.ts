import { CSSResult, html, PropertyValueMap } from 'lit';
import { property, state } from 'lit/decorators.js';
import styles from './button.styles';
import { Component } from '../../models';
import {
  BUTTON_COLORS,
  BUTTON_TYPE,
  BUTTON_VARIANTS,
  DEFAULTS,
  ICON_BUTTON_SIZES,
  PILL_BUTTON_SIZES,
} from './button.constants';
import { getIconNameWithoutStyle, getIconSize } from './button.utils';
import { TAG_NAME as ICON_TAGNAME } from '../icon/icon.constants';
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
  @property({ type: Boolean }) active = false;

  @property({ type: Boolean }) disabled = false;

  @property({ type: Boolean, attribute: 'soft-disabled' }) softDisabled = false;

  @property({ type: String }) variant = DEFAULTS.VARIANT;

  @property({ type: Number }) size = DEFAULTS.SIZE;

  @property({ type: String }) color = DEFAULTS.COLOR;

  @property({ type: Number }) override tabIndex = 0;

  @property({ type: String }) override role = 'button';

  @state() private type = DEFAULTS.TYPE;

  @state() private iconSize = 1;

  private prevTabindex = 0;

  constructor() {
    super();

    this.addEventListener('click', this.handleClick);
    this.addEventListener('keydown', this.handleKeyDown);
    this.addEventListener('keyup', this.handleKeyUp);
  }

  public override update(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    super.update(changedProperties);

    if (changedProperties.has('disabled')) {
      this.setDisabled(this, this.disabled);
    }
    if (changedProperties.has('softDisabled')) {
      this.setSoftDisabled(this, this.softDisabled);
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
      ? Object.values(ICON_BUTTON_SIZES).includes(size)
      && !(size === ICON_BUTTON_SIZES[20] && this.variant !== BUTTON_VARIANTS.TERTIARY)
      : Object.values(PILL_BUTTON_SIZES).includes(size);

    if (!isValidSize) {
      this.setAttribute('size', `${DEFAULTS.SIZE}`);
    } else {
      this.setAttribute('size', `${size}`);
    }
    this.iconSize = getIconSize(size);
  }

  private setColor(color: string) {
    if (!Object.values(BUTTON_COLORS).includes(color) || this.variant === BUTTON_VARIANTS.TERTIARY) {
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

  private setSoftDisabled(element: HTMLElement, softDisabled: boolean) {
    if (softDisabled) {
      element.setAttribute('soft-disabled', 'true');
      element.setAttribute('aria-disabled', 'true');
    } else {
      element.removeAttribute('soft-disabled');
      element.removeAttribute('aria-disabled');
    }
  }

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
      if (children[0].nodeName === ICON_TAGNAME.toUpperCase()) {
        this.type = BUTTON_TYPE.ICON;
        this.modifyIconSizeAndStyle(children[0]);
      } else {
        this.type = BUTTON_TYPE.PILL;
      }
    } else if (Array.from(children).some((node) => node.nodeName === ICON_TAGNAME.toUpperCase())) {
      this.type = BUTTON_TYPE.PILL_WITH_ICON;
      Array.from(children).forEach((el) => {
        if (el.nodeName === ICON_TAGNAME.toUpperCase()) {
          this.modifyIconSizeAndStyle(el);
        }
      });
    }
  }

  private prevIconName = '';

  private modifyIconSizeAndStyle(node: ChildNode) {
    const icon = node as HTMLElement;
    icon.setAttribute('size', `${this.iconSize}`);
    icon.setAttribute('length-unit', 'rem');
    if (this.active) {
      const name = icon.getAttribute('name')!;
      this.prevIconName = name;
      const iconNameWithoutStyle = getIconNameWithoutStyle(name);
      icon.setAttribute('name', `${iconNameWithoutStyle}-filled`); // TODO: add a check to see if it exists
    } else if (this.prevIconName) {
      icon.setAttribute('name', this.prevIconName);
    }
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
