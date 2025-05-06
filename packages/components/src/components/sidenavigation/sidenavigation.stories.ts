import type { Meta, StoryObj, Args } from '@storybook/web-components';
import { html } from 'lit';
import { action } from '@storybook/addon-actions';
import '.';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { disableControls, hideControls } from '../../../config/storybook/utils';
import { VARIANTS, DEFAULTS } from './sidenavigation.constants';

const render = (args: Args) => html`
  <div style="height: 90vh; margin: 1rem">
    <mdc-sidenavigation variant="${args.variant}" customer-name=${args['customer-name']}
        @click="${action('onclick')}"
        @keydown="${action('onkeydown')}"
        @keyup="${action('onkeyup')}"
        @focus="${action('onfocus')}">
      <!-- Upper Nav (scrollable section) -->
      <mdc-navitemlist slot="scrollable-section" aria-label='navItemList label'>
        <mdc-navitem badge-type="counter" counter="2" max-counter="66" icon-name="placeholder-bold" nav-id="1" 
        aria-label='navItem label'>
          Messaging
        </mdc-navitem>
        <mdc-navitem badge-type="counter" counter="3" max-counter="66" icon-name="placeholder-bold" nav-id="2"
        aria-label='navItem label'>
          Meetings
        </mdc-navitem>
        <mdc-navitem badge-type="dot" icon-name="placeholder-bold" nav-id="3" aria-label='navItem label' 
        disabled>Calling</mdc-navitem>
        <mdc-divider variant="gradient"></mdc-divider>
        <mdc-text>Section 1</mdc-text>
        <mdc-navitem badge-type="counter" counter="2" max-counter="66" icon-name="placeholder-bold" nav-id="4"
        aria-label='navItem label'>
          Messaging
        </mdc-navitem>
        <mdc-navitem badge-type="counter" counter="3" max-counter="66" icon-name="placeholder-bold" nav-id="5"
        aria-label='navItem label'>
          Meetings
        </mdc-navitem>
        <mdc-navitem icon-name="placeholder-bold" aria-label='navItem label'>Calling</mdc-navitem>
        <mdc-divider variant="gradient" nav-id="6"></mdc-divider>
        <mdc-text>Section 2</mdc-text>
        <mdc-navitem badge-type="counter" counter="2" max-counter="66" icon-name="placeholder-bold" nav-id="7"
        aria-label='navItem label'>
          Messaging
        </mdc-navitem>
        <mdc-navitem icon-name="placeholder-bold" nav-id="8"
        aria-label='navItem label'>
          Meetings
        </mdc-navitem>
        <mdc-navitem badge-type="dot" icon-name="placeholder-bold" nav-id="9" 
        aria-label='navItem label'>Calling</mdc-navitem>
        <mdc-divider variant="gradient"></mdc-divider>
        <mdc-text>Section 3</mdc-text>
        <mdc-navitem badge-type="counter" counter="2" max-counter="66" icon-name="placeholder-bold" nav-id="10"
        aria-label='navItem label'>
          Messaging
        </mdc-navitem>
        <mdc-navitem badge-type="counter" counter="3" max-counter="66" icon-name="placeholder-bold" nav-id="11"
        aria-label='navItem label'>
          Meetings
        </mdc-navitem>
        <mdc-navitem badge-type="dot" icon-name="placeholder-bold" nav-id="12" 
        aria-label='navItem label'>Calling</mdc-navitem>
        <mdc-navitem badge-type="counter" counter="2" max-counter="66" icon-name="placeholder-bold" nav-id="13"
        aria-label='navItem label'>
          Messaging
        </mdc-navitem>
        <mdc-navitem badge-type="counter" counter="3" max-counter="66" icon-name="placeholder-bold" nav-id="14"
        aria-label='navItem label'>
          Meetings
        </mdc-navitem>
        <mdc-navitem icon-name="placeholder-bold" nav-id="15" aria-label='navItem label'>Calling</mdc-navitem>
        <mdc-divider variant="gradient"></mdc-divider>
        <mdc-text>Section 4</mdc-text>
        <mdc-navitem badge-type="counter" counter="2" max-counter="66" icon-name="placeholder-bold" nav-id="16"
        aria-label='navItem label'>
          Messaging
        </mdc-navitem>
        <mdc-navitem badge-type="counter" counter="3" max-counter="66" icon-name="placeholder-bold" nav-id="17"
        aria-label='navItem label'>
          Meetings
        </mdc-navitem>
        <mdc-navitem badge-type="dot" icon-name="placeholder-bold" nav-id="18" 
        aria-label='navItem label'>Calling</mdc-navitem>
        <mdc-navitem badge-type="counter" counter="2" max-counter="66" icon-name="placeholder-bold" nav-id="19"
        aria-label='navItem label'>
          Messaging
        </mdc-navitem>
        <mdc-navitem icon-name="placeholder-bold" nav-id="20" aria-label='navItem label'>
          Meetings
        </mdc-navitem>
        <mdc-navitem badge-type="dot" icon-name="placeholder-bold" nav-id="21"
        aria-label='navItem label'>Calling</mdc-navitem>
      </mdc-navitemlist>

      <!-- Lower Nav (Fixed section) -->
      <mdc-navitemlist slot="fixed-section" aria-label='navItemList label'>
        <mdc-navitem badge-type="counter" counter="3" max-counter="66" icon-name="placeholder-bold" nav-id="1"
        aria-label='navItem label'>
            Meetings
        </mdc-navitem>
        <mdc-navitem badge-type="counter" counter="3" max-counter="66" icon-name="placeholder-bold" nav-id="2"
        aria-label='navItem label'>
            Meetings
        </mdc-navitem>
      </mdc-navitemlist>

      <!-- Brand Logo (Fixed section) -->
        <mdc-icon 
          slot="brand-logo"
          aria-label="This is the brand logo icon" 
          name="apple-bold">
        </mdc-icon>
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
      options: Object.values(VARIANTS),
    },
    ...disableControls([
      'scrollable-section',
      'fixed-section',
      'brand-logo',
      '--mdc-sidenavigation-expanded-width',
      '--mdc-sidenavigation-collapsed-width',
    ]),
    ...hideControls([
      'flexibleExpanded',
      'Context',
      'role',
      'arrowDirection',
      'isExpanded',
    ]),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    variant: DEFAULTS.VARIANT,
    'customer-name': '%Customer Name%',
  },
};
