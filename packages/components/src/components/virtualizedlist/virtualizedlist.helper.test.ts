import { CSSResult, PropertyValues, TemplateResult, html } from 'lit';
import { property, state } from 'lit/decorators.js';
import { VirtualItem } from '@tanstack/virtual-core';
import { ref } from 'lit/directives/ref.js';
import { styleMap } from 'lit/directives/style-map.js';

import { Component } from '../../models';

import { SetListDataProps, VirtualizerProps } from './virtualizedlist.types';

class VirtualizedWrapper extends Component {
  @property({ type: Function, attribute: 'onscroll' })
  override onscroll: ((this: GlobalEventHandlers, ev: Event) => void) | null;

  @property({ type: Object, attribute: 'virtualizerprops' })
  virtualizerProps: VirtualizerProps = { count: 100, estimateSize: () => 100, overscan: 60 };

  @state()
  list: TemplateResult<1> = html``;

  @state()
  listItemTexts = new Array(this.virtualizerProps.count).fill(true).map((_, index) => `list item number ${index}`);

  constructor() {
    super();
    this.onscroll = null;
    this.setListData = this.setListData.bind(this);
  }

  public override update(changedProperties: PropertyValues) {
    super.update(changedProperties);
    if (changedProperties.get('virtualizerProps')) {
      this.updateListItemTextArray();
    }
  }

  public override connectedCallback() {
    super.connectedCallback();
    if (this.virtualizerProps?.count) {
      this.updateListItemTextArray();
    }
  }

  private updateListItemTextArray() {
    this.listItemTexts = new Array(this.virtualizerProps?.count)
      .fill(true)
      .map((_, index) => `list item number ${index}`);
  }

  private setListData({ virtualItems, measureElement, listStyle }: SetListDataProps) {
    if (virtualItems) {
      this.list = html`<ul style="margin: 0;${styleMap(listStyle)}">
        ${virtualItems.map(
          (virtualItem: VirtualItem) =>
            html`<li role="listitem" key=${virtualItem.key} data-index=${virtualItem.index} ref=${ref(measureElement)}>
              ${this.listItemTexts[virtualItem.index]}
            </li>`,
        )}
      </ul>`;
    }
  }

  override render() {
    return html`
      <div style="height: 500px; width: 500px;">
        <mdc-virtualizedlist
          @scroll=${this.onscroll}
          .virtualizerProps=${this.virtualizerProps}
          .setlistdata=${this.setListData}
          >${this.list}</mdc-virtualizedlist
        >
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = Component.styles;
}

VirtualizedWrapper.register('mdc-virtualizedwrapper');

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-virtualizedwrapper']: VirtualizedWrapper;
  }
}
