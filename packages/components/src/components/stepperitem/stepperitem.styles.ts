import { css } from 'lit';

import { hostFitContentStyles, hostFocusRingStyles } from '../../utils/styles';

const styles = css`
  :host {
    gap: 0.5rem;
    border-radius: 0.25rem;
    cursor: pointer;

    --mdc-stepperitem-status-container-background: var(--mds-color-theme-control-active-normal);
    --mdc-stepperitem-step-number-color: var(--mds-color-theme-inverted-text-primary-normal);
    --mdc-stepperitem-label-color: var(--mds-color-theme-text-primary-normal);
    --mdc-stepperitem-optional-label-color: var(--mds-color-theme-text-secondary-normal);
  }

  :host([variant='stacked']) {
    flex-direction: column;
    text-align: center;
  }

  :host::part(label) {
    color: var(--mdc-stepperitem-label-color);
  }
  :host::part(optional-label) {
    color: var(--mdc-stepperitem-optional-label-color);
  }
  :host([status='error']) {
    --mdc-stepperitem-label-color: var(--mds-color-theme-text-error-normal);
    --mdc-stepperitem-optional-label-color: var(--mds-color-theme-text-error-normal);
    --mdc-stepperitem-status-container-background: var(--mds-color-theme-background-alert-error-normal);
  }

  :host::part(status-container) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.75rem;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: var(--mdc-stepperitem-status-container-background);
  }

  :host([status='future-clickable']) {
    --mdc-stepperitem-status-container-background: var(--mds-color-theme-background-secondary-normal);
  }

  :host([status='future-disabled'])::part(status-container) {
    --mdc-stepperitem-status-container-background: transparent;
    border: 1px solid var(--mds-color-theme-outline-secondary-normal);
  }

  :host::part(status-icon) {
    --mdc-icon-fill-color: var(--mds-color-theme-inverted-text-primary-normal);
  }
  :host([status='error'])::part(status-icon) {
    --mdc-icon-fill-color: var(--mds-color-theme-text-error-normal);
  }

  :host::part(step-number) {
    color: var(--mdc-stepperitem-step-number-color);
  }

  :host([status='future-clickable']) {
    --mdc-stepperitem-step-number-color: var(--mds-color-theme-text-primary-normal);
  }
  :host([status='future-disabled']) {
    cursor: default;
    --mdc-stepperitem-step-number-color: var(--mds-color-theme-text-secondary-normal);
    --mdc-stepperitem-label-color: var(--mds-color-theme-text-secondary-normal);
  }

  :host(:not([status='future-disabled']):hover)::part(label-container) {
    text-decoration: underline;
    text-decoration-color: var(--mdc-stepperitem-label-color);
  }

  :host([status='completed']:hover),
  :host([status='current']:hover) {
    --mdc-stepperitem-label-color: var(--mds-color-theme-text-accent-hover);
    --mdc-stepperitem-optional-label-color: var(--mds-color-theme-text-accent-hover);
    --mdc-stepperitem-status-container-background: var(--mds-color-theme-control-active-hover);
  }

  :host([status='error']:hover)::part(status-icon) {
    --mdc-icon-fill-color: var(--mds-color-theme-text-error-hover);
  }
  :host([status='error']:hover) {
    --mdc-stepperitem-label-color: var(--mds-color-theme-text-error-hover);
    --mdc-stepperitem-optional-label-color: var(--mds-color-theme-text-error-hover);
    --mdc-stepperitem-status-container-background: var(--mds-color-theme-background-alert-error-hover);
  }

  :host([status='future-clickable']:hover) {
    --mdc-stepperitem-status-container-background: var(--mds-color-theme-background-secondary-hover);
  }

  :host([status='completed']:active),
  :host([status='current']:active) {
    --mdc-stepperitem-label-color: var(--mds-color-theme-text-accent-active);
    --mdc-stepperitem-optional-label-color: var(--mds-color-theme-text-accent-active);
    --mdc-stepperitem-status-container-background: var(--mds-color-theme-control-active-active);
  }

  :host([status='error']:hover)::part(status-icon) {
    --mdc-icon-fill-color: var(--mds-color-theme-text-error-active);
  }
  :host([status='error']:active) {
    --mdc-stepperitem-label-color: var(--mds-color-theme-text-error-active);
    --mdc-stepperitem-optional-label-color: var(--mds-color-theme-text-error-active);
    --mdc-stepperitem-status-container-background: var(--mds-color-theme-background-alert-error-active);
  }

  :host([status='future-clickable']:active) {
    --mdc-stepperitem-status-container-background: var(--mds-color-theme-background-secondary-active);
  }
`;

export default [hostFitContentStyles, styles, ...hostFocusRingStyles()];
