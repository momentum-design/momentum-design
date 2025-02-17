import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

const render = (args: Args) => html`
  <mdc-formfieldgroup
    header-text="${args['header-text']}"
    description-text="${args['description-text']}"
    data-aria-label="${args['data-aria-label']}"
  >
    <li>Loreim impusum</li>
    <li>Donec a lectus</li>
    <li>Praesent maximus</li>
    <li>Aenean id</li>
    <li>Integer non</li>
  </mdc-formfieldgroup>`;

const meta: Meta = {
  title: 'Work In Progress/formfieldgroup',
  tags: ['autodocs'],
  component: 'mdc-formfieldgroup',
  render,
  parameters: {
    badges: ['internal'],
  },
  argTypes: {
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    'header-text': 'Header text',
    'description-text': 'This is an example description text.',
    'data-aria-label': 'Header text aria label',
  },
};
