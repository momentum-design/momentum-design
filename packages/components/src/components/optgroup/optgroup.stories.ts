import type { Args, Meta, StoryObj } from '@storybook/web-components';
import type { TemplateResult } from 'lit';
import { html } from 'lit';
import '.';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideControls } from '../../../config/storybook/utils';
import '../option';

const wrapWithDiv = (htmlString: TemplateResult) => html`
  <div style="width: 20rem;" aria-label="List box" role="listbox">${htmlString}</div>
`;

const render = (args: Args) => wrapWithDiv(html`
  <mdc-optgroup
    label="${args.label}"
    ?disabled="${args.disabled}"
    data-aria-label="${args['data-aria-label']}"
  >
    <mdc-option>Boston, MA</mdc-option>
    <mdc-option selected>Chicago, IL</mdc-option>
    <mdc-option>Detroit, MI</mdc-option>
    <mdc-option>Flagstaff, AZ</mdc-option>
    <mdc-option>Honolulu, HI</mdc-option>
  </mdc-optgroup>
`);

const meta: Meta = {
  title: 'Components/optgroup',
  tags: ['autodocs'],
  component: 'mdc-optgroup',
  render,
  parameters: {
    badges: ['stable'],
  },
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
    ...hideControls([
      '--mdc-optgroup-disabled-color',
    ]),
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
  render: (args: Args) => wrapWithDiv(html`
    <mdc-optgroup label="North America">
      <mdc-option>Boston</mdc-option>
      <mdc-option>Mexico</mdc-option>
      <mdc-option>Toronto</mdc-option>
    </mdc-optgroup>
    <mdc-optgroup label="Europe" ?disabled="${args.disabled}">
      <mdc-option>Berlin</mdc-option>
      <mdc-option>London</mdc-option>
      <mdc-option>Vienna</mdc-option>
    </mdc-optgroup>
    <mdc-optgroup label="Asia Pacific">
      <mdc-option>Mumbai</mdc-option>
      <mdc-option>Sydney</mdc-option>
    </mdc-optgroup>
  `),
  args: {
    disabled: true,
  },
};
