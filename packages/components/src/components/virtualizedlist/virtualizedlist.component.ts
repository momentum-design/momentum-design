import { CSSResult, PropertyValues, TemplateResult, html } from 'lit';
import { VirtualizerController } from '@tanstack/lit-virtual';
import { property } from 'lit/decorators.js';
import { Virtualizer, VirtualizerOptions } from '@tanstack/virtual-core';
import { StyleInfo } from 'lit/directives/style-map.js';
import { Ref, createRef, ref } from 'lit/directives/ref.js';
import styles from './virtualizedlist.styles';
import { Component } from '../../models';
import { DEFAULT_COUNT, DEFAULT_ESTIMATE_SIZE } from './virtualizedlist.constants';
import { SetListDataProps } from './virtualizedlist.types';

/**
 * `mdc-virtualizedlist` component for creating custom virtualized lists.
 * This implementation handles dynamic lists as well as fixed sized lists.
 * Please refer to [Tanstack Virtual Docs](https://tanstack.com/virtual/latest) for more in depth documentation.
 *
 * @tagname mdc-virtualizedlist
 *
 */
class VirtualizedList extends Component {
  /**
   * Callback that gets called when user scrolls inside of list. This gives access to the scroll container element
   * as well via the event. Particularly useful for
   * handling logic related when the user scrolls to the top or bottom of a list.
   * @default undefined
   */
  @property({ type: Function, attribute: 'handlescroll' })
  handlescroll?: (e: Event) => void;

  /**
   * Object that sets and updates the virtualizer with any relevant props.
   * There are two required object props in order to get virtualization to work properly.
   * count - The length of your list that you are virtualizing
   * As your list grows/shrinks, this component must be updated with the appropriate value
   * (Same with any other updated prop)
   * estimateSize - A function that returns the estimated size of your items
   * If your list is fixed, this will just be the size of your items
   * If your list is dynamic, try to return approximate the size of each item
   *
   * A full list of possible props can be in
   * [Tanstack Virtualizer API Docs](https://tanstack.com/virtual/latest/docs/api/virtualizer)
   *
   */
  @property({ type: Object, attribute: 'virtualizerprops' })
  virtualizerprops: Partial<VirtualizerOptions<Element, Element>> = {
    count: DEFAULT_COUNT, estimateSize: DEFAULT_ESTIMATE_SIZE,
  };

  /**
   * Callback that gets envoked when updates to the virtualizer interally occur.
   * This must be implemented in such a way that this function will trigger update to parent.
   *
   * virtualItems - Array that will be what the client displays on screen. Use this to render
   * a List of your choosing with these items nested inside as your ListItems.
   * measureElement - Ref to pass to each ListItem rendered client side.
   * Each ListItem should also be be passed key and a data-index (which can be found on the virtualItem)
   * listStyle - This should be passed as the style attribute to your List
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
  }

  public override update(changedProperties: PropertyValues): void {
    super.update(changedProperties);
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
    const listStyle: Readonly<StyleInfo> = {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      transform: `translateY(${virtualItems[0]?.start ?? 0}px)`,
    };

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

  /**
   * @internal
   * Renders scroll element with ref and handlescroll callback if defined.
   * If virtualizerController is not defined (possible during initial rendering),
   * don't render virtualizedlist-container until it is.
   *
   * @returns The template result containing the scroll element or an empty template.
   */
  private getVirtualizedScrollElement(): TemplateResult {
    return html`<div
        ${ref(this.scrollElementRef)}
        class="mdc-virtualizedlist-scroll"
        @scroll=${this.handlescroll && this.handlescroll}
      >
        ${this.virtualizerController ? this.getVirtualizedListWrapper(this.virtualizerController) : html``}
      </div>
    `;
  }

  public override render() {
    return this.getVirtualizedScrollElement();
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default VirtualizedList;
