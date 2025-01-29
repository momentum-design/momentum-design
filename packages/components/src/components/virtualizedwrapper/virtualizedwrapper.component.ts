import { CSSResult, TemplateResult, html } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { VirtualItem } from '@tanstack/virtual-core';
import { RefOrCallback, ref } from 'lit/directives/ref.js';
import { Component } from '../../models';
import styles from './virtualizedwrapper.styles';
import '../virtualizedlist';
/**
 * virtualizedwrapper component, which ...
 *
 * @tagname mdc-virtualizedwrapper
 * *
 */

const sentences = new Array(1000)
  .fill(true)
  .map((_, index) => index);

class VirtualizedWrapper extends Component {
  @property({ type: Number, reflect: true })
  count: number = 0;

  @property({ type: Function, reflect: true })
  onScroll: (() => void) | undefined;

  @state()
  private virtualItems: Array<VirtualItem> = [];

  private items: TemplateResult<1>[] = [];

  @query('mdc-virtualizedlist') virtualizedList;

  public override connectedCallback() {
    super.connectedCallback();
    this.addEventListener('virtual-items-updated', this.handleVirtualItemsUpdated);
  }

  public override disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('virtual-items-updated', this.handleVirtualItemsUpdated);
  }

  handleVirtualItemsUpdated(event) {
    this.virtualItems = event.detail.items;
  }

  override render() {
    const measureElement = this.virtualizedList?.measureElement as RefOrCallback<Element>;

    this.items = this.virtualItems.map((virtualRow: VirtualItem) =>
      html`<li style="height: 100px" ${ref(measureElement)} data-index=${virtualRow.index} key=${virtualRow.key}>
        ${sentences[virtualRow.index]}
      </li>`);

    return html`
      <mdc-virtualizedlist
        .onScroll="${this.onScroll}"
        .count=${this.count}
      >
        <ul style="position:absolute;top:0;left:0;width:100%;transform:translateY(${this.virtualItems[0]
    ? this.virtualItems[0].start
    : 0}px);"> 
          ${this.items}
        </ul>
      </mdc-virtualizedlist>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default VirtualizedWrapper;
