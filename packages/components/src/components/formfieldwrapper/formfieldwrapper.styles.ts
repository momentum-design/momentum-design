import { css } from 'lit';

import { hostFitContentStyles } from '../../utils/styles';

const styles = [
  hostFitContentStyles,
  css`
    :host {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }
    :host([disabled]),
    :host([disabled])::part(label),
    :host([disabled])::part(help-text-container),
    :host([disabled])::part(required-indicator),
    :host([disabled][help-text-type='error'])::part(help-text-container),
    :host([disabled][help-text-type='success'])::part(help-text-container),
    :host([disabled][help-text-type='warning'])::part(help-text-container),
    :host([disabled][help-text-type='priority'])::part(help-text-container) {
      color: var(--mds-color-theme-text-primary-disabled);
    }

    :host::part(required-indicator) {
      color: var(--mds-color-theme-text-error-normal);
    }

    :host::part(label-text),
    :host::part(help-text-container) {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      width: 100%;
    }

    :host::part(label) {
      font-size: var(--mds-font-apps-body-midsize-medium-font-size);
      font-weight: var(--mds-font-apps-body-midsize-medium-font-weight);
      line-height: var(--mds-font-apps-body-midsize-medium-line-height);
    }

    :host::part(help-text),
    :host::part(help-text-container) {
      font-size: var(--mds-font-apps-body-midsize-regular-font-size);
      font-weight: var(--mds-font-apps-body-midsize-regular-font-weight);
      line-height: var(--mds-font-apps-body-midsize-regular-line-height);
    }

    :host::part(label) {
      color: var(--mds-color-theme-text-primary-normal);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    :host::part(help-text-container) {
      color: var(--mds-color-theme-text-secondary-normal);
    }

    :host::part(info-icon-btn) {
      align-self: flex-start;
    }

    :host([help-text-type='error'])::part(help-text-container) {
      color: var(--mds-color-theme-text-error-normal);
    }
    :host([help-text-type='warning'])::part(help-text-container) {
      color: var(--mds-color-theme-text-warning-normal);
    }
    :host([help-text-type='success'])::part(help-text-container) {
      color: var(--mds-color-theme-text-success-normal);
    }
    :host([help-text-type='priority'])::part(help-text-container) {
      color: var(--mds-color-theme-text-accent-normal);
    }
  `,
];

export default styles;
