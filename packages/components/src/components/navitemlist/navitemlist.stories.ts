import type { Meta, StoryObj } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideControls, disableControls } from '../../../config/storybook/utils';

const render = () => html`
  <mdc-navitemlist>
    <mdc-navitem nav-id="1" icon-name="placeholder-bold" badge-type="counter" counter="3" max-counter="66" 
    isExpanded >Dashboard</mdc-navitem>
    <mdc-navitem nav-id="2" icon-name="placeholder-bold" badge-type="dot" isExpanded disabled>Settings</mdc-navitem>
    <mdc-navitem nav-id="3" icon-name="placeholder-bold" isExpanded>Settings</mdc-navitem>
  </mdc-navitemlist>
`;

const meta: Meta = {
  title: 'Work In Progress/navitemlist',
  tags: ['autodocs'],
  component: 'mdc-navitemlist',
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    ...disableControls([
      'default',
    ]),
    ...hideControls([
      'listItems',
      'textItems',
      'dividerItems',
      'updateTextStyles',
      'updateDividerStyles',
      'header-text',
      'data-aria-label',
    ]),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  render,
};
