import { action } from 'storybook/actions';
import type { Args, Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import '.';
import '../button';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { disableControls, hideAllControls } from '../../../config/storybook/utils';
import { SIZE } from '../accordiongroup/accordiongroup.constants';

import { VARIANT } from './accordionbutton.constants';

const defaultChildren = html`Loreum impusm sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui p ex
  ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
  laborum.<mdc-button style="margin-top:0.75rem">Continue</mdc-button>`;

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
  title: 'Components/accordion/accordionbutton',
  tags: ['autodocs'],
  component: 'mdc-accordionbutton',
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
    ...disableControls(['default']),
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
        <mdc-accordionbutton prefix-icon="placeholder-bold" header-text="Not expanded" data-aria-level="4"
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
          data-aria-level="4"
          >${defaultChildren}</mdc-accordionbutton
        >
      </section>
      <section style="padding: 0.5rem; width: 25%; display: flex; flex-direction: column; gap: 1rem;">
        <h5>Sizes of Accordion</h5>
        <mdc-accordionbutton prefix-icon="placeholder-bold" header-text="Small Size"
          >${defaultChildren}</mdc-accordionbutton
        >
        <mdc-accordionbutton
          prefix-icon="placeholder-bold"
          header-text="Large Size"
          size="${SIZE.LARGE}"
          data-aria-level="4"
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
