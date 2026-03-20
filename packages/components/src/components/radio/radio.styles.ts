import { css } from 'lit';

import { focusRingBoxShadow, hostFitContentStyles, hostFocusRingStyles } from '../../utils/styles';

const styles = [
  hostFitContentStyles,
  css`
    :host {
      --mdc-label-font-size: var(--mds-font-apps-body-midsize-regular-font-size);
      --mdc-label-font-weight: var(--mds-font-apps-body-midsize-regular-font-weight);
      --mdc-label-line-height: var(--mds-font-apps-body-midsize-regular-line-height);
      display: flex;
      flex-direction: row;
      align-items: start;
      gap: 0.5rem;
    }

    :host::part(radio-indicator) {
      flex: none;
    }

    :host::part(label) {
      cursor: pointer;
      word-break: break-word;
      white-space: normal;
    }

    :host::part(label-text) {
      display: contents;
    }

    :host(:hover)::part(static-radio) {
      --mdc-staticradio-outer-circle-background-color: var(--mds-color-theme-control-inactive-hover);
    }

    :host(:active)::part(static-radio) {
      --mdc-staticradio-outer-circle-background-color: var(--mds-color-theme-control-inactive-pressed);
    }

    :host([checked]:hover)::part(static-radio) {
      --mdc-staticradio-outer-circle-border-color: var(--mds-color-theme-control-active-hover);
      --mdc-staticradio-outer-circle-background-color: var(--mds-color-theme-control-active-hover);
    }

    :host([checked]:active)::part(static-radio) {
      --mdc-staticradio-outer-circle-border-color: var(--mds-color-theme-control-active-pressed);
      --mdc-staticradio-outer-circle-background-color: var(--mds-color-theme-control-active-pressed);
    }

    :host([readonly]),
    :host([disabled]),
    :host([soft-disabled]) {
      pointer-events: none;
    }

    :host(:focus-within),
    :host(:focus-visible) {
      outline: none;
    }

    :host(:focus-visible)::part(radio-indicator) {
      outline: none;
    }

    :host(:focus-within)::part(radio-indicator),
    :host(.mdc-focus-ring:focus-within) {
      position: relative;
      box-shadow: ${focusRingBoxShadow};
    }

    :host([disabled]:focus) {
      box-shadow: none;
    }

    /* High Contrast Mode */
    @media (forced-colors: active) {
      :host(:focus-visible)::part(radio-indicator),
      :host(.mdc-focus-ring:focus-visible) {
        outline: 0.125rem solid var(--mds-color-theme-focus-default-0);
      }
      :host(.mdc-focus-ring:focus-visible)::part(radio-indicator) {
        outline: none;
      }
    }
  `,
  ...hostFocusRingStyles(true),
];

export default styles;
