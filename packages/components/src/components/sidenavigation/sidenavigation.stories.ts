import type { Meta, StoryObj, Args } from '@storybook/web-components';
import { html } from 'lit';
import '.';
import { action } from '@storybook/addon-actions';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { disableControls, hideControls } from '../../../config/storybook/utils';
import { VARIANTS } from './sidenavigation.constants';

const render = (args: Args) => html`
  <div style="height: 60rem; margin: 1rem">
    <mdc-sidenavigation variant="${args.variant}" customer-name=${args['customer-name']}     
      @click="${action('onclick')}"
      @focus="${action('onfocus')}">
      <!-- Upper Nav (scrollable section) -->
      <mdc-navitemlist slot="scrollable-section">
        <mdc-navitem badge-type="counter" counter="2" max-counter="66" icon-name="placeholder-bold" nav-id="1">
          Messaging
        </mdc-navitem>
        <mdc-navitem badge-type="counter" counter="3" max-counter="66" icon-name="placeholder-bold" nav-id="2" disabled>
          Meetings
        </mdc-navitem>
        <mdc-navitem badge-type="dot" icon-name="placeholder-bold" nav-id="3">Calling</mdc-navitem>
        <mdc-divider variant="gradient"></mdc-divider>
        <mdc-text>Section 1</mdc-text>
        <mdc-navitem badge-type="counter" counter="2" max-counter="66" icon-name="placeholder-bold" nav-id="4">
          Messaging
        </mdc-navitem>
        <mdc-navitem badge-type="counter" counter="3" max-counter="66" icon-name="placeholder-bold" nav-id="5">
          Meetings
        </mdc-navitem>
        <mdc-navitem badge-type="dot" icon-name="placeholder-bold">Calling</mdc-navitem>
        <mdc-divider variant="gradient" nav-id="6"></mdc-divider>
        <mdc-text>Section 2</mdc-text>
        <mdc-navitem badge-type="counter" counter="2" max-counter="66" icon-name="placeholder-bold" nav-id="7">
          Messaging
        </mdc-navitem>
        <mdc-navitem badge-type="counter" counter="3" max-counter="66" icon-name="placeholder-bold" nav-id="8">
          Meetings
        </mdc-navitem>
        <mdc-navitem badge-type="dot" icon-name="placeholder-bold" nav-id="9">Calling</mdc-navitem>
        <mdc-divider variant="gradient"></mdc-divider>
        <mdc-text>Section 3</mdc-text>
        <mdc-navitem badge-type="counter" counter="2" max-counter="66" icon-name="placeholder-bold" nav-id="10">
          Messaging
        </mdc-navitem>
        <mdc-navitem badge-type="counter" counter="3" max-counter="66" icon-name="placeholder-bold" nav-id="11">
          Meetings
        </mdc-navitem>
        <mdc-navitem badge-type="dot" icon-name="placeholder-bold" nav-id="12">Calling</mdc-navitem>
        <mdc-navitem badge-type="counter" counter="2" max-counter="66" icon-name="placeholder-bold" nav-id="13">
          Messaging
        </mdc-navitem>
        <mdc-navitem badge-type="counter" counter="3" max-counter="66" icon-name="placeholder-bold" nav-id="14">
          Meetings
        </mdc-navitem>
        <mdc-navitem badge-type="dot" icon-name="placeholder-bold" nav-id="15">Calling</mdc-navitem>
        <mdc-text>Section 4</mdc-text>
        <mdc-navitem badge-type="counter" counter="2" max-counter="66" icon-name="placeholder-bold" nav-id="16">
          Messaging
        </mdc-navitem>
        <mdc-navitem badge-type="counter" counter="3" max-counter="66" icon-name="placeholder-bold" nav-id="17">
          Meetings
        </mdc-navitem>
        <mdc-navitem badge-type="dot" icon-name="placeholder-bold" nav-id="18">Calling</mdc-navitem>
        <mdc-navitem badge-type="counter" counter="2" max-counter="66" icon-name="placeholder-bold" nav-id="19">
          Messaging
        </mdc-navitem>
        <mdc-navitem badge-type="counter" counter="3" max-counter="66" icon-name="placeholder-bold" nav-id="20">
          Meetings
        </mdc-navitem>
        <mdc-navitem badge-type="dot" icon-name="placeholder-bold" nav-id="21">Calling</mdc-navitem>
      </mdc-navitemlist>

      <!-- Lower Nav (Fixed section) -->
      <mdc-link slot="fixed-section" icon-name="placeholder-bold"><a href="#">Settings Link</a></mdc-link>
      <mdc-button slot="fixed-section" prefix-icon="placeholder-bold">Logout Button</mdc-button>
      <mdc-link slot="fixed-section" icon-name="placeholder-bold"><a href="#">Back Link</a></mdc-link>
      <mdc-icon
        slot="brand-logo"
        name="apple-bold"
        size="1.5"
        tabindex=0
        aria-label="brand logo icon"
      ></mdc-icon>
    </mdc-sidenavigation>
  </div>
`;

const meta: Meta = {
  title: 'Work In Progress/sidenavigation',
  tags: ['autodocs'],
  component: 'mdc-sidenavigation',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [VARIANTS.FLEXIBLE, VARIANTS.FIXED_EXPANDED, VARIANTS.FIXED_COLLAPSED],
    },
    ...disableControls([
      'scrollable-section',
      'fixed-section',
      'brand-logo',
    ]),
    ...hideControls([
      'expanded',
      'Context',
      'role',
      'arrowDirection',
      'navItems',
      'scrollableSlot',
      'updateTextVisibility',
      'handleKeyDown',
    ]),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    variant: VARIANTS.FLEXIBLE,
    'customer-name': 'Customer Name',
  },
};

export const Flexible: StoryObj = {
  args: { ...Example.args },
};

export const FixedExpanded: StoryObj = {
  args: {
    ...Example.args,
    variant: VARIANTS.FIXED_EXPANDED,
  },
};

export const FixedCollapsed: StoryObj = {
  args: {
    ...Example.args,
    variant: VARIANTS.FIXED_COLLAPSED,
  },
};
