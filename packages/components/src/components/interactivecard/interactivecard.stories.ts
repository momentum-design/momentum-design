import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { VALID_TEXT_TAGS } from '../text/text.constants';
import { DEFAULTS, ORIENTATIONS, VARIANTS } from '../card/card.constants';
import '../button';
import '../link';

const render = (args: Args) => html`
  <mdc-interactive-card 
    variant="${args.variant}"
    orientation="${args.orientation}"
    card-title="${args['card-title']}"
    subtitle="${args.subtitle}"
    image-src="${args['image-src']}"
    image-alt="${args['image-alt']}"
    icon-name="${args['icon-name']}"
    title-tag-name="${args['title-tag-name']}"
    subtitle-tag-name="${args['subtitle-tag-name']}"
    class="${args.class}"
    style="${args.style}">${args.children}></mdc-interactive-card>`;

const meta: Meta = {
  title: 'Work In Progress/card/interactive-card',
  tags: ['autodocs'],
  component: 'mdc-interactive-card',
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
    'title-tag-name': {
      control: 'select',
      options: Object.values(VALID_TEXT_TAGS),
    },
    'subtitle-tag-name': {
      control: 'select',
      options: Object.values(VALID_TEXT_TAGS),
    },
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

const defaultChildren = html`<mdc-text slot='body' 
type="body-midsize-medium" tagname="span">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Nam vulputate aliquet risus, eget auctor ante egestas facilisis. Curabitur malesuada tempor pulvinar. 
Quisque sollicitudin magna leo, gravida ultrices lacus lobortis at. 
Praesent gravida dui diam, non elementum risus laoreet vitae. 
Sed sed nunc ullamcorper, porttitor dui id, posuere justo. Curabitur laoreet sem ut pharetra hendrerit. 
Vivamus mattis ligula eget imperdiet tempor. 
Ut in massa luctus lacus sodales accumsan. Praesent at aliquam leo. Ut a scelerisque turpis.</mdc-text>
<mdc-button slot="icon-button" prefix-icon="placeholder-bold" aria-label="icon description"></mdc-button>
<mdc-button slot="icon-button" prefix-icon="placeholder-bold" aria-label="icon description"></mdc-button>
<mdc-button slot="icon-button" prefix-icon="placeholder-bold" aria-label="icon description"></mdc-button>
<mdc-link slot="footer-link" icon-name="placeholder-bold"><a href='#'>Label</a></mdc-link>
<mdc-text slot="footer-link">Not rendered</mdc-text>
<mdc-button slot="footer-button-secondary">Label</mdc-button>
<mdc-button slot="footer-button-primary">Label</mdc-button>`;

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
  },
};

export const HorizontalCard: StoryObj = {
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'image-src': 'https://placehold.co/160x330',
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
    children: html`
    <mdc-button slot="icon-button" prefix-icon="placeholder-bold" aria-label="icon description"></mdc-button>
    <mdc-button slot="icon-button" prefix-icon="placeholder-bold" aria-label="icon description"></mdc-button>
    <mdc-button slot="icon-button" prefix-icon="placeholder-bold" aria-label="icon description"></mdc-button>`,
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
    children: html`
    <mdc-text slot='before-body' type="body-midsize-medium" tagname="span">Content Before Body</mdc-text>
    <img src="https://placehold.co/100x50" alt="Image Alt" slot="before-body"/>
    <div slot="before-body" style="display: flex; gap: 8px;"> 
    <mdc-button  size="28">Click Me</mdc-button>
    <mdc-button  size="28" variant="secondary">View More</mdc-button>
    </div>-
    ${defaultChildren}`,
  },
};

export const ContentAfterBody: StoryObj = {
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'image-src': 'https://placehold.co/160x540',
    'image-alt': 'Image Alt',
    'icon-name': 'placeholder-bold',
    variant: DEFAULTS.VARIANT,
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    orientation: ORIENTATIONS.HORIZONTAL,
    children: html`
    <img src="https://placehold.co/120x30" alt="Image Alt" slot="after-body"/>
    <div slot="after-body" style="display: flex; gap: 8px;"> 
      <mdc-button  size="28">Click Me</mdc-button>
      <mdc-button  size="28" variant="secondary">View More</mdc-button>
    </div>
    <mdc-text slot='after-body' type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
    ${defaultChildren}`,
  },
};
