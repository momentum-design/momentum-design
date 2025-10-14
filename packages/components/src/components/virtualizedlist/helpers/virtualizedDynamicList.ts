import { html, TemplateResult } from 'lit';
import { state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';

import { Component } from '../../../models';
import '../../list';
import '../../listitem';
import '../../button';
import '../../buttongroup';
import '../../avatar';
import '../../textarea';
import { VirtualData, type VirtualizedListVirtualItemsChangeEvent, VirtualizerProps } from '../virtualizedlist.types';

class VirtualizedDynamicList extends Component {
  @state()
  listItems: string[] = new Array(20).fill(true).map((_, index) => `list item number ${index}`);

  @state()
  virtualData: VirtualData = { virtualItems: [] };

  @state()
  virtualizerProps: VirtualizerProps = { count: 0, estimateSize: () => 0, getItemKey: index => this.listItems[index] };

  counter = this.listItems.length;

  override connectedCallback(): void {
    super.connectedCallback();
    this.updateVirtualProps();
  }

  private generateListItem(index: number, label: string): TemplateResult {
    return html`
      <mdc-listitem data-index=${index} label=${label}>
        <mdc-buttongroup slot="trailing-controls">
          <mdc-button variant="primary" color="positive" @click=${() => this.addItem(0, 5)}>Add 5 At Top</mdc-button>
          <mdc-button variant="primary" color="positive" @click=${() => this.addItem(index)}>Add Above</mdc-button>
          <mdc-button variant="primary" color="positive" @click=${() => this.addItem(index + 1)}>Add Below</mdc-button>
          <mdc-button variant="primary" color="positive" @click=${() => this.addItem()}>Add Last</mdc-button>
        </mdc-buttongroup>
        <mdc-buttongroup slot="trailing-controls">
          <mdc-button variant="primary" color="negative" @click=${() => this.removeItem(index)}>Remove This</mdc-button>
          <mdc-button variant="primary" color="negative" @click=${() => this.removeItem(index - 1)}
            >Remove Above</mdc-button
          >
          <mdc-button variant="primary" color="negative" @click=${() => this.removeItem(index + 1)}
            >Remove Below</mdc-button
          >
        </mdc-buttongroup>
      </mdc-listitem>
    `;
  }

  protected addItem(index?: number, count = 1): void {
    // eslint-disable-next-line no-return-assign
    const newItems = new Array(count).fill(true).map(() => `list item number ${(this.counter += 1)}`);

    if (index === undefined) {
      this.listItems = [...this.listItems, ...newItems];
    } else {
      this.listItems = [
        ...this.listItems.slice(0, index),
        ...newItems,
        ...this.listItems.slice(index, this.listItems.length),
      ];
    }
    this.updateVirtualProps();
  }

  protected removeItem(index?: number): void {
    if (index === undefined) {
      this.listItems = this.listItems.slice(0, -1);
    } else {
      this.listItems = [...this.listItems.slice(0, index), ...this.listItems.slice(index + 1, this.listItems.length)];
    }
    this.updateVirtualProps();
  }

  private updateVirtualProps() {
    this.virtualizerProps = {
      count: this.listItems.length,
      estimateSize: () => 48,
      getItemKey: (index: number) => this.listItems[index],
    };
  }

  private handleVirtualItemsChange = (event: VirtualizedListVirtualItemsChangeEvent) => {
    this.virtualData = event.detail;
  };

  protected override render(): TemplateResult {
    return html`
      <div id="VirtualizedDynamicList--wrapper">
        <mdc-virtualizedlist
          .virtualizerProps=${this.virtualizerProps}
          @virtualitemschange=${this.handleVirtualItemsChange}
        >
          ${repeat(
            this.virtualData.virtualItems,
            ({ key }) => key,
            ({ index }) => this.generateListItem(index, this.listItems[index]),
          )}
        </mdc-virtualizedlist>
      </div>
      <div style="margin-top: 1rem;">
        <div>Current List Size: <span data-test="counter">${this.listItems.length}</span></div>
        <div style="display: flex; gap: 0.25rem;">
          <mdc-button @click=${() => this.removeItem()}>Remove Last</mdc-button>
        </div>
      </div>
      <style>
        #VirtualizedDynamicList--wrapper {
          width: 100%;
          height: calc(100% - 200px);
        }
      </style>
    `;
  }

  override createRenderRoot() {
    return this;
  }
}

VirtualizedDynamicList.register('mdc-virtualizeddynamiclist');

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-virtualizeddynamiclist']: VirtualizedDynamicList;
  }
}
