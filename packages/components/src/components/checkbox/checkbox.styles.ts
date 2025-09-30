import { css } from 'lit';

import { hostFocusRingStyles } from '../../utils/styles';

const styles = [
  css`
    /* Base styles and CSS custom properties */
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

    /* Component structure and layout */
    :host mdc-staticcheckbox {
      position: relative;
    }

    :host::part(checkbox-input) {
      margin: 0;
      padding: 0;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0.1%;
      overflow: visible;
      z-index: 1;
      width: 1rem;
      height: 1rem;
      border-radius: 0.125rem;
    }

    :host::part(text-container) {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    :host::part(label) {
      font-size: var(--mds-font-apps-body-midsize-regular-font-size);
      font-weight: var(--mds-font-apps-body-midsize-regular-font-weight);
      line-height: var(--mds-font-apps-body-midsize-regular-line-height);
      word-break: break-word;
      white-space: normal;
    }

    /* Default interactive states */
    :host::part(label),
    :host::part(checkbox-input) {
      cursor: pointer;
    }

    :host(:hover) mdc-staticcheckbox {
      background-color: var(--mdc-checkbox-background-color-hover);
    }

    :host(:active) mdc-staticcheckbox {
      background-color: var(--mdc-checkbox-pressed-icon-color);
    }

    :host([checked]:hover)::part(icon-container),
    :host([indeterminate]:hover)::part(icon-container) {
      background-color: var(--mdc-checkbox-checked-background-color-hover);
    }

    :host([checked]:active)::part(icon-container),
    :host([indeterminate]:active)::part(icon-container) {
      background-color: var(--mdc-checkbox-checked-pressed-icon-color);
    }

    /* Readonly state - disables pointer events */
    :host([readonly]),
    :host([soft-disabled]) {
      pointer-events: none;
    }

    /* Disabled states override interactive styles */
    :host([disabled])::part(label),
    :host([disabled])::part(checkbox-input),
    :host([soft-disabled])::part(label),
    :host([soft-disabled])::part(checkbox-input) {
      cursor: default;
    }

    :host([disabled]) mdc-staticcheckbox,
    :host([soft-disabled]) mdc-staticcheckbox {
      background-color: unset;
    }

    :host([disabled][checked])::part(icon-container),
    :host([disabled][indeterminate])::part(icon-container),
    :host([soft-disabled][checked])::part(icon-container),
    :host([soft-disabled][indeterminate])::part(icon-container) {
      background-color: var(--mdc-checkbox-disabled-checked-icon-color);
    }

    :host([disabled])::part(label),
    :host([disabled])::part(help-text),
    :host([soft-disabled])::part(label),
    :host([soft-disabled])::part(label-text),
    :host([soft-disabled])::part(help-text) {
      color: var(--mdc-checkbox-disabled-text-color);
    }
  `,
  ...hostFocusRingStyles(true),
];

export default styles;
