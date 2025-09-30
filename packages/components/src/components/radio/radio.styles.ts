import { css } from 'lit';

import { hostFitContentStyles, hostFocusRingStyles } from '../../utils/styles';

const styles = [
  hostFitContentStyles,
  css`
    /* Base styles and CSS custom properties */
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

    /* Component structure and layout */
    :host::part(radio-input) {
      position: absolute;
      opacity: 0;
      margin: 0;
      width: 100%;
      height: 100%;
      cursor: pointer;
      z-index: 2;
    }

    :host::part(text-container) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 0.25rem;
      flex: 1;
    }

    :host::part(required-indicator) {
      display: none;
    }

    :host::part(label) {
      cursor: pointer;
      word-break: break-word;
      white-space: normal;
      font-size: var(--mds-font-apps-body-midsize-regular-font-size);
      font-weight: var(--mds-font-apps-body-midsize-regular-font-weight);
      line-height: var(--mds-font-apps-body-midsize-regular-line-height);
    }

    /* Default interactive states */
    :host(:hover) mdc-staticradio {
      background-color: var(--mdc-radio-control-inactive-hover);
    }

    :host(:active) mdc-staticradio {
      background-color: var(--mdc-radio-control-inactive-pressed-color);
    }

    :host([checked]:hover)::part(radio-icon) {
      border-color: var(--mdc-radio-control-active-hover-color);
      background-color: var(--mdc-radio-control-active-hover-color);
    }

    :host([checked]:active)::part(radio-icon) {
      border-color: var(--mdc-radio-control-active-pressed-color);
      background-color: var(--mdc-radio-control-active-pressed-color);
    }

    /* Readonly state - disables pointer events but allows specific hover behavior */
    :host([readonly]) {
      pointer-events: none;
    }

    :host([readonly]:hover)::part(radio-icon) {
      border-color: var(--mdc-staticradio-normal-border-color);
      background-color: var(--mdc-staticradio-control-inactive-color);
    }

    :host([soft-disabled]) {
      pointer-events: none;
    }

    /* Disabled states override interactive styles */
    :host([disabled])::part(radio-input),
    :host([soft-disabled])::part(radio-input),
    :host([readonly])::part(radio-input),
    :host([disabled])::part(label),
    :host([soft-disabled])::part(label),
    :host([readonly])::part(label) {
      cursor: default;
    }

    :host([disabled]:hover) mdc-staticradio,
    :host([disabled]:active) mdc-staticradio,
    :host([soft-disabled]:hover) mdc-staticradio,
    :host([soft-disabled]:active) mdc-staticradio {
      background-color: unset;
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

    :host([disabled])::part(label-text),
    :host([disabled])::part(help-text),
    :host([soft-disabled])::part(label),
    :host([soft-disabled])::part(label-text),
    :host([soft-disabled])::part(help-text) {
      color: var(--mdc-radio-text-disabled-color);
    }
  `,
  ...hostFocusRingStyles(true),
];

export default styles;
