import { type CSSResult, type PropertyValues, html } from 'lit';
import { VirtualizerController } from '@tanstack/lit-virtual';
import { property, eventOptions, query } from 'lit/decorators.js';
import { defaultRangeExtractor, type Range, ScrollToOptions, type VirtualItem } from '@tanstack/virtual-core';

import List from '../list/list.component';
import { DataAriaLabelMixin } from '../../utils/mixins/DataAriaLabelMixin';
import type { ElementStoreChangeTypes } from '../../utils/controllers/ElementStore';
import { Interval } from '../../utils/range';
import { type BaseArray, VirtualIndexArray } from '../../utils/virtualIndexArray';
import { KEYS } from '../../utils/keys';

import styles from './virtualizedlist.styles';
import { DEFAULTS, IS_AT_BOTTOM_THRESHOLD } from './virtualizedlist.constants';
import { VirtualizerProps, Virtualizer, AtBottomValue } from './virtualizedlist.types';
import { defaultMeasureElement } from './virtualizedlist.utils';

/**
 * `mdc-virtualizedlist` is an extension of the `mdc-list` component that adds virtualization capabilities using
 * the Tanstack Virtual library.
 *
 * This component is thin wrapper around the Tanstack libray to provide additional funtionalities such as
 * keyboard navigation, focus management, scroll anchoring and accessibility features.
 *
 * To keep the component framework-agnostic, the rendering of the list items is left to the consumer.
 *
 * Please refer to [Tanstack Virtual Docs](https://tanstack.com/virtual/latest) for more in depth documentation.
 *
 * ## Setup
 *
 * `virtualizerProps` is a required prop that requires at least two properties to be set: `count` and `estimateSize`.
 * `count` is the total number of items in the list, and `estimateSize` is a function that returns the estimated
 * size (in pixels) of each item in the list.
 *
 * ## Best practices
 *
 * ### List updates
 *
 * Tanstack needs only the count of the items in the list and the size of each item to perform virtualization.
 * List updates happens when
 * - when `virtualizerProps` property of the component instance changes
 * - when `observe-size-changes` is set and the item's size changes (it uses ResizeObserver internally)
 * - when `component.visualiser.measure` called manually.
 *
 * ### Header
 *
 * To add a header to the list, use the `mdc-listheader` component and place it in the `list-header` slot.
 *
 * ### Lists with dynamic content
 *
 * Unique keys for the list items are critical for dynamically changing list items or item's content.
 * If the key change with the content it will cause scrollbar and content shuttering.
 *
 * @tagname mdc-virtualizedlist
 *
 * @event scroll - (React: onScroll) Event that gets called when user scrolls inside of list.
 * @event virtualitemschange - (React: onVirtualItemsChange) Event that gets called when the virtual items change.
 *
 * @slot default - This is a default/unnamed slot, where listitems can be placed.
 * @slot list-header - This slot is used to pass a header for the list, which can be a `mdc-listheader` component.
 *
 * @csspart container - The container of the virtualized list.
 * @csspart scroll - The scrollable area of the virtualized list.
 */
class VirtualizedList extends DataAriaLabelMixin(List) {
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
  public virtualizerProps: VirtualizerProps = DEFAULTS.VIRTUALIZER_PROPS;

  /**
   * Whether to loop navigation when reaching the end of the list.
   * If 'true', pressing the down arrow on the last item will focus the first item,
   * and pressing the up arrow on the first item will focus the last item.
   * If 'false', navigation will stop at the first or last item.
   *
   * @default 'false'
   */
  @property({ type: String, reflect: true })
  public override loop: 'true' | 'false' = DEFAULTS.LOOP;

  /**
   * Disable automatic scroll anchoring when the list size changes.
   * By default, list scrolled to the very end it keeps the scroll position  otherwise
   * it try hold the scroll position on the last selected when list updates.
   * However, if you don't expect the list size to change often, or if you want to handle scroll anchoring yourself,
   * you can set this prop to true to disable the automatic behavior.
   *
   * @default false
   */
  @property({ type: Boolean, attribute: 'disable-scroll-anchoring', reflect: true })
  public disableScrollAnchoring: boolean = DEFAULTS.DISABLE_SCROLL_ANCHORING;

