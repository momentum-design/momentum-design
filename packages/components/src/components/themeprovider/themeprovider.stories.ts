import type { Meta, StoryObj, Args } from '@storybook/web-components';
import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import '.';
import './themeprovider.stories.styles.css';
import './themeprovider.stories.utils';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { disableControls } from '../../../config/storybook/utils';

const THEMES = ['mds-theme-stable-darkWebex', 'mds-theme-stable-lightWebex'];

const render = (args: Args) => html`
<mdc-themeprovider 
  class="${classMap({ [args.class]: true })}" 
  style="${args.style}" 
  themeclass="${args.themeclass}"
>
  <div class="${classMap({ themeWrapper: true })}">
    <mdc-subcomponent></mdc-subcomponent>
    <p>Color examples:</p>
    <div>
      <div class="colorBox" style="background: var(--mds-color-theme-text-primary-normal);"></div>
      <div class="colorBox" style="background: var(--mds-color-theme-text-error-normal);"></div>
      <div class="colorBox" style="background: var(--mds-color-theme-text-warning-normal);"></div>
      <div class="colorBox" style="background: var(--mds-color-theme-text-success-normal);"></div>
      <div class="colorBox" style="background: var(--mds-color-theme-text-accent-normal);"></div>
      <div class="colorBox" style="background: var(--mds-color-theme-text-team-cobalt-normal);"></div>
      <div class="colorBox" style="background: var(--mds-color-theme-text-team-cyan-normal);"></div>
      <div class="colorBox" style="background: var(--mds-color-theme-text-team-mint-normal);"></div>
      <div class="colorBox" style="background: var(--mds-color-theme-text-team-lime-normal);"></div>
      <div class="colorBox" style="background: var(--mds-color-theme-text-team-gold-normal);"></div>
      <div class="colorBox" style="background: var(--mds-color-theme-text-team-orange-normal);"></div>
      <div class="colorBox" style="background: var(--mds-color-theme-text-team-pink-normal);"></div>
      <div class="colorBox" style="background: var(--mds-color-theme-text-team-purple-normal);"></div>
      <div class="colorBox" style="background: var(--mds-color-theme-text-team-violet-normal);"></div>
      <div class="colorBox" style="background: var(--mds-color-theme-text-team-slate-normal);"></div>
    </div>
  </div>
</mdc-themeprovider>
`;

const meta: Meta = {
  title: 'Components/themeprovider',
  tags: ['autodocs'],
  component: 'mdc-themeprovider',
  render,
  parameters: {
    badges: ['stable'],
  },
  argTypes: {
    themeclass: {
      options: THEMES,
      control: { type: 'radio' },
    },
    ...disableControls([
      'Context',
      '--mdc-themeprovider-color-default',
      '--mdc-themeprovider-font-family',
      '--mdc-themeprovider-font-weight',
      '--mdc-themeprovider-letter-spacing-adjustment',
    ]),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    themeclass: THEMES[0],
    class: 'custom-classname',
    style: 'margin-top: 20px;',
  },
};
