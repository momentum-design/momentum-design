import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import '../checkbox';
import '../avatar';
import '../icon';
import '../button';
import '../toggle';
import '../badge';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { SIZE } from '../accordiongroup/accordiongroup.constants';
import { VARIANT } from '../accordionbutton/accordionbutton.constants';
import { hideAllControls } from '../../../config/storybook/utils';

const defaultChildren = html`
  <mdc-checkbox slot="leading-controls" data-aria-label="mock label" checked></mdc-checkbox>
  <mdc-avatar slot="leading-controls" src="https://picsum.photos/id/63/256" presence="active"></mdc-avatar>
  <mdc-icon slot="leading-controls" length-unit="rem" name="placeholder-bold"></mdc-icon>
  <mdc-icon slot="trailing-controls" length-unit="rem" name="placeholder-bold"></mdc-icon>
  <mdc-button slot="trailing-controls" variant="secondary">Label</mdc-button>
  <mdc-toggle slot="trailing-controls" data-aria-label="mock label" size="compact"></mdc-toggle>
  <mdc-badge slot="trailing-controls" type="dot"></mdc-badge>
  Default children is good
`;

const render = (args: Args) =>
  html` <mdc-accordion
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
    variant: VARIANT.BORDERLESS,
  },
};

export const AllVariants: StoryObj = {
  render: () => html`
    <div style="width: 60rem;">
      <mdc-accordion
        variant="${VARIANT.DEFAULT}"
        header-text="Accordion Default Heading"
        prefix-icon="placeholder-regular"
        expanded
        >${defaultChildren}</mdc-accordion
      >
      <br /><br /><br />
      <mdc-accordion header-text="Accordion Default Heading" prefix-icon="placeholder-regular"
        >${defaultChildren}</mdc-accordion
      >
    </div>
    <br /><br /><br /><br /><br />
    <div style="width: 60rem;">
      <mdc-accordion
        variant="${VARIANT.BORDERLESS}"
        header-text="Accordion Borderless Heading"
        prefix-icon="placeholder-regular"
        expanded
        >${defaultChildren}</mdc-accordion
      >
      <br /><br /><br />
      <mdc-accordion
        variant="${VARIANT.BORDERLESS}"
        header-text="Accordion Borderless Heading"
        prefix-icon="placeholder-regular"
        >${defaultChildren}</mdc-accordion
      >
    </div>
  `,
  ...hideAllControls(),
};
