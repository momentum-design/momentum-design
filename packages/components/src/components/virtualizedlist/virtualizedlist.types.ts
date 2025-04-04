import { VirtualItem, VirtualizerOptions } from '@tanstack/virtual-core';
import { StyleInfo } from 'lit/directives/style-map.js';

interface SetListDataProps {
  virtualItems: Array<VirtualItem>;
  measureElement: (node: Element | null | undefined) => void;
  listStyle: Readonly<StyleInfo>;
}

interface Events {
  onScrollEvent: Event;
}

type VirtualizerProps = Partial<VirtualizerOptions<Element, Element>>;

export type { Events, VirtualizerProps, SetListDataProps };
