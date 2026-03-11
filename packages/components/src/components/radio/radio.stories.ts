import type { Args, Meta, StoryObj } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { action } from 'storybook/actions';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { describeStory, hideAllControls, hideControls } from '../../../config/storybook/utils';
import '../button';
import '../radiogroup';

const render = (args: Args) => html`
  <div role="main">
    <mdc-radio
      @change="${action('onchange')}"
      @keydown="${action('onkeydown')}"
      @focus="${action('onfocus')}"
      @click="${action('onclick')}"
      label="${args.label}"
      name="${args.name}"
      value="${args.value}"
      help-text="${args['help-text']}"
      ?checked=${args.checked}
      ?disabled=${args.disabled}
      ?readonly=${args.readonly}
      ?soft-disabled=${args['soft-disabled']}
      ?required="${args.required}"
      ?auto-focus-on-mount="${args['auto-focus-on-mount']}"
    ></mdc-radio>
  </div>
`;

const meta: Meta = {
  title: 'Components/radio',
  tags: ['autodocs'],
  component: 'mdc-radio',
  render,

  argTypes: {
    readonly: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    'soft-disabled': {
      control: 'boolean',
    },
    checked: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
    name: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
    'help-text': {
      control: 'text',
    },
    required: {
      control: 'boolean',
    },
    'auto-focus-on-mount': {
      control: 'boolean',
    },
    ...hideControls([
      'help-text-type',
      'id',
      'internals',
      'validation-message',
      'validity',
      'willValidate',
      'toggletip-placement',
      'toggletip-strategy',
      'toggletip-text',
      'info-icon-aria-label',
      'help-text',
      '--mdc-help-text-color',
      '--mdc-help-text-font-size',
      '--mdc-help-text-font-weight',
      '--mdc-help-text-line-height',
      'Shadow Part Name: "help-text"',
      'Shadow Part Name: "help-text-container"',
      'Shadow Part Name: "helper-icon"',
      'Shadow Part Name: "info-icon-btn"',
      'Slot Name: "help-icon"',
      'Slot Name: "help-text"',
      'Slot Name: "toggletip"',
    ]),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    label: 'Standard Plan',
    name: 'radio',
    value: 'option1',
    checked: false,
    readonly: false,
    disabled: false,
    'soft-disabled': false,
  },
};

export const withNameGroup: StoryObj = {
  render: () => html`
    <div role="main">
      <mdc-radiogroup label="Radio Group for selecting plans">
        <mdc-radio name="plan" value="option1" label="Standard Plan"></mdc-radio>
        <mdc-radio name="plan" value="option2" label="Disabled Premium Plan" disabled></mdc-radio>
        <mdc-radio name="plan" value="option3" label="Premium Plan"></mdc-radio>
        <mdc-radio name="plan" value="option4" label="Premium Plan for family"></mdc-radio>
        <mdc-radio name="plan" value="option5" label="Business Plan"></mdc-radio>
        <mdc-radio name="plan" value="option5" label="Enterprise Plan"></mdc-radio>
      </mdc-radiogroup>
      <mdc-radiogroup label="Radio Group for selecting billing cycle" style="margin-top: 2rem;">
        <mdc-radio name="billing-cycle" value="option1" label="Weekly" disabled></mdc-radio>
        <mdc-radio name="billing-cycle" value="option1" label="Monthly" checked></mdc-radio>
        <mdc-radio name="billing-cycle" value="option2" label="Quaterly"></mdc-radio>
        <mdc-radio name="billing-cycle" value="option2" label="Yearly"></mdc-radio>
      </mdc-radiogroup>
    </div>
  `,
  parameters: {
    ...describeStory(
      html`
        <p role="region">
          Radio buttons with the same <b>name</b> attribute are grouped together. When radio buttons share the same
          <b>name</b>, selecting one will automatically deselect the others in the group. The example includes various
          states of radio buttons such as disabled, readonly, and different labels. We can use flex layout to display
          radio buttons in a column.
        </p>
      `,
      true,
    ),
    ...hideAllControls(true),
  },
};

export const WithoutLabel: StoryObj = {
  render: () => html`<div role="main"><mdc-radio aria-label="Option 1 without label"></mdc-radio></div> `,
  parameters: {
    ...describeStory(
      html`<p role="region">
        If we don't want to display a label, we can omit the 'label' attribute, but it is recommended to pass an aria
        label for accessibility.
      </p>`,
      true,
    ),
    ...hideAllControls(true),
  },
};

export const Disabled: StoryObj = {
  render: () =>
    html` <div role="main">
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <mdc-radio label="Disabled Standard Plan" disabled></mdc-radio>
        <mdc-radio label="Selected But Disabled Standard Plan" disabled checked></mdc-radio>
      </div>
    </div>`,
  ...describeStory(html`<p role="region">To disable the radio button, use the <b>disabled</b> attribute.</p>`),
};

export const ReadOnly: StoryObj = {
  render: () =>
    html` <div role="main">
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <mdc-radio name="read" value="option1" label="Unselected" readonly></mdc-radio>
        <mdc-radio name="read" value="option2" label="Selected" readonly checked></mdc-radio>
      </div>
    </div>`,
  ...describeStory(html`<p role="region">To make the radio button read-only, use the <b>readonly</b> attribute.</p>`),
};
