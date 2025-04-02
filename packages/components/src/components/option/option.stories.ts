import { action } from '@storybook/addon-actions';
import type { Args, Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import type { TemplateResult } from 'lit';
import '.';
import { hideControls } from '../../../config/storybook/utils';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

const wrapWithDiv = (htmlString: TemplateResult) => html`<div aria-label="List box" role="listbox">${htmlString}</div>`;

const render = (args: Args) => wrapWithDiv(html`
  <mdc-option
    @click="${action('onclick')}"
    @keydown="${action('onkeydown')}"
    @keyup="${action('onkeyup')}"
    @focus="${action('onfocus')}"
    ?disabled="${args.disabled}"
    ?selected="${args.selected}"
    label="${args.label}"
    value="${args.value}"
    prefix-icon="${args['prefix-icon']}"
    aria-label="${args['aria-label']}"
  ></mdc-option>
`);

const meta: Meta = {
  title: 'Components/option',
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
    selected: {
      control: 'boolean',
    },
    label: {
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
      'data-aria-label',
      'variant',
      'tabIndex',
      'secondary-label',
      'tertiary-label',
      'side-header-text',
      'subline-text',
      'role',
      '--mdc-listitem-background-color-active',
      '--mdc-listitem-background-color-hover',
      '--mdc-listitem-default-background-color',
      '--mdc-listitem-primary-label-color',
      '--mdc-listitem-secondary-label-color',
      '--mdc-listitem-disabled-color',
      'leading-controls',
      'leading-text-primary-label',
      'leading-text-secondary-label',
      'leading-text-tertiary-label',
      'trailing-controls',
      'trailing-text-side-header',
      'trailing-text-subline',
    ]),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    label: 'Option Label',
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
      <mdc-option value="label" selected prefix-icon="placeholder-bold">
        This is a very long text and it should be truncated
      </mdc-option>
    </div>
  `,
};

export const OptionWithIcon: StoryObj = {
  render: () => wrapWithDiv(html`
    <mdc-option value="label" prefix-icon="placeholder-bold">Option Label</mdc-option>
  `),
};

export const SelectedOption: StoryObj = {
  render: () => wrapWithDiv(html`
    <mdc-option value="label" prefix-icon="placeholder-bold" selected>Option Label</mdc-option>
  `),
};

export const DisabledOption: StoryObj = {
  render: () => wrapWithDiv(html`
    <mdc-option value="label" disabled prefix-icon="placeholder-bold" selected>Option Label</mdc-option>
  `),
};
