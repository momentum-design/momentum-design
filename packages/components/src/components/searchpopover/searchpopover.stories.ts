import type { Meta, StoryObj, Args } from '@storybook/web-components';
import { ifDefined } from 'lit/directives/if-defined.js';
import '.';
import { html } from 'lit';
import { action } from 'storybook/actions';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideControls } from '../../../config/storybook/utils';
import '../inputchip';
import '../list';
import '../listitem';
import '../text';
import '../banner';
import { AUTO_CAPITALIZE, AUTO_COMPLETE } from '../input/input.constants';

const allItems = [
  'Apple',
  'Banana',
  'Orange',
  'Grapes',
  'Pineapple',
  'Mango',
  'Strawberry',
  'Blueberry',
  'Watermelon',
  'Kiwi',
];

const render = (args: Args) => {
  const filteredItems = new Set(allItems.filter(item => item.toLowerCase().includes(args.value.toLowerCase())));

  return html` <mdc-searchpopover
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
    ?display-popover="${args['display-popover']}"
  >
    <mdc-list> ${Array.from(filteredItems).map(item => html`<mdc-listitem label="${item}"></mdc-listitem>`)} </mdc-list>
  </mdc-searchpopover>`;
};
const meta: Meta = {
  title: 'Widgets/searchpopover',
  tags: ['autodocs'],
  component: 'mdc-searchpopover',
  render,
  argTypes: {
    'display-popover': {
      control: 'boolean',
    },
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
    'display-popover': true,
    value: 'Banana',
    label: 'Fruits',
    placeholder: 'Placeholder',
    disabled: false,
    'clear-aria-label': 'Clear',
  },
  parameters: {
    docs: {
      description: {
        story: html`<mdc-text tagname="span" style="margin-bottom: 0.5rem;">
            The Searchpopover combines the Searchfield and Popover component to a widget, setting the role of the
            Searchfield to "combobox" and the Popover to "dialog" for accessibility purposes.
            <br /><br />In the example below the Searchpopover component is created with a List passed into the slot
            from the consumer side.
            <br />
          </mdc-text>
          <mdc-banner
            variant="warning"
            label="When using the Searchpopover, make sure to control the filtering of content, opening &amp; closing of the popover (via the display-popover attribute), and selection of items from the popover on the consumer side."
          ></mdc-banner> `,
      },
    },
  },
};
