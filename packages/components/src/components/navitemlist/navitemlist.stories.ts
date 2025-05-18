import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideControls, disableControls } from '../../../config/storybook/utils';

const render = (args: Args) => html`
  <mdc-navitemlist ?isExpanded=${args.isExpanded} aria-label=${ifDefined(args['aria-label'])}>
    <mdc-navitem
      nav-id="1"
      icon-name="placeholder-bold"
      badge-type="counter"
      counter="3"
      max-counter="66"
      aria-label=${ifDefined(!args.isExpanded ? 'Dashboard' : undefined)}
      ?isExpanded=${args.isExpanded}
      label=${ifDefined(args.isExpanded ? 'Dashboard' : undefined)}
    >
    </mdc-navitem>
    <mdc-navitem
      nav-id="2"
      icon-name="placeholder-bold"
      aria-label=${ifDefined(!args.isExpanded ? 'Settings' : undefined)}
      ?isExpanded=${args.isExpanded}
      label=${ifDefined(args.isExpanded ? 'Settings' : undefined)}
      disabled
    >
    </mdc-navitem>
    <mdc-navitem
      nav-id="3"
      icon-name="placeholder-bold"
      badge-type="dot"
      aria-label=${ifDefined(!args.isExpanded ? 'Settings' : undefined)}
      ?isExpanded=${args.isExpanded}
      label=${ifDefined(args.isExpanded ? 'Settings' : undefined)}
    >
    </mdc-navitem>
  </mdc-navitemlist>
`;

const meta: Meta = {
  title: 'Work In Progress/navitemlist',
  tags: ['autodocs'],
  component: 'mdc-navitemlist',
  parameters: {
    badges: ['wip'],
  },
  render,
  argTypes: {
    isExpanded: {
      control: 'boolean',
      description: 'Determines whether the navItemList is expanded',
    },
    ...disableControls([
      'default',
    ]),
    ...hideControls([
      'listItems',
      'header-text',
      'data-aria-label',
    ]),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    isExpanded: true,
  },
};

export const collapsedNavItemList: StoryObj = {
  args: {
    'aria-label': 'This is the navItemList.',
    isExpanded: false,
  },
};
