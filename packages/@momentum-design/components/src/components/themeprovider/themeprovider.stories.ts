import type { Meta, StoryObj, Args } from '@storybook/web-components';
import { html } from 'lit';
import '.';
import './themeprovider.stories.styles.css';
import { THEMES } from './themeprovider.constants';
import './themeprovider.stories.utils';

const render = (args: Args) => html`
  <mdc-themeprovider class="themeWrapper" theme="${args.theme}">
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
  tags: ['autodocs'],
  component: 'mdc-themeprovider',
  render,
  argTypes: {
    theme: {
      options: THEMES,
      control: { type: 'radio' },
    },
  },
};

export default meta;

export const Primary: StoryObj = {
  args: {
    theme: THEMES[0],
  },
};