  /**
   * When true, the list will observe size changes of its items and re-measure them as needed.
   * This is useful if your list items can change size dynamically (e.g., due to content changes or window resizing).
   */
  @property({ type: Boolean, reflect: true, attribute: 'observe-size-changes' })
  public observeSizeChanges: boolean = false;

  /**
   * When true, the list items will be aligned to the bottom of the list, and it anchors scroll to the bottom
   * until the first user scroll interaction.
   *
   * Note: It does not affect on the rendering order, the first item is still at the top of the list.
   */
  @property({ type: Boolean, reflect: true, attribute: 'revert-list' })
  public revertList: boolean = false;

  /**
   * The virtualizer instance created by the VirtualizerController.
   */
  public virtualizer: Virtualizer | null = null;

  /**
   * A ref to the scrollable element within the list.
   */
  @query('[part="scroll"]', true)
  public $scroll!: HTMLElement;

  @query('[part="wrapper"]', true)
  public $wrapper!: HTMLElement;

  @query('[part="container"]', true)
  public $container!: HTMLElement;

  /**
   * The current virtual items being rendered.
   */
  get items(): VirtualItem[] {
    return this.virtualizer?.getVirtualItems() ?? [];
  }

  override get navItems(): BaseArray<HTMLElement> {
    if (this.cachedNavItems?.items !== super.navItems) {
      const attrName = this.virtualizer?.options?.indexAttribute ?? 'data-index';
      this.cachedNavItems = new VirtualIndexArray<HTMLElement>(
        super.navItems,
        e => Number(e.getAttribute(attrName)),
        () => this.virtualizerProps.count,
      );
    }
    return this.cachedNavItems;
  }

  /**
   * @internal
   */
  private virtualizerController: VirtualizerController<Element, Element> | null = null;

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
   *
   * - 'no' - The scroll position is not at the bottom of the list.
   * - 'yes' - The scroll position is at the bottom of the list.
   * - 're-evaluate' - The scroll position needs to be re-evaluated on the next scroll event.
   * @internal
   */
  private atBottomValue: AtBottomValue = 'no';

  /**
   * Getter for atBottom
   * @internal
   */
  private get atBottom(): AtBottomValue {
    return this.atBottomValue;
  }

  /**
   * Setter for atBottom to handle side effects when the value changes.
   * @param value - new value for atBottom
   *
   * @internal
   */
  private set atBottom(value: AtBottomValue) {
    if (this.atBottomValue !== value || (value === 'yes' && this.atBottomTimer === -1)) {
      this.atBottomValue = value;
      if (value === 'yes') {
        this.scrollToBottom();
      } else {
        this.clearScrollToBottomTimer();
      }
    }
  }

  private atBottomTimer: number = -1;

  private cachedNavItems: VirtualIndexArray<HTMLElement> | null = null;

  /**
   * The total height of the list based on the virtualizer's calculations.
   * @internal
   */
  private get totalListHeight(): number {
    return this.virtualizer?.getTotalSize() ?? 0;
  }

  /**
   * Last recorded scroll position to help determine scroll direction.
   * @internal
   */
  private lastScrollPosition = 0;

  /**
   * List of functions executed aster the virtualizer finishes scrolling.
   * @internal
   */
  private endOfScrollQueue: Array<() => void> = [];

  constructor() {
    super();
    this.addEventListener('wheel', e => {
      if (e.deltaY < 0) this.atBottom = 're-evaluate';
    });
  }

  /**
   * Create the virtualizer controller and the virtualizer instance when the component is first connected to the DOM.
   */
  override connectedCallback(): void {
    this.virtualizerController = new VirtualizerController(this, {
      measureElement: defaultMeasureElement,
      ...this.virtualizerProps,
      horizontal: false,
      getScrollElement: () => this.$scroll as Element,
      onChange: this.onVListStateChangeHandler.bind(this),
      rangeExtractor: this.virtualizerRangeExtractor.bind(this),
    });

    this.virtualizer = this.virtualizerController.getVirtualizer();

    super.connectedCallback();

    // Set the role attribute for accessibility.
    this.role = null;

    this.atBottom = this.revertList && !this.disableScrollAnchoring ? 'yes' : 'no';
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();

    this.clearScrollToBottomTimer();
    this.virtualizerController = null;
    this.virtualizer = null;
  }

