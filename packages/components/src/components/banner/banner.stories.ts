import type { Meta, StoryObj, Args } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { action } from '@storybook/addon-actions';

import '.';
import '../button';
import '../icon';

import { imageFixtures } from '../../../config/playwright/setup/utils/imageFixtures';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { disableControls, hideAllControls, textControls } from '../../../config/storybook/utils';

import { BANNER_VARIANT } from './banner.constants';

const render = (args: Args) => html`
  <mdc-banner
    variant="${ifDefined(args.variant)}"
    title="${args.title}"
    subtitle="${args.subtitle}"
    class="${args.class}"
    style="${args.style}"
  >
    ${args.children}
  </mdc-banner>
`;

const meta: Meta = {
  title: 'Work In Progress/banner',
  tags: ['autodocs'],
  component: 'mdc-banner',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(BANNER_VARIANT),
    },
    title: {
      control: 'text',
    },
    subtitle: {
      control: 'text',
    },
    ...classArgType,
    ...styleArgType,
    ...disableControls(['children']),
    ...textControls([
      '--mdc-banner-background-color',
      '--mdc-banner-border-color',
      '--mdc-banner-text-color',
      '--mdc-banner-icon-color',
      '--mdc-banner-elevation-3',
      '--mdc-banner-padding',
      '--mdc-banner-gap',
    ])
  },
};

export default meta;

const DefaultArgs = {
  variant: 'custom',
  title: 'Banner Title',
  subtitle: 'This is the subtitle of the banner.',
};

const DefaultButtons = html`
  <div slot="trailing-actions" style="display: flex; gap: 12px;">
    <mdc-button variant="tertiary" aria-label="Cancel action">Cancel</mdc-button>
    <mdc-button variant="secondary" aria-label="Perform primary action">Action</mdc-button>
  </div>
`;

export const Example: StoryObj = {
  args: {
    ...DefaultArgs,
    variant: 'informational',
    title: 'System Update Available',
    subtitle: 'A new version is ready to install. Please save your work before proceeding.',
    children: html`
      ${DefaultButtons}
      <mdc-button slot="trailing-actions" variant="tertiary" prefix-icon="cancel-bold" size="20" aria-label="Dismiss banner" @click="${action('dismiss')}"></mdc-button>
    `,
  },
};

export const AllVariants: StoryObj = {
  name: 'All Variants',
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      ${[{
        ...DefaultArgs,
        variant: 'custom',
        title: 'Custom Banner with Slot Icon',
        subtitle: 'This banner uses a custom icon via slot instead of variant-based icon.',
        children: html`
          <mdc-icon slot="leading-icon" name="placeholder-bold" size="1.5" style="padding: 0.25rem 0;"></mdc-icon>
          ${DefaultButtons}
          <mdc-button slot="trailing-actions" variant="tertiary" prefix-icon="cancel-bold" size="20" aria-label="Dismiss banner" @click="${action('dismiss')}"></mdc-button>
        `,
      }, {
        ...DefaultArgs,
        variant: 'informational',
        title: 'System Update Available',
        subtitle: 'A new version is ready to install.',
        children: html`
          ${DefaultButtons}
          <mdc-button slot="trailing-actions" variant="tertiary" prefix-icon="cancel-bold" size="20" aria-label="Dismiss banner" @click="${action('dismiss')}"></mdc-button>
        `,
      }, {
        ...DefaultArgs,
        variant: 'warning',
        title: 'Storage Almost Full',
        subtitle: 'Your storage is 95% full. Consider removing some files.',
        children: html`
          ${DefaultButtons}
          <mdc-button slot="trailing-actions" variant="tertiary" prefix-icon="cancel-bold" size="20" aria-label="Dismiss banner" @click="${action('dismiss')}"></mdc-button>
        `,
      }, {
        ...DefaultArgs,
        variant: 'error',
        title: 'Connection Failed',
        subtitle: 'Unable to connect to the server. Please try again.',
        children: html`
          ${DefaultButtons}
          <mdc-button slot="trailing-actions" variant="tertiary" prefix-icon="cancel-bold" size="20" aria-label="Dismiss banner" @click="${action('dismiss')}"></mdc-button>
          <mdc-button slot="trailing-actions" variant="tertiary" prefix-icon="reset-bold" size="20" aria-label="Retry connection" @click="${action('reset')}"></mdc-button>
        `,
      }, {
        ...DefaultArgs,
        variant: 'success',
        title: 'Changes Saved',
        subtitle: 'Your changes have been successfully saved.',
        children: html`
          ${DefaultButtons}
          <mdc-button slot="trailing-actions" variant="tertiary" prefix-icon="cancel-bold" size="20" aria-label="Dismiss banner" @click="${action('dismiss')}"></mdc-button>
        `,
      }].map((args) =>
        render({
          ...DefaultArgs,
          ...args,
        })
      )}
    </div>
  `,
  ...hideAllControls(),
};

export const PromotionalBanner: StoryObj = {
  name: 'Promotional Banner',
  render: () => html`
    <mdc-banner variant="custom" style="
      --mdc-banner-background-color: var(--mds-color-theme-background-primary-normal);
      --mdc-banner-padding: 1.5rem;
      border: 2px solid var(--mds-color-theme-outline-primary-normal);
      border-radius: 0.5rem;
      position: relative;
    ">
      <!-- Close button positioned absolutely in top-right corner -->
      <mdc-button variant="tertiary" prefix-icon="cancel-bold" size="20" aria-label="Close promotional banner" @click="${action('close')}" style="
        position: absolute;
        top: 1rem;
        right: 1rem;
        z-index: 10;
      "></mdc-button>

      <!-- Using the content slot to completely override the default banner structure -->
      <div slot="content" style="
        display: grid;
        grid-template-columns: auto 1fr auto;
        gap: 1.5rem;
        align-items: flex-start;
        width: 100%;
        padding-right: 2rem;
      ">
        <!-- Left Image -->
        <img src=${imageFixtures.card} alt="Promotional image" style="height: 100%" />

        <!-- Center Content Area -->
        <div style="flex: 1; min-width: 0;">
          <!-- Title -->
          <mdc-text type="heading-large-bold" tagname="h3" style="margin: 0 0 0.75rem 0; color: var(--mds-color-theme-text-primary-normal);">Title text</mdc-text>
          
          <!-- Subtitle text -->
          <mdc-text type="body-midsize-regular" tagname="p" style="margin: 0 0 1rem 0; color: var(--mds-color-theme-text-secondary-normal); line-height: 1.5;">
            Lorem ipsum dolor sit amet consectetur. Mattis augue imperdiet pretium dignissim purus. 
            <mdc-text type="body-midsize-medium" tagname="span" style="color: var(--mds-color-theme-text-accent-normal); cursor: pointer;" @click="${action('learn-more')}">
              Learn more
            </mdc-text>
          </mdc-text>
          
          <!-- Action buttons -->
          <div style="display: flex; gap: 0.75rem;">
            <mdc-button variant="tertiary" aria-label="Tertiary action" @click="${action('tertiary-action')}">Label</mdc-button>
            <mdc-button variant="secondary" aria-label="Secondary action" @click="${action('secondary-action')}">Label</mdc-button>
          </div>
        </div>

        <!-- Right Image -->
        <img src=${imageFixtures.card} alt="Promotional image" style="height: 100%"/>
      </div>
    </mdc-banner>
  `,
  ...hideAllControls(),
};
