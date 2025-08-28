import type { CSSResult, PropertyValues } from 'lit';
import { html } from 'lit';
import { property, queryAssignedElements } from 'lit/decorators.js';

import { Component } from '../../models';
import { ROLE } from '../../utils/roles';
import { ListNavigationMixin } from '../../utils/mixins/ListNavigationMixin';
import { TAG_NAME as LISTITEM_TAGNAME } from '../listitem/listitem.constants';

import styles from './list.styles';

/**
 * mdc-list component is used to display a group of list items. It is used as a container to wrap other list items.
 *
 * To add a header to the list, use the `mdc-listheader` component and place it in the `list-header` slot.
 * `mdc-listitem` components can be placed in the default slot.
 *
 * @tagname mdc-list
 *
 * @slot default - This is a default/unnamed slot, where listitems can be placed.
 * @slot list-header - This slot is used to pass a header for the list, which can be a `mdc-listheader` component.
 *
 * @csspart container - The container slot around the list items
 */
class List extends ListNavigationMixin(Component) {
  /**
   * @internal
   * Get all listitem elements which are not disabled in the list.
   */
  @queryAssignedElements({ selector: `${LISTITEM_TAGNAME}:not([disabled])` })
  private listItems!: Array<HTMLElement>;

  /**
   * Whether to stop loop navigation when reaching the end of the list.
   * If false, pressing the down arrow on the last item will focus the first item,
   * and pressing the up arrow on the first item will focus the last item.
   * If true, navigation will stop at the first or last item.
   *
   * @default false
   */
  @property({ type: Boolean, reflect: true, attribute: 'no-loop' })
  protected noLoop: boolean = false;

  override connectedCallback(): void {
    super.connectedCallback();
    // Set the role attribute for accessibility.
    this.setAttribute('role', ROLE.LIST);
  }

  public override update(changedProperties: PropertyValues): void {
    super.update(changedProperties);

    this.loop = !this.noLoop;
  }

  public override firstUpdated(_changedProperties: PropertyValues): void {
    super.firstUpdated(_changedProperties);

    this.loop = !this.noLoop;
  }

  get navItems(): HTMLElement[] {
    return this.listItems;
  }

  public override render() {
    return html`
      <slot name="list-header"></slot>
      <!-- make the container slot role presentation to keep it ignored in a11y tree -->
      <slot part="container" role="presentation"></slot>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default List;
