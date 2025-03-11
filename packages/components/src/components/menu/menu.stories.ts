import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { LISTITEM_VARIANTS } from '../listitem/listitem.constants';

const render = (args: Args) => html`
  <div
    style="
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
  "
  >
    <mdc-button id="trigger-element">Show Menu</mdc-button>
  </div>
  <mdc-popover class="menu-popover" triggerid="trigger-element" interactive show-arrow size style="width: 387px">
    <mdc-menu>
      <mdc-list slot="list">
        <mdc-listitem id="trigger" label="List Item 1" variant="${LISTITEM_VARIANTS.INSET_RECTANGLE}"></mdc-listitem>
        <mdc-listitem label="List Item 2" variant="${LISTITEM_VARIANTS.INSET_RECTANGLE}"></mdc-listitem>
        <mdc-listitem label="List Item 3" variant="${LISTITEM_VARIANTS.INSET_RECTANGLE}"></mdc-listitem>
        <mdc-divider></mdc-divider>
        <mdc-listitem label="List Item 4"></mdc-listitem>
        <mdc-listitem label="List Item 5"></mdc-listitem>
        <mdc-listitem label="List Item 6"></mdc-listitem>
      </mdc-list>
    </mdc-menu>
  </mdc-popover>

  <mdc-popover triggerid="trigger" placement="right-start" interactive>
    <mdc-menu >
      <mdc-list slot="list">
        <mdc-listitem label="List Item 1" variant="${LISTITEM_VARIANTS.INSET_RECTANGLE}"></mdc-listitem>
        <mdc-listitem label="List Item 2" variant="${LISTITEM_VARIANTS.INSET_RECTANGLE}"></mdc-listitem>
        <mdc-listitem label="List Item 3" variant="${LISTITEM_VARIANTS.INSET_RECTANGLE}"></mdc-listitem>
      </mdc-list>
    </mdc-menu>
  </mdc-popover>
`;

const meta: Meta = {
  title: 'Work In Progress/menu',
  tags: ['autodocs'],
  component: 'mdc-menu',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {

};
