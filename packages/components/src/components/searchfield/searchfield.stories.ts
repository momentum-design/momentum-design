import type { Meta, StoryObj, Args } from '@storybook/web-components';
import { ifDefined } from 'lit/directives/if-defined.js';
import '.';
import { html } from 'lit';
import { action } from '@storybook/addon-actions';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideControls } from '../../../config/storybook/utils';
import '../inputchip';
import { AUTO_CAPITALIZE, AUTO_COMPLETE } from '../input/input.constants';

const render = (args: Args) =>
  html` <mdc-searchfield
    @input="${action('oninput')}"
    @change="${action('onchange')}"
    @focus="${action('onfocus')}"
    @blur="${action('onblur')}"
    @clear="${action('onclear')}"
    label="${args.label}"
    placeholder="${args.placeholder}"
    name="${args.name}"
    value="${args.value}"
    ?disabled="${args.disabled}"
    id="${args.id}"
    data-aria-label="${ifDefined(args['data-aria-label'])}"
    clear-aria-label="${ifDefined(args['clear-aria-label'])}"
    class="${args.class}"
    style="${args.style}"
    ?readonly="${args.readonly}"
    maxlength="${ifDefined(args.maxlength)}"
    minlength="${ifDefined(args.minlength)}"
    autocapitalize="${ifDefined(args.autocapitalize)}"
    ?auto-focus-on-mount="${args['auto-focus-on-mount']}"
    autocomplete="${ifDefined(args.autocomplete)}"
    dirname="${ifDefined(args.dirname)}"
    pattern="${ifDefined(args.pattern)}"
    list="${ifDefined(args.list)}"
    size="${ifDefined(args.size)}"
  ></mdc-searchfield>`;

const meta: Meta = {
  title: 'Components/searchfield',
  tags: ['autodocs'],
  component: 'mdc-searchfield',
  render,
  parameters: {
    badges: ['stable'],
  },
  argTypes: {
    label: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    id: {
      control: 'text',
    },
    name: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    readonly: {
      control: 'boolean',
    },
    maxlength: {
      control: 'number',
    },
    minlength: {
      control: 'number',
    },
    autocapitalize: {
      control: 'select',
      options: Object.values(AUTO_CAPITALIZE),
    },
    'auto-focus-on-mount': {
      control: 'boolean',
    },
    autocomplete: {
      control: 'text',
      options: Object.values(AUTO_COMPLETE),
    },
    dirname: {
      control: 'text',
    },
    pattern: {
      control: 'text',
    },
    list: {
      control: 'text',
    },
    size: {
      control: 'number',
    },
    'clear-aria-label': {
      control: 'text',
    },
    'data-aria-label': {
      control: 'text',
    },
    ...hideControls([
      'prefix-text',
      'help-text',
      'help-text-type',
      'required',
      'validation-message',
      'validity',
      'willValidate',
      'trailing-button',
      'leading-icon',
      'inputChips',
    ]),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    value: 'Value',
    disabled: false,
    'clear-aria-label': 'Clear',
  },
};

export const WithoutLabel: StoryObj = {
  args: {
    placeholder: 'Placeholder',
    value: 'Value',
    disabled: false,
    'clear-aria-label': 'Clear',
    'data-aria-label': 'Search',
  },
};

export const DisabledSearch: StoryObj = {
  args: {
    placeholder: 'Placeholder',
    value: 'Value',
    disabled: true,
    'clear-aria-label': 'Clear',
    'data-aria-label': 'Search',
  },
};

export const WithInputChipFilters: StoryObj = {
  render: () => {
    const clearFilter = (e: Event) => {
      (e.target as HTMLElement).remove();
    };
    return html`
      <mdc-searchfield label="Label" placeholder="Placeholder" clear-aria-label="Clear">
        <mdc-inputchip
          clear-aria-label="Clear"
          label="Query: value"
          slot="filters"
          @remove="${clearFilter}"
        ></mdc-inputchip>
        <mdc-inputchip
          clear-aria-label="Clear"
          label="In: Marketing"
          slot="filters"
          @remove="${clearFilter}"
        ></mdc-inputchip>
        <mdc-chip label="This does not render" slot="filters"></mdc-chip>
      </mdc-searchfield>
    `;
  },
};
