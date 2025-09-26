import { css } from 'lit';

import { hostFitContentStyles, hostFocusRingStyles } from '../../utils/styles';

const styles = [
  hostFitContentStyles,
  css`
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

    :host::part(label),
    :host::part(toggle-input) {
      cursor: pointer;
    }

    :host::part(label) {
      word-break: break-word;
      white-space: normal;
    }

    :host([disabled])::part(label),
    :host([disabled])::part(toggle-input) {
      cursor: default;
    }

    :host::part(help-text-container) {
      grid-column: 2;
    }

    :host(:hover:not([disabled]))::part(container) {
      --mdc-toggle-inactive-rest-color: var(--mds-color-theme-control-inactive-hover);
    }

    :host(:active:not([disabled]))::part(container) {
      --mdc-toggle-inactive-rest-color: var(--mds-color-theme-control-inactive-pressed);
    }

    :host(:hover:not([disabled])[checked])::part(container) {
      --mdc-toggle-active-rest-color: var(--mds-color-theme-control-active-hover);
    }

    :host(:active:not([disabled])[checked])::part(container) {
      --mdc-toggle-active-rest-color: var(--mds-color-theme-control-active-pressed);
    }
  `,
  ...hostFocusRingStyles(true),
];

export default styles;
