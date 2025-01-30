import { VirtualItem } from '@tanstack/virtual-core';

interface VirtualItemsUpdatedDetail {
  items: Array<VirtualItem>; // Replace `any` with the specific type of items if known
}

export type VirtualItemsUpdatedEvent = CustomEvent<VirtualItemsUpdatedDetail>;