  /**
   * This override is necessary to update the virtualizer with relevant props
   * if the client updates any props (most commonly, count). Updating the options
   * this way ensures we don't initialize a new virtualizer upon very prop change.
   */
  public override async update(changedProperties: PropertyValues<this>): Promise<void> {
    super.update(changedProperties);

    if (changedProperties.has('virtualizerProps')) {
      await this.handleVirtualizerPropsUpdate(changedProperties.get('virtualizerProps') as VirtualizerProps);
    }

    if (changedProperties.has('observeSizeChanges')) {
      this.navItems.forEach(item => {
        if (this.observeSizeChanges) {
          this.virtualizer?.measureElement?.(item);
        }
      });
    }

    if (changedProperties.has('revertList') && this.revertList && !this.disableScrollAnchoring) {
      this.atBottom = 'yes';
    }
  }

  /**
   * Handles updates to the virtualizerProps property.
   * @param prevProps - The previous virtualizerProps before the update.
   * @internal
   */
  async handleVirtualizerPropsUpdate(prevProps: VirtualizerProps) {
    const { virtualizer } = this;

    if (!virtualizer) return;
    const prevMeasurements = virtualizer.measurementsCache.slice();

    virtualizer.setOptions({
      ...virtualizer.options,
      ...this.virtualizerProps,
    });

    // Change in the length of the dataset is, does not count as TanStack Virtual's internal state change
    // so we need to manually call the onChange handler to ensure the list updates correctly.
    if (this.virtualizerProps.count !== prevProps?.count) {
      this.emitChangeEvent();
    }

    if (!this.disableScrollAnchoring && prevMeasurements.length > 0) {
      const countDiff = Math.abs(this.virtualizerProps.count - (prevProps?.count ?? 0));
      const prevSelectedIndex = this.selectedIndex;
      const prevFirstKey = this.firstKey;

      const searchRange = new Interval(prevSelectedIndex - countDiff, prevSelectedIndex + countDiff, {
        includeEnd: true,
      });

      const newSelectedIndex =
        Array.from(searchRange).find(i => virtualizer.options.getItemKey(i) === this.selectedKey) ?? this.selectedIndex;

      this.setSelectedIndex(newSelectedIndex);

      // Wait for the virtualizer to finish updating before we read the new scrollHeight
      this.requestUpdate();
      await this.updateComplete;

      if (this.atBottom === 'yes') return;

      // If the user has focus within the list, use the selected index as the anchor point for scroll adjustment.
      // If the user does not have focus within the list, use the first visible item as the anchor point for scroll adjustment.
      const shouldAdjustScroll =
        (this.focusWithin && prevSelectedIndex !== this.selectedIndex) ||
        (!this.focusWithin && this.firstKey !== prevFirstKey);

      // Update the scroll position to keep the same items in view (and in roughly the same position)
      if (shouldAdjustScroll) {
        const scrollDiff =
          virtualizer.measurementsCache[this.selectedIndex].end - prevMeasurements[prevSelectedIndex].end;

        this.$scroll.scrollTop += scrollDiff;
      }
    }
  }

  /**
   * Sets the initial focus of the list based on the `initial-focus` prop and scrolls the item into view.
   */
  protected override setInitialFocus(): void {
    setTimeout(async () => {
      if (!this.virtualizer) return;

      const { scrollToIndex } = this.virtualizer;

      this.setSelectedIndex(this.initialFocus);

      scrollToIndex(this.selectedIndex, { align: 'center' });

      // We try to set the tabIndex immediately,
      // but if the items haven't been rendered, yet we leave the work to onValidElementAdded
      const selectedElement = this.navItems.find(this.isElementSelected, this);
      if (selectedElement) {
        selectedElement.tabIndex = 0;
      }
    }, 0);
  }

  private emitChangeEvent() {
    this.virtualizerProps.onChange?.(this.virtualizer!, this.virtualizer!.isScrolling);

    const eventDetails = {
      virtualizer: this.virtualizer,
      virtualItems: this.virtualizer?.getVirtualItems?.() ?? [],
    };

    this.dispatchEvent(
      new CustomEvent('virtualitemschange', { detail: eventDetails, bubbles: false, cancelable: false }),
    );
  }

