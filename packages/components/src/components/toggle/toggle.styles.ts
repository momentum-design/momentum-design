import { css } from 'lit';

import { hostFitContentStyles, hostFocusRingStyles } from '../../utils/styles';

const styles = [
  hostFitContentStyles,
  css`
    /* Grid layout for labeled toggles */
    :host([label]),
    :host([help-text]) {
      display: grid;
      grid-template-rows: auto auto;
      grid-template-columns: auto auto;
      column-gap: 0.75rem;
      row-gap: 0.25rem;
    }

    :host([help-text='']) {
      grid-template-rows: auto;
      row-gap: 0rem;
    }

    :host::part(label-text),
    :host::part(help-text-container) {
      grid-column: 2;
    }

    /* Component structure and layout */
    :host::part(toggle-input) {
      margin: 0;
      padding: 0;
      position: absolute;
      opacity: 0.1%;
      overflow: visible;
      z-index: 1;
      width: var(--mdc-toggle-width);
      height: var(--mdc-toggle-height);
    }

    :host::part(label) {
      word-break: break-word;
      white-space: normal;
      --mdc-label-font-size: var(--mds-font-apps-body-midsize-regular-font-size);
      --mdc-label-font-weight: var(--mds-font-apps-body-midsize-regular-font-weight);
      --mdc-label-line-height: var(--mds-font-apps-body-midsize-regular-line-height);
    }

    /* Default interactive states */
    :host::part(label),
    :host::part(toggle-input) {
      cursor: pointer;
    }

    :host(:hover)::part(static-toggle) {
      --mdc-toggle-background-color: var(--mds-color-theme-control-inactive-hover);
    }

    :host(:active)::part(static-toggle) {
      --mdc-toggle-background-color: var(--mds-color-theme-control-inactive-pressed);
    }

    :host([checked]:hover)::part(static-toggle) {
      --mdc-toggle-background-color: var(--mds-color-theme-control-active-hover);
    }

    :host([checked]:active)::part(static-toggle) {
      --mdc-toggle-background-color: var(--mds-color-theme-control-active-pressed);
    }

    /* Readonly state - disables pointer events */
    :host([readonly]),
    :host([disabled]),
    :host([soft-disabled]) {
      pointer-events: none;
    }
  `,
  ...hostFocusRingStyles(true),
];

export default styles;
