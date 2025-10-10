import { css, CSSResult, html, PropertyValues } from 'lit';
import { state, property } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';

import { Component } from '../../../models';
import '../../list';
import '../../listitem';
import '../../button';
import '../../buttongroup';
import '../../avatar';
import '../../textarea';
import { VirtualData, type VirtualizedListVirtualItemsChangeEvent, VirtualizerProps } from '../virtualizedlist.types';

export class VirtualizedWrapper extends Component {
  public override onscroll: ((this: GlobalEventHandlers, ev: Event) => void) | null;

  @property({ type: Object, attribute: 'virtualizerprops' })
  virtualizerProps: VirtualizerProps = {
    count: 100,
    estimateSize: () => this.itemSize,
    getItemKey: index => this.listItemTexts[index],
  };

  @property({ type: String })
  story: 'text' | 'interactive' | 'dynamic' = 'text';

  @property({ type: String, reflect: true })
  loop: 'true' | 'false' = 'false';

  @property({ type: Number, reflect: true, attribute: 'item-size' })
  itemSize: number = 36;

  @property({ type: Number, reflect: true, attribute: 'initial-focus' })
  initialFocus: number = 0;

  @state()
  virtualData: VirtualData = { virtualItems: [] };

  @state()
  listItemTexts = new Array(this.virtualizerProps.count).fill(true).map((_, index) => `list item number ${index}`);

  constructor() {
    super();
    this.onscroll = null;
  }

  public override update(changedProperties: PropertyValues) {
    super.update(changedProperties);
    if (changedProperties.has('virtualizerProps')) {
      this.updateListItemTextArray();
    }

    if (changedProperties.has('itemSize')) {
      this.virtualizerProps = { ...this.virtualizerProps, estimateSize: () => this.itemSize };
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

  private renderItem(index: number) {
    if (this.story === 'text') {
      return html`<mdc-listitem data-index=${index} label="${this.listItemTexts[index]}"></mdc-listitem> `;
    }
    if (this.story === 'interactive') {
      return html`
        <mdc-listitem data-index=${index}>
          <span slot="leading-text-primary-label">${this.listItemTexts[index]}</span>
          <mdc-button
            slot="trailing-controls"
            color="positive"
            prefix-icon="data-range-selection-bold"
            aria-label="mock label"
          ></mdc-button>
          <mdc-button slot="trailing-controls" variant="tertiary">Learn More</mdc-button>
        </mdc-listitem>
      `;
    }
    if (this.story === 'dynamic') {
      return html`
        <mdc-listitem data-index=${index} style="--mdc-listitem-height: ${50 + (index % 5) * 10}px">
          <span slot="leading-text-primary-label">${this.listItemTexts[index]}</span>
          <mdc-button
            slot="trailing-controls"
            color="positive"
            prefix-icon="data-range-selection-bold"
            aria-label="mock label"
          ></mdc-button>
          <mdc-button slot="trailing-controls" variant="tertiary">Learn More</mdc-button>
        </mdc-listitem>
      `;
    }

    return html``;
  }

  private handleVirtualItemsChange = (event: VirtualizedListVirtualItemsChangeEvent) => {
    this.virtualData = event.detail;
  };

  override render() {
    return html`
      <div part="wrapper">
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
            ({ index }) => this.renderItem(index),
          )}
        </mdc-virtualizedlist>
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [
    ...Component.styles,
    css`
      :host([story='text'])::part(wrapper) {
        width: 500px;
        height: 500px;
      }
      :host([story='interactive'])::part(wrapper) {
        width: 100%;
        height: 500px;
      }
      :host([story='dynamic'])::part(wrapper) {
        width: 100%;
        height: 500px;
      }
    `,
  ];
}

VirtualizedWrapper.register('mdc-virtualizedwrapper');

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-virtualizedwrapper']: VirtualizedWrapper;
  }
}
