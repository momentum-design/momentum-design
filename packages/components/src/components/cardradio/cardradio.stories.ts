import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { repeat } from 'lit/directives/repeat.js';
import { action } from 'storybook/actions';
import iconsManifest from '@momentum-design/icons/dist/manifest.json';

import { imageFixtures } from '../../../config/playwright/setup/utils/imageFixtures';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideControls, hideAllControls } from '../../../config/storybook/utils';
import { DEFAULTS, ORIENTATIONS, VARIANTS } from '../card/card.constants';
import { VALID_TEXT_TAGS } from '../text/text.constants';
import '../radiogroup';

const render = (args: Args) =>
  html`<div role="main">
    <mdc-cardradio
      @click="${action('onclick')}"
      @keydown="${action('onkeydown')}"
      @keyup="${action('onkeyup')}"
      @focus="${action('onfocus')}"
      @change="${action('onchange')}"
      name="${ifDefined(args.name)}"
      variant="${ifDefined(args.variant)}"
      orientation="${ifDefined(args.orientation)}"
      card-title="${ifDefined(args['card-title'])}"
      subtitle="${ifDefined(args.subtitle)}"
      image-src="${ifDefined(args['image-src'])}"
      image-alt="${ifDefined(args['image-alt'])}"
      icon-name="${ifDefined(args['icon-name'])}"
      ?checked="${args.checked}"
      ?disabled="${args.disabled}"
      aria-label="${ifDefined(args['aria-label'])}"
      title-tag-name="${ifDefined(args['title-tag-name'])}"
      subtitle-tag-name="${ifDefined(args['subtitle-tag-name'])}"
      tabindex="${ifDefined(args.tabIndex)}"
      class="${ifDefined(args.class)}"
      style="${ifDefined(args.style)}"
      >${args.children}</mdc-cardradio
    >
  </div>`;

const meta: Meta = {
  title: 'Components/card/cardradio',
  tags: ['autodocs'],
  component: 'mdc-cardradio',
  render,

  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(VARIANTS),
    },
    orientation: {
      control: 'select',
      options: Object.values(ORIENTATIONS),
    },
    name: {
      control: 'text',
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
      control: 'select',
      options: Object.keys(iconsManifest),
    },
    checked: {
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
      description: 'Defines an accessible label for screen readers. Required when using icon-only cards.',
      table: { category: 'attributes' }
    },
    'title-tag-name': {
      control: 'select',
      options: Object.values(VALID_TEXT_TAGS),
    },
    'subtitle-tag-name': {
      control: 'select',
      options: Object.values(VALID_TEXT_TAGS),
    },
    ...hideControls(['children']),
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
    name: 'radio-card',
    subtitle: 'Subtitle',
    'image-src': imageFixtures.card,
    'image-alt': 'Image Alt',
    'icon-name': 'placeholder-bold',
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    variant: DEFAULTS.VARIANT,
    orientation: DEFAULTS.ORIENTATION,
    checked: false,
    disabled: false,
    tabIndex: 0,
    children: defaultChildren,
  },
};

export const HorizontalCard: StoryObj = {
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'image-src': imageFixtures.card,
    'image-alt': 'Image Alt',
    'icon-name': 'placeholder-bold',
    'aria-label': 'Aria Label',
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    checked: false,
    disabled: false,
    tabIndex: 0,
    variant: DEFAULTS.VARIANT,
    orientation: ORIENTATIONS.HORIZONTAL,
    children: defaultChildren,
  },
};

export const CardWithoutImage: StoryObj = {
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'icon-name': 'placeholder-bold',
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    'aria-label': 'Aria Label',
    checked: false,
    disabled: false,
    tabIndex: 0,
    variant: DEFAULTS.VARIANT,
    orientation: DEFAULTS.ORIENTATION,
    children: defaultChildren,
  },
};

export const CardWithoutBody: StoryObj = {
  args: {
    'image-src': imageFixtures.card,
    'image-alt': 'Image Alt',
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'icon-name': 'placeholder-bold',
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    checked: false,
    disabled: false,
    tabIndex: 0,
    variant: DEFAULTS.VARIANT,
    orientation: DEFAULTS.ORIENTATION,
  },
};

export const ContentBeforeBody: StoryObj = {
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'image-src': imageFixtures.card,
    'image-alt': 'Image Alt',
    'icon-name': 'placeholder-bold',
    variant: DEFAULTS.VARIANT,
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    orientation: DEFAULTS.ORIENTATION,
    checked: false,
    disabled: false,
    tabIndex: 0,
    children: html`<div slot="before-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content Before Body</mdc-text>
        <img src="${imageFixtures.card}" alt="Image Alt" />
      </div>
      ${defaultChildren}`,
  },
};

export const ContentAfterBody: StoryObj = {
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'image-src': imageFixtures.card,
    'image-alt': 'Image Alt',
    'icon-name': 'placeholder-bold',
    variant: DEFAULTS.VARIANT,
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    orientation: ORIENTATIONS.HORIZONTAL,
    checked: false,
    disabled: false,
    tabIndex: 0,
    children: html`<div slot="after-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
        <img src="${imageFixtures.card}" alt="Image Alt" />
      </div>
      ${defaultChildren}`,
  },
};

export const CardsInRadioGroup: StoryObj = {
  render: () => html`
    <mdc-formfieldgroup label="Radio Cards" name="radio-cards" help-text="Help Text" data-aria-label="Radio Cards">
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap">
        ${repeat(
          [1, 2, 3, 4],
          index => html`
            <mdc-cardradio
              name="radio-cards"
              variant="border"
              orientation="vertical"
              card-title="Title ${index}"
              subtitle="Subtitle"
              image-src="${imageFixtures.card}"
              image-alt="Image Alt"
              icon-name="placeholder-bold"
              tabIndex="0"
            >
              ${defaultChildren}
            </mdc-cardradio>
          `,
        )}
      </div>
    </mdc-formfieldgroup>
  `,
  ...hideAllControls(),
};
