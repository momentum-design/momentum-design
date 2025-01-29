import type { Args, Meta, StoryObj } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { action } from '@storybook/addon-actions';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

const render = (args: Args) => html`
  <mdc-radio
    @change="${action('onchange')}"
    @keydown="${action('onkeydown')}"
    @focus="${action('onfocus')}"
    label="${args.label}"
    name="radio"
    value="option1"
    help-text="${args['help-text']}"
    ?checked="${args.checked}"
    ?disabled="${args.disabled}"
    ?readonly="${args.readonly}"
  ></mdc-radio>
`;

const meta: Meta = {
  title: 'Work In Progress/radio',
  tags: ['autodocs'],
  component: 'mdc-radio',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    ...classArgType,
    ...styleArgType,
    readonly: {
      control: { type: 'boolean' },
      description: 'Determine that the radio button is read-only and cannot be changed.',
      defaultValue: { summary: false },
    },
    'help-text-type': {
      table: {
        disable: true,
      },
    },
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
      <mdc-radio name="plan" value="option1" label="Standard Plan" ></mdc-radio>
      <mdc-radio name="plan" value="option2" label="Disabled Premium Plan" disabled></mdc-radio>
      <mdc-radio name="plan" value="option2" label="Readonly Premium Plan" readonly></mdc-radio>
      <mdc-radio name="plan" value="option3" label="Premium Plan"></mdc-radio>
      <mdc-radio name="plan" value="option4" label="Premium Plan for family"></mdc-radio>
      <mdc-radio name="plan" value="option5" label="Business Plan"></mdc-radio>
      <mdc-radio name="plan" value="option5" label="Enterprise Plan"></mdc-radio>
    </div>`,
  parameters: {
    docs: {
      description: {
        story: 'Radio buttons with the same `name` attribute are grouped together. '
          + 'When radio buttons share the same `name`, selecting one will automatically deselect the others in the '
          + 'group. The example includes various states of radio buttons such as disabled, readonly, '
          + 'and different labels. We can use flex layout to display radio buttons in a column.',
      },
    },
  },
};

export const WithoutLabel: StoryObj = {
  args: {
    checked: false,
    disabled: false,
    readonly: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'If we don\'t want to display a label, we can omit the \'label\' attribute, '
         + 'but it is recommended to pass a aria label for accessibility. ',
      },
    },
  },
};

export const Disabled: StoryObj = {
  render: () => html`
    <div style="display: flex; flex-direction: column;">
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
  render: () => html`
    <div style="display: flex; flex-direction: column;">
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

export const WithInfoIcon: StoryObj = {
  render: () => html`
    <mdc-radio
    label="Standard Plan"
    >
      For adding a custom icon, use the slot 'label-info'
    </mdc-radio>`,
  parameters: {
    docs: {
      description: {
        story: 'To add an icon to the radio button, use the slot `label-info`. ',
      },
    },
  },
};
