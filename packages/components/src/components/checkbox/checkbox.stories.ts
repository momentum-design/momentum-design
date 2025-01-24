import type { Args, Meta, StoryObj } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideControls } from '../../../config/storybook/utils';

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
    ...hideControls(['help-text-type', 'label-info']),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    label: 'I agree to the terms',
    'help-text': '',
    checked: false,
    indeterminate: false,
    disabled: false,
  },
};

export const Indeterminate: StoryObj = {
  args: {
    label: 'Checkbox Label',
    'help-text': 'Checkbox Help Text',
    checked: true,
    indeterminate: true,
  },
};

export const Disabled: StoryObj = {
  render: () => html`
    <div style="display: flex; flex-direction: column;">
      <mdc-checkbox label="Unselected" disabled></mdc-checkbox>
      <mdc-checkbox label="Selected" disabled checked></mdc-checkbox>
      <mdc-checkbox label="Indeterminate" disabled indeterminate></mdc-checkbox>
    </div>`,
};

export const HelperText: StoryObj = {
  args: {
    label: 'Email Opt In',
    'help-text': 'I agree to receiving monthly promotional emails.',
  },
};

export const List: StoryObj = {
  render: () => html`
    <div style="display: flex; flex-direction: column;">
      <mdc-checkbox label="Black Widow" checked help-text="This is a help text"></mdc-checkbox>
      <mdc-checkbox label="Captain America" checked disabled></mdc-checkbox>
      <mdc-checkbox label="Hawkeye" indeterminate disabled></mdc-checkbox>
      <mdc-checkbox label="The Hulk" help-text="This is a help text"></mdc-checkbox>
      <mdc-checkbox label="Iron Man" indeterminate></mdc-checkbox>
      <mdc-checkbox label="Thor" disabled help-text="This is a help text"></mdc-checkbox>
      <mdc-checkbox label="Captain Marvel"></mdc-checkbox>
    </div>
  `,
};

export const BasicList: StoryObj = {
  render: () => html`
    <div style="display: flex; flex-direction: column;">
      <mdc-checkbox label="Black Widow"></mdc-checkbox>
      <mdc-checkbox label="Captain America"></mdc-checkbox>
      <mdc-checkbox label="Hawkeye"></mdc-checkbox>
      <mdc-checkbox label="The Hulk"></mdc-checkbox>
      <mdc-checkbox label="Iron Man"></mdc-checkbox>
      <mdc-checkbox label="Thor"></mdc-checkbox>
    </div>
  `,
};
