import { VirtualItem } from '@tanstack/virtual-core';
import { StyleInfo } from 'lit/directives/style-map.js';

export type ScrollDirection = 'forward' | 'backward' | null

interface VirtualizerUpdatedDetail {
  virtualItems: Array<VirtualItem>;
  measureElement: (node: Element | null | undefined) => void;
  listStyle: Readonly<StyleInfo>;
}

export type VirtualizerUpdatedEvent = CustomEvent<VirtualizerUpdatedDetail>;
