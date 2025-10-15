import { action } from 'storybook/actions';
import type { Args, Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '.';
import '../badge';
import '../button';
import '../chip';
import '../icon';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { disableControls, hideAllControls } from '../../../config/storybook/utils';
import { VARIANT } from '../accordionbutton/accordionbutton.constants';
import { SIZE } from '../accordiongroup/accordiongroup.constants';

const defaultBodyContent = html`Loreum impusm sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui p ex
  ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
  laborum.<mdc-button style="margin-top:0.75rem">Continue</mdc-button>`;

const defaultChildren = html`
  <mdc-chip slot="leading-controls" label="Label"></mdc-chip>
  <mdc-icon slot="trailing-controls" name="placeholder-bold"></mdc-icon>
  <mdc-icon slot="trailing-controls" name="placeholder-bold"></mdc-icon>
  <mdc-chip slot="trailing-controls" label="Label"></mdc-chip>
  <mdc-badge slot="trailing-controls" type="counter" counter="911" max-counter="99"></mdc-badge>
  ${defaultBodyContent}
`;

const render = (args: Args) =>
  html` <mdc-accordion
    @shown=${action('onshown')}
    ?disabled=${args.disabled}
    ?expanded=${args.expanded}
    data-aria-level="${args['data-aria-level']}"
    header-text="${args['header-text']}"
    prefix-icon="${args['prefix-icon']}"
    open-button-aria-label="${args.openButtonAriaLabel}"
    close-button-aria-label="${args.closeButtonAriaLabel}"
    size="${args.size}"
    variant="${args.variant}"
  >
    ${defaultChildren}
  </mdc-accordion>`;

const meta: Meta = {
  title: 'Components/accordion/accordion',
  tags: ['autodocs'],
  component: 'mdc-accordion',
  render,
  argTypes: {
    ...classArgType,
    ...styleArgType,
    'data-aria-level': {
      control: 'number',
    },
    size: {
      control: 'select',
      options: Object.values(SIZE),
    },
    disabled: {
      control: 'boolean',
    },
    expanded: {
      control: 'boolean',
    },
    'header-text': {
      control: 'text',
    },
    'prefix-icon': {
      control: 'text',
    },
    variant: {
      control: 'select',
      options: Object.values(VARIANT),
    },
    'open-button-aria-label': {
      control: 'text',
      description: 'Aria-label attribute for the trigger button when accordion is collapsed.',
    },
    'close-button-aria-label': {
      control: 'text',
      description: 'Aria-label attribute for the trigger button when accordion is expanded.',
    },
    ...disableControls(['leading-controls', 'trailing-controls', 'default']),
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    'data-aria-level': 3,
    'header-text': 'Heading',
    'prefix-icon': 'placeholder-regular',
    disabled: false,
    size: SIZE.SMALL,
    expanded: true,
    variant: VARIANT.DEFAULT,
  },
};

export const BorderlessVariant: StoryObj = {
  args: {
    variant: VARIANT.BORDERLESS,
    'header-text': 'Heading',
    'prefix-icon': 'placeholder-regular',
  },
};

export const LargeSize: StoryObj = {
  args: {
    size: SIZE.LARGE,
    'header-text': 'Heading',
    'prefix-icon': 'placeholder-regular',
  },
};

export const SmallSize: StoryObj = {
  args: {
    size: SIZE.SMALL,
    'header-text': 'Heading',
    'prefix-icon': 'placeholder-regular',
  },
};

export const AllVariants: StoryObj = {
  render: () => html`
    <div style="display: flex; flex-direction: column;">
      <section style="padding: 0.5rem; width: 45rem; display: flex; flex-direction: column; gap: 1rem;">
        <h5>Visibility of Accordion</h5>
        <mdc-accordion prefix-icon="placeholder-bold" header-text="Expanded" expanded>${defaultChildren}</mdc-accordion>
        <mdc-accordion prefix-icon="placeholder-bold" header-text="Not expanded">${defaultChildren}</mdc-accordion>
      </section>
      <section style="padding: 0.5rem; width: 45rem; display: flex; flex-direction: column; gap: 1rem">
        <h5>Variant Types of Accordion</h5>
        <mdc-accordion prefix-icon="placeholder-bold" header-text="Default Variant">${defaultChildren}</mdc-accordion>
        <mdc-accordion prefix-icon="placeholder-bold" header-text="Borderless Variant" variant="${VARIANT.BORDERLESS}"
          >${defaultChildren}</mdc-accordion
        >
      </section>
      <section style="padding: 0.5rem; width: 45rem; display: flex; flex-direction: column; gap: 1rem;">
        <h5>Sizes of Accordion</h5>
        <mdc-accordion prefix-icon="placeholder-bold" header-text="Small Size">${defaultChildren}</mdc-accordion>
        <mdc-accordion prefix-icon="placeholder-bold" header-text="Large Size" size="${SIZE.LARGE}"
          >${defaultChildren}</mdc-accordion
        >
      </section>
      <section style="padding: 0.5rem; width: 45rem; display: flex; flex-direction: column; gap: 1rem;">
        <h5>Disabled Accordion</h5>
        <mdc-accordion prefix-icon="placeholder-bold" header-text="Disabled Accordion" disabled
          >${defaultChildren}</mdc-accordion
        >
      </section>
    </div>
  `,
  ...hideAllControls(),
};
