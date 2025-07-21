import { css } from 'lit';

import { hostFitContentStyles, hostFocusRingStyles } from '../../utils/styles';

const styles = css`
  :host {
    gap: 0.5rem;
    border-radius: 0.25rem;
    cursor: pointer;

    --mdc-stepperitem-status-container-background: var(--mds-color-theme-control-active-normal);
    --mdc-stepperitem-label-color: var(--mds-color-theme-text-primary-normal);
    --mdc-stepperitem-help-text-color: var(--mds-color-theme-text-secondary-normal);
    --mdc-stepperitem-label-container-background: none;
  }

  :host([variant='stacked']) {
    flex-direction: column;
    text-align: center;
  }

  :host::part(label) {
    color: var(--mdc-stepperitem-label-color);
  }
  :host::part(help-text) {
    color: var(--mdc-stepperitem-help-text-color);
  }
  :host([status='error-current']),
  :host([status='error-incomplete']) {
    --mdc-stepperitem-help-text-color: var(--mds-color-theme-text-error-normal);
    --mdc-stepperitem-status-container-background: var(--mds-color-theme-background-alert-error-normal);
  }

  :host([status='error-current'])::part(help-text),
  :host([status='error-incomplete'])::part(help-text) {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  :host::part(status-container) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.75rem;
    aspect-ratio: 1;
    border-radius: 50%;
  }

  :host([status='completed'])::part(status-container) {
    background-color: var(--mdc-stepperitem-status-container-background);
  }
  :host([status='completed'])::part(status-icon) {
    --mdc-icon-fill-color: var(--mds-color-theme-inverted-text-primary-normal);
  }
  :host([status='current'])::part(status-container) {
    border: 1px solid var(--mds-color-theme-control-active-normal);
  }
  :host([status='error-current'])::part(status-container) {
    border: 1px solid var(--mds-color-theme-outline-cancel-normal);
  }
  :host([status='error-incomplete'])::part(status-container),
  :host([status='not-started'])::part(status-container) {
    border: 1px solid var(--mds-color-theme-outline-secondary-normal);
  }

  :host([status='error-current'])::part(help-icon),
  :host([status='error-incomplete'])::part(help-icon) {
    --mdc-icon-fill-color: var(--mds-color-theme-text-error-normal);
  }

  :host::part(step-number) {
    color: var(--mdc-stepperitem-label-color);
  }

  :host::part(label-container) {
    background-color: var(--mdc-stepperitem-label-container-background);
    border-radius: 0.5rem;
    padding: 0.25rem 0.5rem;
  }

  :host(:hover) {
    --mdc-stepperitem-label-container-background: var(--mds-color-theme-background-primary-hover);
  }
  :host(:active) {
    --mdc-stepperitem-label-container-background: var(--mds-color-theme-background-primary-active);
  }

  :host([status='completed']:hover) {
    --mdc-stepperitem-status-container-background: var(--mds-color-theme-control-active-hover);
  }
  :host([status='completed']:active) {
    --mdc-stepperitem-status-container-background: var(--mds-color-theme-control-active-active);
  }

  :host([status='current']:hover)::part(status-container) {
    background-color: var(--mds-color-theme-outline-secondary-normal);
    border-color: var(--mds-color-theme-control-active-hover);
  }
  :host([status='current']:active)::part(status-container) {
    background-color: var(--mds-color-theme-background-secondary-active);
    border-color: var(--mds-color-theme-control-active-hover);
  }

  :host([status='not-started']:hover)::part(status-container),
  :host([status='error-incomplete']:hover)::part(status-container) {
    background-color: var(--mds-color-theme-background-secondary-hover);
    border-color: var(--mds-color-theme-outline-secondary-normal);
  }
  :host([status='not-started']:active)::part(status-container),
  :host([status='error-incomplete']:active)::part(status-container) {
    background-color: var(--mds-color-theme-background-secondary-active);
    border-color: var(--mds-color-theme-outline-secondary-normal);
  }

  :host([status='error-current']:hover)::part(status-container) {
    background-color: var(--mds-color-theme-background-secondary-hover);
    border-color: var(--mds-color-theme-outline-cancel-normal);
  }
  :host([status='error-current']:active)::part(status-container) {
    background-color: var(--mds-color-theme-background-secondary-active);
    border-color: var(--mds-color-theme-outline-cancel-normal);
  }

  :host([status='error-current']:hover)::part(help-icon),
  :host([status='error-incomplete']:hover)::part(help-icon) {
    --mdc-icon-fill-color: var(--mds-color-theme-text-error-hover);
  }
  :host([status='error-current']:hover),
  :host([status='error-incomplete']:hover) {
    --mdc-stepperitem-help-text-color: var(--mds-color-theme-text-error-hover);
  }
  :host([status='error-current']:hover)::part(help-icon),
  :host([status='error-incomplete']:hover)::part(help-icon) {
    --mdc-icon-fill-color: var(--mds-color-theme-text-error-active);
  }

  :host([status='error-current']:active),
  :host([status='error-incomplete']:active) {
    --mdc-stepperitem-help-text-color: var(--mds-color-theme-text-error-active);
  }
`;

export default [hostFitContentStyles, styles, ...hostFocusRingStyles()];
