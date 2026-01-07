import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

import '../list';
import '../listitem';

import { SIZE } from './bullet.constants';

const render = (args: Args) => html` <mdc-bullet size="${ifDefined(args.size)}"></mdc-bullet>`;

const meta: Meta = {
  title: 'Components/decorator/bullet',
  tags: ['autodocs'],
  component: 'mdc-bullet',
  render,
  argTypes: {
    size: {
      control: 'select',
      options: Object.values(SIZE),
    },
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    size: SIZE.SMALL,
  },
};

export const UnorderedList: StoryObj = {
  render: () => html`
   <main>
      <mdc-list aria-label="Fruit list">
        <mdc-listitem label="Apple">
          <mdc-bullet size="${SIZE.MEDIUM}" slot="leading-controls"></mdc-bullet>
        </mdc-listitem>
        <mdc-listitem label="Banana">
          <mdc-bullet size="${SIZE.MEDIUM}" slot="leading-controls"></mdc-bullet>
        </mdc-listitem>
        <mdc-listitem label="Cherry">
          <mdc-bullet size="${SIZE.MEDIUM}" slot="leading-controls"></mdc-bullet>
        </mdc-listitem>
      </mdc-list>
    </main>
  `,
};
