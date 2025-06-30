import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { action } from '@storybook/addon-actions';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideControls, disableControls } from '../../../config/storybook/utils';
import '../navitem';
import '../sidenavigation';

const render = (args: Args) => html`
  <div style="height: 70vh; margin: 1rem">
    <mdc-sidenavigation @activechange=${action('onactivechange')} grabber-btn-aria-label="This is a grabber button.">
      <mdc-navitemlist
        aria-label=${ifDefined(args['aria-label'])}
        slot="scrollable-section"
        show-label=${ifDefined(args.showLabel)}
      >
        <mdc-text>Section header</mdc-text>
        <mdc-navitem
          nav-id="1"
          icon-name="placeholder-bold"
          badge-type="counter"
          counter="3"
          max-counter="66"
          aria-label="Dashboard"
          label="Dashboard"
        >
        </mdc-navitem>
        <mdc-navitem nav-id="2" icon-name="placeholder-bold" aria-label="Calling" label="Calling" disabled>
        </mdc-navitem>
        <mdc-navitem nav-id="3" icon-name="placeholder-bold" badge-type="dot" aria-label="Settings" label="Settings">
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
    showLabel: {
      control: 'boolean',
    },
    'aria-label': {
      control: 'text',
    },
    ...disableControls(['default']),
    ...hideControls(['navItems', 'aria-orientation']),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    'aria-label': 'This is a navitemlist.',
    showLabel: true,
  },
};
