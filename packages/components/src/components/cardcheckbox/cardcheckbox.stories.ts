import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { repeat } from 'lit/directives/repeat.js';
import { action } from '@storybook/addon-actions';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideControls, disableControls, textControls } from '../../../config/storybook/utils';
import { DEFAULTS, ORIENTATIONS, VARIANTS } from '../card/card.constants';
import { VALID_TEXT_TAGS } from '../text/text.constants';

import { SELECTION_TYPE } from './cardcheckbox.constants';
import '../formfieldgroup';

const render = (args: Args) =>
  html` <mdc-cardcheckbox
    @click="${action('onclick')}"
    @keydown="${action('onkeydown')}"
    @keyup="${action('onkeyup')}"
    @focus="${action('onfocus')}"
    @change="${action('onchange')}"
    variant="${args.variant}"
    orientation="${args.orientation}"
    card-title="${args['card-title']}"
    subtitle="${args.subtitle}"
    image-src="${args['image-src']}"
    image-alt="${args['image-alt']}"
    icon-name="${args['icon-name']}"
    ?checked="${args.checked}"
    ?disabled="${args.disabled}"
    aria-label="${args['aria-label']}"
    selection-type="${args['selection-type']}"
    title-tag-name="${args['title-tag-name']}"
    subtitle-tag-name="${args['subtitle-tag-name']}"
    tabindex="${args.tabIndex}"
    class="${args.class}"
    style="${args.style}"
    >${args.children}</mdc-cardcheckbox
  >`;

const meta: Meta = {
  title: 'Components/card/cardcheckbox',
  tags: ['autodocs'],
  component: 'mdc-cardcheckbox',
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
    },
    'selection-type': {
      control: 'select',
      options: Object.values(SELECTION_TYPE),
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
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    variant: DEFAULTS.VARIANT,
    orientation: DEFAULTS.ORIENTATION,
    checked: false,
    disabled: false,
    tabIndex: 0,
    'selection-type': SELECTION_TYPE.CHECK,
    children: defaultChildren,
  },
};

export const HorizontalCard: StoryObj = {
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'image-src': 'https://placehold.co/160x280',
    'image-alt': 'Image Alt',
    'icon-name': 'placeholder-bold',
    'aria-label': 'Aria Label',
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    'selection-type': SELECTION_TYPE.CHECKBOX,
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
    'selection-type': SELECTION_TYPE.CHECK,
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
    'image-src': 'https://placehold.co/320x200',
    'image-alt': 'Image Alt',
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'icon-name': 'placeholder-bold',
    'selection-type': SELECTION_TYPE.CHECK,
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
    'image-src': 'https://placehold.co/320x200',
    'image-alt': 'Image Alt',
    'icon-name': 'placeholder-bold',
    variant: DEFAULTS.VARIANT,
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    orientation: DEFAULTS.ORIENTATION,
    'selection-type': SELECTION_TYPE.CHECKBOX,
    checked: false,
    disabled: false,
    tabIndex: 0,
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
    'image-src': 'https://placehold.co/160x540',
    'image-alt': 'Image Alt',
    'icon-name': 'placeholder-bold',
    variant: DEFAULTS.VARIANT,
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    orientation: ORIENTATIONS.HORIZONTAL,
    'selection-type': SELECTION_TYPE.CHECKBOX,
    checked: false,
    disabled: false,
    tabIndex: 0,
    children: html` <img src="https://placehold.co/100x50" alt="Image Alt" slot="after-body" />
      <mdc-text slot="after-body" type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
      ${defaultChildren}`,
  },
};

export const CardsInCheckboxGroup: StoryObj = {
  render: () => html`
    <mdc-formfieldgroup label="Checkbox Cards" help-text="Help Text" data-aria-label="Checkbox Cards">
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap">
        ${repeat(
          [1, 2, 3, 4],
          index => html`
            <mdc-cardcheckbox
              name="checkbox cards"
              variant="border"
              orientation="vertical"
              card-title="Title ${index}"
              subtitle="Subtitle"
              image-src="https://placehold.co/320x200"
              image-alt="Image Alt"
              icon-name="placeholder-bold"
              tabIndex="0"
            >
              ${defaultChildren}
            </mdc-cardcheckbox>
          `,
        )}
      </div>
    </mdc-formfieldgroup>
  `,
  argTypes: {
    ...disableControls([
      'variant',
      'orientation',
      'card-title',
      'subtitle',
      'image-src',
      'image-alt',
      'icon-name',
      'checked',
      'disabled',
      'tabIndex',
      'data-aria-label',
    ]),
  },
};
