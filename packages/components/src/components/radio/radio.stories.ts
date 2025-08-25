import type { Args, Meta, StoryObj } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { action } from '@storybook/addon-actions';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideControls, textControls } from '../../../config/storybook/utils';
import '../button';
import { POPOVER_PLACEMENT } from '../popover/popover.constants';

const render = (args: Args) => html`
  <mdc-radio
    @change="${action('onchange')}"
    @keydown="${action('onkeydown')}"
    @focus="${action('onfocus')}"
    @click="${action('onclick')}"
    label="${args.label}"
    name="radio"
    value="option1"
    help-text="${args['help-text']}"
    ?checked=${args.checked}
    ?disabled=${args.disabled}
    ?readonly=${args.readonly}
    ?required="${args.required}"
    data-aria-label="${args['data-aria-label']}"
    toggletip-placement="${args['toggletip-placement']}"
    toggletip-text="${args['toggletip-text']}"
    info-icon-aria-label="${args['info-icon-aria-label']}"
  ></mdc-radio>
`;

const meta: Meta = {
  title: 'Components/input/radio',
  tags: ['autodocs'],
  component: 'mdc-radio',
  render,
  parameters: {
    badges: ['stable'],
  },
  argTypes: {
    ...classArgType,
    ...styleArgType,
    readonly: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    checked: {
      control: { type: 'boolean' },
    },
    label: {
      control: { type: 'text' },
    },
    name: {
      control: { type: 'text' },
    },
    value: {
      control: { type: 'text' },
    },
    'help-text': {
      control: { type: 'text' },
    },
    'data-aria-label': {
      control: { type: 'text' },
    },
    required: {
      control: { type: 'boolean' },
    },
    'toggletip-text': {
      control: { type: 'text' },
    },
    'toggletip-placement': {
      control: { type: 'select' },
      options: Object.values(POPOVER_PLACEMENT),
    },
    'info-icon-aria-label': {
      control: { type: 'text' },
    },
    ...hideControls(['help-text-type']),
    ...textControls([
      '--mdc-radio-text-disabled-color',
      '--mdc-radio-control-inactive-hover',
      '--mdc-radio-control-inactive-pressed-color',
      '--mdc-radio-control-active-hover-color',
      '--mdc-radio-control-active-pressed-color',
      '--mdc-radio-control-active-disabled-background',
      '--mdc-radio-control-inactive-disabled-background',
      '--mdc-radio-disabled-border-color',
    ]),
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    label: 'Standard Plan',
    checked: false,
    readonly: false,
    disabled: false,
  },
};

export const withNameGroup: StoryObj = {
  render: () => html`
    <div style="display: flex; flex-direction: column;">
      Radio Group for selecting plans
      <mdc-radio name="plan" value="option1" label="Standard Plan"></mdc-radio>
      <mdc-radio name="plan" value="option2" label="Disabled Premium Plan" disabled></mdc-radio>
      <mdc-radio name="plan" value="option3" label="Premium Plan"></mdc-radio>
      <mdc-radio name="plan" value="option4" label="Premium Plan for family"></mdc-radio>
      <mdc-radio name="plan" value="option5" label="Business Plan"></mdc-radio>
      <mdc-radio name="plan" value="option5" label="Enterprise Plan"></mdc-radio>
    </div>
    <div style="display: flex; flex-direction: column; margin-top: 10px">
      Radio Group for selecting billing cycle
      <mdc-radio name="billing-cycle" value="option1" label="Weekly" disabled></mdc-radio>
      <mdc-radio name="billing-cycle" value="option1" label="Monthly" checked></mdc-radio>
      <mdc-radio name="billing-cycle" value="option2" label="Quaterly"></mdc-radio>
      <mdc-radio name="billing-cycle" value="option2" label="Yearly"></mdc-radio>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story:
          'Radio buttons with the same `name` attribute are grouped together. ' +
          'When radio buttons share the same `name`, selecting one will automatically deselect the others in the ' +
          'group. The example includes various states of radio buttons such as disabled, readonly, ' +
          'and different labels. We can use flex layout to display radio buttons in a column.',
      },
    },
  },
};

export const WithoutLabel: StoryObj = {
  args: {
    'data-aria-label': 'Radio button without label',
  },
  parameters: {
    docs: {
      description: {
        story:
          "If we don't want to display a label, we can omit the 'label' attribute, " +
          'but it is recommended to pass an aria label through data-aria-label for accessibility. ',
      },
    },
  },
};

export const Disabled: StoryObj = {
  render: () =>
    html` <div style="display: flex; flex-direction: column;">
      <mdc-radio label="Disabled Standard Plan" disabled></mdc-radio>
      <mdc-radio label="Selected But Disabled Standard Plan" disabled checked></mdc-radio>
    </div>`,
  parameters: {
    docs: {
      description: {
        story: 'To disable the radio button, use the `disabled` attribute. ',
      },
    },
  },
};

export const ReadOnly: StoryObj = {
  render: () =>
    html` <div style="display: flex; flex-direction: column;">
      <mdc-radio name="read" value="option1" label="Unselected" readonly></mdc-radio>
      <mdc-radio name="read" value="option2" label="Selected" readonly checked></mdc-radio>
    </div>`,
  parameters: {
    docs: {
      description: {
        story: 'To make the radio button read-only, use the `readonly` attribute. ',
      },
    },
  },
};

export const WithHelpText: StoryObj = {
  args: {
    label: 'Standard Plan',
    'help-text': 'Standard plan provides basic features',
    checked: false,
    disabled: false,
    readonly: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'To add help text to the radio button, use the `help-text` attribute. ',
      },
    },
  },
};
