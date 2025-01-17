import type { Args, Meta, StoryObj } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

const render = (args: Args) => html`
  <mdc-checkbox
    label="${args.label}"
    help-text="${args['help-text']}"
    ?checked="${args.checked}"
    ?disabled="${args.disabled}"
    ?indeterminate="${args.indeterminate}"
  ></mdc-checkbox>
`;

const meta: Meta = {
  title: 'Work In Progress/checkbox',
  tags: ['autodocs'],
  component: 'mdc-checkbox',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    label: 'Checkbox Label',
    'help-text': 'Checkbox Help Text',
  },
};

export const Disabled: StoryObj = {
  args: {
    label: 'Checkbox Disabled',
    disabled: false,
    indeterminate: true,
  },
};

export const HelperText: StoryObj = {
  args: {
    label: 'Checkbox Label',
    'help-text': 'Iron man proves you don’t need superpowers to save the world.',
  },
};

export const List: StoryObj = {
  render: () => html`
    <div>
      <mdc-checkbox label="Black Widow" checked></mdc-checkbox>
      <mdc-checkbox label="Captain America"></mdc-checkbox>
      <mdc-checkbox label="Hawkeye" checked></mdc-checkbox>
      <mdc-checkbox label="The Hulk" disabled></mdc-checkbox>
      <mdc-checkbox label="Iron Man" checked></mdc-checkbox>
      <mdc-checkbox label="Thor" checked></mdc-checkbox>
    </div>
  `,
};
