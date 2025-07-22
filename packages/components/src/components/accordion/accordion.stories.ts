import type { Meta, StoryObj, Args } from '@storybook/web-components';
import { action } from '@storybook/addon-actions';
import '.';
import { html } from 'lit';
import '../icon';
import '../chip';
import '../button';
import '../badge';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { SIZE } from '../accordiongroup/accordiongroup.constants';
import { VARIANT, defaultChildren as defaultBodyContent } from '../accordionbutton/accordionbutton.constants';
import { disableControls, hideAllControls } from '../../../config/storybook/utils';

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
    size="${args.size}"
    variant="${args.variant}"
  >
    ${defaultChildren}
  </mdc-accordion>`;

const meta: Meta = {
  title: 'Work In Progress/accordion/accordion',
  tags: ['autodocs'],
  component: 'mdc-accordion',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    ...classArgType,
    ...styleArgType,
    'data-aria-level': {
      control: 'number',
    },
    'header-text': {
      control: 'text',
    },
    'prefix-icon': {
      control: 'text',
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
    variant: {
      control: 'select',
      options: Object.values(VARIANT),
    },
    ...disableControls([
      'leading-controls',
      'trailing-controls',
      'default',
      'shown',
      '--mdc-accordionbutton-border-color',
    ]),
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
