import type { CSSResult, PropertyValues } from 'lit';
import { html } from 'lit';
import { property, queryAssignedElements } from 'lit/decorators.js';

import { TAG_NAME as ACCORDION_TAGNAME } from '../accordion/accordion.constants';
import { TAG_NAME as ACCORDIONBUTTON_TAGNAME } from '../accordionbutton/accordionbutton.constants';
import { Component } from '../../models';

import { DEFAULTS } from './accordiongroup.constants';
import styles from './accordiongroup.styles';
import type { Size, Variant } from './accordiongroup.types';

/**
 * @tagname mdc-accordiongroup
 *
 * @slot default - The default slot can contain the `accordion` or `accordionbutton` components.
 *
 * @cssproperty --mdc-accordiongroup-items-border-color - The border color applied to all child accordion items and their separators.
 */
class AccordionGroup extends Component {
  /**
   * Controls the spacing and padding for all accordion items in the group.
   * This size is applied to all child accordions.
   * - Small provides 1rem (16px) padding, large provides 1.5rem (24px) padding.
   * @default 'small'
   */
  @property({ type: String, reflect: true }) size: Size = DEFAULTS.SIZE;

  /**
   * Visual style variant applied to all accordions in the group.
   * - Stacked: accordions have 1.5rem gap between them.
   * - Borderless: removes all borders from accordions and group.
   * - Contained: accordions have continuous borders with no gaps.
   * @default 'stacked'
   */
  @property({ type: String, reflect: true }) variant: Variant = DEFAULTS.VARIANT;

  /**
   * Controls whether multiple accordions can be expanded simultaneously.
   * - When false, expanding one accordion automatically collapses others.
   * - When true, multiple accordions can remain open at the same time.
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
    this.addEventListener('shown', this.handleAccordionExpanded);
  }

  /**
   * Handles the 'shown' event for accordion items.
   * If `allowMultiple` is false, ensures that only one accordion item
   * remains expanded by collapsing all other expanded items when a new item is expanded.
   *
   * @param event - The event object from the 'shown' event.
   */
  private handleAccordionExpanded(event: Event): void {
    if (this.allowMultiple) return;
    [...this.accordionItems, ...this.accordionButtonItems].forEach(accordionItem => {
      if (accordionItem !== event.target && accordionItem.hasAttribute('expanded')) {
        accordionItem.toggleAttribute('expanded');
      }
    });
  }

  /**
   * Sets the given attribute on all child accordion or accordionbutton components.
   *
   * @param attributeName - The name of the attribute to set.
   * @param attributeValue - The value to set the attribute to.
   */
  private setChildrenAccordionAttributes(attributeName: string, attributeValue: string): void {
    [...this.accordionItems].forEach(accordion => {
      accordion.setAttribute(attributeName, attributeValue);
    });
    [...this.accordionButtonItems].forEach(accordion => {
      accordion.setAttribute(attributeName, attributeValue);
    });
  }

  override updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);
    if (changedProperties.has('size')) {
      if (!this.size) this.size = DEFAULTS.SIZE;
      this.setChildrenAccordionAttributes('size', this.size);
    }
    if (changedProperties.has('variant')) {
      if (!this.variant) this.variant = DEFAULTS.VARIANT;
      this.setChildrenAccordionAttributes('variant', this.variant);
    }
  }

  public override render() {
    return html` <slot></slot> `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default AccordionGroup;
