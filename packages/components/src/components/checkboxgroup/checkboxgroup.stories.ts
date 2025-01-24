import type { Args, Meta, StoryObj } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideControls } from '../../../config/storybook/utils';
import { TYPE } from './checkboxgroup.constants';

const render = (args: Args) => html`
  <mdc-checkboxgroup
    header-text="${args['header-text']}"
    label="${args.label}"
    type="${args.type}"
    ?disabled="${args.disabled}"
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
    children: {
      description: 'Children checkbox components.',
      control: 'text',
    },
    type: {
      control: 'radio',
      options: [TYPE.PARENT, '-'],
    },
    ...hideControls(['disabled']),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    'header-text': 'Super powers',
    label: 'Select all super powers',
    type: 'parent',
    children: html`
      <mdc-checkbox label="Flight"></mdc-checkbox>
      <mdc-checkbox label="Mind Control"></mdc-checkbox>
      <mdc-checkbox label="Super genius"></mdc-checkbox>
      <mdc-checkbox label="Super strength"></mdc-checkbox>
      <mdc-checkbox label="Tactics"></mdc-checkbox>
      <mdc-checkbox label="Weather control"></mdc-checkbox>
    `,
  },
};

export const List: StoryObj = {
  args: {
    'header-text': 'Select your Avengers team',
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
        <mdc-checkbox disabled label="Curabitur sit"></mdc-checkbox>
        <mdc-checkbox label="Praesent malesuada"></mdc-checkbox>
        <mdc-checkboxgroup type="parent" label="Aliquam sed justo">
          <mdc-checkbox label="Fusce laoreet"></mdc-checkbox>
          <mdc-checkbox label="Mauris tincidunt"></mdc-checkbox>
          <mdc-checkboxgroup disabled type="parent" label="Vivamus faucibus">
              <mdc-checkbox label="Praesent viverra"></mdc-checkbox>
              <mdc-checkbox label="Aliquam sollicitudin"></mdc-checkbox>
            </mdc-checkboxgroup>
      <mdc-checkbox label="Morbi quis urna"></mdc-checkbox>
          <mdc-checkboxgroup type="parent" label="Morbi feugiat">
            <mdc-checkbox label="Phasellus vitae"></mdc-checkbox>
            <mdc-checkbox label="Vestibulum feugiat"></mdc-checkbox>
          </mdc-checkboxgroup>
        </mdc-checkboxgroup>
      </mdc-checkboxgroup>
      <mdc-checkbox label="Nam eget erat"></mdc-checkbox>
      <mdc-checkbox label="Pellentesque vitae"></mdc-checkbox>
    </mdc-checkboxgroup>
  `,
};
