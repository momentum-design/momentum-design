import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { action } from '@storybook/addon-actions';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideControls } from '../../../config/storybook/utils';
import { DEFAULTS, TOGGLE_SIZE } from './toggle.constants';

const render = (args: Args) => html`
  <mdc-toggle
      name="toggleName"
      value="toggleValue"
      @keydown="${action('onKeyDown')}"
      @keyup="${action('onKeyUp')}"
      @focus="${action('onFocus')}"
      size="${args.size}"
      label="${args.label}"
      aria-label="${args['aria-label']}"
      ?checked="${args.checked}"
      ?disabled="${args.disabled}">
    </mdc-toggle>
`;

const meta: Meta = {
  title: 'Work In Progress/toggle',
  tags: ['autodocs'],
  component: 'mdc-toggle',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    size: {
      control: { type: 'inline-radio' },
      options: Object.values(TOGGLE_SIZE),
    },
    'aria-label': {
      control: 'text',
      description: 'Aria label for the toggle component. Required for accessibility.',
    },
    ...hideControls(['help-text-type']),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    label: 'Toggle label',
    checked: false,
    disabled: false,
    size: DEFAULTS.SIZE,
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

export const WithInfoIcon: StoryObj = {
  render: () => html`
    <mdc-toggle
    label="Toggle label"
    checked
    >
      <mdc-icon slot="label-info" name="info-circle-filled"></mdc-icon>
    </mdc-toggle>`,
};

export const Disabled: StoryObj = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 5px">
      <mdc-toggle label="inactive toggle" disabled></mdc-toggle>
      <mdc-toggle label="active toggle" disabled checked></mdc-toggle>
    </div>`,
};

export const WithoutLabel: StoryObj = {
  args: {
    ...Example.args,
    label: '',
    'aria-label': 'Toggle component',
  },
};
