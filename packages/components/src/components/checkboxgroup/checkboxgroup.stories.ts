import type { Args, Meta, StoryObj } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

const render = (args: Args) => html`
  <mdc-checkboxgroup
    headerText="${args.headerText}"
    label="${args.label}"
    type="${args.type}"
  >
    ${args.children}
  </mdc-checkboxgroup>`;

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
    headerText: 'Select your Avengers team',
    label: 'Avengers',
    type: 'parent',
    children: html`<mdc-checkbox label="Black Widow"></mdc-checkbox>
      <mdc-checkbox label="Captain America"></mdc-checkbox>
      <mdc-checkbox label="Hawkeye"></mdc-checkbox>
      <mdc-checkbox label="The Hulk"></mdc-checkbox>
      <mdc-checkbox label="Iron Man"></mdc-checkbox>
      <mdc-checkbox label="Thor"></mdc-checkbox>`,
  },
};

export const List: StoryObj = {
  args: {
    headerText: 'Select your Avengers team',
    children: html`<mdc-checkbox label="Black Widow"></mdc-checkbox>
      <mdc-checkbox label="Captain America"></mdc-checkbox>
      <mdc-checkbox label="Hawkeye"></mdc-checkbox>
      <mdc-checkbox label="The Hulk"></mdc-checkbox>
      <mdc-checkbox label="Iron Man"></mdc-checkbox>
      <mdc-checkbox label="Thor"></mdc-checkbox>`,
  },
};

export const Nested: StoryObj = {
  render: () => html`
    <mdc-checkboxgroup type="parent" label="Lorem ipsum">
      <mdc-checkbox label="Duis faucibus"></mdc-checkbox>
      <mdc-checkboxgroup type="parent" label="Nullam ac lorem">
        <mdc-checkbox label="Curabitur sit"></mdc-checkbox>
        <mdc-checkbox label="Praesent malesuada"></mdc-checkbox>
        <mdc-checkboxgroup type="parent" label="Aliquam sed justo">
          <mdc-checkbox label="Fusce laoreet"></mdc-checkbox>
          <mdc-checkbox label="Mauris tincidunt"></mdc-checkbox>
          <mdc-checkboxgroup type="parent" label="Morbi feugiat">
            <mdc-checkbox label="Phasellus vitae"></mdc-checkbox>
            <mdc-checkbox label="Vestibulum feugiat"></mdc-checkbox>
          </mdc-checkboxgroup>
        </mdc-checkboxgroup>
      </mdc-checkboxgroup>
      <mdc-checkbox label="Nam eget erat"></mdc-checkbox>
      <mdc-checkbox label="Pellentesque vitae"></mdc-checkbox>
      <mdc-checkboxgroup type="parent" label="Vivamus faucibus">
        <mdc-checkbox label="Praesent viverra"></mdc-checkbox>
        <mdc-checkbox label="Aliquam sollicitudin"></mdc-checkbox>
      </mdc-checkboxgroup>
      <mdc-checkbox label="Morbi quis urna"></mdc-checkbox>
    </mdc-checkboxgroup>
  `,
};
