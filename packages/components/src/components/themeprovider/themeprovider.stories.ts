import type { Meta, StoryObj, Args } from '@storybook/web-components';
import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

import '.';
import './themeprovider.stories.styles.css';
import './themeprovider.stories.utils';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { themes } from '../../../config/storybook/themes';
import { disableControls } from '../../../config/storybook/utils';

const themeClassByName = new Map(themes.map(theme => [theme.displayName, theme.themeclass]));

const render = (args: Args, context: { globals?: { theme?: string } }) => {
  const themeclass = themeClassByName.get(context.globals?.theme ?? '') ?? themes[0].themeclass;

  return html`
  <mdc-themeprovider class="${classMap({ [args.class]: true })}" style="${args.style}" themeclass="${themeclass}">
    <div class="themeWrapper themeWrapper__glassNormal">
        Glass Normal
    </div>
    <div class="themeWrapper themeWrapper__glassActive">
        Glass Active
    </div>
    <div class="themeWrapper themeWrapper__glassLight">
        Glass Light
    </div>
    <div class="themeWrapper themeWrapper__glassMedium">
        Glass Medium
    </div>
    <div class="themeWrapper themeWrapper__glassHeavy">
        Glass Heavy
    </div>
  </mdc-themeprovider>
`;
};

const meta: Meta = {
  title: 'Providers/Theme Provider',
  tags: ['autodocs'],
  component: 'mdc-themeprovider',
  render,

  argTypes: {
    ...disableControls(['Context', 'themeclass']),
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
