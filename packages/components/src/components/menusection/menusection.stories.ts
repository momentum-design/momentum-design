import type { Meta, StoryObj } from '@storybook/web-components';
import type { TemplateResult } from 'lit';
import { html } from 'lit';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { disableControls } from '../../../config/storybook/utils';
import '.';
import '../menuitem';
import '../menuitemcheckbox';
import '../menuitemradio';
import '../divider';

const wrapWithDiv = (htmlString: TemplateResult) => html`<div role="menubar" style="width: 25rem;">${htmlString}</div>`;

const render = () => wrapWithDiv(html`
    <mdc-menusection>
      <mdc-menuitemcheckbox label="Checkbox1" aria-label="Checkbox 1">Checkbox1</mdc-menuitemcheckbox>
      <mdc-menuitemcheckbox label="Checkbox2" aria-label="Checkbox 2">Checkbox2</mdc-menuitemcheckbox>
      <mdc-menuitemcheckbox label="Checkbox3" aria-label="Checkbox 3">Checkbox3</mdc-menuitemcheckbox>
      <mdc-menuitemradio label="Radio1" aria-label="Radio 1">Radio1</mdc-menuitemradio>
      <mdc-menuitemradio label="Radio2" aria-label="Radio 2">Radio2</mdc-menuitemradio>
      <mdc-menuitemradio label="Radio3" aria-label="Radio 3">Radio3</mdc-menuitemradio>
    </mdc-menusection>
    <mdc-divider></mdc-divider>
    <mdc-menusection>
      <mdc-menuitemradio label="Radio1" aria-label="Radio 1">Radio1</mdc-menuitemradio>
      <mdc-menuitemradio label="Radio2" aria-label="Radio 2">Radio2</mdc-menuitemradio>
      <mdc-menuitemradio label="Radio3" aria-label="Radio 3">Radio3</mdc-menuitemradio>
    </mdc-menusection>
    <mdc-divider></mdc-divider>
    <mdc-menusection>
      <mdc-menuitem label="MenuItem1" aria-label="Menu Item 1"></mdc-menuitem>
      <mdc-menuitem label="MenuItem2" aria-label="Menu Item 2"></mdc-menuitem>
    </mdc-menusection>
    <mdc-divider></mdc-divider>
    <mdc-menusection>
      <mdc-menuitemcheckbox label="Toggle6" indicator="toggle" aria-label="Checkbox 6">Checkbox6</mdc-menuitemcheckbox>
      <mdc-menuitemcheckbox label="Checkmark7" indicator="checkmark" 
      aria-label="Checkbox 7">Checkbox7</mdc-menuitemcheckbox>
    </mdc-menusection>`);

const meta: Meta = {
  title: 'Work In Progress/menusection',
  tags: ['autodocs'],
  component: 'mdc-menusection',
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    ...disableControls([
      'default',
    ]),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  render,
};
