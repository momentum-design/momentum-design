// AI-Assisted
import { html } from 'lit';
import { state, property } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';

import { Component } from '../../../models';
import '../../list';
import '../../listitem';
import '../../listheader';
import { VirtualData, type VirtualizedListVirtualItemsChangeEvent, VirtualizerProps } from '../virtualizedlist.types';

const ITEMS_PER_GROUP = 10;
const GROUP_COUNT = 2;

type ListEntry = { type: 'header'; label: string; key: string } | { type: 'item'; label: string; key: string };

function buildEntries(): ListEntry[] {
  const entries: ListEntry[] = [];
  for (let g = 0; g < GROUP_COUNT; g += 1) {
    entries.push({ type: 'header', label: `Group ${g + 1}`, key: `header-${g}` });
    for (let i = 0; i < ITEMS_PER_GROUP; i += 1) {
      const itemIndex = g * ITEMS_PER_GROUP + i;
      entries.push({ type: 'item', label: `List item number ${itemIndex + 1}`, key: `item-${itemIndex}` });
    }
  }
  return entries;
}

const ALL_ENTRIES = buildEntries();

export class VirtualizedWrapperWithHeadersStoriesUtils extends Component {
  public override onscroll: ((this: GlobalEventHandlers, ev: Event) => void) | null;

  @property({ type: Object, attribute: 'virtualizerprops' })
  virtualizerProps: VirtualizerProps = {
    count: ALL_ENTRIES.length,
    estimateSize: () => 36,
    getItemKey: index => ALL_ENTRIES[index]?.key ?? String(index),
    isItemNavigable: index => ALL_ENTRIES[index].type === 'item',
  };

  @property({ type: String, reflect: true })
  loop: 'true' | 'false' = 'false';

  @property({ type: Number, reflect: true, attribute: 'initial-focus' })
  initialFocus: number = 0;

  @state()
  virtualData: VirtualData = { virtualItems: [] };

  constructor() {
    super();
    this.onscroll = null;
  }

  private renderEntry(index: number) {
    const entry = ALL_ENTRIES[index];
    if (!entry) return html``;

    if (entry.type === 'header') {
      return html`<mdc-listheader data-index=${index} header-text="${entry.label}"></mdc-listheader>`;
    }

    return html`<mdc-listitem data-index=${index} label="${entry.label}"></mdc-listitem>`;
  }

  private handleVirtualItemsChange = (event: VirtualizedListVirtualItemsChangeEvent) => {
    this.virtualData = event.detail;
  };

  protected override createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  override render() {
    return html`
      <div id="VirtualizedWrapperWithHeaders--wrapper">
        <mdc-virtualizedlist
          @scroll=${this.onscroll}
          @virtualitemschange=${this.handleVirtualItemsChange}
          .virtualizerProps=${this.virtualizerProps}
          initial-focus=${this.initialFocus}
          loop=${this.loop}
        >
          ${repeat(
            this.virtualData.virtualItems,
            ({ key }) => key,
            ({ index }) => this.renderEntry(index),
          )}
        </mdc-virtualizedlist>
      </div>
      <style>
        mdc-virtualizedwrapperwithheaders {
          display: block;
          width: 100%;
          height: 100%;
          flex: 1 1 auto;
        }
        #VirtualizedWrapperWithHeaders--wrapper {
          width: 500px;
          height: 500px;
        }
      </style>
    `;
  }
}

VirtualizedWrapperWithHeadersStoriesUtils.register('mdc-virtualizedwrapperwithheaders');

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-virtualizedwrapperwithheaders']: VirtualizedWrapperWithHeadersStoriesUtils;
  }
}
// End AI-Assisted
