import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { action } from '@storybook/addon-actions';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { LISTITEM_VARIANTS } from '../listitem/listitem.constants';
import { HEADER_ARROW } from './menu.constants';

const render = (args: Args) => html`
<mdc-menu
  header-text="${args['header-text']}"
  header-arrow="${args['header-arrow']}"
  ?header-disabled="${args['header-disabled']}"
  ?counter="${args.counter}"
  counter-number="${args['counter-number']}"
  ?footer="${args.footer}"
  ?clear-all="${args['clear-all']}"
  clear-all-text="${args['clear-all-text']}"
  ?save-cancel="${args['save-cancel']}"
  save-text="${args['save-text']}"
  cancel-text="${args['cancel-text']}"
  @header-click="${action('onheaderclick')}"
  @clear-all-click="${action('onclearallclick')}"
  @cancel-click="${action('oncancelclick')}"
  @save-click="${action('onsaveclick')}"
>
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
`;

const menuWithPopoverRender = (args: Args) => html`
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
  ${render(args)}
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
    'header-text': {
      control: 'text',
    },
    'header-arrow': {
      control: 'select',
      options: Object.values(HEADER_ARROW),
    },
    'header-disabled': {
      control: 'boolean',
    },
    counter: {
      control: 'boolean',
    },
    'counter-number': {
      control: 'number',
    },
    footer: {
      control: 'boolean',
    },
    'clear-all': {
      control: 'boolean',
    },
    'clear-all-text': {
      control: 'text',
    },
    'save-cancel': {
      control: 'boolean',
    },
    'save-text': {
      control: 'text',
    },
    'cancel-text': {
      control: 'text',
    },
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    'header-text': 'Menu Header',
    'header-arrow': HEADER_ARROW.LEFT,
    'header-disabled': false,
    counter: true,
    'counter-number': 10,
    footer: true,
    'clear-all': true,
    'clear-all-text': 'Clear All',
    'save-cancel': true,
    'save-text': 'Save',
    'cancel-text': 'Cancel',
  },
};

export const MenuWithPopover: StoryObj = {
  render: menuWithPopoverRender,
  args: {
    'header-text': 'Menu Header',
    'header-arrow': HEADER_ARROW.LEFT,
    'header-disabled': false,
    counter: true,
    'counter-number': 10,
    footer: true,
    'clear-all': true,
    'clear-all-text': 'Clear All',
    'save-cancel': true,
    'save-text': 'Save',
    'cancel-text': 'Cancel',
  },
};
