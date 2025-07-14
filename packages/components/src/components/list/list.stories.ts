import { action } from '@storybook/addon-actions';
import type { Args, Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { repeat } from 'lit/directives/repeat.js';

import '.';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideControls } from '../../../config/storybook/utils';
import '../avatar';
import '../avatarbutton';
import '../badge';
import '../button';
import '../checkbox';
import '../divider';
import '../icon';
import '../listitem';
import { LISTITEM_VARIANTS } from '../listitem/listitem.constants';
import '../toggle';

const fakeUserNamesList = [
  'Maria Simpson',
  'Diana Rees',
  'Fiona Wallace',
  'Abigail Reid',
  'Theresa Miller',
  'Andrea Wright',
  'Natalie Hunter',
  'Bernadette Carr',
  'Samantha Robertson',
  'Deirdre Clark',
];

const render = (args: Args) =>
  html` <mdc-list header-text="${args['header-text']}" data-aria-label="${args['data-aria-label']}">
    ${repeat(
      fakeUserNamesList,
      name =>
        html`<mdc-listitem @click="${action('onclick')}" label="${name}" variant="${LISTITEM_VARIANTS.INSET_PILL}">
          <mdc-checkbox slot="leading-controls" data-aria-label="mock label"></mdc-checkbox>
          <mdc-avatar
            slot="leading-controls"
            initials="${[name.split(' ')[0][0], name.split(' ')[1][0]].join('')}"
          ></mdc-avatar>
          <mdc-button
            slot="trailing-controls"
            color="positive"
            prefix-icon="data-range-selection-bold"
            aria-label="mock label"
          ></mdc-button>
          <mdc-button slot="trailing-controls" variant="tertiary">Learn More</mdc-button>
          <mdc-badge slot="trailing-controls" type="dot"></mdc-badge>
        </mdc-listitem> `,
    )}
  </mdc-list>`;

const meta: Meta = {
  title: 'Components/list',
  tags: ['autodocs'],
  component: 'mdc-list',
  render,
  parameters: {
    badges: ['stable'],
  },
  argTypes: {
    'header-text': {
      control: 'text',
    },
    'data-aria-label': {
      control: 'text',
    },
    ...hideControls(['role', 'listItems', 'default']),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    'header-text': 'Participants List',
    'data-aria-label': 'View all participants',
  },
};

export const ListWithDivider: StoryObj = {
  render: () => html`
    <mdc-list>
      <mdc-listitem @click=${action('onclick')} label="List Item 1"></mdc-listitem>
      <mdc-listitem @click=${action('onclick')} label="List Item 2"></mdc-listitem>
      <mdc-listitem @click=${action('onclick')} label="List Item 3"></mdc-listitem>
      <mdc-divider></mdc-divider>
      <mdc-listitem @click=${action('onclick')} label="List Item 4"></mdc-listitem>
      <mdc-listitem @click=${action('onclick')} label="List Item 5"></mdc-listitem>
      <mdc-listitem @click=${action('onclick')} label="List Item 6"></mdc-listitem>
    </mdc-list>
  `,
};
