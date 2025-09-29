import { css } from 'lit';

import { hostFocusRingStyles } from '../../utils/styles';

const styles = [
  css`
    :host {
      --mdc-checkbox-background-color-hover: var(--mds-color-theme-control-inactive-hover);
      --mdc-checkbox-pressed-icon-color: var(--mds-color-theme-control-inactive-pressed);
      --mdc-checkbox-checked-pressed-icon-color: var(--mds-color-theme-control-active-pressed);
      --mdc-checkbox-checked-background-color-hover: var(--mds-color-theme-control-active-hover);
      --mdc-checkbox-disabled-checked-icon-color: var(--mds-color-theme-control-active-disabled);
      --mdc-checkbox-disabled-text-color: var(--mds-color-theme-text-primary-disabled);

      flex-direction: row;
      align-items: flex-start;
    }
    .mdc-label,
    .input {
      cursor: pointer;
    }

    :host([disabled]) .mdc-label,
    :host([disabled]) .input,
    :host([soft-disabled]) .mdc-label,
    :host([soft-disabled]) .input {
      cursor: default;
    }

    :host([readonly]),
    :host([soft-disabled]) {
      pointer-events: none;
    }

    :host(:hover:not([readonly]):not([soft-disabled])) mdc-staticcheckbox {
      background: var(--mdc-checkbox-background-color-hover);
    }
    :host(:active:not([readonly]):not([soft-disabled])) mdc-staticcheckbox {
      background: var(--mdc-checkbox-pressed-icon-color);
    }

    :host([checked]:hover:not([readonly]):not([soft-disabled]))::part(icon-container),
    :host([indeterminate]:hover:not([readonly]):not([soft-disabled]))::part(icon-container) {
      background: var(--mdc-checkbox-checked-background-color-hover);
    }
    :host([checked]:active:not([readonly]):not([soft-disabled]))::part(icon-container),
    :host([indeterminate]:active:not([readonly]):not([soft-disabled]))::part(icon-container) {
      background: var(--mdc-checkbox-checked-pressed-icon-color);
    }

    :host([disabled]) mdc-staticcheckbox,
    :host([soft-disabled]) mdc-staticcheckbox {
      background: unset;
    }

    :host([disabled][checked])::part(icon-container),
    :host([disabled][indeterminate])::part(icon-container),
    :host([soft-disabled][checked])::part(icon-container),
    :host([soft-disabled][indeterminate])::part(icon-container) {
      background-color: var(--mdc-checkbox-disabled-checked-icon-color);
    }

    :host mdc-staticcheckbox {
      position: relative;
    }

    .input {
      margin: 0;
      padding: 0;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0.1%;
      overflow: visible;
      z-index: 1;
    }

    .input {
      width: 1rem;
      height: 1rem;
      border-radius: 0.125rem;
    }

    .text-container {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    .mdc-label {
      word-break: break-word;
      white-space: normal;
    }

    :host([disabled]) .mdc-label,
    :host([disabled]) .mdc-help-text,
    :host([soft-disabled]) .mdc-label,
    :host([soft-disabled]) .mdc-label-text,
    :host([soft-disabled]) .mdc-help-text {
      color: var(--mdc-checkbox-disabled-text-color);
    }
  `,
  ...hostFocusRingStyles(true),
];

export default styles;