  /**
   * Calculates the array of indexes to render. We add the selected index (and +1/-1) if it's
   * outside the current range so the focus can be kept correctly.
   *
   * @param range - The current range of items being rendered
   * @returns An array of indexes to render, including the selected index if it's outside the current range.
   * @internal
   */
  protected virtualizerRangeExtractor(range: Range): number[] {
    const { navItems, virtualizerProps, virtualizer } = this;
    const defaultIndexes = virtualizerProps.rangeExtractor?.(range) ?? defaultRangeExtractor(range);

    this.hiddenIndexes.forEach(index => {
      const el = navItems.at(index);
      if (el) {
        el.removeAttribute('data-virtualized-hidden');
        el.style.removeProperty('--mdc-virtualizedlist-hidden-top');
      }
    });

    this.firstIndex = range.startIndex;
    this.firstKey = this.virtualizer?.options.getItemKey(this.firstIndex) ?? null;
    this.hiddenIndexes.length = 0;

    const stickyIndexes = [this.selectedIndex - 1, this.selectedIndex, this.selectedIndex + 1];

    stickyIndexes.forEach(index => {
      if (!defaultIndexes.includes(index)) {
        if (index < range.startIndex && index >= 0) {
          defaultIndexes.unshift(index);
          this.hiddenIndexes.push(index);
        }

        if (index > range.endIndex && index < (virtualizer?.options.count ?? 0)) {
          defaultIndexes.push(index);
          this.hiddenIndexes.push(index);
        }
      }
    });
    this.updateHiddenItemsPosition();

    defaultIndexes.sort((a, b) => a - b);

    return defaultIndexes;
  }

  updateHiddenItemsPosition() {
    const { navItems, virtualizerProps, virtualizer } = this;

    if (!virtualizer || virtualizerProps.count === 0) return;

    const { measurementsCache, range } = virtualizer;

    this.hiddenIndexes.forEach(index => {
      const el = navItems.at(index);
      if (el) {
        const first = measurementsCache[range?.startIndex ?? 0];
        const current = measurementsCache[index];

        el.setAttribute('data-virtualized-hidden', 'true');
        el.style.setProperty('--mdc-virtualizedlist-hidden-top', `${current.start - first.start}px`);
      }
    });
  }

  /** @internal */
  private isElementSelected(item: HTMLElement): boolean {
    return this.virtualizer?.indexFromElement(item) === this.selectedIndex;
  }

  /** @internal */
  private setSelectedIndex(newIndex: number): void {
    if (this.virtualizer) {
      const { count, getItemKey } = this.virtualizer.options;

      this.selectedIndex = Math.max(0, Math.min(count - 1, newIndex));
      this.selectedKey = getItemKey(newIndex);
      if (this.selectedIndex + 1 === count) {
        this.atBottom = 'yes';
      }
    }
  }

  protected override onElementStoreUpdate(item: HTMLElement, changeType: ElementStoreChangeTypes): void {
    if (changeType === 'added') {
      const tabable = this.isElementSelected(item);
      // eslint-disable-next-line no-param-reassign
      item.tabIndex = tabable ? 0 : -1;

      if (this.observeSizeChanges) {
        this.virtualizer?.measureElement?.(item);
      }

      this.setAriaSetSize(item);
    } else if (changeType === 'removed') {
      if (item.tabIndex === 0) {
        // We must queue the reset because onElementStoreUpdate called before the `navItems` updated,
        // but `resetTabIndexes` expecting the updated vertical list.
        queueMicrotask(() => {
          this.resetTabIndexes(this.selectedIndex, this.focusWithin);
        });
      }
    }
  }

  /**
   * Handle the virtualizer's onChange event to emit the virtualitemschange event
   * This is called when the internal state of the virtualizer changes.
   *
   * @internal
   */
  protected async onVListStateChangeHandler(_: Virtualizer, isScrolling: boolean) {
    this.syncUI();
    // Request an update, this is in Tanstack's VirtualizerController but gets overridden when updating the
    // virtualizer's options therefore we need to call it here ourselves.
    await this.updateComplete;
    this.requestUpdate();

    if (!isScrolling && this.endOfScrollQueue.length > 0) {
      this.endOfScrollQueue.forEach(fn => fn());
      this.endOfScrollQueue.length = 0;
    }

    this.checkAtBottom();
    this.emitChangeEvent();
  }

