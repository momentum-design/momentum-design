import type { Meta, StoryObj } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

const render = () => html`
<div style="height: 60rem; margin: 1rem">
  <mdc-sidenavigation variant="flexible" customer-name="Cisco">
    <!-- Upper Nav (scrollable section) -->
    <mdc-navitemlist slot="scrollable-section">
      <mdc-navitem badge-type="counter" counter=2 max-counter="66" 
      icon-name="placeholder-bold" nav-id="1">MessagingMessagingMessagingMessaging</mdc-navitem>
      <mdc-navitem badge-type="counter" counter=3 max-counter="66" 
      icon-name="placeholder-bold" nav-id="2" disabled>Meetings</mdc-navitem>
      <mdc-navitem badge-type="dot" icon-name="placeholder-bold" nav-id="3">Calling</mdc-navitem>
      <mdc-divider variant="gradient"></mdc-divider>
      <mdc-text>Section 1</mdc-text>
      <mdc-navitem badge-type="counter" counter=2 max-counter="66" 
      icon-name="placeholder-bold" nav-id="4">Messaging</mdc-navitem>
      <mdc-navitem badge-type="counter" counter=3 max-counter="66" 
      icon-name="placeholder-bold" nav-id="5">Meetings</mdc-navitem>
      <mdc-navitem badge-type="dot" icon-name="placeholder-bold">Calling</mdc-navitem>
      <mdc-divider variant="gradient" nav-id="6"></mdc-divider>
      <mdc-text>Section 2</mdc-text>
      <mdc-navitem badge-type="counter" counter=2 max-counter="66" 
      icon-name="placeholder-bold" nav-id="7">Messaging</mdc-navitem>
      <mdc-navitem badge-type="counter" counter=3 max-counter="66" 
      icon-name="placeholder-bold" nav-id="8">Meetings</mdc-navitem>
      <mdc-navitem badge-type="dot" icon-name="placeholder-bold" nav-id="9">Calling</mdc-navitem>
      <mdc-divider variant="gradient"></mdc-divider>
      <mdc-text>Section 3</mdc-text>
      <mdc-navitem badge-type="counter" counter=2 max-counter="66" 
      icon-name="placeholder-bold" nav-id="10">Messaging</mdc-navitem>
      <mdc-navitem badge-type="counter" counter=3 max-counter="66" 
      icon-name="placeholder-bold" nav-id="11">Meetings</mdc-navitem>
      <mdc-navitem badge-type="dot" icon-name="placeholder-bold" nav-id="12">Calling</mdc-navitem>
      <mdc-navitem badge-type="counter" counter=2 max-counter="66" 
      icon-name="placeholder-bold" nav-id="13">Messaging</mdc-navitem>
      <mdc-navitem badge-type="counter" counter=3 max-counter="66" 
      icon-name="placeholder-bold" nav-id="14">Meetings</mdc-navitem>
      <mdc-navitem badge-type="dot" icon-name="placeholder-bold" nav-id="15">Calling</mdc-navitem>
      <mdc-text>Section 4</mdc-text>
      <mdc-navitem badge-type="counter" counter=2 max-counter="66" 
      icon-name="placeholder-bold" nav-id="16">Messaging</mdc-navitem>
      <mdc-navitem badge-type="counter" counter=3 max-counter="66" 
      icon-name="placeholder-bold" nav-id="17">Meetings</mdc-navitem>
      <mdc-navitem badge-type="dot" icon-name="placeholder-bold" nav-id="18">Calling</mdc-navitem>
      <mdc-navitem badge-type="counter" counter=2 max-counter="66" 
      icon-name="placeholder-bold" nav-id="19">Messaging</mdc-navitem>
      <mdc-navitem badge-type="counter" counter=3 max-counter="66" 
      icon-name="placeholder-bold" nav-id="20">Meetings</mdc-navitem>
      <mdc-navitem badge-type="dot" icon-name="placeholder-bold" nav-id="21">Calling</mdc-navitem>
    </mdc-navitemlist>
  
    <!-- Lower Nav (Fixed section) -->
    <mdc-link slot="fixed-section-link" icon-name="placeholder-bold"><a href="#">Settings Link</a></mdc-link>
    <mdc-button slot="fixed-section-button" prefix-icon="placeholder-bold">Logout Button</mdc-button>
    <mdc-link slot="fixed-section-link" icon-name="placeholder-bold"><a href="#">Back Link</a></mdc-link>
    <img slot="brand-logo" src="https://momentum.design/mometnum_design_logo.5016c4f24b97e0ad.svg"/>
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
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    class: 'custom-classname',
    style: 'margin-top: 20px;',
  },
};
