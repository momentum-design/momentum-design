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
    }

    :host(:not([readonly]):hover)::part(radio-container) {
      --mdc-radio-control-background-color: var(--mds-color-theme-control-inactive-hover);
    }

    :host(:not([readonly]):active)::part(radio-container) {
      --mdc-radio-control-background-color: var(--mds-color-theme-control-inactive-pressed);
    }

    :host([checked]:hover)::part(radio-container) {
      --mdc-radio-control-border-color: var(--mds-color-theme-control-active-hover);
      --mdc-radio-control-background-color: var(--mds-color-theme-control-active-hover);
    }

    :host([checked]:active)::part(radio-container) {
      --mdc-radio-control-border-color: var(--mds-color-theme-control-active-pressed);
      --mdc-radio-control-background-color: var(--mds-color-theme-control-active-pressed);
    }

    :host([readonly])::part(radio-input) :host([disabled])::part(radio-input) :host([disabled])::part(label),
    :host([readonly])::part(label) {
      cursor: default;
    }

    :host::part(label) {
      cursor: pointer;
      word-break: break-word;
      white-space: normal;
    }

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
  `,
  ...hostFocusRingStyles(true),
];

export default styles;