  /**
   * Refires the scroll event from the internal scroll container to the host element.
   * Also updates whether the scroll is at the bottom of the list for scroll anchoring purposes.
   *
   * @internal
   */
  @eventOptions({ passive: true })
  private onScrollHandler(event: Event): void {
    const scrollEl = event.target as HTMLElement;

    // Skip the current Scroll event to prevent shattering
    if (this.atBottom === 're-evaluate' || scrollEl.scrollTop < this.lastScrollPosition) {
      this.atBottom = 'no';
    } else {
      // Check if we are at the bottom of the list
      this.checkAtBottom();
    }
    this.lastScrollPosition = scrollEl.scrollTop;
  }

  private checkAtBottom(): void {
    const { clientHeight, scrollHeight, scrollTop } = this.$scroll;
    if (
      !this.disableScrollAnchoring &&
      this.virtualizer &&
      this.atBottom === 'no' &&
      scrollHeight > clientHeight - IS_AT_BOTTOM_THRESHOLD
    ) {
      this.atBottom = scrollHeight - scrollTop <= clientHeight + IS_AT_BOTTOM_THRESHOLD ? 'yes' : 'no';
    }
  }

  protected override handleNavigationKeyDown(event: KeyboardEvent): void {
    switch (event.key) {
      case KEYS.HOME: {
        // Move focus to the first item
        this.virtualizer?.scrollToIndex?.(0, { align: 'start' });
        this.endOfScrollQueue.push(() => this.resetTabIndexes(0));
        break;
      }
      case KEYS.END: {
        // Move focus to the last item
        const selectedItem = this.virtualizerProps.count - 1;
        this.virtualizer?.scrollToIndex?.(selectedItem, { align: 'end' });
        this.endOfScrollQueue.push(() => this.resetTabIndexes(selectedItem));
        break;
      }
      case KEYS.ARROW_UP: {
        this.atBottom = 're-evaluate';
        break;
      }
      default:
    }
    super.handleNavigationKeyDown(event);
  }

  protected override resetTabIndexes(index: number, focusElement = true) {
    super.resetTabIndexes(index, focusElement);
    this.setSelectedIndex(index);
  }

  protected override resetTabIndexAndSetFocus(newIndex: number, oldIndex?: number, focusNewItem?: boolean): void {
    super.resetTabIndexAndSetFocus(newIndex, oldIndex, focusNewItem);
    this.setSelectedIndex(newIndex);
  }

  /** @internal */
  private setAriaSetSize(element: HTMLElement): void {
    element.setAttribute('aria-setsize', `${this.virtualizer?.options.count ?? -1}`);
  }

  /**
   * Scrolls to the bottom of the list if `atBottom` is 'yes'.
   * @internal
   */
  private scrollToBottom(): void {
    this.clearScrollToBottomTimer();
    if (this.atBottom === 'yes' && this.$scroll) {
      const { clientHeight, scrollHeight, scrollTop } = this.$scroll;

      if (this.totalListHeight > clientHeight) {
        const diff = Math.floor((scrollHeight - clientHeight - scrollTop) / 10);
        this.$scroll.scrollTop += diff;
      }
      this.atBottomTimer = requestAnimationFrame(this.scrollToBottom.bind(this));
    }
  }

  private clearScrollToBottomTimer(): void {
    cancelAnimationFrame(this.atBottomTimer);
    this.atBottomTimer = -1;
  }

  public scrollToIndex(index: number, options?: ScrollToOptions): void {
    this.virtualizer!.scrollToIndex?.(index, options);
    this.atBottom = index + 1 === this.virtualizerProps.count ? 'yes' : 'no';
  }

  private syncUI() {
    const visibleItems = this.items.find(({ index }) => !this.hiddenIndexes.includes(index));

    const firstItemOffset = visibleItems?.start ?? 0;

    window.getComputedStyle(this);
    let initialOffset = 0;
    if (this.revertList) {
      if (this.$scroll.clientHeight >= this.totalListHeight) {
        initialOffset = this.clientHeight - this.totalListHeight;
      }
    }

    this.$wrapper.style.height = `${this.totalListHeight}px`;
    this.$container.style.transform = `translateY(${initialOffset + firstItemOffset}px)`;
  }

  public override render() {
    return html`
      <slot name="list-header"></slot>
      <div part="scroll" tabindex="-1" @scroll="${this.onScrollHandler}">
        <div part="wrapper">
          <div part="container" role="list" aria-label="${this.dataAriaLabel ?? ''}">
            <slot role="presentation"></slot>
          </div>
        </div>
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...List.styles, ...styles];
}

export default VirtualizedList;
