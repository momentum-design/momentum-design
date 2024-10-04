import type { Meta, StoryObj, Args } from '@storybook/web-components';
import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import '.';
import './themeprovider.stories.styles.css';
import './themeprovider.stories.utils';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { disableControls } from '../../../config/storybook/utils';

const THEMES = [
  'mds-theme-stable-darkWebex',
  'mds-theme-stable-lightWebex',
];

const render = (args: Args) => html`
  <mdc-themeprovider
    class="${classMap({ themeWrapper: true, [args.class]: true })}"
    style="${args.style}"
    themeclass="${args.themeclass}"
  >
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
  </mdc-themeprovider>
`;

const meta: Meta = {
  title: 'Work In Progress/themeprovider',
  tags: ['autodocs'],
  component: 'mdc-themeprovider',
  render,
  argTypes: {
    themeclass: {
      options: THEMES,
      control: { type: 'radio' },
    },
    ...disableControls(['Context', 'default', '--mdc-themeprovider-font-family', '--mdc-themeprovider-color-default']),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Primary: StoryObj = {
  args: {
    themeclass: THEMES[0],
    class: 'custom-classname',
    style: 'margin-top: 20px;',
  },
};
