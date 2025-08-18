import { VirtualItem, VirtualizerOptions } from '@tanstack/virtual-core';
import { StyleInfo } from 'lit/directives/style-map.js';

import type { TypedCustomEvent } from '../../utils/types';

import type VirtualizedList  from './virtualizedlist.component';

interface SetListDataProps {
  virtualItems: Array<VirtualItem>;
  measureElement: (node: Element | null | undefined) => void;
  listStyle: Readonly<StyleInfo>;
}

interface Events {
  onScrollEvent: TypedCustomEvent<VirtualizedList>;
}

type VirtualizerProps = Partial<VirtualizerOptions<Element, Element>>;

export type { Events, VirtualizerProps, SetListDataProps };
