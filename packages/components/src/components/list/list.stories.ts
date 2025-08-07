import { action } from '@storybook/addon-actions';
import type { Args, Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { repeat } from 'lit/directives/repeat.js';

import '.';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { disableControls } from '../../../config/storybook/utils';
import { LISTITEM_VARIANTS } from '../listitem/listitem.constants';
import '../avatar';
import '../avatarbutton';
import '../badge';
import '../button';
import '../checkbox';
import '../divider';
import '../icon';
import '../listitem';
import '../listheader';
import '../text';
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
  html` <mdc-list aria-label="${args['aria-label']}">
    ${args.textPassedToListHeader
      ? html`<mdc-listheader slot="list-header" header-text="${args.textPassedToListHeader}"></mdc-listheader>`
      : ''}
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
    textPassedToListHeader: {
      control: 'text',
      description: 'Text to be rendered in the list header component. This is a control in storybook only.',
    },
    'aria-label': {
      control: 'text',
    },
    ...disableControls(['default', 'list-header']),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    textPassedToListHeader: 'Participants List',
    'aria-label': 'View all participants',
  },
};

export const ListWithDivider: StoryObj = {
  render: args => html`
    <mdc-list aria-label="${args['aria-label']}">
      ${args.textPassedToListHeader
        ? html`<mdc-listheader slot="list-header" header-text="${args.textPassedToListHeader}"></mdc-listheader>`
        : ''}
      <mdc-listitem @click=${action('onclick')} label="List Item 1"></mdc-listitem>
      <mdc-listitem @click=${action('onclick')} label="List Item 2"></mdc-listitem>
      <mdc-listitem @click=${action('onclick')} label="List Item 3"></mdc-listitem>
      <mdc-divider></mdc-divider>
      <mdc-listitem @click=${action('onclick')} label="List Item 4"></mdc-listitem>
      <mdc-listitem @click=${action('onclick')} label="List Item 5"></mdc-listitem>
      <mdc-listitem @click=${action('onclick')} label="List Item 6"></mdc-listitem>
    </mdc-list>
  `,
  args: {
    textPassedToListHeader: 'Participants List',
    'aria-label': 'View all participants',
  },
};
