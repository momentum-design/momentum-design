import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideAllControls, hideControls } from '../../../config/storybook/utils';
import { VALIDATION } from '../formfieldwrapper/formfieldwrapper.constants';
import { SELECTION_MODE } from '../calendar/calendar.constants';

import { VARIANT } from './datepicker.constants';

const helpTextTypes = Object.values(VALIDATION).filter((type: string) => type !== 'priority');

const render = (args: Args) => html`
  <mdc-datepicker
    label="${ifDefined(args.label)}"
    value="${ifDefined(args.value)}"
    variant="${ifDefined(args.variant)}"
    selection-mode="${ifDefined(args['selection-mode'])}"
    locale="${ifDefined(args.locale)}"
    ?required="${args.required}"
    ?disabled="${args.disabled}"
    ?readonly="${args.readonly}"
    help-text="${ifDefined(args['help-text'])}"
    help-text-type="${ifDefined(args['help-text-type'])}"
    min="${ifDefined(args.min)}"
    max="${ifDefined(args.max)}"
    placeholder="${ifDefined(args.placeholder)}"
    locale-month-label="${ifDefined(args['locale-month-label'])}"
    locale-day-label="${ifDefined(args['locale-day-label'])}"
    locale-year-label="${ifDefined(args['locale-year-label'])}"
    locale-calendar-label="${ifDefined(args['locale-calendar-label'])}"
    locale-today-label="${ifDefined(args['locale-today-label'])}"
    locale-spinbutton-description="${ifDefined(args['locale-spinbutton-description'])}"
    locale-prev-month-label="${ifDefined(args['locale-prev-month-label'])}"
    locale-next-month-label="${ifDefined(args['locale-next-month-label'])}"
    append-to="${ifDefined(args['append-to'])}"
    backdrop-append-to="${ifDefined(args['backdrop-append-to'])}"
  ></mdc-datepicker>
`;

