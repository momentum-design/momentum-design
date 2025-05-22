import type { Meta, StoryObj, Args } from '@storybook/web-components';
import { html } from 'lit';
import { action } from '@storybook/addon-actions';
import '.';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { disableControls, hideControls } from '../../../config/storybook/utils';
import { VARIANTS, DEFAULTS } from './sidenavigation.constants';
import '../navitemlist';
import '../navitem';
import '../menuitem';
import '../menupopover';

const render = (args: Args) => html`
  <div style="height: 90vh; margin: 1rem">
    <mdc-sidenavigation variant="${args.variant}" customer-name=${args['customer-name']} 
        grabber-btn-aria-label="${args['grabber-btn-aria-label']}"
        @click="${action('onclick')}"
        @keydown="${action('onkeydown')}"
        @keyup="${action('onkeyup')}"
        @focus="${action('onfocus')}">
        <!-- Upper Nav (scrollable section) -->
        <mdc-navitemlist slot="scrollable-section" aria-label="This is a 1st navItemList">
          <mdc-navitem badge-type="counter" counter="2" max-counter="66" icon-name="placeholder-bold" nav-id="1"
            label='Messaging'>
          </mdc-navitem>
          <mdc-navitem badge-type="counter" counter="3" max-counter="66" icon-name="placeholder-bold" nav-id="2"
            label='Meetings'>
          </mdc-navitem>
          <mdc-navitem badge-type="dot" icon-name="placeholder-bold" nav-id="3" label='Calling' disabled>
          </mdc-navitem>

          <mdc-divider variant="gradient"></mdc-divider>
          <mdc-text>Section 1</mdc-text>

          <mdc-navitem badge-type="counter" counter="2" max-counter="66" icon-name="placeholder-bold" nav-id="4"
            label='Messaging'>
          </mdc-navitem>
          <mdc-navitem badge-type="counter" counter="3" max-counter="66" icon-name="placeholder-bold" nav-id="5"
            label='Meetings'>
          </mdc-navitem>
          <mdc-navitem icon-name="placeholder-bold" nav-id="6" label='Calling'>
          </mdc-navitem>

          <mdc-divider variant="gradient" nav-id="7"></mdc-divider>
          <mdc-text>Section 2</mdc-text>

          <mdc-navitem badge-type="counter" counter="2" max-counter="66" icon-name="placeholder-bold" nav-id="8"
            label='Messaging'>
          </mdc-navitem>
          <mdc-navitem icon-name="placeholder-bold" nav-id="9" label='Meetings'>
          </mdc-navitem>
          <mdc-navitem badge-type="dot" icon-name="placeholder-bold" nav-id="10" label='Calling'>
          </mdc-navitem>

          <mdc-divider variant="gradient"></mdc-divider>
          <mdc-text>Section 3</mdc-text>

          <mdc-navitem badge-type="counter" counter="2" max-counter="66" icon-name="placeholder-bold" nav-id="11"
            label='Messaging'>
          </mdc-navitem>
          <mdc-navitem badge-type="counter" counter="3" max-counter="66" icon-name="placeholder-bold" nav-id="12"
            label='Meetings'>
          </mdc-navitem>
          <mdc-navitem badge-type="dot" icon-name="placeholder-bold" nav-id="13"
            label='Calling'>
          </mdc-navitem>
          <mdc-navitem badge-type="counter" counter="2" max-counter="66" icon-name="placeholder-bold" nav-id="14"
            label='Messaging'>
          </mdc-navitem>
          <mdc-navitem badge-type="counter" counter="3" max-counter="66" icon-name="placeholder-bold" nav-id="15"
            label='Meetings'>
          </mdc-navitem>
          <mdc-navitem icon-name="placeholder-bold" nav-id="16" label='Calling'>
          </mdc-navitem>

          <mdc-divider variant="gradient"></mdc-divider>
          <mdc-text>Section 4</mdc-text>

          <mdc-navitem badge-type="counter" counter="2" max-counter="66" icon-name="placeholder-bold" nav-id="17"
            label='Messaging'>
          </mdc-navitem>
          <mdc-navitem badge-type="counter" counter="3" max-counter="66" icon-name="placeholder-bold" nav-id="18"
            label='Meetings'>
          </mdc-navitem>
          <mdc-navitem badge-type="dot" icon-name="placeholder-bold" nav-id="19"
            label='Calling'>
          </mdc-navitem>
          <mdc-navitem badge-type="counter" counter="2" max-counter="66" icon-name="placeholder-bold" nav-id="20"
            label='Messaging'
           >
          </mdc-navitem>
          <mdc-navitem icon-name="placeholder-bold" nav-id="21" label='Meetings'>
          </mdc-navitem>
          <mdc-navitem badge-type="dot" icon-name="placeholder-bold" nav-id="22" label='Calling'>
          </mdc-navitem>
        </mdc-navitemlist>

        <!-- Lower Nav (Fixed section) -->
        <mdc-navitemlist slot="fixed-section" aria-label="This is a 2nd navItemList">
          <mdc-navitem badge-type="counter" counter="3" max-counter="66" icon-name="placeholder-bold" nav-id="23"
            label='Meetings'>
          </mdc-navitem>
          <mdc-navitem badge-type="counter" counter="3" max-counter="66" icon-name="placeholder-bold" nav-id="24"
            label='Calling'>
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
    'grabber-btn-aria-label': {
      control: 'text',
    },
    ...disableControls([
      'scrollable-section',
      'fixed-section',
      'brand-logo',
      '--mdc-sidenavigation-expanded-width',
      '--mdc-sidenavigation-collapsed-width',
    ]),
    ...hideControls([
      'role',
      'Context',
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
    'grabber-btn-aria-label': 'Toggle Side navigation',
  },
};

export const NestedSideNavigation: StoryObj = {
  render: (args: Args) => html`
  <div style="height: 90vh; margin: 1rem">
    <mdc-sidenavigation variant="${args.variant}" customer-name=${args['customer-name']} 
        grabber-btn-aria-label="${args['grabber-btn-aria-label']}"
        @click="${action('onclick')}"
        @keydown="${action('onkeydown')}"
        @keyup="${action('onkeyup')}"
        @focus="${action('onfocus')}">
        <!-- Upper Nav (scrollable section) -->
        <mdc-navitemlist slot="scrollable-section" aria-label="This is a 1st navItemList">
          <mdc-navitem badge-type="counter" counter="2" max-counter="66" icon-name="placeholder-bold" nav-id="temp1"
          label='Messaging'></mdc-navitem>
          <mdc-navitem badge-type="counter" counter="2" max-counter="66" icon-name="placeholder-bold" nav-id="temp2"
          label='Messaging'></mdc-navitem>
          <mdc-navitem badge-type="counter" counter="2" max-counter="66" icon-name="placeholder-bold" nav-id="temp3"
          label='Messaging'></mdc-navitem>
          <mdc-navitem badge-type="counter" counter="2" max-counter="66" icon-name="placeholder-bold" nav-id="1"
            label='Messaging' id="menu-button-trigger"></mdc-navitem>
          <mdc-menupopover triggerid="menu-button-trigger">
              <mdc-navitem label="New" nav-id="temp4" badge-type="dot" icon-name="placeholder-bold"></mdc-navitem>
              <mdc-navitem label="Open" nav-id="temp5" badge-type="dot" icon-name="placeholder-bold"></mdc-navitem>
              <mdc-navitem label="Save" nav-id="temp6" badge-type="dot" icon-name="placeholder-bold"></mdc-navitem>
              <mdc-navitem label="navitem" nav-id="temp7" id="share-id"  icon-name="placeholder-bold"></mdc-navitem>
            <mdc-menupopover triggerid="share-id">
              <mdc-navitem label="AirDrop" nav-id="temp8" badge-type="dot" icon-name="placeholder-bold"></mdc-navitem>
              <mdc-navitem label="Messages" nav-id="temp9" badge-type="dot" icon-name="placeholder-bold"></mdc-navitem>
              <mdc-navitem label="Notes" nav-id="temp10" badge-type="dot" icon-name="placeholder-bold"></mdc-navitem>
              <mdc-navitem label="Freeform" nav-id="temp11" badge-type="dot" icon-name="placeholder-bold"></mdc-navitem>
              <mdc-navitem label="Reminder" nav-id="temp12" badge-type="dot" icon-name="placeholder-bold"></mdc-navitem>
            </mdc-menupopover>
          </mdc-menupopover>

          <mdc-divider variant="gradient"></mdc-divider>
          <mdc-text>Section 1</mdc-text>

          <mdc-navitem badge-type="counter" counter="2" max-counter="66" icon-name="placeholder-bold" nav-id="8"
            label='Messaging'>
          </mdc-navitem>
          <mdc-navitem icon-name="placeholder-bold" nav-id="9" label='Meetings'>
          </mdc-navitem>
          <mdc-navitem badge-type="dot" icon-name="placeholder-bold" nav-id="10" label='Calling'>
          </mdc-navitem>

          <mdc-divider variant="gradient"></mdc-divider>
          <mdc-text>Section 2</mdc-text>

          <mdc-navitem badge-type="counter" counter="2" max-counter="66" icon-name="placeholder-bold" nav-id="11"
            label='Messaging'>
          </mdc-navitem>
          <mdc-navitem icon-name="placeholder-bold" nav-id="12" label='Meetings'>
          </mdc-navitem>
          <mdc-navitem badge-type="dot" icon-name="placeholder-bold" nav-id="13" label='Calling'>
          </mdc-navitem>

          <mdc-divider variant="gradient"></mdc-divider>
          <mdc-text>Section 3</mdc-text>

          <mdc-navitem badge-type="counter" counter="2" max-counter="66" icon-name="placeholder-bold" nav-id="14"
            label='Messaging'>
          </mdc-navitem>
          <mdc-navitem icon-name="placeholder-bold" nav-id="15" label='Meetings'>
          </mdc-navitem>
          <mdc-navitem badge-type="dot" icon-name="placeholder-bold" nav-id="16" label='Calling'>
          </mdc-navitem>

        </mdc-navitemlist>

        <!-- Lower Nav (Fixed section) -->
        <mdc-navitemlist slot="fixed-section" aria-label="This is a 2nd navItemList">
          <mdc-navitem badge-type="counter" counter="3" max-counter="66" icon-name="placeholder-bold" nav-id="23"
            label='Meetings'>
          </mdc-navitem>
          <mdc-navitem badge-type="counter" counter="3" max-counter="66" icon-name="placeholder-bold" nav-id="24"
            label='Calling'>
          </mdc-navitem>
        </mdc-navitemlist>

        <!-- Brand Logo (Fixed section) -->
        <mdc-icon 
          slot="brand-logo"
          aria-label="This is the brand logo icon" 
          name="apple-bold">
        </mdc-icon>
    </mdc-sidenavigation>
  </div>`,
  args: {
    ...Example.args,
  },
};
