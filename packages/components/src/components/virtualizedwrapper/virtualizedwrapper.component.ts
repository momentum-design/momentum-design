import { CSSResult, html } from 'lit';
import { property, state } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { VirtualItem, VirtualizerOptions } from '@tanstack/virtual-core';
import { ref } from 'lit/directives/ref.js';
import { Component } from '../../models';
import '../virtualizedlist';
import { VirtualizerUpdatedEvent } from '../virtualizedlist/virtualizedlist.types';

/**
 * virtualizedwrapper component, which ...
 *
 * @tagname mdc-virtualizedwrapper
 * *
 */

const sentences = new Array(1000)
  .fill(true)
  .map((_, index) => `sentence number ${index}`);

class VirtualizedWrapper extends Component {
  @property({ type: Function, attribute: 'on-scroll' })
  onScroll?: ((e: Event) => void);

  @property({ type: Object, attribute: 'virtualizerprops', reflect: true })
  virtualizerprops: Partial<VirtualizerOptions<Element, Element>> = {};

  @state()
  list: any;

  private renderList = (e: VirtualizerUpdatedEvent) => {
    const { virtualItems, measureElement, listStyle } = e.detail;
    this.list = html`<ul style=${styleMap(listStyle)}>${virtualItems.map((virtualItem: VirtualItem) =>
      html`<li key=${virtualItem.key} data-index=${virtualItem.index} ref=${ref(measureElement)}>
        ${sentences[virtualItem.index]}</li>`)}</ul>`;
  };

  override render() {
    return html`
    <div style="height: 500px; width: 500px;">
      <mdc-virtualizedlist
        @on-scroll="${this.onScroll}"
        .virtualizerprops=${this.virtualizerprops}
        @render-list=${this.renderList}
        style="height: 400px; width: 400px;"
      >${this.list}</mdc-virtualizedlist>
    `;
  }

  public static override styles: Array<CSSResult> = Component.styles;
}

export default VirtualizedWrapper;
