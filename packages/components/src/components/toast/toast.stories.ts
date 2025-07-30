import type { Meta, StoryObj, Args } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { action } from '@storybook/addon-actions';

import '.';
import '../avatar';
import '../spinner';
import '../button';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { disableControls, hideAllControls, hideControls, textControls } from '../../../config/storybook/utils';
import { VALID_TEXT_TAGS } from '../text/text.constants';

import { TOAST_VARIANT } from './toast.constants';

const render = (args: Args) => html`
  <mdc-toast
    variant="${ifDefined(args.variant)}"
    header-text="${args['header-text']}"
    header-tag-name="${args['header-tag-name']}"
    close-button-aria-label="${args['close-button-aria-label']}"
    show-more-text="${args['show-more-text']}"
    show-less-text="${args['show-less-text']}"
    class="${args.class}"
    style="${args.style}"
    @close=${action('onclose')}
  >
    ${args.children}
  </mdc-toast>
`;

const meta: Meta = {
  title: 'Components/toast',
  tags: ['autodocs'],
  component: 'mdc-toast',
  render,
  parameters: {
    badges: ['stable'],
  },
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(TOAST_VARIANT),
    },
    'header-text': { 
      control: 'text' 
    },
    'header-tag-name': { 
      control: 'select',
      options: Object.values(VALID_TEXT_TAGS),
    },
    'close-button-aria-label': {
      control: 'text',
    },
    'show-more-text': {
      control: 'text',
    },
    'show-less-text': {
      control: 'text',
    },
    ...classArgType,
    ...styleArgType,
    ...disableControls(['children']),
    ...hideControls(['isDetailVisible', 'hasDetailedSlot', 'detailedElements', 'hasFooterButtons']),
    ...textControls([
      '--mdc-toast-background-color',
      '--mdc-toast-border-color',
      '--mdc-toast-header-text-color',
      '--mdc-toast-icon-color',
      '--mdc-toast-elevation-3',
      '--mdc-toast-width',
      '--mdc-toast-padding',
    ])
  },
};

export default meta;

const DefaultArgs = {
  variant: 'custom',
  'header-tag-name': 'span',
  'close-button-aria-label': 'Close toast',
};

const DefaultFooter = html`
  <mdc-button slot="footer-button-secondary">Secondary</mdc-button>
  <mdc-button slot="footer-button-primary">Primary</mdc-button>
`;

export const Example: StoryObj = {
  args: {
    ...DefaultArgs,
    'header-text': 'Toast Title',
    'show-more-text': 'Show more',
    'show-less-text': 'Show less',
    children: html`
      <mdc-icon slot="content-prefix" name="placeholder-bold" size="1.5"></mdc-icon>
      <mdc-text slot="toast-body-normal" tagname="span">This is a toast message.</mdc-text>
      <mdc-text slot="toast-body-detailed" tagname="span">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</mdc-text>
      ${DefaultFooter}`,
  },
};

export const AllVariants: StoryObj = {
  name: 'All Variants',
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(2, 0fr); gap: 2rem;">
      ${[{
        ...DefaultArgs,
        variant: 'success',
        'header-text': 'Success!',
        children: html`<mdc-text tagname="span" slot="toast-body-normal">Your action was successful.</mdc-text>
        ${DefaultFooter}`,
      }, {
        ...DefaultArgs,
        variant: 'warning',
        'header-text': 'Warning!',
        children: html`<mdc-text tagname="span" slot="toast-body-normal">There was a warning.</mdc-text>
        ${DefaultFooter}`,
      }, {
        ...DefaultArgs,
        variant: 'error',
        'header-text': 'Error!',
        children: html`<mdc-text tagname="span" slot="toast-body-normal">An error occurred.</mdc-text>
        ${DefaultFooter}`,
      }, {
        ...DefaultArgs,
        'header-text': 'User Message',
        children: html`<mdc-icon name="chat-bold" size="1.5" slot="content-prefix"></mdc-icon>
        <mdc-text tagname="span" slot="toast-body-normal">New message received.</mdc-text>
        ${DefaultFooter}`,
      }].map((args) =>
        render({
          ...DefaultArgs,
          ...args,
        })
      )}
    </div>
  `,
   ...hideAllControls(),
};

export const UserJoined: StoryObj = {
  name: 'User Joined',
  args: {
    ...DefaultArgs,
    'header-text': '',
    children: html`
      <mdc-avatar slot="content-prefix" src="https://picsum.photos/id/63/256" size=24></mdc-avatar>
      <mdc-text tagname="span" slot="toast-body-normal"><b>Username</b> joined the session.</mdc-text>
    `,
  },
  ...hideAllControls(),
};

export const Connecting: StoryObj = {
  name: 'Connecting',
  args: {
    ...DefaultArgs,
    'header-text': 'Connecting',
    children: html`
      <mdc-spinner slot="content-prefix" size="small"></mdc-spinner>
    `,
  },
  ...hideAllControls(),
};


