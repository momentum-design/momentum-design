import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideAllControls } from '../../../config/storybook/utils';

import { TIME_FORMAT, DEFAULTS } from './timepicker.constants';

const render = (args: Args) => html`
  <mdc-timepicker
    label="${ifDefined(args.label)}"
    value="${ifDefined(args.value)}"
    time-format="${ifDefined(args.timeFormat)}"
    interval="${ifDefined(args.interval)}"
    ?required="${args.required}"
    ?disabled="${args.disabled}"
    ?readonly="${args.readonly}"
    help-text="${ifDefined(args.helpText)}"
    help-text-type="${ifDefined(args.helpTextType)}"
    min="${ifDefined(args.min)}"
    max="${ifDefined(args.max)}"
    locale-hours-label="${ifDefined(args.localeHoursLabel)}"
    locale-minutes-label="${ifDefined(args.localeMinutesLabel)}"
    locale-period-label="${ifDefined(args.localePeriodLabel)}"
    locale-hours-placeholder="${ifDefined(args.localeHoursPlaceholder)}"
    locale-minutes-placeholder="${ifDefined(args.localeMinutesPlaceholder)}"
    locale-period-placeholder="${ifDefined(args.localePeriodPlaceholder)}"
    locale-am-label="${ifDefined(args.localeAmLabel)}"
    locale-pm-label="${ifDefined(args.localePmLabel)}"
    locale-show-time-picker-label="${ifDefined(args.localeShowTimePickerLabel)}"
    locale-time-options-label="${ifDefined(args.localeTimeOptionsLabel)}"
    locale-spinbutton-description="${ifDefined(args.localeSpinbuttonDescription)}"
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
    value: {
      control: 'text',
    },
    timeFormat: {
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
    helpText: {
      control: 'text',
    },
    helpTextType: {
      control: 'select',
      options: ['default', 'error', 'warning', 'success', 'priority'],
    },
    min: {
      control: 'text',
    },
    max: {
      control: 'text',
    },
    localeHoursLabel: { control: 'text' },
    localeMinutesLabel: { control: 'text' },
    localePeriodLabel: { control: 'text' },
    localeHoursPlaceholder: { control: 'text' },
    localeMinutesPlaceholder: { control: 'text' },
    localePeriodPlaceholder: { control: 'text' },
    localeAmLabel: { control: 'text' },
    localePmLabel: { control: 'text' },
    localeShowTimePickerLabel: { control: 'text' },
    localeTimeOptionsLabel: { control: 'text' },
    localeSpinbuttonDescription: { control: 'text' },
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    label: 'Start time',
    value: '08:30',
    timeFormat: TIME_FORMAT.TWELVE_HOUR,
    interval: DEFAULTS.INTERVAL,
    required: true,
  },
};

export const TwentyFourHourFormat: StoryObj = {
  args: {
    label: 'Start time',
    value: '20:30',
    timeFormat: TIME_FORMAT.TWENTY_FOUR_HOUR,
    interval: DEFAULTS.INTERVAL,
    required: true,
  },
};

export const FifteenMinuteInterval: StoryObj = {
  args: {
    label: 'Start time',
    value: '08:30',
    timeFormat: TIME_FORMAT.TWELVE_HOUR,
    interval: 15,
    required: true,
  },
};

export const WithHelpText: StoryObj = {
  args: {
    label: 'Start time',
    value: '08:30',
    timeFormat: TIME_FORMAT.TWELVE_HOUR,
    required: true,
    helpText: "Time will be adjusted to attendee's timezone",
  },
};

export const ErrorState: StoryObj = {
  args: {
    label: 'Start time',
    value: '08:30',
    timeFormat: TIME_FORMAT.TWELVE_HOUR,
    required: true,
    helpText: 'Please select a valid time',
    helpTextType: 'error',
  },
};

export const WarningState: StoryObj = {
  args: {
    label: 'Start time',
    value: '08:30',
    timeFormat: TIME_FORMAT.TWELVE_HOUR,
    required: true,
    helpText: 'This time may conflict with another event',
    helpTextType: 'warning',
  },
};

export const SuccessState: StoryObj = {
  args: {
    label: 'Start time',
    value: '08:30',
    timeFormat: TIME_FORMAT.TWELVE_HOUR,
    required: true,
    helpText: 'Time confirmed',
    helpTextType: 'success',
  },
};

export const Disabled: StoryObj = {
  args: {
    label: 'Start time',
    value: '08:30',
    timeFormat: TIME_FORMAT.TWELVE_HOUR,
    disabled: true,
  },
};

export const Readonly: StoryObj = {
  args: {
    label: 'Start time',
    value: '08:30',
    timeFormat: TIME_FORMAT.TWELVE_HOUR,
    readonly: true,
  },
};

export const WithMinMax: StoryObj = {
  args: {
    label: 'Meeting time',
    value: '09:00',
    timeFormat: TIME_FORMAT.TWELVE_HOUR,
    required: true,
    min: '08:00',
    max: '17:00',
    helpText: 'Select a time between 8:00 AM and 5:00 PM',
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
        style="--mdc-timepicker-width: 100%;"
      ></mdc-timepicker>
    </div>
  `,
  ...hideAllControls(),
};

export const StartAndEndTime: StoryObj = {
  render: () => html`
    <div style="display: flex; gap: 1rem;">
      <mdc-timepicker label="Start time" value="08:30" time-format="12h" required></mdc-timepicker>
      <mdc-timepicker label="End time" value="09:30" time-format="12h" required></mdc-timepicker>
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
        style="--mdc-timepicker-width: 100%;"
      ></mdc-timepicker>
      <mdc-timepicker
        label="End time"
        value="09:30"
        time-format="12h"
        required
        style="--mdc-timepicker-width: 100%;"
      ></mdc-timepicker>
    </div>
  `,
  ...hideAllControls(),
};
