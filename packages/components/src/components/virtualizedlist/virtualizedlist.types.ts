import { VirtualItem, VirtualizerOptions } from '@tanstack/virtual-core';
import { StyleInfo } from 'lit/directives/style-map.js';

import type { TypedCustomEvent } from '../../utils/types';

import type VirtualizedList from './virtualizedlist.component';

interface SetListDataProps {
  virtualItems: Array<VirtualItem>;
  measureElement: (node: Element | null | undefined) => void;
  listStyle: Readonly<StyleInfo>;
}

type VirtualizedListScrollEvent = TypedCustomEvent<VirtualizedList>;

interface Events {
  onScrollEvent: VirtualizedListScrollEvent;
}

type VirtualizerProps = Partial<VirtualizerOptions<Element, Element>>;

export type { Events, VirtualizedListScrollEvent, VirtualizerProps, SetListDataProps };
