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
 * An accordion group is a vertically stacked set of interactive headings that each contain a header and body content.
 * Each heading of the accordion acts as a control that enable users to expand or hide their associated body sections of content.
 * Accordions are commonly used to reduce the need to scroll when presenting multiple sections of content on a single page.
 *
 * - Default Slot: The accordion group component only accepts, `accordion` and `accordionbutton` components as the children, rest are ignored.
 *
 * There are three types of variants:
 * - Stacked - Each accordion will have a gap of 1.5rem (24px).
 * - Borderless - Each accordion will not have any border and the group will also not have any border.
 * - Contained - Each accordion will have no gap in between them and the border of the entire accordiongroup will be continuous.
 *
 * There are two types of sizes:
 * - Small: Small size has a padding of 1rem (16px) for both heading and body sections.
 * - Large: Large size has a padding of 1.5rem (24px) for both heading and body sections.
 *
 * The variant and size will be applied to all accordions inside this accordion group.
 * To show/expand more than one accordion at any given time, then set `allow-multiple` to `true`. By default, it's `false`.
 *
 * If you don't need any controls on your accordion heading, then it's advised to use `accordionbutton` component.
 *
 * If the first accordion of the accordion group is expanded by default, then the screen reader might loose focus when toggling the visibilty of the first accordion.
 *
 * @tagname mdc-accordiongroup
 *
 * @slot default - The default slot can contain the `accordion` or `accordionbutton` components.
 *
 * @cssproperty --mdc-accordiongroup-border-color - The border color of the entire accordiongroup
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
   * If true, multiple accordion items can be visible at the same time.
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
