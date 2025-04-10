import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideControls } from '../../../config/storybook/utils';
import { DEFAULTS, ORIENTATIONS, VARIANTS } from '../card/card.constants';
import { SELECTION_TYPE } from './selectablecard.constants';

const render = (args: Args) => html`
  <mdc-selectable-card 
    variant="${args.variant}"
    orientation="${args.orientation}"
    card-title="${args['card-title']}"
    subtitle="${args.subtitle}"
    image-src="${args['image-src']}"
    image-alt="${args['image-alt']}"
    icon-name="${args['icon-name']}"
    icon-aria-label="${args['icon-aria-label']}"
    ?selected="${args.selected}"
    ?disabled="${args.disabled}"
    aria-label="${args['aria-label']}"
    selection-type="${args['selection-type']}"
    tabindex="${args.tabIndex}"
    class="${args.class}"
    style="${args.style}">${args.children}</mdc-selectable-card>`;

const meta: Meta = {
  title: 'Work In Progress/card/selectable-card',
  tags: ['autodocs'],
  component: 'mdc-selectable-card',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(VARIANTS),
    },
    orientation: {
      control: 'select',
      options: Object.values(ORIENTATIONS),
    },
    'card-title': {
      control: 'text',
    },
    subtitle: {
      control: 'text',
    },
    'image-src': {
      control: 'text',
    },
    'image-alt': {
      control: 'text',
    },
    'icon-name': {
      control: 'text',
    },
    'icon-aria-label': {
      control: 'text',
    },
    selected: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    tabIndex: {
      control: 'number',
    },
    'aria-label': {
      control: 'text',
    },
    'selection-type': {
      control: 'select',
      options: Object.values(SELECTION_TYPE),
    },
    ...hideControls(['children']),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'image-src': 'https://placehold.co/320x200',
    'image-alt': 'Image Alt',
    'icon-name': 'placeholder-bold',
    'icon-aria-label': 'Icon Aria Label',
    variant: DEFAULTS.VARIANT,
    orientation: DEFAULTS.ORIENTATION,
    selected: false,
    disabled: false,
    tabIndex: 0,
    'selection-type': SELECTION_TYPE.CHECK,
    children: html`<mdc-text slot='body' 
    type="body-midsize-medium" tagname="span">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Nam vulputate aliquet risus, eget auctor ante egestas facilisis. Curabitur malesuada tempor pulvinar. 
    Quisque sollicitudin magna leo, gravida ultrices lacus lobortis at. 
    Praesent gravida dui diam, non elementum risus laoreet vitae. 
    Sed sed nunc ullamcorper, porttitor dui id, posuere justo. Curabitur laoreet sem ut pharetra hendrerit. 
    Vivamus mattis ligula eget imperdiet tempor. 
    Ut in massa luctus lacus sodales accumsan. Praesent at aliquam leo. Ut a scelerisque turpis.</mdc-text>`,
  },
};

export const HorizontalCard: StoryObj = {
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'image-src': 'https://placehold.co/160x280',
    'image-alt': 'Image Alt',
    'icon-name': 'placeholder-bold',
    'icon-aria-label': 'Icon Aria Label',
    'aria-label': 'Aria Label',
    'selection-type': SELECTION_TYPE.CHECKBOX,
    selected: false,
    disabled: false,
    tabIndex: 0,
    variant: DEFAULTS.VARIANT,
    orientation: ORIENTATIONS.HORIZONTAL,
    children: html`<mdc-text slot='body' 
    type="body-midsize-medium" tagname="span">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Nam vulputate aliquet risus, eget auctor ante egestas facilisis. Curabitur malesuada tempor pulvinar. 
    Quisque sollicitudin magna leo, gravida ultrices lacus lobortis at. 
    Praesent gravida dui diam, non elementum risus laoreet vitae. 
    Sed sed nunc ullamcorper, porttitor dui id, posuere justo. Curabitur laoreet sem ut pharetra hendrerit. 
    Vivamus mattis ligula eget imperdiet tempor. 
    Ut in massa luctus lacus sodales accumsan. Praesent at aliquam leo. Ut a scelerisque turpis.</mdc-text>`,
  },
};

export const CardWithoutImage: StoryObj = {
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'icon-name': 'placeholder-bold',
    'icon-aria-label': 'Icon Aria Label',
    'aria-label': 'Aria Label',
    'selection-type': SELECTION_TYPE.RADIO,
    selected: false,
    disabled: false,
    tabIndex: 0,
    variant: DEFAULTS.VARIANT,
    orientation: DEFAULTS.ORIENTATION,
    children: html`<mdc-text slot='body' 
    type="body-midsize-medium" tagname="span">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Nam vulputate aliquet risus, eget auctor ante egestas facilisis. Curabitur malesuada tempor pulvinar. 
    Quisque sollicitudin magna leo, gravida ultrices lacus lobortis at. 
    Praesent gravida dui diam, non elementum risus laoreet vitae. 
    Sed sed nunc ullamcorper, porttitor dui id, posuere justo. Curabitur laoreet sem ut pharetra hendrerit. 
    Vivamus mattis ligula eget imperdiet tempor. 
    Ut in massa luctus lacus sodales accumsan. Praesent at aliquam leo. Ut a scelerisque turpis.</mdc-text>`,
  },
};

export const CardWithoutBody: StoryObj = {
  args: {
    'image-src': 'https://placehold.co/320x200',
    'image-alt': 'Image Alt',
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'icon-name': 'placeholder-bold',
    'icon-aria-label': 'Icon Aria Label',
    'selection-type': SELECTION_TYPE.CHECK,
    selected: false,
    disabled: false,
    tabIndex: 0,
    variant: DEFAULTS.VARIANT,
    orientation: DEFAULTS.ORIENTATION,
  },
};
