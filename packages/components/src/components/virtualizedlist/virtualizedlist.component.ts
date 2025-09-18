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
   * There are three required object props in order to get virtualization to work properly.
   *
   * **count** - The length of your list that you are virtualizing.
   * As your list grows/shrinks, this component must be updated with the appropriate value
   * (Same with any other updated prop).
   *
   * **estimateSize** - A function that returns the estimated size of your items.
   * If your list is fixed, this will just be the size of your items.
   * If your list is dynamic, try to return approximate the size of each item.
   *
   * **getItemKey** - A function that returns a unique key for each item in your list based on its index.
   *
   * A full list of possible props can be in
   * [Tanstack Virtualizer API Docs](https://tanstack.com/virtual/latest/docs/api/virtualizer)
   *
   */
  @property({ type: Object })
  virtualizerProps: VirtualizerProps = DEFAULTS.VIRTUALIZER_PROPS;

  /**
   * Disable automatic scroll anchoring when the list size changes.
   * By default, the list will attempt to keep the same items in view when the list size changes.
   * However, if you don't expect the list size to change often, or if you want to handle scroll anchoring yourself,
   * you can set this prop to true to disable the automatic behavior.
   *
   * @default false
   */
  @property({ type: Boolean })
  disableScrollAnchoring: boolean = false;

  private virtualizerController: VirtualizerController<Element, Element> | null = null;

  public virtualizer: Virtualizer | null = null;

  public scrollElementRef: Ref<HTMLDivElement> = createRef();

  /**
   * The currently selected index in the list.
   * If keyboard navigation is being used, this will be the focused item.
   * If the list is clicked, this will be the last clicked item.
   * @internal
   */
  private selectedIndex: number = this.initialFocus;

  /**
   * The key of the currently selected item.
   * This is used to keep track where the selected item goes when the list changes size.
   * @internal
   */
  private selectedKey: VirtualItem['key'] | null = null;

  /**
   * The index of the first item in the current virtual items.
   * @internal
   */
  private firstIndex: number = 0;

  /**
   * The key of the first item in the current virtual items.
   * @internal
   */
  private firstKey: VirtualItem['key'] | null = null;

  /**
   * The indexes of items that are not in the current virtual items, but need to be rendered for focus purposes.
   * @internal
   */
  private hiddenIndexes: number[] = [];

  /**
   * Is the scroll position at the bottom of the list?
   * @internal
   */
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

    // If we don't have a scroll element yet, just update the options
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

      // Find the new selected index based on the selected key
      const prevSelectedIndex = this.selectedIndex;
      let newSelectedIndex = this.selectedIndex;
      for (let i = prevSelectedIndex - countDifference; i <= prevSelectedIndex + countDifference; i += 1) {
        if (this.virtualizer.options.getItemKey(i) === this.selectedKey) {
          newSelectedIndex = i;
          break;
        }
      }
      this.selectedIndex = Math.max(0, Math.min(this.virtualizer.options.count - 1, newSelectedIndex));

      // Wait for the virtualizer to finish updating before we read the new scrollHeight
      this.requestUpdate();
      await this.updateComplete;

      if (this.isAtBottom) {
        // Use this method instead of using scrollToIndex to ensure that refactor in the scroll padding
        this.scrollElementRef.value.scrollTop = this.scrollElementRef.value.scrollHeight;

        return;
      }

      const scrollDifference = this.scrollElementRef.value!.scrollHeight - previousScrollHeight;
      // If the user has focus within the list, use the selected index as the anchor point for scroll adjustment.
      // If the user does not have focus within the list, use the first visible item as the anchor point for scroll adjustment.
      const shouldAdjustScroll =
        (this.focusWithin && prevSelectedIndex < this.selectedIndex) ||
        (!this.focusWithin && this.firstKey !== prevFirstKey);

      if (scrollDifference > 0 && shouldAdjustScroll) {
        // Temporarily disable automatic scroll adjustment on item size change
        this.virtualizer.shouldAdjustScrollPositionOnItemSizeChange = () => false;

        // Update the scroll position to keep the same items in view (and in roughly the same position)
        const scrollTop = previousScrollTop + scrollDifference;
        this.scrollElementRef.value!.scrollTop = scrollTop;

        setTimeout(() => {
          // Set the scroll position again in case it was changed while the virtualizer was updating
          this.scrollElementRef.value!.scrollTop = scrollTop;
          this.virtualizer!.shouldAdjustScrollPositionOnItemSizeChange = undefined;
        }, 0);
      }
    }
  }

  /**
   * @returns The virtualizer props merged with necessary internal props.
   * @internal
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
   * Sets the initial focus of the list based on the `initial-focus` prop and scrolls the item into view.
   */
  protected override setInitialFocus(): void {
    setTimeout(async () => {
      if (!this.virtualizer) {
        return;
      }

      this.selectedIndex = Math.max(0, Math.min(this.virtualizer.options.count - 1, this.initialFocus));
      this.selectedKey = this.virtualizer.options.getItemKey(this.selectedIndex);

      this.virtualizer.scrollToIndex(this.selectedIndex, { align: 'center' });

      setTimeout(() => {
        const selectedElement = this.navItems.find(
          item => this.virtualizer?.indexFromElement(item) === this.selectedIndex,
        );
        if (selectedElement) {
          selectedElement.tabIndex = 0;
        }
      }, 1);
    }, 0);
  }

  /**
   * Fires the `virtualItemsChange` event with the current virtual items and a measureElement function.
   * This is used to inform the parent component of the current virtual items
   *
   * @param instance - The virtualizer instance to get the virtual items from. Defaults to the internal virtualizer.
   * @internal
   */
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

  /**
   * Provides the element to the virtualizer to measure its size.
   * In addition if the element is one of the hidden indexes, it moves the element to the correct position for focus purposes.
   * This means that we can use the browser's own 'scroll on focus' behaviour to refocus the list item when focus is updated.
   *
   * @param instance - The virtualizer instance
   * @param el - The element to measure
   * @internal
   */
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

      // The scroll element is positioned based on the first item's offset therefore we need to set the location of the
      // hidden item based on the first actual item.
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
   * @internal
   */
  protected handleOnChange = (instance: Virtualizer, sync: boolean) => {
    // If we are at the bottom of the list and not scrolling, keep us at the bottom of the list.
    if (!sync && this.isAtBottom && this.scrollElementRef.value && !this.disableScrollAnchoring) {
      this.scrollElementRef.value.scrollTop = this.scrollElementRef.value.scrollHeight;
    }

    // Request an update, this is in Tanstack's VirtualizerController but gets overridden when updating the
    // virtualizer's options therefore we need to call it here ourselves.
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this.updateComplete.then(() => this.requestUpdate());
    this.virtualizerProps.onChange?.(instance, sync);

    this.fireVirtualItemsChangeEvent();
  };

  /**
   * Calculates the array of indexes to render. We add the selected index (and +1/-1) if it's
   * outside the current range so the focus can be kept correctly.
   *
   * @param range - The current range of items being rendered
   * @returns An array of indexes to render, including the selected index if it's outside the current range.
   * @internal
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

  /** @internal */
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

  /** @internal */
  private setAriaSetSize(element: HTMLElement): void {
    element.setAttribute('aria-setsize', `${this.virtualizer?.options.count ?? -1}`);
  }

  /**
   * Refires the scroll event from the internal scroll container to the host element.
   * Also updates whether the scroll is at the bottom of the list for scroll anchoring purposes.
   *
   * @param event - The scroll event from the internal scroll container.
   * @internal
   */
  private handleScroll(event: Event): void {
    if (this.scrollElementRef.value && this.virtualizer) {
      const scrollElement = this.scrollElementRef.value;

      this.isAtBottom = scrollElement.scrollHeight - scrollElement.scrollTop <= scrollElement.clientHeight + 50;
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
