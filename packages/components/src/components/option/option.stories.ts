import { action } from '@storybook/addon-actions';
import type { Args, Meta, StoryObj } from '@storybook/web-components';
import type { TemplateResult } from 'lit';
import { html } from 'lit';

import '.';
import '../tooltip';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { disableControls, hideAllControls, hideControls, textControls } from '../../../config/storybook/utils';

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
    ></mdc-option>
  `);

const meta: Meta = {
  title: 'Components/select/option',
  tags: ['autodocs'],
  component: 'mdc-option',
  render,
  parameters: {
    badges: ['stable'],
  },
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
    ...textControls([
      '--mdc-listitem-background-color-active',
      '--mdc-listitem-background-color-hover',
      '--mdc-listitem-default-background-color',
      '--mdc-listitem-primary-label-color',
      '--mdc-listitem-secondary-label-color',
      '--mdc-listitem-disabled-color',
      '--mdc-listitem-column-gap',
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
