import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideControls, disableControls } from '../../../config/storybook/utils';
import '../navitem';

const render = (args: Args) => html`
  <mdc-navitemlist ?show-label=${args['show-label']} aria-label=${ifDefined(args['aria-label'])}>
    <mdc-navitem
      nav-id="1"
      icon-name="placeholder-bold"
      badge-type="counter"
      counter="3"
      max-counter="66"
      aria-label=${ifDefined(!args['show-label'] ? 'Dashboard' : undefined)}
      ?show-label=${args['show-label']}
      label=${ifDefined(args['show-label'] ? 'Dashboard' : undefined)}
    >
    </mdc-navitem>
    <mdc-navitem
      nav-id="2"
      icon-name="placeholder-bold"
      aria-label=${ifDefined(!args['show-label'] ? 'Calling' : undefined)}
      ?show-label=${args['show-label']}
      label=${ifDefined(args['show-label'] ? 'Calling' : undefined)}
      disabled
    >
    </mdc-navitem>
    <mdc-navitem
      nav-id="3"
      icon-name="placeholder-bold"
      badge-type="dot"
      aria-label=${ifDefined(!args['show-label'] ? 'Settings' : undefined)}
      ?show-label=${args['show-label']}
      label=${ifDefined(args['show-label'] ? 'Settings' : undefined)}
    >
    </mdc-navitem>
  </mdc-navitemlist>
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
