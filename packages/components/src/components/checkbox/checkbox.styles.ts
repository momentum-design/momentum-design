import { css } from 'lit';

import { hostFocusRingStyles } from '../../utils/styles';

const styles = [
  css`
    :host {
      flex-direction: row;
      align-items: flex-start;
    }

    :host::part(static-checkbox) {
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
      width: var(--mdc-checkbox-size);
      height: var(--mdc-checkbox-size);
      border-radius: 0.125rem;
    }

    :host::part(text-container) {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    :host::part(label) {
      --mdc-label-font-size: var(--mds-font-apps-body-midsize-regular-font-size);
      --mdc-label-font-weight: var(--mds-font-apps-body-midsize-regular-font-weight);
      --mdc-label-line-height: var(--mds-font-apps-body-midsize-regular-line-height);
      word-break: break-word;
      white-space: normal;
    }

    :host::part(label),
    :host::part(checkbox-input) {
      cursor: pointer;
    }

    :host(:hover)::part(static-checkbox) {
      --mdc-checkbox-background-color: var(--mds-color-theme-control-inactive-hover);
    }

    :host(:active)::part(static-checkbox) {
      --mdc-checkbox-background-color: var(--mds-color-theme-control-inactive-pressed);
    }

    :host([checked]:hover)::part(static-checkbox),
    :host([indeterminate]:hover)::part(static-checkbox) {
      --mdc-checkbox-background-color: var(--mds-color-theme-control-active-hover);
    }

    :host([checked]:active)::part(static-checkbox),
    :host([indeterminate]:active)::part(static-checkbox) {
      --mdc-checkbox-background-color: var(--mds-color-theme-control-active-pressed);
    }

    :host([readonly]),
    :host([disabled]),
    :host([soft-disabled]) {
      pointer-events: none;
    }
  `,
  ...hostFocusRingStyles(true),
];

export default styles;
