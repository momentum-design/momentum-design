import { action } from 'storybook/actions';
import type { Args, Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import '.';
import '../button';
import '../icon';
import '../link';

import { imageFixtures } from '../../../config/playwright/setup/utils/imageFixtures';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { disableControls, hideAllControls } from '../../../config/storybook/utils';

import { BANNER_VARIANT } from './banner.constants';
// temp3
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
    ...disableControls(['children', 'content', 'leading-icon', 'leading-text', 'trailing-actions']),
  },
};

export default meta;

const DefaultArgs = {
  variant: 'custom',
  label: 'Banner Label',
  'secondary-label': 'This is the secondary label of the banner.',
};

const DefaultButtons = html`
  <div slot="trailing-actions">
    <mdc-button variant="tertiary" aria-label="Cancel action">Cancel</mdc-button>
    <mdc-button variant="secondary" aria-label="Perform primary action">Action</mdc-button>
    <mdc-button
      variant="tertiary"
      prefix-icon="cancel-bold"
      size="20"
      aria-label="Dismiss banner"
      @click="${action('dismiss')}"
    ></mdc-button>
  </div>
`;

export const Example: StoryObj = {
  args: {
    ...DefaultArgs,
    variant: 'informational',
    label: 'System Update Available',
    'secondary-label': 'A new version is ready to install. Please save your work before proceeding.',
    children: DefaultButtons,
  },
};

export const AllVariants: StoryObj = {
  name: 'All Variants',
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      ${[
        {
          variant: 'custom',
          label: 'Custom Banner with Slot Icon',
          'secondary-label': 'This banner uses a custom icon via slot instead of variant-based icon.',
          children: html`
            <mdc-icon slot="leading-icon" name="placeholder-bold" size="1.25"></mdc-icon>
            ${DefaultButtons}
          `,
        },
        {
          variant: 'informational',
          label: 'System Update Available',
          'secondary-label': 'A new version is ready to install.',
          children: DefaultButtons,
        },
        {
          variant: 'warning',
          label: 'Storage Almost Full',
          'secondary-label': 'Your storage is 95% full. Consider removing some files.',
          children: DefaultButtons,
        },
        {
          variant: 'error',
          label: 'Connection Failed',
          'secondary-label': 'Unable to connect to the server. Please try again.',
          children: html`
            ${DefaultButtons}
            <mdc-button
              slot="trailing-actions"
              variant="tertiary"
              prefix-icon="reset-bold"
              size="20"
              aria-label="Retry connection"
              @click="${action('retry')}"
            ></mdc-button>
          `,
        },
        {
          variant: 'success',
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
  name: 'Label Only',
  args: {
    variant: 'informational',
    label: 'System Update Available',
    children: DefaultButtons,
  },
};

export const WithoutActions: StoryObj = {
  name: 'Without Actions',
  args: {
    variant: 'informational',
    label: 'Information Message',
    'secondary-label': 'This banner has no action buttons.',
  },
};

export const PromotionalBanner: StoryObj = {
  name: 'Promotional Banner',
  render: () => html`
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
          variant="tertiary"
          prefix-icon="cancel-bold"
          size="20"
          aria-label="Close promotional banner"
          @click="${action('close')}"
          style="
          position: absolute;
          right: 1rem;
        "
        ></mdc-button>

        <!-- Left Image -->
        <img
          src=${imageFixtures.card}
          alt="Promotional image"
          style="
          width: 120px;
          height: 100%;
          object-fit: cover;
        "
        />

        <!-- Center Content Area -->
        <div style="flex: 1; min-width: 0;">
          <!-- Label -->
          <mdc-text type="heading-large-bold" tagname="h3">Label text</mdc-text>

          <!-- Secondary label text -->
          <mdc-text>
            Lorem ipsum dolor sit amet consectetur. Mattis augue imperdiet pretium dignissim purus.
            <mdc-link>Learn more</mdc-link>
          </mdc-text>

          <!-- Action buttons -->
          <div style="display: flex; flex-wrap: wrap; gap: 0.75rem;">
            <mdc-button variant="tertiary" aria-label="Tertiary action" @click="${action('tertiary-action')}"
              >Label</mdc-button
            >
            <mdc-button variant="secondary" aria-label="Secondary action" @click="${action('secondary-action')}"
              >Label</mdc-button
            >
          </div>
        </div>

        <!-- Right Image -->
        <img
          src=${imageFixtures.card}
          alt="Promotional image"
          style="
          width: 120px;
          height: 100%;
          object-fit: cover;
        "
        />
      </div>
    </mdc-banner>
  `,
  ...hideAllControls(),
};
