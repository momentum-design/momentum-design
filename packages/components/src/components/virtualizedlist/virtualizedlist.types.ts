import { VirtualItem, VirtualizerOptions } from '@tanstack/virtual-core';
import { StyleInfo } from 'lit/directives/style-map.js';

export interface SetListDataProps {
  virtualItems: Array<VirtualItem>;
  measureElement: (node: Element | null | undefined) => void;
  listStyle: Readonly<StyleInfo>;
}

export type VirtualizerProps = Partial<VirtualizerOptions<Element, Element>>
