import { css } from 'lit';

import { hostFitContentStyles } from '../../utils/styles';

const styles = css`
  :host {
    --mdc-label-font-size: var(--mds-font-apps-body-midsize-medium-font-size);
    --mdc-label-font-weight: var(--mds-font-apps-body-midsize-medium-font-weight);
    --mdc-label-line-height: var(--mds-font-apps-body-midsize-medium-line-height);
    --mdc-label-color: var(--mds-color-theme-text-primary-normal);
    --mdc-help-text-font-size: var(--mds-font-apps-body-midsize-regular-font-size);
    --mdc-help-text-font-weight: var(--mds-font-apps-body-midsize-regular-font-weight);
    --mdc-help-text-line-height: var(--mds-font-apps-body-midsize-regular-line-height);
    --mdc-help-text-color: var(--mds-color-theme-text-secondary-normal);

    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
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
    font-size: var(--mdc-label-font-size);
    font-weight: var(--mdc-label-font-weight);
    line-height: var(--mdc-label-line-height);
  }

  :host::part(help-text),
  :host::part(help-text-container) {
    font-size: var(--mdc-help-text-font-size);
    font-weight: var(--mdc-help-text-font-weight);
    line-height: var(--mdc-help-text-line-height);
  }

  :host::part(label) {
    color: var(--mdc-label-color);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  :host::part(help-text-container) {
    color: var(--mdc-help-text-color);
  }

  :host::part(info-icon-btn) {
    align-self: flex-start;
  }
  :host([help-text-type='error']) {
    --mdc-help-text-color: var(--mds-color-theme-text-error-normal);
  }
  :host([help-text-type='warning']) {
    --mdc-help-text-color: var(--mds-color-theme-text-warning-normal);
  }
  :host([help-text-type='success']) {
    --mdc-help-text-color: var(--mds-color-theme-text-success-normal);
  }
  :host([help-text-type='priority']) {
    --mdc-help-text-color: var(--mds-color-theme-text-accent-normal);
  }

  :host([disabled]),
  :host([disabled])::part(label),
  :host([disabled])::part(help-text-container),
  :host([disabled])::part(required-indicator) {
    color: var(--mds-color-theme-text-primary-disabled);
  }
`;

export default [hostFitContentStyles, styles];
