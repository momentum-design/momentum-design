import { type CSSResult, type PropertyValues, type TemplateResult, html } from 'lit';
import { VirtualizerController } from '@tanstack/lit-virtual';
import { property } from 'lit/decorators.js';
import { defaultRangeExtractor, type Range, type VirtualItem } from '@tanstack/virtual-core';
import { type StyleInfo, styleMap } from 'lit/directives/style-map.js';
import { type Ref, createRef, ref } from 'lit/directives/ref.js';

import List from '../list/list.component';
import { DataAriaLabelMixin } from '../../utils/mixins/DataAriaLabelMixin';

import styles from './virtualizedlist.styles';
import { DEFAULTS } from './virtualizedlist.constants';
import type { VirtualizerProps, VirtualizerOptions, Virtualizer } from './virtualizedlist.types';

/**
 * `mdc-virtualizedlist` is an extension of the `mdc-list` component that adds virtualization capabilities using the Tanstack Virtual library.
 *
 * `virtualizerProps` is a required prop that requires at least two properties to be set: `count` and `estimateSize`.
 * `count` is the total number of items in the list, and `estimateSize` is a function that returns the estimated size (in pixels) of each item in the list.
 *
 * The `virtualItemsChange` event provides the current virtual items and a measureElement function to help with dynamic sizing.
 * This should be listened to in order to render the correct virtualized items.
 *
 * Please refer to [Tanstack Virtual Docs](https://tanstack.com/virtual/latest) for more in depth documentation.
 *
 * To add a header to the list, use the `mdc-listheader` component and place it in the `list-header` slot.
 *
 * @tagname mdc-virtualizedlist
 *
 * @event scroll - (React: onScroll) Event that gets called when user scrolls inside of list.
 * @event virtualItemsChange - (React: onVirtualItemsChange) Event that gets called when the virtual items change.
 *
 * @slot default - This is a default/unnamed slot, where listitems can be placed.
 * @slot list-header - This slot is used to pass a header for the list, which can be a `mdc-listheader` component.
 *
 * @csspart container - The container of the virtualized list.
 * @csspart scroll - The scrollable area of the virtualized list.
 */
class VirtualizedList extends DataAriaLabelMixin(List) {
  public override loop: 'true' | 'false' = 'false';

  public override role: string | null = null;

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
  @property({ type: Object })
  virtualizerProps: VirtualizerProps = DEFAULTS.VIRTUALIZER_PROPS;

  @property({ type: Boolean })
  disableScrollAnchoring: boolean = false;

  private virtualizerController: VirtualizerController<Element, Element> | null = null;

  public virtualizer: Virtualizer | null = null;

  public scrollElementRef: Ref<HTMLDivElement> = createRef();

  private selectedIndex: number = this.initialFocus;

  private selectedKey: VirtualItem['key'] | null = null;

  private firstIndex: number = 0;

  private firstKey: VirtualItem['key'] | null = null;

  private hiddenIndexes: number[] = [];

  private isAtBottom: boolean = false;

  /**
   * Create the virtualizer controller and the virtualizer instance when the component is first connected to the DOM.
   */
  public override connectedCallback(): void {
    this.virtualizerController = new VirtualizerController(this, this.getVirtualizerProps());
    this.virtualizer = this.virtualizerController.getVirtualizer();

    super.connectedCallback();
  }

