import type { Meta, StoryObj, Args } from '@storybook/web-components';
import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import '.';
import './themeprovider.stories.styles.css';
import { THEMES } from './themeprovider.constants';
import './themeprovider.stories.utils';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

const render = (args: Args) => html`
  <mdc-themeprovider
    class="${classMap({ themeWrapper: true, [args.class]: true })}"
    style="${args.style}"
    theme="${args.theme}"
  >
    <p>Current theme:</p>
    <mdc-subcomponent></mdc-subcomponent>
    <div>
      <div class="colorBox" style="background: var(--mds-color-theme-text-accent-normal);"></div>
      <div class="colorBox" style="background: var(--mds-color-theme-text-warning-normal);"></div>
      <div class="colorBox" style="background: var(--mds-color-theme-background-alert-success-normal);"></div>
    </div>
  </mdc-themeprovider>
`;

const meta: Meta = {
  title: 'Work In Progress/themeprovider',
  tags: ['autodocs'],
  component: 'mdc-themeprovider',
  render,
  argTypes: {
    theme: {
      options: THEMES,
      control: { type: 'radio' },
      table: {
        category: 'Attributes',
      },
    },
    themes: {
      table: {
        category: 'Attributes',
      },
    },
    ...classArgType,
    ...styleArgType,
  },
  parameters: {
    controls: {
      exclude: ['Context'],
    },
  },
};

export default meta;

export const Primary: StoryObj = {
  args: {
    theme: THEMES[0],
    class: 'custom-classname',
    style: 'margin-top: 20px;',
  },
};
