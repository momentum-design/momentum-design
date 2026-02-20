import { css } from 'lit';

import { hostFocusRingStyles } from '../../utils/styles';

const styles = css`
  :host {
    --mdc-timepicker-background-color: var(--mds-color-theme-background-primary-ghost);
    --mdc-timepicker-text-color: var(--mds-color-theme-text-primary-normal);
    --mdc-timepicker-border-color: var(--mds-color-theme-outline-input-normal);
    --mdc-timepicker-width: fit-content;
    --mdc-timepicker-listbox-width: 100%;
    --mdc-timepicker-listbox-height: 15rem;

    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
    align-items: unset;
    width: var(--mdc-timepicker-width);
  }

  :host::part(native-input) {
    margin: 0;
    opacity: 0.1%;
    overflow: visible;
    padding: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
  }

  :host::part(container) {
    height: 2rem;
    width: 100%;
    position: relative;
    display: flex;
  }

  :host::part(base-container) {
    border-radius: 0.5rem;
    padding: 0.34375rem 0.375rem 0.34375rem 0.75rem;
    border: 1px solid var(--mdc-timepicker-border-color);
    background: var(--mdc-timepicker-background-color);
    display: flex;
    gap: 0.25rem;
    align-items: center;
    user-select: none;
    width: 100%;
    cursor: default;
  }

  :host::part(base-container):hover {
    --mdc-timepicker-background-color: var(--mds-color-theme-background-primary-hover);
  }

  :host::part(base-container):active {
    --mdc-timepicker-background-color: var(--mds-color-theme-background-primary-active);
  }

  :host::part(spinbutton-group) {
    display: flex;
    align-items: center;
    gap: 0;
    flex: 1;
    min-width: 0;
  }

  :host::part(spinbutton) {
    background: transparent;
    border: none;
    color: var(--mdc-timepicker-text-color);
    font-family: inherit;
    font-size: 0.875rem;
    line-height: 1.25rem;
    text-align: center;
    outline: none;
    padding: 0;
    margin: 0;
    min-width: 1.25rem;
    width: 1.25rem;
    cursor: text;
    -moz-appearance: textfield;
  }

  :host::part(spinbutton)::-webkit-inner-spin-button,
  :host::part(spinbutton)::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  :host::part(spinbutton):focus {
    background: var(--mds-color-theme-background-accent-normal);
    color: var(--mds-color-theme-common-text-primary-normal);
    border-radius: 0.125rem;
  }

  :host::part(separator) {
    color: var(--mdc-timepicker-text-color);
    font-size: 0.875rem;
    line-height: 1.25rem;
    user-select: none;
    pointer-events: none;
    padding: 0 0.0625rem;
  }

  :host::part(period) {
    background: transparent;
    border: none;
    color: var(--mdc-timepicker-text-color);
    font-family: inherit;
    font-size: 0.875rem;
    line-height: 1.25rem;
    text-align: center;
    outline: none;
    padding: 0;
    margin: 0 0 0 0.25rem;
    min-width: 1.5rem;
    width: 1.5rem;
    cursor: text;
  }

  :host::part(period):focus {
    background: var(--mds-color-theme-background-accent-normal);
    color: var(--mds-color-theme-common-text-primary-normal);
    border-radius: 0.125rem;
  }

  :host::part(icon-container) {
    flex-shrink: 0;
    border-radius: 100px;
  }

  /* Popover height, width & padding overrides */
  :host mdc-popover {
    --mdc-popover-max-width: var(--mdc-timepicker-listbox-width);
    --mdc-popover-max-height: var(--mdc-timepicker-listbox-height);
    min-width: max-content;
  }
  :host mdc-popover::part(popover-content) {
    max-height: var(--mdc-popover-max-height);
    min-width: auto;
    padding: 0.75rem 0.5rem;
  }
  :host mdc-option::part(trailing) {
    min-width: var(--mdc-option-icon-width, 1rem);
  }

  /* Listbox container */
  :host::part(listbox) {
    display: flex;
    flex-direction: column;
    max-height: var(--mdc-popover-internal-available-height);
  }

  /* Help text border colors */
  :host([help-text-type='success'])::part(base-container),
  :host([help-text-type='warning'])::part(base-container),
  :host([help-text-type='error'])::part(base-container) {
    --mdc-timepicker-border-color: var(--mdc-help-text-color);
  }

  :host([readonly])::part(help-text-container) {
    --mdc-help-text-color: var(--mds-color-theme-text-secondary-normal);
  }

  /* Disabled, soft-disabled, readonly */
  :host([disabled])::part(base-container),
  :host([soft-disabled])::part(base-container),
  :host([readonly])::part(base-container) {
    --mdc-timepicker-border-color: var(--mds-color-theme-outline-primary-disabled);
    --mdc-timepicker-background-color: var(--mds-color-theme-background-input-disabled);
  }
  :host([disabled])::part(base-container):hover,
  :host([soft-disabled])::part(base-container):hover,
  :host([readonly])::part(base-container):hover {
    --mdc-timepicker-background-color: var(--mds-color-theme-background-input-disabled);
  }
  :host([disabled])::part(spinbutton),
  :host([soft-disabled])::part(spinbutton),
  :host([disabled])::part(period),
  :host([soft-disabled])::part(period),
  :host([disabled])::part(separator),
  :host([soft-disabled])::part(separator) {
    --mdc-timepicker-text-color: var(--mds-color-theme-text-primary-disabled);
    color: var(--mds-color-theme-text-primary-disabled);
  }
`;

export default [styles, ...hostFocusRingStyles(true)];
