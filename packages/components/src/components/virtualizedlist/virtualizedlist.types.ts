import { VirtualItem } from '@tanstack/virtual-core';

export type ScrollDirection = 'forward' | 'backward' | null

interface VirtualizerUpdatedDetail {
  virtualItems: Array<VirtualItem>;
  scrollDirection: ScrollDirection;
}

export type VirtualizerUpdatedEvent = CustomEvent<VirtualizerUpdatedDetail>;
