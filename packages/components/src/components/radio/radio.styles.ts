import { css } from 'lit';

import { hostFitContentStyles, hostFocusRingStyles } from '../../utils/styles';

const styles = [
  hostFitContentStyles,
  css`
    :host {
      display: flex;
      flex-direction: row;
      align-items: start;
      gap: 0.5rem;

      --mdc-radio-text-disabled-color: var(--mds-color-theme-text-primary-disabled);
      --mdc-radio-control-inactive-hover: var(--mds-color-theme-control-inactive-hover);
      --mdc-radio-control-inactive-pressed-color: var(--mds-color-theme-control-inactive-pressed);
      --mdc-radio-control-active-hover-color: var(--mds-color-theme-control-active-hover);
      --mdc-radio-control-active-pressed-color: var(--mds-color-theme-control-active-pressed);
      --mdc-radio-control-active-disabled-background: var(--mds-color-theme-control-active-disabled);
      --mdc-radio-control-inactive-disabled-background: var(--mds-color-theme-control-inactive-disabled);
      --mdc-radio-disabled-border-color: var(--mds-color-theme-outline-primary-disabled);
    }

    :host(:hover:not([readonly]):not([soft-disabled]))::part(radio-icon) {
      background-color: var(--mdc-radio-control-inactive-hover);
    }

    :host(:active:not([readonly]):not([soft-disabled]))::part(radio-icon) {
      background-color: var(--mdc-radio-control-inactive-pressed-color);
    }

    :host([checked]:hover:not([readonly]):not([soft-disabled]))::part(radio-icon) {
      border-color: var(--mdc-radio-control-active-hover-color);
      background-color: var(--mdc-radio-control-active-hover-color);
    }

    :host([checked]:active:not([readonly]):not([soft-disabled]))::part(radio-icon) {
      border-color: var(--mdc-radio-control-active-pressed-color);
      background-color: var(--mdc-radio-control-active-pressed-color);
    }

    :host([readonly]:hover)::part(radio-icon) {
      border-color: var(--mdc-staticradio-normal-border-color);
      background-color: var(--mdc-staticradio-control-inactive-color);
    }

    :host([disabled]:hover)::part(radio-icon),
    :host([soft-disabled]:hover)::part(radio-icon),
    :host([disabled][readonly]:hover)::part(radio-icon),
    :host([soft-disabled][readonly]:hover)::part(radio-icon) {
      border-color: var(--mdc-radio-disabled-border-color);
      background-color: var(--mdc-radio-control-inactive-disabled-background);
    }

    :host([disabled][checked]:hover)::part(radio-icon),
    :host([soft-disabled][checked]:hover)::part(radio-icon) {
      background-color: var(--mdc-radio-control-active-disabled-background);
    }

    :host([readonly]) .mdc-radio__input,
    :host([disabled]) .mdc-radio__input,
    :host([soft-disabled]) .mdc-radio__input,
    :host([disabled]) .mdc-label,
    :host([soft-disabled]) .mdc-label,
    :host([readonly]) .mdc-label {
      cursor: default;
    }

    :host([readonly]),
    :host([soft-disabled]) {
      pointer-events: none;
    }

    .mdc-label {
      cursor: pointer;
      word-break: break-word;
      white-space: normal;
    }

    :host([disabled]) .mdc-label-text,
    :host([disabled]) .mdc-help-text,
    :host([soft-disabled]) .mdc-label,
    :host([soft-disabled]) .mdc-label-text,
    :host([soft-disabled]) .mdc-help-text {
      color: var(--mdc-radio-text-disabled-color);
    }

    .mdc-radio__input {
      position: absolute;
      opacity: 0;
      margin: 0;
      width: 100%;
      height: 100%;
      cursor: pointer;
      z-index: 2;
    }

    .mdc-radio__label-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 0.25rem;
      flex: 1;
    }
    :host::part(required-indicator) {
      display: none;
    }
  `,
  ...hostFocusRingStyles(true),
];

export default styles;
