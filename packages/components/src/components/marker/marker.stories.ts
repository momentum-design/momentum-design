import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideAllControls } from '../../../config/storybook/utils';

import { MARKER_VARIANTS } from './marker.constants';

import '../list';
import '../listitem';
import '../avatar';
import '../icon';

const render = (args: Args) => html`
  <div style="height: 6.25rem">
    <mdc-marker variant="${ifDefined(args.variant)}"></mdc-marker>
  </div>
`;

const meta: Meta = {
  title: 'Components/decorator/marker',
  tags: ['autodocs'],
  component: 'mdc-marker',
  render,

  argTypes: {
    variant: {
      control: 'radio',
      options: Object.values(MARKER_VARIANTS),
    },
    ...classArgType,
    ...styleArgType,
  },
  parameters: {
    actions: { disable: true },
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    variant: MARKER_VARIANTS.SOLID,
  },
};

export const ListWithMarker: StoryObj = {
  render: () => html`
    <style>
      .marker-row {
        height: inherit;
      }
      .list-marker-row {
        display: flex;
        border-radius: 10px;
        margin: 5px 0;
      }
      .active-meeting {
        height: inherit;
        --mdc-marker-solid-background-color: green;
      }
    </style>
    <mdc-list>
      <div class="list-marker-row">
        <mdc-marker class="marker-row" variant="solid"></mdc-marker>
        <mdc-listitem label="Daily Stand Up" secondary-label="09:00 AM - 09:15 AM">
          <mdc-avatar slot="leading-controls" src="https://picsum.photos/id/237/256" presence="busy"></mdc-avatar>
          <mdc-icon slot="trailing-controls" name="webex-helix-regular"></mdc-icon>
          <mdc-icon slot="trailing-controls" name="recurring-bold"></mdc-icon>
        </mdc-listitem>
      </div>
      <div class="list-marker-row">
        <mdc-marker class="marker-row active-meeting" variant="solid"></mdc-marker>
        <mdc-listitem label="Office Hours" secondary-label="11:00 AM - 11:45 AM">
          <mdc-avatar slot="leading-controls" src="https://picsum.photos/id/63/256" presence="active"></mdc-avatar>
          <mdc-icon slot="trailing-controls" name="webex-helix-regular"></mdc-icon>
          <mdc-icon slot="trailing-controls" name="recurring-bold"></mdc-icon>
        </mdc-listitem>
      </div>
      <div class="list-marker-row">
        <mdc-marker class="marker-row" variant="striped"></mdc-marker>
        <mdc-listitem label="Company All Hands" secondary-label="04:00 PM - 04:30 PM">
          <mdc-avatar slot="leading-controls" src="https://picsum.photos/id/0/256" presence="active"></mdc-avatar>
          <mdc-icon slot="trailing-controls" name="webex-helix-regular"></mdc-icon>
          <mdc-icon slot="trailing-controls" name="recurring-bold"></mdc-icon>
        </mdc-listitem>
      </div>
    </mdc-list>
  `,
  parameters: {
    a11y: {
      disable: true,
    },
    ...hideAllControls(true),
  },
};
