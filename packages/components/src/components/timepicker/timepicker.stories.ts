import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideAllControls, hideControls } from '../../../config/storybook/utils';
import { VALIDATION } from '../formfieldwrapper/formfieldwrapper.constants';

import { TIME_FORMAT } from './timepicker.constants';

const helpTextTypes = Object.values(VALIDATION).filter((type: string) => type !== 'priority');

const render = (args: Args) => html`
  <mdc-timepicker
    label="${ifDefined(args.label)}"
    value="${ifDefined(args.value)}"
    time-format="${ifDefined(args['time-format'])}"
    interval="${ifDefined(args.interval)}"
    ?required="${args.required}"
    ?disabled="${args.disabled}"
    ?readonly="${args.readonly}"
    help-text="${ifDefined(args['help-text'])}"
    help-text-type="${ifDefined(args['help-text-type'])}"
    min="${ifDefined(args.min)}"
    max="${ifDefined(args.max)}"
    append-to="${ifDefined(args['append-to'])}"
    backdrop-append-to="${ifDefined(args['backdrop-append-to'])}"
    locale-hours-label="${ifDefined(args['locale-hours-label'])}"
    locale-minutes-label="${ifDefined(args['locale-minutes-label'])}"
    locale-period-label="${ifDefined(args['locale-period-label'])}"
    locale-hours-placeholder="${ifDefined(args['locale-hours-placeholder'])}"
    locale-minutes-placeholder="${ifDefined(args['locale-minutes-placeholder'])}"
    locale-period-placeholder="${ifDefined(args['locale-period-placeholder'])}"
    locale-am-label="${ifDefined(args['locale-am-label'])}"
    locale-pm-label="${ifDefined(args['locale-pm-label'])}"
    locale-show-time-picker-label="${ifDefined(args['locale-show-time-picker-label'])}"
    locale-time-options-label="${ifDefined(args['locale-time-options-label'])}"
    locale-spinbutton-description="${ifDefined(args['locale-spinbutton-description'])}"
  ></mdc-timepicker>
`;

