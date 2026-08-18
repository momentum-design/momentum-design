import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import '../avatar';
import { html } from 'lit';
import iconsManifest from '@momentum-design/icons/dist/manifest.json';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { imageFixtures } from '../../../config/playwright/setup/utils/imageFixtures';
import { hideAllControls } from '../../../config/storybook/utils';
import { ROLE } from '../../utils/roles';

import { COLOR } from './staticchip.constants';

const render = (args: Args) =>
  html` <mdc-staticchip color="${args.color}" label="${args.label}" icon-name="${args['icon-name']}"></mdc-staticchip>`;

const meta: Meta = {
  title: 'Components/chip/staticchip',
  tags: ['autodocs'],
  component: 'mdc-staticchip',
  render,

  argTypes: {
    color: {
      control: 'select',
      options: Object.values(COLOR),
    },
    label: {
      control: 'text',
    },
    'icon-name': {
      control: 'select',
      options: Object.keys(iconsManifest),
    },
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    color: COLOR.DEFAULT,
    label: 'Label',
  },
};

export const WithIcon: StoryObj = {
  args: {
    color: COLOR.DEFAULT,
    label: 'Label',
    'icon-name': 'placeholder-bold',
  },
};

export const WithAvatar: StoryObj = {
  render: () =>
    html` <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
      <mdc-staticchip label="Addy Rodney">
        <mdc-avatar slot="prefix" size="24" src="${imageFixtures.avatar}" initials="AR"></mdc-avatar>
      </mdc-staticchip>
      <mdc-staticchip label="Lisa Chang">
        <mdc-avatar slot="prefix" size="24" initials="LC"></mdc-avatar>
      </mdc-staticchip>
      <mdc-staticchip label="Cobalt Avatar" color="cobalt">
        <mdc-avatar slot="prefix" size="24" src="${imageFixtures.avatar}" initials="CA"></mdc-avatar>
      </mdc-staticchip>
    </div>`,
  ...hideAllControls(),
};

export const AllColors: StoryObj = {
  render: () =>
    html` <div style="display: flex; gap: 0.5rem;" role="${ROLE.MAIN}">
      ${Object.values(COLOR).map(color => html` <mdc-staticchip color="${color}" label="${color}"></mdc-staticchip> `)}
    </div>`,
  ...hideAllControls(),
};
