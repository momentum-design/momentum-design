import { css } from 'lit';

import { hostFitContentStyles } from '../../utils/styles';

const styles = [
  hostFitContentStyles,
  css`
    :host {
      --mdc-badge-primary-foreground-color: var(--mds-color-theme-common-text-primary-normal);
      --mdc-badge-primary-background-color: var(--mds-color-theme-background-accent-normal);

      --mdc-badge-secondary-foreground-color: var(--mds-color-theme-text-secondary-normal);
      --mdc-badge-secondary-background-color: var(--mds-color-theme-background-alert-default-normal);

      --mdc-badge-success-foreground-color: var(--mds-color-theme-text-success-normal);
      --mdc-badge-success-background-color: var(--mds-color-theme-background-alert-success-normal);

      --mdc-badge-warning-foreground-color: var(--mds-color-theme-text-warning-normal);
      --mdc-badge-warning-background-color: var(--mds-color-theme-background-alert-warning-normal);

      --mdc-badge-error-foreground-color: var(--mds-color-theme-text-error-normal);
      --mdc-badge-error-background-color: var(--mds-color-theme-background-alert-error-normal);

      --mdc-badge-overlay-background-color: var(--mds-color-theme-background-solid-primary-normal);

      --mdc-badge-dot-width: 0.75rem;
      --mdc-badge-dot-height: 0.75rem;

      color: var(--mdc-badge-primary-foreground-color);

      opacity: 0;
      transform: scale(0.8);
      transition: var(--mds-transition-fade-out);
    }

    :host([data-motion-phase='entering']),
    :host([data-motion-phase='visible']),
    :host([data-motion-phase='updating']) {
      opacity: 1;
      transform: scale(1);
    }

    :host([data-motion-phase='entering']) {
      transition: var(--mds-transition-fade-in), var(--mds-transition-grow-shrink);
    }

    :host([data-motion-phase='updating']) {
      transition: var(--mds-transition-grow-shrink);
    }

    :host([data-motion-phase='updating'][data-pulse-step='shrink']) {
      transform: scale(0.8);
    }

    :host([data-motion-phase='exiting']) {
      opacity: 0;
      transition: var(--mds-transition-fade-out);
    }

    :host([data-motion-phase='hidden']) {
      display: none;
    }

    @starting-style {
      :host([data-motion-phase='entering']) {
        opacity: 0;
        transform: scale(0.8);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      :host,
      :host([data-motion-phase='entering']),
      :host([data-motion-phase='visible']),
      :host([data-motion-phase='updating']),
      :host([data-motion-phase='exiting']) {
        transition: none;
      }
    }

    :host::part(badge-overlay) {
      outline: 0.0625rem solid var(--mdc-badge-overlay-background-color);
    }
    :host::part(badge-text) {
      padding: 0 0.25rem;
      border-radius: 6.25rem;
      min-width: 1rem;
      display: flex;
      justify-content: center;
      background-color: var(--mdc-badge-primary-background-color);
    }
    :host::part(badge-dot) {
      width: var(--mdc-badge-dot-width);
      height: var(--mdc-badge-dot-height);
      border-radius: 50%;
      background-color: var(--mdc-badge-primary-background-color);
    }
    :host::part(badge-icon) {
      padding: 2px;
      border-radius: 50%;
    }
    :host([type='icon'][variant='primary'])::part(badge-icon) {
      background-color: var(--mdc-badge-primary-background-color);
      color: var(--mdc-badge-primary-foreground-color);
    }
    :host([type='icon'][variant='secondary'])::part(badge-icon) {
      background-color: var(--mdc-badge-secondary-background-color);
      color: var(--mdc-badge-secondary-foreground-color);
    }
    :host([type='success'])::part(badge-icon) {
      background-color: var(--mdc-badge-success-background-color);
      color: var(--mdc-badge-success-foreground-color);
    }
    :host([type='warning'])::part(badge-icon) {
      background-color: var(--mdc-badge-warning-background-color);
      color: var(--mdc-badge-warning-foreground-color);
    }
    :host([type='error'])::part(badge-icon) {
      background-color: var(--mdc-badge-error-background-color);
      color: var(--mdc-badge-error-foreground-color);
    }

    /* High Contrast Mode */
    @media (forced-colors: active) {
      :host::part(badge-dot),
      :host::part(badge-icon),
      :host::part(badge-text) {
        outline: 0.125rem solid;
      }

      :host::part(badge-dot) {
        background-color: ButtonText;
        outline: none;
      }
    }
  `,
];

export default styles;