const meta: Meta = {
  title: 'Components/timepicker',
  tags: ['autodocs'],
  component: 'mdc-timepicker',
  render,
  argTypes: {
    label: {
      control: 'text',
    },
    'time-format': {
      control: 'select',
      options: Object.values(TIME_FORMAT),
    },
    interval: {
      control: 'number',
    },
    required: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    readonly: {
      control: 'boolean',
    },
    'help-text': {
      control: 'text',
    },
    'help-text-type': {
      control: 'select',
      description: `The type of help text. It can be ${helpTextTypes.map((type: string) => `'${type}'`).join(', ')}.`,
      options: helpTextTypes,
    },
    min: {
      control: 'text',
    },
    max: {
      control: 'text',
    },
    'append-to': {
      control: 'text',
    },
    'backdrop-append-to': {
      control: 'text',
    },
    'locale-hours-label': { control: 'text' },
    'locale-minutes-label': { control: 'text' },
    'locale-period-label': { control: 'text' },
    'locale-hours-placeholder': { control: 'text' },
    'locale-minutes-placeholder': { control: 'text' },
    'locale-period-placeholder': { control: 'text' },
    'locale-am-label': { control: 'text' },
    'locale-pm-label': { control: 'text' },
    'locale-show-time-picker-label': { control: 'text' },
    'locale-time-options-label': { control: 'text' },
    'locale-spinbutton-description': { control: 'text' },
    ...hideControls(['value', 'validation-message', 'validity', 'willValidate']),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

const defaultLocaleArgs = {
  'locale-hours-label': 'hours',
  'locale-minutes-label': 'minutes',
  'locale-period-label': 'period',
  'locale-hours-placeholder': 'hh',
  'locale-minutes-placeholder': 'mm',
  'locale-period-placeholder': '--',
  'locale-am-label': 'AM',
  'locale-pm-label': 'PM',
  'locale-show-time-picker-label': 'Show time picker',
  'locale-time-options-label': 'Time options',
  'locale-spinbutton-description': 'To set value, use the up/down arrow keys or type a value',
};

export const Example: StoryObj = {
  args: {
    label: 'Start time',
    value: '08:30',
    'time-format': TIME_FORMAT.TWELVE_HOUR,
    interval: 30,
    required: true,
    ...defaultLocaleArgs,
  },
};

export const TwentyFourHourFormat: StoryObj = {
  args: {
    label: 'Start time',
    value: '20:30',
    'time-format': TIME_FORMAT.TWENTY_FOUR_HOUR,
    interval: 30,
    required: true,
    ...defaultLocaleArgs,
  },
};

export const FifteenMinuteInterval: StoryObj = {
  args: {
    label: 'Start time',
    value: '08:30',
    'time-format': TIME_FORMAT.TWELVE_HOUR,
    interval: 15,
    required: true,
    ...defaultLocaleArgs,
  },
};

export const WithHelpText: StoryObj = {
  args: {
    label: 'Start time',
    value: '08:30',
    'time-format': TIME_FORMAT.TWELVE_HOUR,
    required: true,
    'help-text': "Time will be adjusted to attendee's timezone",
    ...defaultLocaleArgs,
  },
};

export const ErrorState: StoryObj = {
  args: {
    label: 'Start time',
    value: '08:30',
    'time-format': TIME_FORMAT.TWELVE_HOUR,
    required: true,
    'help-text': 'Please select a valid time',
    'help-text-type': 'error',
    ...defaultLocaleArgs,
  },
};

export const WarningState: StoryObj = {
  args: {
    label: 'Start time',
    value: '08:30',
    'time-format': TIME_FORMAT.TWELVE_HOUR,
    required: true,
    'help-text': 'This time may conflict with another event',
    'help-text-type': 'warning',
    ...defaultLocaleArgs,
  },
};

export const SuccessState: StoryObj = {
  args: {
    label: 'Start time',
    value: '08:30',
    'time-format': TIME_FORMAT.TWELVE_HOUR,
    required: true,
    'help-text': 'Time confirmed',
    'help-text-type': 'success',
    ...defaultLocaleArgs,
  },
};

export const Disabled: StoryObj = {
  args: {
    label: 'Start time',
    value: '08:30',
    'time-format': TIME_FORMAT.TWELVE_HOUR,
    disabled: true,
    ...defaultLocaleArgs,
  },
};

export const Readonly: StoryObj = {
  args: {
    label: 'Start time',
    value: '08:30',
    'time-format': TIME_FORMAT.TWELVE_HOUR,
    readonly: true,
    ...defaultLocaleArgs,
  },
};

export const WithMinMax: StoryObj = {
  args: {
    label: 'Meeting time',
    value: '09:00',
    'time-format': TIME_FORMAT.TWELVE_HOUR,
    required: true,
    min: '08:00',
    max: '17:00',
    'help-text': 'Select a time between 8:00 AM and 5:00 PM',
    ...defaultLocaleArgs,
  },
};

export const StretchedWidth: StoryObj = {
  render: () => html`
    <div style="width: 300px;">
      <mdc-timepicker
        label="Start time"
        value="08:30"
        time-format="12h"
        required
        locale-hours-label="hours"
        locale-minutes-label="minutes"
        locale-period-label="period"
        locale-hours-placeholder="hh"
        locale-minutes-placeholder="mm"
        locale-period-placeholder="--"
        locale-am-label="AM"
        locale-pm-label="PM"
        locale-show-time-picker-label="Show time picker"
        locale-time-options-label="Time options"
        locale-spinbutton-description="To set value, use the up/down arrow keys or type a value"
        style="--mdc-timepicker-width: 100%;"
      ></mdc-timepicker>
    </div>
  `,
  ...hideAllControls(),
};

export const StartAndEndTime: StoryObj = {
  render: () => html`
    <div style="display: flex; gap: 1rem;">
      <mdc-timepicker
        label="Start time"
        value="08:30"
        time-format="12h"
        required
        locale-hours-label="hours"
        locale-minutes-label="minutes"
        locale-period-label="period"
        locale-hours-placeholder="hh"
        locale-minutes-placeholder="mm"
        locale-period-placeholder="--"
        locale-am-label="AM"
        locale-pm-label="PM"
        locale-show-time-picker-label="Show time picker"
        locale-time-options-label="Time options"
        locale-spinbutton-description="To set value, use the up/down arrow keys or type a value"
      ></mdc-timepicker>
      <mdc-timepicker
        label="End time"
        value="09:30"
        time-format="12h"
        required
        locale-hours-label="hours"
        locale-minutes-label="minutes"
        locale-period-label="period"
        locale-hours-placeholder="hh"
        locale-minutes-placeholder="mm"
        locale-period-placeholder="--"
        locale-am-label="AM"
        locale-pm-label="PM"
        locale-show-time-picker-label="Show time picker"
        locale-time-options-label="Time options"
        locale-spinbutton-description="To set value, use the up/down arrow keys or type a value"
      ></mdc-timepicker>
    </div>
  `,
  ...hideAllControls(),
};

export const Localized: StoryObj = {
  render: () => html`
    <mdc-timepicker
      label="Hora de inicio"
      value="14:30"
      time-format="12h"
      required
      locale-hours-label="horas"
      locale-minutes-label="minutos"
      locale-period-label="período"
      locale-hours-placeholder="hh"
      locale-minutes-placeholder="mm"
      locale-period-placeholder="--"
      locale-am-label="a.m."
      locale-pm-label="p.m."
      locale-show-time-picker-label="Mostrar selector de hora"
      locale-time-options-label="Opciones de hora"
      locale-spinbutton-description="Para establecer el valor, use las teclas de flecha arriba/abajo o escriba un valor"
      help-text="Seleccione una hora de inicio"
    ></mdc-timepicker>
  `,
  ...hideAllControls(),
};

export const VerticalLayout: StoryObj = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; width: 300px;">
      <mdc-timepicker
        label="Start time"
        value="08:30"
        time-format="12h"
        required
        locale-hours-label="hours"
        locale-minutes-label="minutes"
        locale-period-label="period"
        locale-hours-placeholder="hh"
        locale-minutes-placeholder="mm"
        locale-period-placeholder="--"
        locale-am-label="AM"
        locale-pm-label="PM"
        locale-show-time-picker-label="Show time picker"
        locale-time-options-label="Time options"
        locale-spinbutton-description="To set value, use the up/down arrow keys or type a value"
        style="--mdc-timepicker-width: 100%;"
      ></mdc-timepicker>
      <mdc-timepicker
        label="End time"
        value="09:30"
        time-format="12h"
        required
        locale-hours-label="hours"
        locale-minutes-label="minutes"
        locale-period-label="period"
        locale-hours-placeholder="hh"
        locale-minutes-placeholder="mm"
        locale-period-placeholder="--"
        locale-am-label="AM"
        locale-pm-label="PM"
        locale-show-time-picker-label="Show time picker"
        locale-time-options-label="Time options"
        locale-spinbutton-description="To set value, use the up/down arrow keys or type a value"
        style="--mdc-timepicker-width: 100%;"
      ></mdc-timepicker>
    </div>
  `,
  ...hideAllControls(),
};
