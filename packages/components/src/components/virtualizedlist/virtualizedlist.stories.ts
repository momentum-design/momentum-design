import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { CSSResult, PropertyValues, TemplateResult, html } from 'lit';
import { property, state } from 'lit/decorators.js';
import { VirtualItem, VirtualizerOptions } from '@tanstack/virtual-core';
import { ref } from 'lit/directives/ref.js';
import { styleMap } from 'lit/directives/style-map.js';
import { SetListDataProps } from './virtualizedlist.types';
import { Component } from '../../models';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

class VirtualizedWrapper extends Component {
  @property({ type: Function, attribute: 'handlescroll' })
  handlescroll?: (e: Event) => void;

  @property({ type: Object, attribute: 'virtualizerprops' })
  virtualizerprops: Partial<VirtualizerOptions<Element, Element>> = {};

  @state()
  list: TemplateResult<1> = html``;

  @state()
  listItemTexts = new Array(this.virtualizerprops.count)
    .fill(true)
    .map((_, index) => `list item number ${index}`);

  constructor() {
    super();
    this.setListData = this.setListData.bind(this);
  }

  public override update(changedProperties: PropertyValues) {
    super.update(changedProperties);
    if (changedProperties.get('virtualizerprops')) {
      this.updateListItemTextArray();
    }
  }

  public override connectedCallback() {
    super.connectedCallback();
    if (this.virtualizerprops?.count) {
      this.updateListItemTextArray();
    }
  }

  private updateListItemTextArray() {
    this.listItemTexts = new Array(this.virtualizerprops?.count)
      .fill(true)
      .map((_, index) => `list item number ${index}`);
  }

  private setListData({ virtualItems, measureElement, listStyle }: SetListDataProps) {
    if (virtualItems) {
      this.list = html`<ul style=${styleMap(listStyle)}>${virtualItems.map((virtualItem: VirtualItem) =>
        html`<li key=${virtualItem.key} data-index=${virtualItem.index} ref=${ref(measureElement)}>
          ${this.listItemTexts[virtualItem.index]}</li>`)}</ul>`;
    }
  }

  override render() {
    return html`
    <div style="height: 500px; width: 500px;">
      <mdc-virtualizedlist
        .handlescroll=${this.handlescroll}
        .virtualizerprops=${this.virtualizerprops}
        .setlistdata=${this.setListData}
      >${this.list}</mdc-virtualizedlist></div>
    `;
  }

  public static override styles: Array<CSSResult> = Component.styles;
}

customElements.define('mdc-virtualizedwrapper', VirtualizedWrapper);

const render = (args: Args) => html`
  <mdc-virtualizedwrapper
    .virtualizerprops=${args.virtualizerprops}
    .handlescroll=${args.handlescroll}
  ></mdc-virtualizedwrapper>`;

const meta: Meta = {
  title: 'Work In Progress/virtualizedlist',
  tags: ['autodocs'],
  component: 'mdc-virtualizedlist',
  render,
  parameters: {
    badges: ['stable'],
  },
  argTypes: {
    virtualizerprops: {
      description: `Props to send to Tanstack virtual. Please reference 
      [Tanstack Virtualizer API](https://tanstack.com/virtual/latest/docs/api/virtualizer) docs for more 
      about all possible props`,
      control: 'object',
    },
    handlescroll: {
      description: `Callback that gets called when user scrolls in list. 
      Can be used to access the scroll container in order to 
      handle scrolling logic such as user scrolls to top or bottom`,
      type: 'function',
      table: { defaultValue: { summary: 'undefined' } },
    },
    setlistdata: {
      description: `A function that is passed in that when called, will udpate the state of the parent component.
      This is necessary so that updates inside of virtualizedlist also 
      rerender the parent with any appropriate updates`,
      type: 'function',
    },
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    virtualizerprops: { count: 200, estimateSize: () => 100 },
  },
};
