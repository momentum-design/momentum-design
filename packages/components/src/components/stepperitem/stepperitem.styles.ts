import { css } from 'lit';

import { hostFitContentStyles, hostFocusRingStyles } from '../../utils/styles';

const styles = css`
  :host {
    gap: 0.5rem;
    border-radius: 0.25rem;
    cursor: pointer;

    --mdc-stepperitem-status-container-background: transparent;
    --mdc-stepperitem-status-container-border-color: transparent;
    --mdc-stepperitem-label-color: var(--mds-color-theme-text-primary-normal);
    --mdc-stepperitem-help-text-color: var(--mds-color-theme-text-secondary-normal);
    --mdc-stepperitem-label-container-background: transparent;
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

  :host::part(status-container) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.75rem;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: var(--mdc-stepperitem-status-container-background);
    border: 1px solid var(--mdc-stepperitem-status-container-border-color);
  }

  :host::part(step-number) {
    color: var(--mdc-stepperitem-label-color);
  }

  :host::part(label-container) {
    background-color: var(--mdc-stepperitem-label-container-background);
    border-radius: 0.5rem;
    padding: 0.25rem 0.5rem;
  }

  :host([variant='stacked'])::part(label-container) {
    width: 8.75rem;
    padding: 0.25rem var(--mdc-stepperitem-label-padding-inline, 0);
  }

  :host([variant='stacked'])::part(label),
  :host([variant='stacked'])::part(help-text) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  :host([status='error-current']),
  :host([status='error-incomplete']) {
    --mdc-stepperitem-help-text-color: var(--mds-color-theme-text-error-normal);
    --mdc-stepperitem-status-container-background: var(--mds-color-theme-background-alert-error-normal);
  }

  :host([status='error-current'])::part(help-text-container),
  :host([status='error-incomplete'])::part(help-text-container) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
  }

  :host([status='completed'])::part(status-container) {
    --mdc-stepperitem-status-container-background: var(--mds-color-theme-control-active-normal);
  }
  :host([status='completed'])::part(status-icon) {
    --mdc-icon-fill-color: var(--mds-color-theme-inverted-text-primary-normal);
  }
  :host([status='current'])::part(status-container) {
    --mdc-stepperitem-status-container-border-color: var(--mds-color-theme-control-active-normal);
  }
  :host([status='error-current'])::part(status-container) {
    --mdc-stepperitem-status-container-border-color: var(--mds-color-theme-outline-cancel-normal);
    --mdc-stepperitem-status-container-background: none;
  }
  :host([status='error-incomplete'])::part(status-container),
  :host([status='not-started'])::part(status-container) {
    --mdc-stepperitem-status-container-border-color: var(--mds-color-theme-outline-secondary-normal);
    --mdc-stepperitem-status-container-background: none;
  }

  :host([status='error-current'])::part(help-icon),
  :host([status='error-incomplete'])::part(help-icon) {
    --mdc-icon-fill-color: var(--mds-color-theme-text-error-normal);
    flex-shrink: 0;
  }

  :host(:hover) {
    --mdc-stepperitem-label-container-background: var(--mds-color-theme-background-primary-hover);
  }
  :host(:active) {
    --mdc-stepperitem-label-container-background: var(--mds-color-theme-background-primary-active);
  }

  :host([status='completed']:hover)::part(status-container) {
    --mdc-stepperitem-status-container-background: var(--mds-color-theme-control-active-hover);
  }
  :host([status='completed']:active)::part(status-container) {
    --mdc-stepperitem-status-container-background: var(--mds-color-theme-control-active-active);
  }

  :host([status='current']:hover)::part(status-container) {
    --mdc-stepperitem-status-container-background: var(--mds-color-theme-outline-secondary-normal);
    --mdc-stepperitem-status-container-border-color: var(--mds-color-theme-control-active-hover);
  }
  :host([status='current']:active)::part(status-container) {
    --mdc-stepperitem-status-container-background: var(--mds-color-theme-background-secondary-active);
    --mdc-stepperitem-status-container-border-color: var(--mds-color-theme-control-active-hover);
  }

  :host([status='not-started']:hover)::part(status-container),
  :host([status='error-incomplete']:hover)::part(status-container) {
    --mdc-stepperitem-status-container-background: var(--mds-color-theme-background-secondary-hover);
    --mdc-stepperitem-status-container-border-color: var(--mds-color-theme-outline-secondary-normal);
  }
  :host([status='not-started']:active)::part(status-container),
  :host([status='error-incomplete']:active)::part(status-container) {
    --mdc-stepperitem-status-container-background: var(--mds-color-theme-background-secondary-active);
    --mdc-stepperitem-status-container-border-color: var(--mds-color-theme-outline-secondary-normal);
  }

  :host([status='error-current']:hover)::part(status-container) {
    --mdc-stepperitem-status-container-background: var(--mds-color-theme-background-secondary-hover);
    --mdc-stepperitem-status-container-border-color: var(--mds-color-theme-outline-cancel-normal);
  }
  :host([status='error-current']:active)::part(status-container) {
    --mdc-stepperitem-status-container-background: var(--mds-color-theme-background-secondary-active);
    --mdc-stepperitem-status-container-border-color: var(--mds-color-theme-outline-cancel-normal);
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
