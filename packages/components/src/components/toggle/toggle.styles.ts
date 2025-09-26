import { css } from 'lit';

import { hostFitContentStyles, hostFocusRingStyles } from '../../utils/styles';

const styles = [
  hostFitContentStyles,
  css`
    :host {
      --mdc-toggle-width: 3rem;
      --mdc-toggle-height: 1.5rem;
      --mdc-toggle-width-compact: 2rem;
      --mdc-toggle-height-compact: 1rem;

      --mdc-toggle-label-color-disabled: var(--mds-color-theme-text-primary-disabled);
      --mdc-toggle-help-text-color: var(--mds-color-theme-text-secondary-normal);

      --mdc-toggle-active-hover-color: var(--mds-color-theme-control-active-hover);
      --mdc-toggle-active-pressed-color: var(--mds-color-theme-control-active-pressed);
      --mdc-toggle-inactive-hover-color: var(--mds-color-theme-control-inactive-hover);
      --mdc-toggle-inactive-pressed-color: var(--mds-color-theme-control-inactive-pressed);
    }

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

    :host::part(label-text) .mdc-help-text {
      grid-column: 2;
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

    :host::part(help-text) {
      color: var(--mdc-toggle-help-text-color);
    }

    :host(:hover:not([disabled]))::part(container) {
      background-color: var(--mdc-toggle-inactive-hover-color);
    }

    :host(:active:not([disabled]))::part(container) {
      background-color: var(--mdc-toggle-inactive-pressed-color);
    }

    :host(:hover:not([disabled])[checked])::part(container) {
      background-color: var(--mdc-toggle-active-hover-color);
    }

    :host(:active:not([disabled])[checked])::part(container) {
      background-color: var(--mdc-toggle-active-pressed-color);
    }

    :host([disabled])::part(label-text),
    :host([disabled])::part(help-text) {
      color: var(--mdc-toggle-label-color-disabled);
    }
  `,
  ...hostFocusRingStyles(true),
];

export default styles;
