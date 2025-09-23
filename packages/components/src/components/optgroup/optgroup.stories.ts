import type { Args, Meta, StoryObj } from '@storybook/web-components';
import type { TemplateResult } from 'lit';
import { html } from 'lit';

import '.';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { disableControls, textControls } from '../../../config/storybook/utils';
import '../option';

const wrapWithDiv = (htmlString: TemplateResult) => html`
  <div style="width: 20rem;" aria-label="List box" role="listbox">${htmlString}</div>
`;

const render = (args: Args) =>
  wrapWithDiv(html`
    <mdc-optgroup label="${args.label}" ?disabled="${args.disabled}" data-aria-label="${args['data-aria-label']}">
      <mdc-option label="Boston, MA"></mdc-option>
      <mdc-option label="Chicago, IL" selected></mdc-option>
      <mdc-option label="Detroit, MI"></mdc-option>
      <mdc-option label="Flagstaff, AZ"></mdc-option>
      <mdc-option label="Honolulu, HI"></mdc-option>
    </mdc-optgroup>
  `);

const meta: Meta = {
  title: 'Components/select/optgroup',
  tags: ['autodocs'],
  component: 'mdc-optgroup',
  render,

  argTypes: {
    label: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    'data-aria-label': {
      control: 'text',
    },
    ...textControls(['--mdc-optgroup-disabled-color']),
    ...disableControls(['default']),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    label: 'Office locations',
    disabled: false,
    'data-aria-label': 'Select an item from the list',
  },
};

export const List: StoryObj = {
  render: (args: Args) =>
    wrapWithDiv(html`
      <mdc-optgroup label="North America">
        <mdc-option label="Boston"></mdc-option>
        <mdc-option label="Mexico"></mdc-option>
        <mdc-option label="Toronto"></mdc-option>
      </mdc-optgroup>
      <mdc-optgroup label="Europe" ?disabled="${args.disabled}">
        <mdc-option label="Berlin"></mdc-option>
        <mdc-option label="London"></mdc-option>
        <mdc-option label="Vienna"></mdc-option>
      </mdc-optgroup>
      <mdc-optgroup label="Asia Pacific">
        <mdc-option label="Mumbai"></mdc-option>
        <mdc-option label="Sydney"></mdc-option>
      </mdc-optgroup>
    `),
  args: {
    disabled: true,
  },
};
