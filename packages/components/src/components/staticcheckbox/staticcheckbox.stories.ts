import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { disableControls } from '../../../config/storybook/utils';

const render = (args: Args) => html`
  <mdc-staticcheckbox 
    ?checked="${args.checked}"
    ?indeterminate="${args.indeterminate}"
    ?disabled="${args.disabled}"
    class="${args.class}"
    style="${args.style}"
  ></mdc-staticcheckbox>`;

const meta: Meta = {
  title: 'Components/decorator/staticcheckbox',
  tags: ['autodocs'],
  component: 'mdc-staticcheckbox',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    checked: {
      control: 'boolean',
    },
    indeterminate: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    ...classArgType,
    ...styleArgType,
    ...disableControls([
      '--mdc-staticcheckbox-border-color',
      '--mdc-staticcheckbox-checked-background-color',
      '--mdc-staticcheckbox-disabled-background-color',
      '--mdc-checkbox-disabled-border-color',
      '--mdc-checkbox-disabled-checked-icon-color',
      '--mdc-staticcheckbox-disabled-icon-color',
      '--mdc-staticcheckbox-icon-background-color',
      '--mdc-staticcheckbox-icon-border-color',
      '--mdc-staticcheckbox-icon-color',
    ]),
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    checked: false,
    indeterminate: false,
    disabled: false,
  },
};
