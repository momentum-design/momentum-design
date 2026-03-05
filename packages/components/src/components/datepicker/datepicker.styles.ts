import { css } from 'lit';

import { hostFocusRingStyles } from '../../utils/styles';

const styles = css`
  :host {
    --mdc-datepicker-background-color: var(--mds-color-theme-background-primary-ghost);
    --mdc-datepicker-text-color: var(--mds-color-theme-text-primary-normal);
    --mdc-datepicker-border-color: var(--mds-color-theme-outline-input-normal);
    --mdc-datepicker-width: fit-content;

    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
    align-items: unset;
    width: var(--mdc-datepicker-width);
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
    border: 1px solid var(--mdc-datepicker-border-color);
    background: var(--mdc-datepicker-background-color);
    display: flex;
    gap: 0.25rem;
    align-items: center;
    user-select: none;
    width: 100%;
    cursor: default;
  }

  :host::part(base-container):hover {
    --mdc-datepicker-background-color: var(--mds-color-theme-background-primary-hover);
  }

  :host::part(base-container):active {
    --mdc-datepicker-background-color: var(--mds-color-theme-background-primary-active);
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
    color: var(--mdc-datepicker-text-color);
    font-family: inherit;
    font-size: var(--mds-font-apps-body-midsize-regular-font-size);
    line-height: var(--mds-font-apps-body-midsize-regular-line-height);
    text-align: center;
    outline: none;
    padding: 0;
    margin: 0;
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

  :host::part(spinbutton-month),
  :host::part(spinbutton-day) {
    min-width: 1.5rem;
    width: 1.5rem;
  }

  :host::part(spinbutton-year) {
    min-width: 2.5rem;
    width: 2.5rem;
  }

  :host::part(separator) {
    color: var(--mdc-datepicker-text-color);
    font-size: var(--mds-font-apps-body-midsize-regular-font-size);
    line-height: var(--mds-font-apps-body-midsize-regular-line-height);
    user-select: none;
    pointer-events: none;
    padding: 0 0.0625rem;
  }

  :host::part(icon-container) {
    flex-shrink: 0;
    border-radius: 100px;
  }

  /* Select variant */
  :host::part(select-text) {
    flex: 1;
    color: var(--mdc-datepicker-text-color);
    font-size: var(--mds-font-apps-body-midsize-regular-font-size);
    line-height: var(--mds-font-apps-body-midsize-regular-line-height);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  :host::part(select-placeholder) {
    color: var(--mds-color-theme-text-secondary-normal);
  }

  /* Popover overrides */
  :host mdc-popover {
    min-width: max-content;
  }
  :host mdc-popover::part(popover-content) {
    min-width: auto;
    padding: 0;
  }

  /* Validation border colors */
  :host([help-text-type='success'])::part(base-container),
  :host([help-text-type='warning'])::part(base-container),
  :host([help-text-type='error'])::part(base-container) {
    --mdc-datepicker-border-color: var(--mdc-help-text-color);
  }

  :host([readonly])::part(help-text-container) {
    --mdc-help-text-color: var(--mds-color-theme-text-secondary-normal);
  }

  /* Disabled, soft-disabled, readonly */
  :host([disabled])::part(base-container),
  :host([soft-disabled])::part(base-container),
  :host([readonly])::part(base-container) {
    --mdc-datepicker-border-color: var(--mds-color-theme-outline-primary-disabled);
    --mdc-datepicker-background-color: var(--mds-color-theme-background-input-disabled);
  }
  :host([disabled])::part(base-container):hover,
  :host([soft-disabled])::part(base-container):hover,
  :host([readonly])::part(base-container):hover {
    --mdc-datepicker-background-color: var(--mds-color-theme-background-input-disabled);
  }
  :host([disabled])::part(spinbutton),
  :host([soft-disabled])::part(spinbutton),
  :host([disabled])::part(separator),
  :host([soft-disabled])::part(separator),
  :host([disabled])::part(select-text),
  :host([soft-disabled])::part(select-text) {
    --mdc-datepicker-text-color: var(--mds-color-theme-text-primary-disabled);
    color: var(--mds-color-theme-text-primary-disabled);
  }
`;

export default [styles, ...hostFocusRingStyles(true)];
