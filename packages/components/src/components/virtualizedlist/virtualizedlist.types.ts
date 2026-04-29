import type {
  VirtualItem as TanstackVirtualItem,
  Virtualizer as TanstackVirtualizer,
  VirtualizerOptions as TanstackVirtualizerOptions,
} from '@tanstack/virtual-core';

import type { TypedCustomEvent } from '../../utils/types';

import type VirtualizedList from './virtualizedlist.component';

export type VirtualItem = TanstackVirtualItem;
export type VirtualizedListScrollEvent = TypedCustomEvent<VirtualizedList>;
export type VirtualizedListVirtualItemsChangeEvent = TypedCustomEvent<
  VirtualizedList,
  {
    virtualItems: Array<VirtualItem>;
  }
>;
export type VirtualData = VirtualizedListVirtualItemsChangeEvent['detail'];

export interface Events {
  onScrollEvent: VirtualizedListScrollEvent;
  onVirtualItemsChangeEvent: VirtualizedListVirtualItemsChangeEvent;
}

export type Virtualizer = TanstackVirtualizer<Element, Element>;
export type VirtualizerOptions = TanstackVirtualizerOptions<Element, Element>;
export type VirtualizerProps = Omit<Partial<VirtualizerOptions>, 'getScrollElement'> &
  Required<Pick<VirtualizerOptions, 'count' | 'estimateSize' | 'getItemKey'>> & {
    /**
     * Optional callback to determine if an item at a given index is navigable.
     * When provided, keyboard navigation will skip items where this returns false
     * without needing to scroll them into view.
     *
     * @param index - The index of the item to check.
     * @returns true if the item is navigable; false if it should be skipped.
     */
    isItemNavigable?: (index: number) => boolean;
  };

export type AtBottomValue = 'no' | 'yes' | 're-evaluate';
