import { css } from 'lit';

import { hostFitContentStyles, hostFocusRingStyles } from '../../utils/styles';

const styles = [
  hostFitContentStyles,
  css`
    /* Base styles and CSS custom properties */
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
      font-size: var(--mds-font-apps-body-midsize-regular-font-size);
      font-weight: var(--mds-font-apps-body-midsize-regular-font-weight);
      line-height: var(--mds-font-apps-body-midsize-regular-line-height);
    }

    :host::part(help-text) {
      color: var(--mdc-toggle-help-text-color);
    }

    /* Default interactive states */
    :host::part(label),
    :host::part(toggle-input) {
      cursor: pointer;
    }

    :host(:hover)::part(container) {
      background-color: var(--mdc-toggle-inactive-hover-color);
    }

    :host(:active)::part(container) {
      background-color: var(--mdc-toggle-inactive-pressed-color);
    }

    :host([checked]:hover)::part(container) {
      background-color: var(--mdc-toggle-active-hover-color);
    }

    :host([checked]:active)::part(container) {
      background-color: var(--mdc-toggle-active-pressed-color);
    }

    /* Readonly state - disables pointer events */
    :host([readonly]),
    :host([soft-disabled]) {
      pointer-events: none;
    }

    /* Disabled states override interactive styles */
    :host([disabled])::part(label),
    :host([disabled])::part(toggle-input),
    :host([soft-disabled])::part(label),
    :host([soft-disabled])::part(toggle-input) {
      cursor: default;
    }

    :host([disabled]:hover)::part(container),
    :host([disabled]:active)::part(container),
    :host([disabled][checked]:hover)::part(container),
    :host([disabled][checked]:active)::part(container),
    :host([soft-disabled]:hover)::part(container),
    :host([soft-disabled]:active)::part(container),
    :host([soft-disabled][checked]:hover)::part(container),
    :host([soft-disabled][checked]:active)::part(container) {
      background-color: unset;
    }

    :host([disabled])::part(label-text),
    :host([disabled])::part(help-text),
    :host([soft-disabled])::part(label),
    :host([soft-disabled])::part(label-text),
    :host([soft-disabled])::part(help-text) {
      color: var(--mdc-toggle-label-color-disabled);
    }
  `,
  ...hostFocusRingStyles(true),
];

export default styles;
