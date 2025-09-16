import type {
  VirtualItem,
  Virtualizer as TanstackVirtualizer,
  VirtualizerOptions as TanstackVirtualizerOptions,
} from '@tanstack/virtual-core';

import type { TypedCustomEvent } from '../../utils/types';

import type VirtualizedList from './virtualizedlist.component';

type VirtualizedListScrollEvent = TypedCustomEvent<VirtualizedList>;
type VirtualizedListVirtualItemsChangeEvent = TypedCustomEvent<
  VirtualizedList,
  {
    virtualItems: Array<VirtualItem>;
    measureElement: (node: Element | null | undefined) => void;
  }
>;

interface Events {
  onScrollEvent: VirtualizedListScrollEvent;
  onVirtualItemsChangeEvent: VirtualizedListVirtualItemsChangeEvent;
}

type Virtualizer = TanstackVirtualizer<Element, Element>;
type VirtualizerOptions = TanstackVirtualizerOptions<Element, Element>;
type VirtualizerProps = Omit<Partial<VirtualizerOptions>, 'getScrollElement'> &
  Required<Pick<VirtualizerOptions, 'count' | 'estimateSize' | 'getItemKey'>>;

export type {
  Events,
  VirtualizedListScrollEvent,
  VirtualizedListVirtualItemsChangeEvent,
  Virtualizer,
  VirtualizerProps,
  VirtualizerOptions,
};
