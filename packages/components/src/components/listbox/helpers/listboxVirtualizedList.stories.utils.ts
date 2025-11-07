import { html, type TemplateResult } from 'lit';
import { state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';

import { Component } from '../../../models';
import '../../option';
import '../../virtualizedlist';
import {
  VirtualData,
  type VirtualizedListVirtualItemsChangeEvent,
  VirtualizerProps,
} from '../../virtualizedlist/virtualizedlist.types';

class ListboxVirtualizedListStoriesUtils extends Component {
  @state()
  listItems: string[] = new Array(1000).fill(true);

  @state()
  virtualData: VirtualData = { virtualItems: [] };

  @state()
  virtualizerProps: VirtualizerProps = { count: 0, estimateSize: () => 0, getItemKey: index => this.listItems[index] };

  constructor() {
    super();
    this.onscroll = null;
  }

  override connectedCallback(): void {
    super.connectedCallback();
    this.updateVirtualProps();
  }

  private updateVirtualProps() {
    this.virtualizerProps = {
      count: this.listItems.length,
      estimateSize: () => 36,
      getItemKey: (index: number) => this.listItems[index],
    };
  }

  private handleVirtualItemsChange = (event: VirtualizedListVirtualItemsChangeEvent) => {
    this.virtualData = event.detail;
  };

  protected override render(): TemplateResult {
    return html`
      <div class="wrapper">
        <mdc-virtualizedlist
          .virtualizerProps=${this.virtualizerProps}
          @virtualitemschange=${this.handleVirtualItemsChange}
        >
          ${repeat(
            this.virtualData.virtualItems,
            ({ key }) => key,
            ({ index }) => html`<mdc-option data-index="${index}" label="Option Label ${index + 1}"></mdc-option>`,
          )}
        </mdc-virtualizedlist>
      </div>
      <style>
        .wrapper {
          height: 100vh;
        }
      </style>
    `;
  }

  override createRenderRoot() {
    return this;
  }
}

ListboxVirtualizedListStoriesUtils.register('mdc-listboxvirtualizedlist');

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-listboxvirtualizedlist']: ListboxVirtualizedListStoriesUtils;
  }
}
