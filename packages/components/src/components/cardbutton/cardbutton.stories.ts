import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { action } from '@storybook/addon-actions';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideControls, textControls } from '../../../config/storybook/utils';
import { DEFAULTS, ORIENTATIONS, VARIANTS } from '../card/card.constants';
import { VALID_TEXT_TAGS } from '../text/text.constants';
import { BUTTON_VARIANTS } from '../button/button.constants';

const render = (args: Args) =>
  html` <mdc-cardbutton
    @click="${action('onclick')}"
    @keydown="${action('onkeydown')}"
    @keyup="${action('onkeyup')}"
    @focus="${action('onfocus')}"
    variant="${args.variant}"
    ?disabled="${args.disabled}"
    ?soft-disabled="${args['soft-disabled']}"
    orientation="${args.orientation}"
    card-title="${args['card-title']}"
    subtitle="${args.subtitle}"
    image-src="${args['image-src']}"
    image-alt="${args['image-alt']}"
    icon-name="${args['icon-name']}"
    title-tag-name="${args['title-tag-name']}"
    subtitle-tag-name="${args['subtitle-tag-name']}"
    type="${args.type}"
    role="${args.role}"
    tabIndex="${args.tabIndex}"
    class="${args.class}"
    style="${args.style}"
    >${args.children}</mdc-cardbutton
  >`;

const meta: Meta = {
  title: 'Components/card/cardbutton',
  tags: ['autodocs'],
  component: 'mdc-cardbutton',
  render,
  parameters: {
    badges: ['stable'],
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
    'title-tag-name': {
      control: 'select',
      options: Object.values(VALID_TEXT_TAGS),
    },
    'subtitle-tag-name': {
      control: 'select',
      options: Object.values(VALID_TEXT_TAGS),
    },
    disabled: {
      control: 'boolean',
    },
    'soft-disabled': {
      control: 'boolean',
    },
    tabIndex: {
      control: 'number',
    },
    type: {
      control: 'select',
      options: Object.values(BUTTON_VARIANTS),
    },
    ...hideControls(['children', 'active', 'size']),
    ...textControls(['--mdc-card-width']),
    ...classArgType,
    ...styleArgType,
  },
};
export default meta;

const defaultChildren = html`<mdc-text slot="body" type="body-midsize-medium" tagname="span"
  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate aliquet risus, eget auctor ante egestas
  facilisis. Curabitur malesuada tempor pulvinar. Quisque sollicitudin magna leo, gravida ultrices lacus lobortis at.
  Praesent gravida dui diam, non elementum risus laoreet vitae. Sed sed nunc ullamcorper, porttitor dui id, posuere
  justo. Curabitur laoreet sem ut pharetra hendrerit. Vivamus mattis ligula eget imperdiet tempor. Ut in massa luctus
  lacus sodales accumsan. Praesent at aliquam leo. Ut a scelerisque turpis.</mdc-text
>`;

export const Example: StoryObj = {
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'image-src': 'https://placehold.co/320x200',
    'image-alt': 'Image Alt',
    'icon-name': 'placeholder-bold',
    variant: DEFAULTS.VARIANT,
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    orientation: DEFAULTS.ORIENTATION,
    children: defaultChildren,
    disabled: false,
    'soft-disabled': false,
  },
};

export const HorizontalCard: StoryObj = {
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'image-src': 'https://placehold.co/160x300',
    'image-alt': 'Image Alt',
    'icon-name': 'placeholder-bold',
    variant: DEFAULTS.VARIANT,
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    orientation: ORIENTATIONS.HORIZONTAL,
    children: defaultChildren,
  },
};

export const CardWithoutImage: StoryObj = {
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'icon-name': 'placeholder-bold',
    variant: DEFAULTS.VARIANT,
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    orientation: DEFAULTS.ORIENTATION,
    children: defaultChildren,
  },
};

export const CardWithoutHeader: StoryObj = {
  args: {
    'image-src': 'https://placehold.co/320x200',
    'image-alt': 'Image Alt',
    variant: DEFAULTS.VARIANT,
    orientation: DEFAULTS.ORIENTATION,
    children: defaultChildren,
  },
};

export const CardWithoutBody: StoryObj = {
  args: {
    'image-src': 'https://placehold.co/320x200',
    'image-alt': 'Image Alt',
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    'icon-name': 'placeholder-bold',
    variant: DEFAULTS.VARIANT,
    orientation: DEFAULTS.ORIENTATION,
  },
};

export const ContentBeforeBody: StoryObj = {
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'image-src': 'https://placehold.co/320x200',
    'image-alt': 'Image Alt',
    'icon-name': 'placeholder-bold',
    variant: DEFAULTS.VARIANT,
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    orientation: DEFAULTS.ORIENTATION,
    children: html` <mdc-text slot="before-body" type="body-midsize-medium" tagname="span"
        >Content Before Body</mdc-text
      >
      <img src="https://placehold.co/100x50" alt="Image Alt" slot="before-body" />
      ${defaultChildren}`,
  },
};

export const ContentAfterBody: StoryObj = {
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'image-src': 'https://placehold.co/160x560',
    'image-alt': 'Image Alt',
    'icon-name': 'placeholder-bold',
    variant: DEFAULTS.VARIANT,
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    orientation: ORIENTATIONS.HORIZONTAL,
    children: html` <img src="https://placehold.co/100x50" alt="Image Alt" slot="after-body" />
      <mdc-text slot="after-body" type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
      ${defaultChildren}`,
  },
};
