import { css } from 'lit';

import { hostFocusRingStyles } from '../../utils/styles';

const styles = [
  css`
    :host {
      --mdc-checkbox-gap: 0.5rem;
      --mdc-checkbox-label-gap: 0.5rem;
      --mdc-checkbox-label-content-gap: 0rem;
      --mdc-checkbox-supporting-text-font-size: var(--mds-font-apps-body-midsize-regular-font-size);
      --mdc-checkbox-supporting-text-font-weight: var(--mds-font-apps-body-midsize-regular-font-weight);
      --mdc-checkbox-supporting-text-line-height: var(--mds-font-apps-body-midsize-regular-line-height);
      --mdc-checkbox-supporting-text-color: var(--mds-color-theme-text-secondary-normal);
      --mdc-label-font-size: var(--mds-font-apps-body-midsize-regular-font-size);
      --mdc-label-font-weight: var(--mds-font-apps-body-midsize-regular-font-weight);
      --mdc-label-line-height: var(--mds-font-apps-body-midsize-regular-line-height);

      flex-direction: row;
      align-items: flex-start;
      gap: var(--mdc-checkbox-gap);
    }

    :host(:state(rich-label)) {
      --mdc-checkbox-gap: 0.75rem;
      --mdc-checkbox-label-gap: 0.75rem;
      --mdc-label-font-size: var(--mds-font-apps-body-large-regular-font-size);
      --mdc-label-font-weight: var(--mds-font-apps-body-large-regular-font-weight);
      --mdc-label-line-height: var(--mds-font-apps-body-large-regular-line-height);
    }

    :host::part(static-checkbox) {
      position: relative;
    }

    :host(:state(rich-label))::part(static-checkbox) {
      align-self: center;
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
      width: var(--mdc-staticcheckbox-size);
      height: var(--mdc-staticcheckbox-size);
      border-radius: 0.125rem;
    }

    :host::part(text-container) {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    [part='text-container'][hidden] {
      display: none;
    }

    :host::part(label) {
      display: flex;
      align-items: center;
      gap: var(--mdc-checkbox-label-gap);
      min-width: 0;
      word-break: break-word;
      white-space: normal;
    }

    :host::part(label-content) {
      display: flex;
      flex-direction: column;
      gap: var(--mdc-checkbox-label-content-gap);
      min-width: 0;
    }

    :host::part(supporting-text) {
      color: var(--mdc-checkbox-supporting-text-color);
      font-size: var(--mdc-checkbox-supporting-text-font-size);
      font-weight: var(--mdc-checkbox-supporting-text-font-weight);
      line-height: var(--mdc-checkbox-supporting-text-line-height);
      word-break: break-word;
      white-space: normal;
    }

    ::slotted([slot='leading-visual']) {
      align-self: center;
      flex-shrink: 0;
    }

    :host::part(label),
    :host::part(checkbox-input) {
      cursor: pointer;
    }

    :host(:hover)::part(static-checkbox) {
      --mdc-staticcheckbox-background-color: var(--mds-color-theme-control-inactive-hover);
    }

    :host(:active)::part(static-checkbox) {
      --mdc-staticcheckbox-background-color: var(--mds-color-theme-control-inactive-pressed);
    }

    :host([checked]:hover)::part(static-checkbox),
    :host([indeterminate]:hover)::part(static-checkbox) {
      --mdc-staticcheckbox-background-color: var(--mds-color-theme-control-active-hover);
    }

    :host([checked]:active)::part(static-checkbox),
    :host([indeterminate]:active)::part(static-checkbox) {
      --mdc-staticcheckbox-background-color: var(--mds-color-theme-control-active-pressed);
    }

    :host([help-text-type='error'])::part(static-checkbox) {
      --mdc-staticcheckbox-border-color: var(--mds-color-theme-outline-cancel-normal);
    }

    :host([readonly]),
    :host([disabled]),
    :host([soft-disabled]) {
      pointer-events: none;
    }

    :host([disabled]),
    :host([soft-disabled]) {
      --mdc-checkbox-supporting-text-color: var(--mds-color-theme-text-primary-disabled);
    }
  `,
  ...hostFocusRingStyles(true),
];

export default styles;
