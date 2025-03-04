import type { Meta, StoryObj, Args } from '@storybook/web-components';
import { action } from '@storybook/addon-actions';
import '.';
import { html } from 'lit';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

const render = (args: Args) => html`
  <mdc-tablist @change="${action('onchange')}" activetabid="${args.activetabid}">
    <mdc-tab variant="line" text="Tab 1" icon-name="info-circle-bold" tabid="photos-tab" aria-controls="photos-panel">
      Tab 1
    </mdc-tab>
    <mdc-tab variant="line" text="Tab 2" tabid="videos-tab" aria-controls="videos-panel">
      <slot name="badge">5</badge>
    </mdc-tab>
    <mdc-tab variant="line" text="Tab 3" tabid="music-tab" aria-controls="music-panel">
    </mdc-tab>
    <mdc-tab variant="line" text="Tab 4 - the long named tab" tabid="documents-tab" aria-controls="documents-panel">
    </mdc-tab>
    <mdc-tab variant="line" text="Tab 5" tabid="downloads-tab" aria-controls="downloads-panel">
    </mdc-tab>
  </mdc-tablist>
  `;

const meta: Meta = {
  title: 'Work In Progress/tablist',
  tags: ['autodocs'],
  component: 'mdc-tablist',
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
  args: {

  },
};
