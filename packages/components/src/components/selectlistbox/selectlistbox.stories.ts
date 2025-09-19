import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import '../option';

const render = (args: Args) =>
  html` <mdc-selectlistbox aria-label="${args.ariaLabel}" class="${args.class}" style="${args.style}">
    <mdc-option value="option1" label="Option 1"></mdc-option>
    <mdc-option value="option2" label="Option 2"></mdc-option>
    <mdc-option value="option3" label="Option 3"></mdc-option>
    <mdc-option value="option4" label="Option 4"></mdc-option>
  </mdc-selectlistbox>`;

const meta: Meta = {
  title: 'Components/select/selectlistbox',
  tags: ['autodocs'],
  component: 'mdc-selectlistbox',
  render,

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
