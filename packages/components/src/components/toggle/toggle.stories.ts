import { action } from '@storybook/addon-actions';
import type { Args, Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import '.';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { textControls, hideControls } from '../../../config/storybook/utils';
import '../button';
import { POPOVER_PLACEMENT } from '../popover/popover.constants';

import { DEFAULTS, TOGGLE_SIZE } from './toggle.constants';

const render = (args: Args) => html`
  <mdc-toggle
    name="toggleName"
    value="toggleValue"
    @focus="${action('onfocus')}"
    @change="${action('onchange')}"
    size="${args.size}"
    toggletip-placement="${args['toggletip-placement']}"
    toggletip-text="${args['toggletip-text']}"
    info-icon-aria-label="${args['info-icon-aria-label']}"
    label="${ifDefined(args.label)}"
    help-text="${ifDefined(args['help-text'])}"
    data-aria-label="${ifDefined(args['data-aria-label'])}"
    ?checked="${args.checked}"
    ?required="${args.required}"
    ?auto-focus-on-mount="${args['auto-focus-on-mount']}"
    ?disabled="${args.disabled}"
  >
  </mdc-toggle>
`;

const meta: Meta = {
  title: 'Components/toggle',
  tags: ['autodocs'],
  component: 'mdc-toggle',
  render,
  parameters: {
    badges: ['stable'],
  },
  argTypes: {
    size: {
      control: 'inline-radio',
      options: Object.values(TOGGLE_SIZE),
    },
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
    'help-text': {
      control: 'text',
    },
    'auto-focus-on-mount': {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
    name: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
    'data-aria-label': {
      control: 'text',
      description: 'Aria label for the toggle component. Required for accessibility.',
    },
    'toggletip-text': {
      control: 'text',
    },
    'toggletip-placement': {
      control: 'select',
      options: Object.values(POPOVER_PLACEMENT),
    },
    'info-icon-aria-label': {
      control: 'text',
    },
    ...hideControls(['help-text-type', 'id']),
    ...textControls([
      '--mdc-toggle-width',
      '--mdc-toggle-height',
      '--mdc-toggle-width-compact',
      '--mdc-toggle-height-compact',
      '--mdc-toggle-label-lineheight',
      '--mdc-toggle-label-fontsize',
      '--mdc-toggle-label-fontweight',
      '--mdc-toggle-label-color-disabled',
      '--mdc-toggle-help-text-color',
      '--mdc-toggle-active-hover-color',
      '--mdc-toggle-active-pressed-color',
      '--mdc-toggle-inactive-hover-color',
      '--mdc-toggle-inactive-pressed-color',
    ]),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    label: 'Toggle label',
    checked: false,
    size: DEFAULTS.SIZE,
    disabled: false,
    'help-text': '',
  },
};

export const DefaultSize: StoryObj = {
  args: {
    ...Example.args,
    size: TOGGLE_SIZE.DEFAULT,
  },
};

export const CompactSize: StoryObj = {
  args: {
    ...Example.args,
    size: TOGGLE_SIZE.COMPACT,
  },
};

export const WithHelperText: StoryObj = {
  args: {
    ...Example.args,
    'help-text': 'helper text',
  },
};

export const Disabled: StoryObj = {
  render: args =>
    html` <div style="display: flex; flex-direction: column; gap: 5px">
      <mdc-toggle label="inactive toggle" disabled size="${args.size}"></mdc-toggle>
      <mdc-toggle label="active toggle" disabled checked size="${args.size}"></mdc-toggle>
    </div>`,
};

export const WithoutLabel: StoryObj = {
  args: {
    'data-aria-label': 'This is a toggle with no label',
  },
};

export const ToggleInsideForm: StoryObj = {
  render: args => {
    const onSubmit = (event: Event) => {
      event.preventDefault();
      const formData = new FormData(event.target as HTMLFormElement);
      const selectedValues = formData.get('toggleName');
      action('Form Submitted')({ value: selectedValues });
    };
    return html`
      <form @submit="${onSubmit}">
        <fieldset>
          <legend>Form Example</legend>
          <mdc-toggle
            name="toggleName"
            value="toggleValue"
            label="Agree to Terms"
            size="${args.size}"
            required
            validation-message="Toggle this switch to continue"
          ></mdc-toggle>
          <div style="display: flex; gap: 0.25rem">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    `;
  },
};
