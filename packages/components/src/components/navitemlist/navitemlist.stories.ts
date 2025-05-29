import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideControls, disableControls } from '../../../config/storybook/utils';
import '../navitem';
import '../sidenavigation';

const render = (args: Args) => html`
<div style="height: 90vh; margin: 1rem">
  <mdc-sidenavigation grabber-btn-aria-label = "This is a grabber button.">
    <mdc-navitemlist ?show-label=${args['show-label']} aria-label=${ifDefined(args['aria-label'])} 
      slot="scrollable-section">
      <mdc-navitem
        nav-id="1"
        icon-name="placeholder-bold"
        badge-type="counter"
        counter="3"
        max-counter="66"
        aria-label='Dashboard'
        ?show-label=${args['show-label']}
        label='Dashboard'
      >
      </mdc-navitem>
      <mdc-navitem
        nav-id="2"
        icon-name="placeholder-bold"
        aria-label='Calling'
        ?show-label=${args['show-label']}
        label='Calling'
        disabled
      >
      </mdc-navitem>
      <mdc-navitem
        nav-id="3"
        icon-name="placeholder-bold"
        badge-type="dot"
        aria-label='Settings'
        ?show-label=${args['show-label']}
        label='Settings'
      >
      </mdc-navitem>
    </mdc-navitemlist>
  </mdc-sidenavigation>
</div>
`;

const meta: Meta = {
  title: 'Work In Progress/sidenavigation/navitemlist',
  tags: ['autodocs'],
  component: 'mdc-navitemlist',
  parameters: {
    badges: ['wip'],
  },
  render,
  argTypes: {
    'show-label': {
      control: 'boolean',
    },
    'aria-label': {
      control: 'text',
    },
    ...disableControls([
      'default',
    ]),
    ...hideControls([
      'navItems',
      'aria-orientation',
    ]),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    'show-label': true,
  },
};

export const collapsedNavItemList: StoryObj = {
  args: {
    'aria-label': 'This is a navitemlist.',
    'show-label': false,
  },
};
