import type { Args, Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideControls } from '../../../config/storybook/utils';
import '.';
import { VALIDATION } from '../formfieldwrapper/formfieldwrapper.constants';
import { POPOVER_PLACEMENT, STRATEGY } from '../popover/popover.constants';

const avengersTree = html`
  <mdc-checkbox label="Avengers"></mdc-checkbox>
  <mdc-checkboxtree>
    <mdc-checkbox checked label="Iron Man"></mdc-checkbox>
    <mdc-checkbox label="Captain America"></mdc-checkbox>
    <mdc-checkboxtree>
      <mdc-checkbox checked label="Falcon"></mdc-checkbox>
      <mdc-checkbox label="Winter Soldier"></mdc-checkbox>
    </mdc-checkboxtree>
    <mdc-checkbox label="Thor"></mdc-checkbox>
  </mdc-checkboxtree>
  <mdc-checkbox label="Guardians of the Galaxy"></mdc-checkbox>
  <mdc-checkboxtree>
    <mdc-checkbox checked label="Peter Quill"></mdc-checkbox>
    <mdc-checkbox checked label="Gamora"></mdc-checkbox>
    <mdc-checkbox checked label="Rocket"></mdc-checkbox>
  </mdc-checkboxtree>
`;

const render = (args: Args) => html`
  <mdc-checkboxtree
    class=${ifDefined(args.class)}
    style=${ifDefined(args.style)}
    label=${ifDefined(args.label)}
    help-text=${ifDefined(args['help-text'])}
    help-text-type=${args['help-text-type']}
    toggletip-text=${ifDefined(args['toggletip-text'])}
    toggletip-placement=${args['toggletip-placement']}
    toggletip-strategy=${args['toggletip-strategy']}
    info-icon-aria-label=${ifDefined(args['info-icon-aria-label'])}
    ?required=${args.required}
  >
    ${args.children}
  </mdc-checkboxtree>
`;

const meta: Meta = {
  title: 'Widgets/checkboxtree',
  tags: ['autodocs'],
  component: 'mdc-checkboxtree',
  render,
  argTypes: {
    label: { control: 'text' },
    'help-text': { control: 'text' },
    'help-text-type': {
      control: 'select',
      options: Object.values(VALIDATION),
    },
    required: { control: 'boolean' },
    'toggletip-text': { control: 'text' },
    'toggletip-placement': {
      control: 'select',
      options: Object.values(POPOVER_PLACEMENT),
    },
    'toggletip-strategy': {
      control: 'select',
      options: Object.values(STRATEGY),
    },
    'info-icon-aria-label': { control: 'text' },
    children: {
      control: false,
      description: 'Direct mdc-checkbox children and recursively nested mdc-checkboxtree groups.',
    },
    ...hideControls(['disabled', 'readonly', 'soft-disabled']),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    label: 'Select your Avengers team',
    'help-text': 'Select all that apply.',
    'help-text-type': VALIDATION.DEFAULT,
    required: true,
    'toggletip-text': 'Parent selections apply to every available descendant.',
    'toggletip-placement': POPOVER_PLACEMENT.TOP,
    'toggletip-strategy': STRATEGY.ABSOLUTE,
    'info-icon-aria-label': 'About team selection',
    children: avengersTree,
  },
};

export const CheckboxStates: StoryObj = {
  args: {
    label: 'Notification preferences',
    'help-text': 'Choose which work notifications you receive.',
    'help-text-type': VALIDATION.DEFAULT,
    children: html`
      <mdc-checkbox
        label="Work notifications"
        readonly
        help-text="Update each notification separately."
      ></mdc-checkbox>
      <mdc-checkboxtree>
        <mdc-checkbox checked label="Meeting reminders"></mdc-checkbox>
        <mdc-checkbox label="Direct messages"></mdc-checkbox>
        <mdc-checkbox checked readonly label="Security alerts" help-text="Required for your account."></mdc-checkbox>
        <mdc-checkbox
          disabled
          label="SMS notifications"
          help-text="Add a phone number to enable SMS notifications."
        ></mdc-checkbox>
        <mdc-checkbox
          checked
          soft-disabled
          label="Service updates"
          help-text="Managed by your organization."
        ></mdc-checkbox>
      </mdc-checkboxtree>
    `,
  },
};

export const Error: StoryObj = {
  args: {
    ...Example.args,
    'help-text': 'You must select at least one team member.',
    'help-text-type': VALIDATION.ERROR,
    'toggletip-text': undefined,
  },
};

export const LongAndMultilingualContent: StoryObj = {
  args: {
    label: 'Select teams for the international incident response program',
    'help-text': 'Choose every regional team that should receive alerts.',
    'help-text-type': VALIDATION.DEFAULT,
    children: html`
      <mdc-checkbox label="Americas response teams"></mdc-checkbox>
      <mdc-checkboxtree>
        <mdc-checkbox label="North American emergency communications and coordination team"></mdc-checkbox>
        <mdc-checkbox label="Equipo de respuesta para América Latina"></mdc-checkbox>
      </mdc-checkboxtree>
      <mdc-checkbox label="فرق الاستجابة الإقليمية"></mdc-checkbox>
      <mdc-checkboxtree>
        <mdc-checkbox label="فريق الاستجابة للشرق الأوسط"></mdc-checkbox>
        <mdc-checkbox label="アジア太平洋地域の緊急対応チーム"></mdc-checkbox>
      </mdc-checkboxtree>
    `,
  },
};