  /**
   * This override is necessary to update the virtualizer with relevant props
   * if the client updates any props (most commonly, count). Updating the options
   * this way ensures we don't initialize a new virtualizer upon very prop change.
   */
  public override update(changedProperties: PropertyValues<this>): void {
    super.update(changedProperties);

    if (changedProperties.has('virtualizerProps')) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      this.setVirtualizerOptions(changedProperties.get('virtualizerProps'));
    }
  }

  /**
   * Update virtualizer with the union of the two virtualizer options (current, passed in).
   * @internal
   */
  private async setVirtualizerOptions(oldProps: VirtualizerProps | undefined): Promise<void> {
    if (!this.virtualizer) {
      return;
    }

    if (!this.scrollElementRef.value) {
      this.virtualizer.setOptions({
        ...this.virtualizer.options,
        ...this.getVirtualizerProps(),
      });

      return;
    }

    const prevFirstKey = this.firstKey;
    const previousScrollTop = this.scrollElementRef.value.scrollTop;
    const previousScrollHeight = this.scrollElementRef.value.scrollHeight;
    this.virtualizer.setOptions({
      ...this.virtualizer.options,
      ...this.getVirtualizerProps(),
    });

    if (!this.disableScrollAnchoring && oldProps && this.virtualizerProps.count !== oldProps.count) {
      this.navItems.forEach(this.setAriaSetSize.bind(this));

      const countDifference = Math.abs(this.virtualizerProps.count - oldProps.count);

      const prevSelectedIndex = this.selectedIndex;
      let newSelectedIndex = this.selectedIndex;
      for (let i = prevSelectedIndex - countDifference; i <= prevSelectedIndex + countDifference; i += 1) {
        if (this.virtualizer.options.getItemKey(i) === this.selectedKey) {
          newSelectedIndex = i;
          break;
        }
      }
      this.selectedIndex = Math.max(0, Math.min(this.virtualizer.options.count - 1, newSelectedIndex));
      this.requestUpdate();
      await this.updateComplete;

      if (this.isAtBottom) {
        this.scrollElementRef.value.scrollTop = this.scrollElementRef.value.scrollHeight;

        return;
      }

      const scrollDifference = this.scrollElementRef.value!.scrollHeight - previousScrollHeight;
      const shouldAdjustScroll =
        (this.focusWithin && prevSelectedIndex < this.selectedIndex) ||
        (!this.focusWithin && this.firstKey !== prevFirstKey);

      if (scrollDifference > 0 && shouldAdjustScroll) {
        this.virtualizer.shouldAdjustScrollPositionOnItemSizeChange = () => false;
        const scrollTop = previousScrollTop + scrollDifference;
        this.scrollElementRef.value!.scrollTop = scrollTop;

        setTimeout(() => {
          this.virtualizer!.scrollToOffset(scrollTop, { align: 'start' });
          this.virtualizer!.shouldAdjustScrollPositionOnItemSizeChange = undefined;
        }, 0);
      }
    }
  }

  /**
   * @returns The virtualizer props merged with necessary internal props.
   */
  private getVirtualizerProps(): VirtualizerProps & Pick<VirtualizerOptions, 'getScrollElement'> {
    return {
      ...this.virtualizerProps,
      getScrollElement: () => this.scrollElementRef.value || null,
      onChange: this.handleOnChange,
      rangeExtractor: this.virtualizerRangeExtractor,
    };
  }

  /**
   * Sets the initial focus of the list based on the `initialFocus` prop and scrolls the item into view.
   */
  protected override setInitialFocus(): void {
    const instance = this.virtualizer!;

    this.selectedIndex = Math.max(0, Math.min(instance.options.count - 1, this.initialFocus));
    this.selectedKey = instance.options.getItemKey(this.selectedIndex);

    instance.scrollToIndex(this.selectedIndex, { align: 'center' });

    // Wait for the virtualizer to render the items before trying to scroll to the index
    setTimeout(() => {
      const selectedElement = this.navItems.find(
        item => this.virtualizer?.indexFromElement(item) === this.selectedIndex,
      );
      if (selectedElement) {
        selectedElement.tabIndex = 0;
      }
    }, 0);
  }

  protected override willUpdate(changedProperties: PropertyValues<this>): void {
    super.willUpdate(changedProperties);

    this.fireVirtualItemsChangeEvent();
  }

  private fireVirtualItemsChangeEvent(instance: Virtualizer = this.virtualizer!): void {
    const virtualItems = instance.getVirtualItems();

    const eventDetails = {
      virtualItems,
      measureElement: (el: Element | undefined) => this.handleMeasureElement(instance, el),
    };

    this.dispatchEvent(
      new CustomEvent('virtualItemsChange', { detail: eventDetails, bubbles: false, cancelable: false }),
    );
  }

  private handleMeasureElement = (instance: Virtualizer, el: Element | undefined) => {
    const element = el as HTMLElement | undefined;
    instance.measureElement(element);

    if (!element) {
      return;
    }

    const elementIndex = instance.indexFromElement(element);
    if (this.hiddenIndexes.includes(elementIndex)) {
      element.setAttribute('data-virtualized-hidden', 'true');

      const virtualItems = instance.getVirtualItems();
      const actualItems = virtualItems.filter(({ index }) => !this.hiddenIndexes.includes(index));

      const { start } = virtualItems.find(({ index }) => index === elementIndex) ?? {};
      const offset = (start ?? 0) - (actualItems[0]?.start ?? 0);

      element.style.setProperty('--mdc-virtualizedlist-hidden-top', `${offset}px`);
    } else {
      element.removeAttribute('data-virtualized-hidden');
      element.style.removeProperty('--mdc-virtualizedlist-hidden-top');
    }
  };

  /**
   * Handle the virtualizer's onChange event to emit the virtualItemsChange event
   * This is called when the internal state of the virtualizer changes.
   *
   * @param instance - The virtualizer instance
   * @param sync - Whether the virtualizer is scrolling
   */
  protected handleOnChange = (instance: Virtualizer, sync: boolean) => {
    // Request an update, this is in Tanstack's VirtualizerController but gets overridden when updating the
    // virtualizer's options therefore we need to call it here ourselves.
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this.updateComplete.then(() => this.requestUpdate());
    this.virtualizerProps.onChange?.(instance, sync);
  };

  /**
   * Calculates the array of indexes to render. We add the selected index if it's
   * outside the current range so it can be focused.
   *
   * @param range - The current range of items being rendered
   * @returns An array of indexes to render, including the selected index if it's outside the current range.
   */
  protected virtualizerRangeExtractor = (range: Range): number[] => {
    const defaultIndexes = this.virtualizerProps.rangeExtractor?.(range) ?? defaultRangeExtractor(range);

    this.firstIndex = range.startIndex;
    this.firstKey = this.virtualizer?.options.getItemKey(this.firstIndex) ?? null;
    this.hiddenIndexes = [];

    const stickyIndexes = [this.selectedIndex - 1, this.selectedIndex, this.selectedIndex + 1];

    stickyIndexes.forEach(index => {
      if (!defaultIndexes.includes(index)) {
        if (index < range.startIndex && index >= 0) {
          defaultIndexes.unshift(index);
        }

        if (index > range.endIndex && index < (this.virtualizer?.options.count ?? 0)) {
          defaultIndexes.push(index);
        }

        this.hiddenIndexes.push(index);
      }
    });

    defaultIndexes.sort((a, b) => a - b);

    return defaultIndexes;
  };

  protected override handleCreatedEvent(event: Event): void {
    super.handleCreatedEvent(event);

    const element = event.target as HTMLElement;
    if (!this.isValidItem(element)) {
      return;
    }

    this.setAriaSetSize(element);
  }

  protected override resetTabIndexes(index: number, focusElement = true): void {
    super.resetTabIndexes(index, focusElement);
    this.setSelectedIndex(index);
  }

  protected override resetTabIndexAndSetFocus(newIndex: number, oldIndex?: number, focusNewItem?: boolean): void {
    super.resetTabIndexAndSetFocus(newIndex, oldIndex, focusNewItem);
    this.setSelectedIndex(newIndex);
  }

  private setSelectedIndex(navItemIndex: number): void {
    if (!this.virtualizer) {
      return;
    }

    const node = this.navItems[navItemIndex];
    if (node) {
      const virtualizedIndex = this.virtualizer.indexFromElement(node) ?? -1;
      this.selectedIndex = virtualizedIndex;
      this.selectedKey = this.virtualizer.options.getItemKey(virtualizedIndex);
    }
  }

  private setAriaSetSize(element: HTMLElement): void {
    element.setAttribute('aria-setsize', `${this.virtualizer?.options.count ?? -1}`);
  }

  /**
   * Refires the scroll event from the internal scroll container to the host element
   */
  private handleScroll(event: Event): void {
    const scrollElement = this.scrollElementRef.value;
    if (!scrollElement) {
      // We really shouldn't get here
      return;
    }

    if (this.virtualizer) {
      const lastItemSize = this.virtualizer.options.estimateSize(this.virtualizer.options.count - 1);
      this.isAtBottom =
        scrollElement.scrollHeight - scrollElement.scrollTop <= scrollElement.clientHeight + lastItemSize;
    }

    const EventConstructor = event.constructor as typeof Event;
    this.dispatchEvent(new EventConstructor(event.type, event));
  }

  /**
   * Renders the virtualized list wrapper that contains the necessary divs
   *
   * @returns The template result containing the list wrapper.
   * @internal
   */
  private getVirtualizedListWrapper(): TemplateResult {
    if (!this.virtualizer) {
      return html``;
    }

    const { getVirtualItems, getTotalSize } = this.virtualizer;

    const items = getVirtualItems();

    const containerStyles: Readonly<StyleInfo> = {
      height: `${getTotalSize()}px`,
    };

    const transformAnchorIndex = items.findIndex(({ index }) => !this.hiddenIndexes.includes(index));

    const listStyle: Readonly<StyleInfo> = {
      transform: `translateY(${items[transformAnchorIndex]?.start ?? 0}px)`,
    };

    return html`<div part="wrapper" style="${styleMap(containerStyles)}">
      <div part="container" style="${styleMap(listStyle)}" role="list" aria-label="${this.dataAriaLabel ?? ''}">
        <slot role="presentation"></slot>
      </div>
    </div>`;
  }

  public override render() {
    return html`
      <slot name="list-header"></slot>
      <div ${ref(this.scrollElementRef)} part="scroll" @scroll=${this.handleScroll} tabindex="-1">
        ${this.getVirtualizedListWrapper()}
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...List.styles, ...styles];
}

export default VirtualizedList;
