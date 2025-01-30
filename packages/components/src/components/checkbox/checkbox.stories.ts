import type { Args, Meta, StoryObj } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { action } from '@storybook/addon-actions';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideControls } from '../../../config/storybook/utils';

const render = (args: Args) => html`
  <mdc-checkbox
    label="${args.label}"
    help-text="${args['help-text']}"
    ?hide-text="${args['hide-text']}"
    ?checked="${args.checked}"
    ?disabled="${args.disabled}"
    ?indeterminate="${args.indeterminate}"
    @change="${action('onchange')}"
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
    'hide-text': false,
    checked: false,
    indeterminate: false,
    disabled: false,
  },
};

export const HelperText: StoryObj = {
  args: {
    label: 'Email Opt In',
    'help-text': 'I agree to receiving monthly promotional emails.',
  },
};

export const Indeterminate: StoryObj = {
  args: {
    label: 'Checkbox Label',
    'help-text': 'Checkbox Help Text',
    indeterminate: true,
  },
};

export const Disabled: StoryObj = {
  parameters: {
    a11y: {
      element: 'mdc-checkbox',
    },
  },
  render: () => html`
    <div style="display: flex; flex-direction: column;">
      <mdc-checkbox label="Unselected" disabled></mdc-checkbox>
      <mdc-checkbox label="Selected" disabled checked></mdc-checkbox>
      <mdc-checkbox label="Indeterminate" disabled indeterminate></mdc-checkbox>
      <mdc-checkbox label="Unselected" disabled help-text="This is a help text"></mdc-checkbox>
      <mdc-checkbox label="Selected" disabled help-text="This is a help text" checked></mdc-checkbox>
      <mdc-checkbox label="Indeterminate" disabled help-text="This is a help text" indeterminate></mdc-checkbox>
    </div>`,
};

export const List: StoryObj = {
  render: () => html`
    <div style="display: flex; flex-direction: column;">
      <mdc-checkbox
        @change="${action('onchange')}"
        label="Black Widow"
        checked
        help-text="This is a help text"
      ></mdc-checkbox>
      <mdc-checkbox @change="${action('onchange')}" label="Captain America" checked disabled></mdc-checkbox>
      <mdc-checkbox @change="${action('onchange')}" label="Hawkeye" indeterminate disabled></mdc-checkbox>
      <mdc-checkbox @change="${action('onchange')}" label="The Hulk" help-text="This is a help text"></mdc-checkbox>
      <mdc-checkbox @change="${action('onchange')}" label="Iron Man" indeterminate></mdc-checkbox>
      <mdc-checkbox @change="${action('onchange')}" label="Thor" help-text="This is a help text"></mdc-checkbox>
      <mdc-checkbox @change="${action('onchange')}" label="Captain Marvel"></mdc-checkbox>
    </div>
  `,
};
