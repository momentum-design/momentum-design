// Start AI-Assisted
import { html, nothing, PropertyValues, TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { VirtualItem } from '@tanstack/virtual-core';
import { styleMap } from 'lit/directives/style-map.js';

import { Component } from '../../../models';
import '..';
import '../../list';
import '../../listitem';
import '../../listheader';
import { VirtualData, type VirtualizedListVirtualItemsChangeEvent, VirtualizerProps } from '../virtualizedlist.types';

function generateUUID(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

type Item = { id: string; message: string; size?: number };

export class VirtualizedListE2E extends Component {
  @property({ type: Number, reflect: true, attribute: 'initial-item-count' })
  initialItemCount: number = 0;

  @property({ type: Boolean, reflect: true })
  loop: boolean = false;

  @property({ type: Number, reflect: true, attribute: 'initial-focus' })
  initialFocus?: number;

  @property({ type: Boolean, reflect: true, attribute: 'revert-list' })
  revertList: boolean = false;

  @property({ type: Boolean, reflect: true, attribute: 'observe-size-changes' })
  observeSizeChanges: boolean = false;

  @property({ type: Boolean, reflect: true, attribute: 'scroll-anchoring' })
  scrollAnchoring: boolean = false;

  @property({ type: String, reflect: true, attribute: 'list-header' })
  listHeader: string = '';

  @property({ type: Boolean, reflect: true, attribute: 'with-tooltip' })
  withTooltip: boolean = false;

  @state()
  private items: Item[] = [];

  @state()
  private virtualData: VirtualData = { virtualItems: [] };

  @state()
  private virtualizerProps: VirtualizerProps;

  constructor() {
    super();

    this.virtualizerProps = this.getVirtualizerProps();
  }

  override connectedCallback(): void {
    super.connectedCallback();

    this.items = new Array(this.initialItemCount).fill(null).map((_, i) => ({
      id: generateUUID(),
      message: `Initial Message ${i}`,
    }));
    this.virtualizerProps = this.getVirtualizerProps();
  }

  protected override update(changedProperties: PropertyValues): void {
    super.update(changedProperties);

    if (changedProperties.has('items')) {
      this.virtualizerProps = this.getVirtualizerProps();
    }
  }

  private getVirtualizerProps(): VirtualizerProps {
    return {
      count: this.items.length,
      estimateSize: () => 40,
      getItemKey: index => this.items[index]?.id,
    };
  }

  private handleVirtualItemsChange = (event: VirtualizedListVirtualItemsChangeEvent) => {
    this.virtualData = event.detail;
  };

  /**
   * Add a new item to the list
   * @param message - The message content for the item
   * @param index - Optional index to insert at. If not provided, adds to the end
   */
  public addItem(message: string, index?: number, options: Omit<Item, 'id' | 'message'> = {}): Item {
    const newItem = {
      id: generateUUID(),
      message,
      ...options,
    };

    if (index === undefined) {
      // Add to the end
      this.items = [...this.items, newItem];
    } else {
      // Insert at specific index
      const clampedIndex = Math.max(0, Math.min(index, this.items.length));
      const newItems = [...this.items];
      newItems.splice(clampedIndex, 0, newItem);
      this.items = newItems;
    }

    return newItem;
  }

  /**
   * Remove an item from the list by ID
   */
  public removeItem(id: string): void {
    this.items = this.items.filter(item => item.id !== id);
  }

  public removeIndex(index: number): void {
    if (index < 0 || index >= this.items.length) {
      return;
    }
    const newItems = [...this.items];
    newItems.splice(index, 1);
    this.items = newItems;
  }

  /**
   * Update an item in the list by ID
   */
  public updateItem(id: string, object: Partial<Omit<Item, 'id'>>): void {
    this.items = this.items.map(item => (item.id === id ? { ...item, ...object } : item));
  }

  /**
   * Get all items
   */
  public getItems(): { id: string; message: string }[] {
    return [...this.items];
  }

  /**
   * Clear all items
   */
  public clearItems(): void {
    this.items = [];
  }

  protected override createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  private generateListItem({ index }: VirtualItem): TemplateResult {
    const { message, size } = this.items[index];

    return html`
      <mdc-listitem
        data-index=${index}
        label=${message}
        style=${styleMap({ '--mdc-listitem-height': size ? `${size}px` : undefined })}
      >
        <mdc-button slot="trailing-controls" variant="secondary" size="24" id="btn-${index}">Label</mdc-button>
        ${this.withTooltip
          ? html`<mdc-tooltip triggerid="btn-${index}" slot="trailing-text-side-header"
              >Tooltip for item ${index}</mdc-tooltip
            >`
          : nothing}
      </mdc-listitem>
    `;
  }

  protected override render() {
    return html` <mdc-virtualizedlist
        id="vlist"
        @virtualitemschange=${this.handleVirtualItemsChange}
        .virtualizerProps=${this.virtualizerProps}
        loop=${ifDefined(this.loop ? 'true' : undefined)}
        revert-list=${ifDefined(this.revertList ? 'true' : undefined)}
        initial-focus=${ifDefined(this.initialFocus)}
        observe-size-changes=${ifDefined(this.observeSizeChanges ? 'true' : undefined)}
        scroll-anchoring=${ifDefined(this.scrollAnchoring ? 'true' : undefined)}
      >
        ${this.listHeader
          ? html`<mdc-listheader slot="list-header" header-text="${this.listHeader}"></mdc-listheader>`
          : nothing}
        ${repeat(this.virtualData.virtualItems, ({ key }) => key, this.generateListItem.bind(this))}
      </mdc-virtualizedlist>
      <style>
        #vlist {
          width: 300px;
          height: 300px;
          border: 1px solid var(--mds-color-theme-text-secondary-normal);
        }
      </style>`;
  }
}

VirtualizedListE2E.register('mdc-virtualizedlist-e2e');

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-virtualizedlist-e2e']: VirtualizedListE2E;
  }
}
// End AI-Assisted
