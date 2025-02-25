import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { repeat } from 'lit/directives/repeat.js';
import '.';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import '../avatar';
import '../avatarbutton';
import '../badge';
import '../button';
import '../checkbox';
import '../icon';
import '../listitem';
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

const render = () => html`
  <mdc-list>
    ${repeat(fakeUserNamesList, (name) => html`<mdc-listitem label="${name}">
      <mdc-avatar slot="leading-controls"
        initials="${[name.split(' ')[0][0], name.split(' ')[1][0]].join('')}"
      ></mdc-avatar>
      <mdc-button slot="trailing-controls" color="positive" prefix-icon="data-range-selection-bold"></mdc-button>
      <mdc-button slot="trailing-controls" color="positive" variant="tertiary">Learn More</mdc-button>
      <mdc-badge slot="trailing-controls" type="dot"></mdc-badge>
    </mdc-listitem>`)}
  </mdc-list>`;

const meta: Meta = {
  title: 'Work In Progress/list',
  tags: ['autodocs'],
  component: 'mdc-list',
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

export const Example: StoryObj = {};
