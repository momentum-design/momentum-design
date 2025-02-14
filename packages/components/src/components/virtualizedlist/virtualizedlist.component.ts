import { CSSResult, PropertyValues, TemplateResult, html } from 'lit';
import { VirtualizerController } from '@tanstack/lit-virtual';
import { property } from 'lit/decorators.js';
import { Virtualizer } from '@tanstack/virtual-core';
import { StyleInfo } from 'lit/directives/style-map.js';
import { Ref, createRef, ref } from 'lit/directives/ref.js';
import styles from './virtualizedlist.styles';
import { Component } from '../../models';
import { DEFAULTS } from './virtualizedlist.constants';
import { SetListDataProps, VirtualizerProps } from './virtualizedlist.types';

/**
 * `mdc-virtualizedlist` component for creating custom virtualized lists.
 * IMPORTANT: This component does not create it's own list/list items.
 * Use the setlistdata callback prop to update client state in order to
 * Pass list/listitems as a child of this component, which this will virtuailze
 * This implementation handles dynamic lists as well as fixed sized lists.
 * Please refer to [Tanstack Virtual Docs](https://tanstack.com/virtual/latest) for more in depth documentation.
 *
 * @tagname mdc-virtualizedlist
 *
 * @slot - Client side List with nested list items.
 */
class VirtualizedList extends Component {
  /**
   * Callback that gets called when user scrolls inside of list. This gives access to the scroll container element
   * as well via the event. Particularly useful for
   * handling logic related when the user scrolls to the top or bottom of a list.
   * @default undefined
   */
  @property({ type: Function, attribute: 'onscroll' })
  override onscroll: ((this: GlobalEventHandlers, ev: Event) => any) | null;

  /**
   * Object that sets and updates the virtualizer with any relevant props.
   * There are two required object props in order to get virtualization to work properly.
   * count - The length of your list that you are virtualizing.
   * As your list grows/shrinks, this component must be updated with the appropriate value
   * (Same with any other updated prop).
   * estimateSize - A function that returns the estimated size of your items.
   * If your list is fixed, this will just be the size of your items.
   * If your list is dynamic, try to return approximate the size of each item.
   *
   * A full list of possible props can be in
   * [Tanstack Virtualizer API Docs](https://tanstack.com/virtual/latest/docs/api/virtualizer)
   *
   */
  @property({ type: Object, attribute: 'virtualizerprops' })
  virtualizerprops: VirtualizerProps = DEFAULTS.VIRTUALIZER_PROPS;

  /**
   * Callback that gets envoked when updates to the virtualizer interally occur.
   * This must be implemented in such a way that this function will trigger update to parent.
   *
   * virtualItems - Array that will be what the client displays on screen. Use this to render
   * a List of your choosing with these items nested inside as your ListItems.
   * measureElement - Ref to pass to each ListItem rendered client side.
   * Each ListItem should also be be passed key and a data-index (which can be found on the virtualItem).
   * listStyle - This should be passed as the style attribute to your List.
   */
  @property({ type: Function, attribute: 'setlistdata' })
  setlistdata: (({ virtualItems, measureElement, listStyle }: SetListDataProps) => void) | null;

  /**
   * @internal
   */
  private virtualizerController: VirtualizerController<Element, Element> | null;

  public scrollElementRef: Ref<HTMLDivElement> = createRef();

  public virtualizer: Virtualizer<Element, Element> | null;

  constructor() {
    super();
    this.virtualizerController = null;
    this.virtualizer = null;
    this.setlistdata = null;
    this.onscroll = null;
  }

  /**
   * This override is necessary to update the virtualizer with relevant props
   * if the client updates any props (most commonly, count). Updating the options
   * this way ensures we don't initialize a new virtualizer upon very prop change.
   */
  public override update(changedProperties: PropertyValues): void {
    super.update(changedProperties);
    // if the virtuailzer props change at all,
    // update virtuailzer with the union of the two virtualizer options (current, passed in).
    if (changedProperties.get('virtualizerprops')) {
      this.virtualizer?.setOptions({ ...this.virtualizer.options, ...this.virtualizerprops });
      this.requestUpdate();
    }
  }

  public override connectedCallback(): void {
    this.virtualizerController = new VirtualizerController(this, {
      count: this.virtualizerprops.count!,
      estimateSize: this.virtualizerprops?.estimateSize!,
      getScrollElement: () => this.scrollElementRef.value || null,
      ...this.virtualizerprops,
    });

    super.connectedCallback();
  }

  /**
   * @internal
   * Renders the list wrapper and invokes the callback which eventually will render in the slot.
   * Uses getTotalSize to update the height of the wrapper. This value is equal to the total size
   * OR the total estimated size (if you haven't physically scrolled the entire list)
   * Passes the virtualItems, measureElement, and listStyle to callback for client to pass in as child
   *
   * @returns The template result containing the list wrapper.
   */
  private getVirtualizedListWrapper(virtualizerController: VirtualizerController<Element, Element>): TemplateResult {
    this.virtualizer = virtualizerController.getVirtualizer();

    const { getVirtualItems, measureElement, getTotalSize } = this.virtualizer;
    const virtualItems = getVirtualItems();
    // this style is required to be rendered by the client side list in order to handle scrolling properly
    const listStyle: Readonly<StyleInfo> = {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      transform: `translateY(${virtualItems[0]?.start ?? 0}px)`,
    };

    // pass back data to client for rendering
    if (this.setlistdata) {
      this.setlistdata({ virtualItems, measureElement, listStyle });
    }

    return html`<div
          class="mdc-virtualizedlist-container"
          style="height: ${getTotalSize()}px;"
        >
          <slot></slot>
        </div>`;
  }

  public override render() {
    return html`<div
      ${ref(this.scrollElementRef)}
      class="mdc-virtualizedlist-scroll"
      @scroll=${this.onscroll && this.onscroll}
    >
      ${this.virtualizerController ? this.getVirtualizedListWrapper(this.virtualizerController) : html``}
    </div>
  `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default VirtualizedList;
