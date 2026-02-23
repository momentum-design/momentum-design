import { css } from 'lit';

import { baseHostStyleVariables, focusRingBoxShadow } from '../../utils/styles';

const styles = css`
  :host {
    --mdc-calendar-background-color: var(--mds-color-theme-background-solid-primary-normal);
    --mdc-calendar-text-color: var(--mds-color-theme-text-primary-normal);
    --mdc-calendar-header-text-color: var(--mds-color-theme-text-primary-normal);
    --mdc-calendar-day-text-color: var(--mds-color-theme-text-primary-normal);
    --mdc-calendar-day-hover-bg: var(--mds-color-theme-background-primary-hover);
    --mdc-calendar-day-selected-bg: var(--mds-color-theme-background-accent-active);
    --mdc-calendar-day-selected-text-color: var(--mds-color-theme-inverted-text-primary-normal);
    --mdc-calendar-day-today-border-color: var(--mds-color-theme-outline-input-normal);
    --mdc-calendar-day-outside-month-text-color: var(--mds-color-theme-text-secondary-normal);
    --mdc-calendar-day-disabled-text-color: var(--mds-color-theme-text-primary-disabled);
    --mdc-calendar-range-bg: var(--mds-color-theme-background-accent-active);

    display: flex;
    flex-direction: column;
    background: var(--mdc-calendar-background-color);
    padding: 0.75rem;
    width: 17.5rem;
    border-radius: 0.5rem;
    overflow: hidden;
  }

  .calendar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .calendar-header-title {
    font-weight: var(--mds-font-apps-body-small-bold-font-weight);
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: var(--mdc-calendar-header-text-color);
  }

  .calendar-header-nav {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  :host(:dir(rtl)) .calendar-header-nav {
    transform: scaleX(-1);
  }

  .calendar-weekday {
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: var(--mds-font-apps-body-small-regular-font-weight);
    color: var(--mdc-calendar-day-outside-month-text-color);
    padding: 0.25rem 0;
    text-align: center;
  }

  .calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-auto-rows: 1.75rem;
    row-gap: 0.125rem;
    outline: none;
  }

  .calendar-row {
    display: contents;
  }

  .calendar-day-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: visible;
    position: relative;
  }

  .calendar-day-wrapper.in-range {
    background: var(--mdc-calendar-range-bg);
    border-top: 1px solid var(--mdc-calendar-day-selected-bg);
    border-bottom: 1px solid var(--mdc-calendar-day-selected-bg);
  }

  .calendar-day-wrapper.range-start,
  .calendar-day-wrapper.in-range:first-child {
    border-start-start-radius: 1.125rem;
    border-end-start-radius: 1.125rem;
    border-inline-start: 1px solid var(--mdc-calendar-day-selected-bg);
  }

  .calendar-day-wrapper.range-end,
  .calendar-day-wrapper.in-range:last-child {
    border-start-end-radius: 1.125rem;
    border-end-end-radius: 1.125rem;
    border-inline-end: 1px solid var(--mdc-calendar-day-selected-bg);
  }

  .calendar-day {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.75rem;
    height: 1.75rem;
    font-size: 0.875rem;
    line-height: 0.75rem;
    color: var(--mdc-calendar-day-text-color);
    border: none;
    background: transparent;
    cursor: pointer;
    border-radius: 1.125rem;
    padding: 0.5rem 0.125rem;
    position: relative;
    outline: none;
    font-family: inherit;
    box-sizing: border-box;
  }

  .calendar-day:hover:not(.disabled):not(.outside-month):not(.selected) {
    background: var(--mdc-calendar-day-hover-bg);
  }

  .calendar-day:focus-visible,
  .calendar-day.focused {
    outline: none;
    z-index: 1;
    box-shadow: ${focusRingBoxShadow};
  }

  @media (forced-colors: active) {
    .calendar-day:focus-visible,
    .calendar-day.focused {
      outline: 0.125rem solid var(--mds-color-theme-focus-default-0);
    }
  }

  .calendar-day.outside-month {
    color: var(--mdc-calendar-day-outside-month-text-color);
  }

  .calendar-day.today {
    border: 1px solid var(--mdc-calendar-day-today-border-color);
  }

  .calendar-day.selected {
    background: var(--mdc-calendar-day-selected-bg);
    color: var(--mdc-calendar-day-selected-text-color);
    font-weight: var(--mds-font-apps-body-small-bold-font-weight);
  }

  .calendar-day.selected.today {
    border-color: transparent;
  }

  .calendar-day-wrapper.in-range .calendar-day.today {
    border-color: var(--mdc-calendar-day-selected-text-color);
  }

  .calendar-day-wrapper.in-range .calendar-day {
    color: var(--mdc-calendar-day-selected-text-color);
    font-weight: var(--mds-font-apps-body-small-bold-font-weight);
  }

  .calendar-day.disabled {
    color: var(--mdc-calendar-day-disabled-text-color);
    cursor: not-allowed;
    pointer-events: none;
  }

  .calendar-today-button {
    display: flex;
    justify-content: center;
    margin-top: 0.5rem;
  }

  .calendar-today-button mdc-button {
    width: auto;
  }
`;

export default [baseHostStyleVariables, styles];
