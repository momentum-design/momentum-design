import type { CSSResult, PropertyValues } from 'lit';
import { html } from 'lit';
import { property, queryAssignedElements } from 'lit/decorators.js';

import { TAG_NAME as ACCORDION_TAGNAME } from '../accordion/accordion.constants';
import { TAG_NAME as ACCORDIONBUTTON_TAGNAME } from '../accordionbutton/accordionbutton.constants';
import { Component } from '../../models';

import { DEFAULTS } from './accordiongroup.constants';
import styles from './accordiongroup.styles';
import { Size, Variant } from './accordiongroup.types';

/**
 * accordiongroup component, which ...
 *
 * @tagname mdc-accordiongroup
 *
 * @slot default - This is a default/unnamed slot
 *
 *
 * @cssproperty --custom-property-name - Description of the CSS custom property
 */
class AccordionGroup extends Component {
  /**
   * The size of the accordion item.
   * @default 'small'
   */
  @property({ type: String, reflect: true }) size: Size = DEFAULTS.SIZE;

  /**
   * The variant of the accordion item. Based on the variant, the styling of the accordion gets changed.
   * @default 'stacked'
   */
  @property({ type: String, reflect: true }) variant: Variant = DEFAULTS.VARIANT;

  /**
   * If true, multiple accordion items can be expanded at the same time.
   * @default false
   */
  @property({ type: Boolean, reflect: true, attribute: 'allow-multiple' }) allowMultiple = false;

  /** @internal */
  @queryAssignedElements({ selector: ACCORDION_TAGNAME })
  private accordionItems!: Array<HTMLElement>;

  /** @internal */
  @queryAssignedElements({ selector: ACCORDIONBUTTON_TAGNAME })
  private accordionButtonItems!: Array<HTMLElement>;

  constructor() {
    super();
    this.addEventListener('onexpanded', this.handleAccordionExpanded);
  }

  private handleAccordionExpanded(event: Event): void {
    if (this.allowMultiple) return;
    [...this.accordionItems, ...this.accordionButtonItems].forEach(accordionItem => {
      if (accordionItem !== event.target && accordionItem.hasAttribute('expanded')) {
        accordionItem.toggleAttribute('expanded');
      }
    });
  }

  private setChildrenAccordionAttributes(attributeName: string, attributeValue: string): void {
    this.accordionItems.forEach(accordion => {
      accordion.setAttribute(attributeName, attributeValue);
    });
    this.accordionButtonItems.forEach(accordion => {
      accordion.setAttribute(attributeName, attributeValue);
    });
  }

  override updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);
    if (changedProperties.has('size')) {
      this.setChildrenAccordionAttributes('size', this.size);
    }
    if (changedProperties.has('variant')) {
      this.setChildrenAccordionAttributes('variant', this.variant);
    }
  }

  public override render() {
    return html` <slot></slot> `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default AccordionGroup;
