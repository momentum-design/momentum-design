import type { Args, Meta, StoryObj } from '@storybook/web-components';
import type { TemplateResult } from 'lit';
import { html } from 'lit';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideAllControls } from '../../../config/storybook/utils';
import '.';
import '../menuitem';
import '../menuitemcheckbox';
import '../menuitemradio';
import '../divider';

const wrapWithDiv = (htmlString: TemplateResult) => html`<div role="menubar" style="width: 25rem;">${htmlString}</div>`;

const render = (args: Args) =>
  wrapWithDiv(
    html` <mdc-menusection label="${args.label}">
      <mdc-menuitem label="Menu item 1"></mdc-menuitem>
      <mdc-menuitem label="Menu item 2"></mdc-menuitem>
      <mdc-menuitem label="Menu item 3"></mdc-menuitem>
    </mdc-menusection>`,
  );

const meta: Meta = {
  title: 'Work In Progress/menu/menusection',
  tags: ['autodocs'],
  component: 'mdc-menusection',
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    label: {
      control: 'text',
    },
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  render,
  args: {
    label: 'Section label',
  },
  ...hideAllControls(),
};

export const MultipleMenuSections: StoryObj = {
  render: () =>
    wrapWithDiv(
      html` <mdc-menusection>
          <mdc-menuitemcheckbox label="Checkbox1"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox label="Checkbox2"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox label="Checkbox3"></mdc-menuitemcheckbox>
          <mdc-menuitemradio label="Radio1"></mdc-menuitemradio>
          <mdc-menuitemradio label="Radio2"></mdc-menuitemradio>
          <mdc-menuitemradio label="Radio3"></mdc-menuitemradio>
        </mdc-menusection>
        <mdc-divider></mdc-divider>
        <mdc-menusection>
          <mdc-menuitemradio label="Radio1"></mdc-menuitemradio>
          <mdc-menuitemradio label="Radio2"></mdc-menuitemradio>
          <mdc-menuitemradio label="Radio3"></mdc-menuitemradio>
        </mdc-menusection>
        <mdc-divider></mdc-divider>
        <mdc-menusection label="Section with menu items">
          <mdc-menuitem label="MenuItem1"></mdc-menuitem>
          <mdc-menuitem label="MenuItem2"></mdc-menuitem>
        </mdc-menusection>
        <mdc-divider></mdc-divider>
        <mdc-menusection label="Section with checkboxes and radio buttons">
          <mdc-menuitemcheckbox label="Toggle6" indicator="toggle"></mdc-menuitemcheckbox>
          <mdc-menuitemcheckbox label="Checkmark7" indicator="checkmark" aria-label="Checkbox 7"></mdc-menuitemcheckbox>
        </mdc-menusection>`,
    ),
  ...hideAllControls(),
};
