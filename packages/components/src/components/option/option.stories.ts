import { action } from 'storybook/actions';
import type { Args, Meta, StoryObj } from '@storybook/web-components';
import type { TemplateResult } from 'lit';
import { html } from 'lit';

import '.';
import '../tooltip';
import '../icon';
import '../avatar';
import '../button';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { disableControls, hideAllControls, hideControls } from '../../../config/storybook/utils';
import { imageFixtures } from '../../../config/playwright/setup/utils/imageFixtures';

const wrapWithDiv = (htmlString: TemplateResult) => html`
  <div aria-label="List box" role="listbox">${htmlString}</div>
`;

const render = (args: Args) =>
  wrapWithDiv(html`
    <mdc-option
      @click="${action('onclick')}"
      @keydown="${action('onkeydown')}"
      @keyup="${action('onkeyup')}"
      @focus="${action('onfocus')}"
      ?disabled="${args.disabled}"
      ?soft-disabled="${args['soft-disabled']}"
      ?selected="${args.selected}"
      label="${args.label}"
      secondary-label="${args['secondary-label']}"
      value="${args.value}"
      prefix-icon="${args['prefix-icon']}"
      aria-label="${args['aria-label']}"
      >${args.children}</mdc-option
    >
  `);

const meta: Meta = {
  title: 'Components/select/option',
  tags: ['autodocs'],
  component: 'mdc-option',
  render,

  argTypes: {
    disabled: {
      control: 'boolean',
    },
    'soft-disabled': {
      control: 'boolean',
    },
    selected: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
    'secondary-label': {
      control: 'text',
    },
    value: {
      control: 'text',
    },
    'aria-label': {
      control: 'text',
    },
    'prefix-icon': {
      control: 'text',
    },
    ...hideControls([
      'id',
      'name',
      'validation-message',
      'validity',
      'willValidate',
      'variant',
      'tabIndex',
      'tertiary-label',
      'side-header-text',
      'subline-text',
      'role',
      'leading-controls',
      'leading-text-primary-label',
      'leading-text-secondary-label',
      'leading-text-tertiary-label',
      'trailing-controls',
      'trailing-text-side-header',
      'trailing-text-subline',
    ]),
    ...disableControls(['default']),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    label: 'Option Label',
    'secondary-label': 'Secondary Label',
    disabled: false,
    selected: false,
    value: '',
    'prefix-icon': '',
    'aria-label': 'Select an option label',
  },
};

export const OptionWithLongText: StoryObj = {
  render: () => html`
    <div style="width: 15rem;" aria-label="List box" role="listbox">
      <mdc-option id="option-1" label="This is a very long text and it should be truncated."></mdc-option>
      <mdc-tooltip triggerID="option-1" show-arrow> This is a very long text and it should be truncated. </mdc-tooltip>
      <mdc-text>Note: The consumer needs to attach mdc-tooltip to the option from their end</mdc-text>
    </div>
  `,
  ...hideAllControls(),
};

export const OptionWithIcon: StoryObj = {
  args: {
    'prefix-icon': 'placeholder-bold',
    label: 'Option Label',
  },
};

export const SelectedOption: StoryObj = {
  args: {
    'prefix-icon': 'placeholder-bold',
    label: 'Option Label',
    selected: true,
  },
};

export const DisabledOption: StoryObj = {
  args: {
    'prefix-icon': 'placeholder-bold',
    label: 'Option Label',
    disabled: true,
  },
};

export const OptionWithLeadingControls: StoryObj = {
  args: {
    label: 'Its chai tea time',
    selected: true,
    children: html`
      <mdc-avatar slot="leading-controls" presence="active" src="${imageFixtures.avatar}"></mdc-avatar>
      <mdc-button slot="leading-controls">Click me</mdc-button>
    `,
  },
};

export const TEst: StoryObj = {
  render: () => html`
    <mdc-option prefix-icon="placeholder-bold" label="Option 1"></mdc-option><br /><br />
    <mdc-option prefix-icon="placeholder-bold" label="Option 2">
      <mdc-avatar slot="leading-controls" presence="active" src="${imageFixtures.avatar}"></mdc-avatar>
      <mdc-button slot="leading-controls">Click me</mdc-button> </mdc-option
    ><br /><br />
    <mdc-option prefix-icon="placeholder-bold" label="Option 3">
      <mdc-icon slot="leading-controls" name="user-bold"></mdc-icon>
      <mdc-button slot="leading-controls">No clicking</mdc-button>
    </mdc-option>
  `,
};