const meta: Meta = {
  title: 'Components/datepicker',
  tags: ['autodocs'],
  component: 'mdc-datepicker',
  render,
  argTypes: {
    label: {
      control: 'text',
    },
    value: {
      control: 'text',
      description: 'Selected date as ISO string (yyyy-mm-dd)',
    },
    variant: {
      control: 'select',
      options: Object.values(VARIANT),
      description: 'Variant: input (spinbuttons) or default (select trigger)',
    },
    'selection-mode': {
      control: 'select',
      options: Object.values(SELECTION_MODE),
    },
    locale: {
      control: 'text',
      description: 'BCP 47 locale string',
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
    placeholder: {
      control: 'text',
    },
    'locale-month-label': { control: 'text' },
    'locale-day-label': { control: 'text' },
    'locale-year-label': { control: 'text' },
    'locale-calendar-label': { control: 'text' },
    'locale-today-label': { control: 'text' },
    'locale-spinbutton-description': { control: 'text' },
    'locale-prev-month-label': { control: 'text' },
    'locale-next-month-label': { control: 'text' },
    'append-to': {
      control: 'text',
    },
    'backdrop-append-to': {
      control: 'text',
    },
    ...hideControls(['validation-message', 'validity', 'willValidate']),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const InputVariant: StoryObj = {
  args: {
    label: 'Start date',
    variant: VARIANT.INPUT,
    locale: 'en-US',
    required: true,
    'help-text': 'Helper text',
    'locale-month-label': 'Month',
    'locale-day-label': 'Day',
    'locale-year-label': 'Year',
    'locale-calendar-label': 'Open calendar',
    'locale-today-label': 'Today',
    'locale-spinbutton-description': 'Use arrow keys to change the value or type a number',
  },
};

export const InputWithValue: StoryObj = {
  args: {
    label: 'Start date',
    value: '2025-07-15',
    variant: VARIANT.INPUT,
    locale: 'en-US',
    required: true,
    'help-text': 'Helper text',
    'locale-month-label': 'Month',
    'locale-day-label': 'Day',
    'locale-year-label': 'Year',
    'locale-calendar-label': 'Open calendar',
    'locale-today-label': 'Today',
  },
};

export const DefaultVariant: StoryObj = {
  args: {
    label: 'Date range',
    variant: VARIANT.DEFAULT,
    locale: 'en-US',
    required: true,
    'help-text': 'Select a start and end date',
    'locale-today-label': 'Today',
  },
};

export const DefaultWithValue: StoryObj = {
  args: {
    label: 'Date range',
    value: '2025-07-13',
    variant: VARIANT.DEFAULT,
    locale: 'en-US',
    required: true,
    'help-text': 'Helper text',
    'locale-today-label': 'Today',
  },
};

export const WeekSelection: StoryObj = {
  args: {
    label: 'Select week',
    variant: VARIANT.DEFAULT,
    'selection-mode': SELECTION_MODE.WEEK,
    locale: 'en-US',
    'help-text': 'Click a date to select its week',
    'locale-today-label': 'Today',
    'locale-prev-month-label': 'Go to previous month',
    'locale-next-month-label': 'Go to next month',
  },
};

export const Disabled: StoryObj = {
  args: {
    label: 'Start date',
    value: '2025-07-15',
    variant: VARIANT.INPUT,
    disabled: true,
    locale: 'en-US',
    'help-text': 'Helper text',
    'locale-month-label': 'Month',
    'locale-day-label': 'Day',
    'locale-year-label': 'Year',
  },
};

export const ReadOnly: StoryObj = {
  args: {
    label: 'Start date',
    value: '2025-07-15',
    variant: VARIANT.INPUT,
    readonly: true,
    locale: 'en-US',
    'help-text': 'Helper text',
    'locale-month-label': 'Month',
    'locale-day-label': 'Day',
    'locale-year-label': 'Year',
  },
};

export const ErrorState: StoryObj = {
  args: {
    label: 'End date',
    value: '2025-07-14',
    variant: VARIANT.INPUT,
    locale: 'en-US',
    required: true,
    'help-text': 'End date must occur after start date',
    'help-text-type': 'error',
    'locale-month-label': 'Month',
    'locale-day-label': 'Day',
    'locale-year-label': 'Year',
  },
};

export const DateRange: StoryObj = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <mdc-datepicker
        label="Start date"
        value="2025-07-15"
        variant="input"
        locale="en-US"
        required
        locale-month-label="Month"
        locale-day-label="Day"
        locale-year-label="Year"
        locale-calendar-label="Open calendar"
        locale-today-label="Today"
      ></mdc-datepicker>
      <mdc-datepicker
        label="End date"
        value="2025-07-23"
        variant="input"
        locale="en-US"
        required
        locale-month-label="Month"
        locale-day-label="Day"
        locale-year-label="Year"
        locale-calendar-label="Open calendar"
        locale-today-label="Today"
      ></mdc-datepicker>
    </div>
  `,
  ...hideAllControls(),
};

export const LocalizedGerman: StoryObj = {
  render: () => html`
    <mdc-datepicker
      label="Startdatum"
      variant="input"
      locale="de-DE"
      required
      help-text="Hilfetexte"
      locale-month-label="Monat"
      locale-day-label="Tag"
      locale-year-label="Jahr"
      locale-calendar-label="Kalender öffnen"
      locale-today-label="Heute"
      locale-prev-month-label="Vorheriger Monat"
      locale-next-month-label="Nächster Monat"
      locale-spinbutton-description="Verwenden Sie Pfeiltasten, um den Wert zu ändern"
    ></mdc-datepicker>
  `,
  ...hideAllControls(),
};

export const LocalizedJapanese: StoryObj = {
  render: () => html`
    <mdc-datepicker
      label="開始日"
      variant="input"
      locale="ja-JP"
      required
      locale-month-label="月"
      locale-day-label="日"
      locale-year-label="年"
      locale-calendar-label="カレンダーを開く"
      locale-today-label="今日"
    ></mdc-datepicker>
  `,
  ...hideAllControls(),
};
