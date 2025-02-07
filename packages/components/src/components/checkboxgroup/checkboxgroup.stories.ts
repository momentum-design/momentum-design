import type { Meta, StoryObj } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

const meta: Meta = {
  title: 'Work In Progress/checkboxgroup',
  tags: ['autodocs'],
  component: 'mdc-checkboxgroup',
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
  render: () => html`
    <mdc-checkboxgroup header-text="Checkbox group label">
      <mdc-checkbox label="Checkbox Label"></mdc-checkbox>
      <mdc-checkbox label="Checkbox Label"></mdc-checkbox>
      <mdc-checkbox label="Checkbox Label"></mdc-checkbox>
      <mdc-checkbox label="Checkbox Label"></mdc-checkbox>
      <mdc-checkbox label="Checkbox Label"></mdc-checkbox>
      <mdc-checkbox label="Checkbox Label"></mdc-checkbox>
    </mdc-checkboxgroup>
  `,
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
};
