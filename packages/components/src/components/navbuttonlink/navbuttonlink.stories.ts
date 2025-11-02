import type { Meta, StoryObj, Args } from '@storybook/web-components';
import { html } from 'lit';
import { action } from 'storybook/actions';
import { ifDefined } from 'lit/directives/if-defined.js';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { POPOVER_PLACEMENT } from '../popover/popover.constants';
import '.';
import { hideControls } from '../../../config/storybook/utils';
import '../tooltip';

const render = (args: Args) => html`
  <mdc-navbuttonlink
    @click="${action('onclick')}"
    @keydown="${action('onkeydown')}"
    @keyup="${action('onkeyup')}"
    @focus="${action('onfocus')}"
    ?show-label=${args['show-label']}
    icon-name="${args['icon-name']}"
    postfix-icon="${args['postfix-icon']}"
    label=${args.label}
    ?disabled=${args.disabled}
    data-aria-label=${args['data-aria-label']}
    href="${args.href}"
    target="${args.target}"
    rel="${args.rel}"
    tooltip-text=${args['tooltip-text']}
    tooltip-placement=${args['tooltip-placement']}
    tooltip-boundary-padding=${args['tooltip-boundary-padding']}
    class="${ifDefined(args.class)}"
    style="${ifDefined(args.style)}"
    >${args.children}</mdc-navbuttonlink
  >
`;

const meta: Meta = {
  title: 'Components/sidenavigation/navbuttonlink',
  tags: ['autodocs'],
  component: 'mdc-navbuttonlink',
  render,
  argTypes: {
    'show-label': {
      control: 'boolean',
    },
    'icon-name': {
      control: 'text',
    },
    'postfix-icon': {
      control: 'text',
    },
    href: {
      control: 'text',
    },
    target: {
      control: 'text',
    },
    rel: {
      control: 'text',
    },
    label: {
      control: 'text',
      description: 'Label text displayed for the nav item.',
    },
    'tooltip-text': {
      control: 'text',
    },
    'tooltip-placement': {
      control: 'select',
      options: Object.values(POPOVER_PLACEMENT),
    },
    'tooltip-boundary-padding': {
      control: 'number',
    },
    disabled: {
      control: 'boolean',
    },
    ...hideControls([
      'badge-type',
      'aria-label',
      'counter',
      'max-counter',
      'inline',
      'inverted',
      'default',
      'ariaStateKey',
      'type',
      'role',
      'name',
      'value',
      'size',
      'active',
      'tabIndex',
      'auto-focus-on-mount',
      'soft-disabled',
      '--mdc-link-border-radius',
      '--mdc-link-color-active',
      '--mdc-link-color-disabled',
      '--mdc-link-color-hover',
      '--mdc-link-color-normal',
      '--mdc-link-inverted-color-active',
      '--mdc-link-inverted-color-disabled',
      '--mdc-link-inverted-color-hover',
      '--mdc-link-inverted-color-normal',
    ]),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    'show-label': true,
    'icon-name': 'placeholder-bold',
    'postfix-icon': 'pop-out-bold',
    disabled: false,
    label: 'Dashboard',
    href: 'https://momentum.design',
    target: '_blank',
  },
};
