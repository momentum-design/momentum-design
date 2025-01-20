import type { Meta, StoryObj } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

const render = () => html`
  <mdc-checkboxgroup></mdc-checkboxgroup>`;

const meta: Meta = {
  title: 'Work In Progress/checkboxgroup',
  tags: ['autodocs'],
  component: 'mdc-checkboxgroup',
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
    class: 'custom-classname',
    style: 'margin-top: 20px;',
  },
};

export const Label: StoryObj = {
  render: () => html`
    <mdc-checkboxgroup label="Select one bro">
      <mdc-checkbox label="Checkbox Label"></mdc-checkbox>
      <mdc-checkbox label="Checkbox Label"></mdc-checkbox>
      <mdc-checkbox label="Checkbox Label"></mdc-checkbox>
      <mdc-checkbox label="Checkbox Label"></mdc-checkbox>
      <mdc-checkbox label="Checkbox Label"></mdc-checkbox>
      <mdc-checkbox label="Checkbox Label"></mdc-checkbox>
    </mdc-checkboxgroup>
  `,
};

export const Parent: StoryObj = {
  render: () => html`
    <mdc-checkboxgroup type="parent" label="Tomato is good">
      <mdc-checkbox label="1 Checkbox Label"></mdc-checkbox>
      <mdc-checkbox label="1 Checkbox Label"></mdc-checkbox>
      <mdc-checkbox label="1 Checkbox Label"></mdc-checkbox>
      <mdc-checkbox label="1 Checkbox Label"></mdc-checkbox>
    </mdc-checkboxgroup>
  `,
};

export const Nested: StoryObj = {
  render: () => html`
    <mdc-checkboxgroup type="parent" label="Tomato is good">
      <mdc-checkbox label="1 Checkbox Label"></mdc-checkbox>
      <mdc-checkboxgroup type="parent" label="Orange is good">
        <mdc-checkbox label="1 Checkbox Label"></mdc-checkbox>
        <mdc-checkbox label="1 Checkbox Label"></mdc-checkbox>
      </mdc-checkboxgroup>
      <mdc-checkbox label="1 Checkbox Label"></mdc-checkbox>
      <mdc-checkbox label="1 Checkbox Label"></mdc-checkbox>
      <mdc-checkbox label="1 Checkbox Label"></mdc-checkbox>
      <mdc-checkbox label="1 Checkbox Label"></mdc-checkbox>
    </mdc-checkboxgroup>
    
  `,
};
