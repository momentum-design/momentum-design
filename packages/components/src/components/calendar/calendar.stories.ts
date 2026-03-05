import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideAllControls } from '../../../config/storybook/utils';

import { SELECTION_MODE } from './calendar.constants';

const render = (args: Args) => html`
  <mdc-calendar
    value="${ifDefined(args.value)}"
    end-value="${ifDefined(args['end-value'])}"
    selection-mode="${ifDefined(args['selection-mode'])}"
    locale="${ifDefined(args.locale)}"
    min="${ifDefined(args.min)}"
    max="${ifDefined(args.max)}"
    ?show-today-button="${args['show-today-button']}"
    locale-today-label="${ifDefined(args['locale-today-label'])}"
    locale-prev-month-label="${ifDefined(args['locale-prev-month-label'])}"
    locale-next-month-label="${ifDefined(args['locale-next-month-label'])}"
  ></mdc-calendar>
`;

const meta: Meta = {
  title: 'Components/calendar',
  tags: ['autodocs'],
  component: 'mdc-calendar',
  render,
  argTypes: {
    value: {
      control: 'text',
      description: 'Selected date as ISO string (yyyy-mm-dd)',
    },
    'end-value': {
      control: 'text',
      description: 'End date for range selection (ISO string)',
    },
    'selection-mode': {
      control: 'select',
      options: Object.values(SELECTION_MODE),
      description: 'Selection mode: single, week, or range',
    },
    locale: {
      control: 'text',
      description: 'BCP 47 locale string',
    },
    min: {
      control: 'text',
      description: 'Minimum selectable date (ISO string)',
    },
    max: {
      control: 'text',
      description: 'Maximum selectable date (ISO string)',
    },
    'show-today-button': {
      control: 'boolean',
      description: 'Show a Today button below the calendar grid',
    },
    'locale-today-label': {
      control: 'text',
      description: 'Localized label for the Today button',
    },
    'locale-prev-month-label': {
      control: 'text',
      description: 'Localized aria-label for the previous month button',
    },
    'locale-next-month-label': {
      control: 'text',
      description: 'Localized aria-label for the next month button',
    },
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    'selection-mode': SELECTION_MODE.SINGLE,
    locale: 'en-US',
  },
};

export const WithSelectedDate: StoryObj = {
  args: {
    value: '2025-07-15',
    'selection-mode': SELECTION_MODE.SINGLE,
    locale: 'en-US',
  },
};

export const WeekSelection: StoryObj = {
  args: {
    value: '2025-07-13',
    'end-value': '2025-07-19',
    'selection-mode': SELECTION_MODE.WEEK,
    locale: 'en-US',
    'locale-prev-month-label': 'Go to previous month',
    'locale-next-month-label': 'Go to next month',
  },
};

export const RangeSelection: StoryObj = {
  args: {
    value: '2025-07-10',
    'end-value': '2025-07-20',
    'selection-mode': SELECTION_MODE.RANGE,
    locale: 'en-US',
  },
};

export const MinMax: StoryObj = {
  args: {
    'selection-mode': SELECTION_MODE.SINGLE,
    locale: 'en-US',
    min: '2025-07-05',
    max: '2025-07-25',
  },
};

export const LocalizedFrench: StoryObj = {
  render: () => html`
    <mdc-calendar
      selection-mode="single"
      locale="fr-FR"
      locale-prev-month-label="Mois précédent"
      locale-next-month-label="Mois suivant"
    ></mdc-calendar>
  `,
  ...hideAllControls(),
};

export const MondayStart: StoryObj = {
  render: () => html`
    <mdc-calendar
      selection-mode="single"
      locale="de-DE"
      locale-prev-month-label="Vorheriger Monat"
      locale-next-month-label="Nächster Monat"
    ></mdc-calendar>
  `,
  ...hideAllControls(),
};
