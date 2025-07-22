import { action } from '@storybook/addon-actions';
import type { Args, Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '.';
import '../button';
import { ifDefined } from 'lit/directives/if-defined.js';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { disableControls, hideAllControls } from '../../../config/storybook/utils';
import { SIZE } from '../accordiongroup/accordiongroup.constants';

import { defaultChildren, VARIANT } from './accordionbutton.constants';

const render = (args: Args) =>
  html` <mdc-accordionbutton
    @shown=${action('onshown')}
    ?disabled=${args.disabled}
    ?expanded=${args.expanded}
    data-aria-level="${ifDefined(args['data-aria-level'])}"
    header-text="${ifDefined(args['header-text'])}"
    prefix-icon="${ifDefined(args['prefix-icon'])}"
    size="${ifDefined(args.size)}"
    variant="${ifDefined(args.variant)}"
  >
    ${defaultChildren}
  </mdc-accordionbutton>`;

const meta: Meta = {
  title: 'Work In Progress/accordion/accordionbutton',
  tags: ['autodocs'],
  component: 'mdc-accordionbutton',
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
      '--mdc-accordionbutton-border-color',
      '--mdc-accordionbutton-hover-color',
      '--mdc-accordionbutton-active-color',
      '--mdc-accordionbutton-disabled-color',
      'default',
      'shown',
    ]),
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    'data-aria-level': 3,
    'header-text': 'Heading',
    'prefix-icon': 'placeholder-bold',
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
    'prefix-icon': 'placeholder-bold',
  },
};

export const LargeSize: StoryObj = {
  args: {
    size: SIZE.LARGE,
    'header-text': 'Heading',
    'prefix-icon': 'placeholder-bold',
  },
};

export const SmallSize: StoryObj = {
  args: {
    size: SIZE.SMALL,
    'header-text': 'Heading',
    'prefix-icon': 'placeholder-bold',
  },
};

export const AllVariants: StoryObj = {
  render: () => html`
    <div style="display: flex; flex-direction: row;">
      <section style="padding: 0.5rem; width: 25%; display: flex; flex-direction: column; gap: 1rem;">
        <h5>Visibility of Accordion</h5>
        <mdc-accordionbutton prefix-icon="placeholder-bold" header-text="Expanded" expanded
          >${defaultChildren}</mdc-accordionbutton
        >
        <mdc-accordionbutton prefix-icon="placeholder-bold" header-text="Not expanded"
          >${defaultChildren}</mdc-accordionbutton
        >
      </section>
      <section style="padding: 0.5rem; width: 25%; display: flex; flex-direction: column; gap: 1rem">
        <h5>Variant Types of Accordion</h5>
        <mdc-accordionbutton prefix-icon="placeholder-bold" header-text="Default Variant"
          >${defaultChildren}</mdc-accordionbutton
        >
        <mdc-accordionbutton
          prefix-icon="placeholder-bold"
          header-text="Borderless Variant"
          variant="${VARIANT.BORDERLESS}"
          >${defaultChildren}</mdc-accordionbutton
        >
      </section>
      <section style="padding: 0.5rem; width: 25%; display: flex; flex-direction: column; gap: 1rem;">
        <h5>Sizes of Accordion</h5>
        <mdc-accordionbutton prefix-icon="placeholder-bold" header-text="Small Size"
          >${defaultChildren}</mdc-accordionbutton
        >
        <mdc-accordionbutton prefix-icon="placeholder-bold" header-text="Large Size" size="${SIZE.LARGE}"
          >${defaultChildren}</mdc-accordionbutton
        >
      </section>
      <section style="padding: 0.5rem; width: 25%; display: flex; flex-direction: column; gap: 1rem;">
        <h5>Disabled Accordion</h5>
        <mdc-accordionbutton prefix-icon="placeholder-bold" header-text="Disabled Accordion" disabled
          >${defaultChildren}</mdc-accordionbutton
        >
      </section>
    </div>
  `,
  ...hideAllControls(),
};
