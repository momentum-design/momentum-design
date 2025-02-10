import { action } from '@storybook/addon-actions';
import type { Args, Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '.';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { disableControls } from '../../../config/storybook/utils';
import '../button';
import { TYPE } from './checkboxgroup.constants';

const render = (args: Args) => html`
  <mdc-checkboxgroup
    label="${args.label}"
    type="${args.type}"
    .disabled="${args.disabled}"
    data-aria-label="${args['data-aria-label']}"
    header-text="${args['header-text']}"
  >
    <mdc-checkbox label="Checkbox Label"></mdc-checkbox>
    <mdc-checkbox label="Checkbox Label"></mdc-checkbox>
    <mdc-checkbox label="Checkbox Label"></mdc-checkbox>
    <mdc-checkbox label="Checkbox Label"></mdc-checkbox>
    <mdc-checkbox label="Checkbox Label"></mdc-checkbox>
    <mdc-checkbox label="Checkbox Label"></mdc-checkbox>
  </mdc-checkboxgroup>
`;

const meta: Meta = {
  title: 'Work In Progress/checkboxgroup',
  tags: ['autodocs'],
  render,
  component: 'mdc-checkboxgroup',
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    label: {
      control: 'text',
      if: {
        arg: 'type',
        eq: TYPE.PARENT,
      },
    },
    'header-text': {
      control: 'text',
      if: {
        arg: 'type',
        neq: TYPE.PARENT,
      },
    },
    disabled: {
      control: 'boolean',
      if: {
        arg: 'type',
        eq: TYPE.PARENT,
      },
    },
    'data-aria-label': {
      control: 'text',
    },
    type: {
      control: 'radio',
      options: Object.values(TYPE),
    },
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    'header-text': 'Checkbox group label',
    label: 'Select all checkbox groups',
    type: TYPE.NONE,
  },
};

export const List: StoryObj = {
  render: () => html`
    <mdc-checkboxgroup header-text="Select your Avengers team">
      <mdc-checkbox label="Black Widow"></mdc-checkbox>
      <mdc-checkbox label="Captain America"></mdc-checkbox>
      <mdc-checkbox label="Hawkye"></mdc-checkbox>
      <mdc-checkbox label="The Hulk"></mdc-checkbox>
      <mdc-checkbox label="Iron Man"></mdc-checkbox>
      <mdc-checkbox label="Thor"></mdc-checkbox>
    </mdc-checkboxgroup>
  `,
  argTypes: {
    ...disableControls(['type', 'header-text', 'data-aria-label']),
  },
};

export const ParentList: StoryObj = {
  render: () => html`
    <mdc-checkboxgroup
      data-aria-label="Super powers (check all that apply)"
      label="Super powers (check all that apply)"
      type="parent"
    >
      <mdc-checkbox label="Flight"></mdc-checkbox>
      <mdc-checkbox label="Mind control"></mdc-checkbox>
      <mdc-checkbox label="Super genius"></mdc-checkbox>
      <mdc-checkbox label="Super strength"></mdc-checkbox>
      <mdc-checkbox label="Tactics"></mdc-checkbox>
      <mdc-checkbox label="Weather control"></mdc-checkbox>
    </mdc-checkboxgroup>
  `,
  argTypes: {
    ...disableControls(['type', 'header-text', 'data-aria-label']),
  },
};

export const FormField: StoryObj = {
  render: () => {
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const formData = new FormData(event.target as HTMLFormElement);
      const selectedValues = formData.getAll('super-power');
      action('Form Submitted')({ value: selectedValues });
    };

    return html`
      <form @submit=${handleSubmit}>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <mdc-checkboxgroup
            data-aria-label="Super powers (check all that apply)"
            label="Super powers (check all that apply)"
            type="parent"
          >
            <mdc-checkbox label="Flight" value="flight" name="super-power"></mdc-checkbox>
            <mdc-checkbox label="Mind Control" value="mind-control" name="super-power"></mdc-checkbox>
            <mdc-checkbox label="Super genius" disabled value="super-genius" name="super-power"></mdc-checkbox>
            <mdc-checkbox label="Super strength" value="super-strength" name="super-power"></mdc-checkbox>
            <mdc-checkbox label="Tactics" value="tactics" name="super-power"></mdc-checkbox>
            <mdc-checkbox label="Weather control" disabled value="weather-control" name="super-power"></mdc-checkbox>
          </mdc-checkboxgroup>
          <mdc-button type="submit">Submit</mdc-button>
        </div>
      </form>
  `;
  },
  argTypes: {
    ...disableControls(['type', 'header-text', 'data-aria-label']),
  },
};
