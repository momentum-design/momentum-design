import type { Meta, StoryObj, Args } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { action } from '@storybook/addon-actions';

import '.';
import '../avatar';
import '../spinner';
import '../button';
import '../link';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { disableControls, hideControls, textControls } from '../../../config/storybook/utils';
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
  title: 'Work In Progress/toast',
  tags: ['autodocs'],
  component: 'mdc-toast',
  render,
  parameters: {
    badges: ['wip'],
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
    ...hideControls(['isDetailVisible', 'hasDetailedSlot', 'detailedElements']),
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

export const Example: StoryObj = {
  args: {
    variant: 'custom',
    'header-text': 'Toast Title',
    'header-tag-name': 'span',
    'close-button-aria-label': 'Close toast',
    'show-more-text': 'Show more',
    'show-less-text': 'Show less',
    children: html`
      <mdc-icon name="placeholder-bold" size="1.5" slot="content-prefix"></mdc-icon>
      <p slot="toast-body-normal">This is a toast message.</p>
      <p slot="toast-body-detailed">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <mdc-link slot="footer-link" icon-name="placeholder-bold" href="#">Label</mdc-link>
      <mdc-text slot="footer-link">Not rendered</mdc-text>
      <mdc-button slot="footer-button-secondary">Secondary</mdc-button>
      <mdc-button slot="footer-button-primary">Primary</mdc-button>`,
  },
};

export const AllVariants: StoryObj = {
  name: 'All Variants',
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(2, 0fr); gap: 2rem;">
      ${[{
        variant: 'success',
        'header-text': 'Success!',
        children: html`<span slot="toast-body-normal">Your action was successful.</span>`,
      }, {
        variant: 'warning',
        'header-text': 'Warning!',
        children: html`<span slot="toast-body-normal">There was a warning.</span>`,
      }, {
        variant: 'error',
        'header-text': 'Error!',
        children: html`<span slot="toast-body-normal">An error occurred.</span>`,
      }, {
        variant: 'custom',
        'header-text': 'User Message',
        children: html`<mdc-icon name="chat-bold" size="1.5" slot="content-prefix"></mdc-icon><span slot="toast-body-normal">New message received.</span>`,
      }].map((args) =>
        render({
          'header-tag-name': 'span',
          'close-button-aria-label': 'Close toast',
          ...args,
        })
      )}
    </div>
  `,
  parameters: {
    controls: { disable: true },
  },
};

export const UserJoined: StoryObj = {
  name: 'User Joined',
  args: {
    'header-text': '',
    'header-tag-name': 'span',
    'close-button-aria-label': 'Close toast',
    children: html`
      <mdc-avatar slot="content-prefix" src="https://picsum.photos/id/63/256" size=24></mdc-avatar>
      <span slot="toast-body-normal"><b>Username</b> joined the session.</span>
    `,
  },
   parameters: {
    controls: { disable: true },
  },
};

export const Connecting: StoryObj = {
  name: 'Connecting',
  args: {
    'header-text': 'Connecting',
    'header-tag-name': 'span',
    'close-button-aria-label': 'Close toast',
    children: html`
      <mdc-spinner slot="content-prefix" size="small"></mdc-spinner>
    `,
  },
  parameters: {
    controls: { disable: true },
  },
};


