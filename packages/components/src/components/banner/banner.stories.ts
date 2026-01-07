import { action } from 'storybook/actions';
import type { Args, Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import '.';
import '../button';
import '../icon';
import '../text';
import '../link';

import { imageFixtures } from '../../../config/playwright/setup/utils/imageFixtures';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideControls, hideAllControls } from '../../../config/storybook/utils';
import { BUTTON_VARIANTS } from '../button/button.constants';
import { BUTTON_SIZES } from '../buttonsimple/buttonsimple.constants';
import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';

import { BANNER_VARIANT } from './banner.constants';

const render = (args: Args) => html`
  <mdc-banner
    variant="${ifDefined(args.variant)}"
    label="${ifDefined(args.label)}"
    secondary-label="${ifDefined(args['secondary-label'])}"
    class="${args.class}"
    style="${args.style}"
  >
    ${args.children}
  </mdc-banner>
`;

const meta: Meta = {
  title: 'Components/banner',
  tags: ['autodocs'],
  component: 'mdc-banner',
  render,
  parameters: {
    badges: ['stable'],
  },
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(BANNER_VARIANT),
    },
    label: {
      control: 'text',
    },
    'secondary-label': {
      control: 'text',
    },
    ...classArgType,
    ...styleArgType,
    ...hideControls(['children']),
  },
};

export default meta;

const DefaultButtons = html`
  <div slot="trailing-actions">
    <mdc-button variant="${BUTTON_VARIANTS.TERTIARY}" aria-label="Cancel action">Cancel</mdc-button>
    <mdc-button variant="${BUTTON_VARIANTS.SECONDARY}" aria-label="Perform primary action">Action</mdc-button>
    <mdc-button
      variant="${BUTTON_VARIANTS.TERTIARY}"
      prefix-icon="cancel-bold"
      size="${BUTTON_SIZES[20]}"
      aria-label="Dismiss banner"
      @click="${action('dismiss')}"
    ></mdc-button>
  </div>
`;

export const Example: StoryObj = {
  args: {
    variant: BANNER_VARIANT.INFORMATIONAL,
    label: 'System Update Available',
    'secondary-label': 'A new version is ready to install. Please save your work before proceeding.',
    children: DefaultButtons,
  },
};

export const AllVariants: StoryObj = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      ${[
        {
          variant: BANNER_VARIANT.CUSTOM,
          label: 'Custom Banner with Slot Icon',
          'secondary-label': 'This banner uses a custom icon via slot instead of variant-based icon.',
          children: html`
            <mdc-icon slot="leading-icon" name="placeholder-bold" size="1.25"></mdc-icon>
            ${DefaultButtons}
          `,
        },
        {
          variant: BANNER_VARIANT.INFORMATIONAL,
          label: 'System Update Available',
          'secondary-label': 'A new version is ready to install.',
          children: DefaultButtons,
        },
        {
          variant: BANNER_VARIANT.WARNING,
          label: 'Storage Almost Full',
          'secondary-label': 'Your storage is 95% full. Consider removing some files.',
          children: DefaultButtons,
        },
        {
          variant: BANNER_VARIANT.ERROR,
          label: 'Connection Failed',
          'secondary-label': 'Unable to connect to the server. Please try again.',
          children: html`
            ${DefaultButtons}
            <mdc-button
              slot="trailing-actions"
              variant="${BUTTON_VARIANTS.TERTIARY}"
              prefix-icon="reset-bold"
              size="${BUTTON_SIZES[20]}"
              aria-label="Retry connection"
              @click="${action('retry')}"
            ></mdc-button>
          `,
        },
        {
          variant: BANNER_VARIANT.SUCCESS,
          label: 'Changes Saved',
          'secondary-label': 'Your changes have been successfully saved.',
          children: DefaultButtons,
        },
      ].map(args => render(args))}
    </div>
  `,
  ...hideAllControls(),
};

export const LabelOnly: StoryObj = {
  args: {
    variant: BANNER_VARIANT.INFORMATIONAL,
    label: 'System Update Available',
    children: DefaultButtons,
  },
};

export const WithoutActions: StoryObj = {
  args: {
    variant: BANNER_VARIANT.INFORMATIONAL,
    label: 'Information Message',
    'secondary-label': 'This banner has no action buttons.',
  },
};

export const PromotionalBanner: StoryObj = {
  render: () => {
    const image = html`<img
      src=${imageFixtures.card}
      alt="Promotional image"
      style="width: 120px; height: 100%; object-fit: cover;"
    />`;
    return html`
      <mdc-banner>
        <!-- Using the content slot to completely override the default banner structure -->
        <div
          slot="content"
          style="
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 1.5rem;
          align-items: flex-start;
          width: 100%;
          padding: 0 2rem;
        "
        >
          <!-- Close button positioned absolutely in top-right corner -->
          <mdc-button
            variant="${BUTTON_VARIANTS.TERTIARY}"
            prefix-icon="cancel-bold"
            size="${BUTTON_SIZES[20]}"
            aria-label="Close promotional banner"
            @click="${action('close')}"
            style="position: absolute; right: 1rem;"
          ></mdc-button>

          <!-- Left Image -->
          ${image}

          <!-- Center Content Area -->
          <div style="flex: 1; min-width: 0;">
            <!-- Label -->
            <mdc-text type="${TYPE.HEADING_LARGE_BOLD}" tagname="${VALID_TEXT_TAGS.H3}">Label text</mdc-text>

            <!-- Secondary label text -->
            <mdc-text>
              Lorem ipsum dolor sit amet consectetur. Mattis augue imperdiet pretium dignissim purus.
              <mdc-link>Learn more</mdc-link>
            </mdc-text>

            <!-- Action buttons -->
            <div style="display: flex; flex-wrap: wrap; gap: 0.75rem;">
              <mdc-button
                variant="${BUTTON_VARIANTS.TERTIARY}"
                aria-label="Tertiary action"
                @click="${action('tertiary-action')}"
                >Label</mdc-button
              >
              <mdc-button
                variant="${BUTTON_VARIANTS.SECONDARY}"
                aria-label="Secondary action"
                @click="${action('secondary-action')}"
                >Label</mdc-button
              >
            </div>
          </div>

          <!-- Right Image -->
          ${image}
        </div>
      </mdc-banner>
    `;
  },
  ...hideAllControls(),
};
