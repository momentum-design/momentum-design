import type { Meta, StoryObj, Args } from '@storybook/web-components';
import { ifDefined } from 'lit/directives/if-defined.js';
import '.';
import { html } from 'lit';
import { action } from '@storybook/addon-actions';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideControls } from '../../../config/storybook/utils';
import '../inputchip';
import { AUTO_CAPITALIZE, AUTO_COMPLETE } from '../input/input.constants';

const render = (args: Args) => html`
  <mdc-searchfield 
  @input="${action('oninput')}"
    @change="${action('onchange')}"
    @focus="${action('onfocus')}"
    @blur="${action('onblur')}"
    label="${args.label}"
    placeholder="${args.placeholder}"
    name="${args.name}"
    value="${args.value}"
    ?disabled="${args.disabled}"
    data-aria-label="${args['aria-label']}"
    clear-aria-label="${args['clear-aria-label']}"
    class="${args.class}"
    style="${args.style}"
    ?readonly="${args.readonly}"
    maxlength="${ifDefined(args.maxlength)}"
    minlength="${ifDefined(args.minlength)}"
    autocapitalize="${args.autocapitalize}"
    ?autofocus="${args.autofocus}"
    autocomplete="${args.autocomplete}"
    dirname="${ifDefined(args.dirname)}"
    pattern="${ifDefined(args.pattern)}"
    list="${ifDefined(args.list)}"
    size="${ifDefined(args.size)}"
  ></mdc-searchfield>`;

const meta: Meta = {
  title: 'Work In Progress/searchfield',
  tags: ['autodocs'],
  component: 'mdc-searchfield',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    label: {
      control: 'text',
    },
    placeholder: {
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
    autofocus: {
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
    ...hideControls(['prefix-text', 'help-text', 'help-text-type', 'required-label', 'validation-message']),
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
    'data-aria-label': '',
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
      <mdc-inputchip label="Query: value" slot="filters" @click="${clearFilter}"></mdc-inputchip>
      <mdc-inputchip label="In: Marketing" slot="filters" @click="${clearFilter}"></mdc-inputchip>
      <mdc-inputchip label="Filter-Value 1" slot="filters" @click="${clearFilter}"></mdc-inputchip>
      <mdc-inputchip label="Filter-Value 2" slot="filters" @click="${clearFilter}"></mdc-inputchip>
      <mdc-inputchip label="Filter-Value 3" slot="filters" @click="${clearFilter}"></mdc-inputchip>
      <mdc-inputchip label="Filter-Value 4" slot="filters" @click="${clearFilter}"></mdc-inputchip>
      <mdc-chip label="This does not render" slot="filters" ></mdc-chip>
    </mdc-searchfield>
    `;
  },
};
