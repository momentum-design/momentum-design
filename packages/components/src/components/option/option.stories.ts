import { action } from 'storybook/actions';
import type { Args, Meta, StoryObj } from '@storybook/web-components';
import type { TemplateResult } from 'lit';
import { html } from 'lit';

import '.';
import '../tooltip';
import '../avatar';
import '../button';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { disableControls, hideAllControls, hideControls } from '../../../config/storybook/utils';

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
      <mdc-avatar
        slot="leading-controls"
        presence="active"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAAXNSR0IB2cksfwAAAAlwSFlzAACZygAAmcoB45GkIgAAAC1QTFRFejgAxIlH6urq4Z9Wj04Wm14nr3M47LFuy5Za///+t24d8c6o9MOA4NbNzrObv1/50QAAA3JJREFUeJzt2M9r02AYB/DUpd1AJgt1Je4gUnRsh4rl1XWIh461Zd42u5bpQSajpZsgSsR42GFlOjLEHbz1IAzcPPQP8BK3i4cdrCA7KdKCA2Uymr/BN83yq23W52n8cckXspW8PJ++70uaN28YxosXL168eDkpia4btfjEq86NaXGgI9ArinGnNlYUHwJ64PwtfSe0mUnxj52aJkOzneuzcSbp1DbNsPlO9T7x2knNUx3H4Hui96SgKPVqI/ENRcrFtdNpwCTQ2X6wEzYTCTT+1b7HIbVq7n4tlV6ZwOV+/dMhrN5fKtmA4QPj42eY8NIOfDH7AhsE+3OmPmoB9NRyqRVYD0Yjh5mspFSrxjRWa4ehTLYeBgJ0DksRRQrlMnryvFLfp9I8DPhlzoF6Geybo5hGA02Jw4B1RwBWzyyqF0K7+ggQuO0WuOkEXAYCp5yAESDQ7wQMA4EzGhD5Jsu7iiLTHF+Tl+BARBYFIlrzcWc/fBEI9L1+L1bM0oqWvdinC0DALy5XdGC5YkQUrgABVv3SdgDofqgmpva4aQSVPRIF/pYYJkhEE9ATXSrH4QAhUUmif9VKgZBxqcgNlcvQemZBBbimYIC0W2DyLwHbYKCnHVAub4GBAN8WAF8G9FpMaEkaN/YE4PHKEp/ag7wt23c2cQAZbx4BDqhUBI4ixAiHAgLkxt44F3zKcauCJMXEKB8bQwJEoEMoar3nKcQPoQB/o9Mcz5kHbg4osECBOVpYOD5SKIA1Af1wC4RSmAuRYQh5owJFE5iA3480IE2BKQ0IdQcIJpDmuEEkEDSAKQPA1B8DE38QOIsEFtwDcx+KNmAGB6TJPTsw4AYY7AKYpEDUBrx1AyxQALEqqOlpBeCrggZwboEQBWa6B3ytwOa/BQIkJES5rAVYwgJrFqCAB/wGMKcB80iAJWNuget0acqbwBYeIK4AhoxZAF4FUMtCAyANoKADcRwQbKyuRWNxLePu6jpgfUDB1TNZftUOIDvAnF+jD2YJ7QltVn1eKyABun8OV2uKlsaLAGQX1lt2frj65LkWwI8oD2zsLjYDkdO7z6D1/iNZvtUMjNyX5RUg0Ev3qj8OtNcXRp7Tk++AAPuC7nkHM/bQczJ428cUjuTWPEL9nJKFDWuxUtTfxmHCJjLqg35uFrdX8OLFi5f/ld/YPBWUjcanfAAAAABJRU5ErkJggg=="
      ></mdc-avatar>
      <mdc-button slot="leading-controls">Click me</mdc-button>
    `,
  },
};
