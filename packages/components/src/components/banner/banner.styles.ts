import { css } from 'lit';

const styles = css`
  :host {
    --mdc-banner-background-color: var(--mds-color-theme-background-solid-primary-normal);
    --mdc-banner-border-color: var(--mds-color-theme-outline-secondary-normal);
    --mdc-banner-border-width: 1px;
    --mdc-banner-icon-color: var(--mds-color-theme-text-primary-normal);
    --mdc-banner-elevation: var(--mds-elevation-3);
    --mdc-banner-padding: calc(0.75rem - var(--mdc-banner-border-width));
    --mdc-banner-gap: 0.5rem;
    --mdc-banner-slide-offset: 1rem;

    display: block;
    opacity: 0;
    transform: translateY(calc(-1 * var(--mdc-banner-slide-offset)));
    align-self: stretch;
    width: 100%;
    transition: var(--mds-transition-slide-exit), var(--mds-transition-fade-out);
    transition-behavior: allow-discrete;
  }

  :host([data-motion-phase='entering']),
  :host([data-motion-phase='visible']) {
    opacity: 1;
    transform: none;
  }

  :host([data-motion-phase='entering']) {
    transition: var(--mds-transition-slide-entrance), var(--mds-transition-fade-in);
    transition-behavior: allow-discrete;
  }

  :host([data-motion-phase='exiting']) {
    opacity: 0;
    transform: translateY(calc(-1 * var(--mdc-banner-slide-offset)));
    transition: var(--mds-transition-slide-exit), var(--mds-transition-fade-out);
    transition-behavior: allow-discrete;
  }

  .banner-inner {
    display: grid;
    grid-template-rows: 0fr;
    width: 100%;
    transition: var(--mds-transition-collapse);
    transition-behavior: allow-discrete;
  }

  :host([data-motion-phase='entering']) .banner-inner,
  :host([data-motion-phase='visible']) .banner-inner {
    grid-template-rows: 1fr;
  }

  :host([data-motion-phase='entering']) .banner-inner {
    transition: var(--mds-transition-expand);
  }

  :host([data-motion-phase='exiting']) .banner-inner {
    grid-template-rows: 0fr;
    transition: var(--mds-transition-collapse);
  }

  .banner-content {
    min-height: 0;
    overflow: hidden;
    display: flex;
    padding: var(--mdc-banner-padding);
    align-items: flex-start;
    gap: var(--mdc-banner-gap);
    width: 100%;
    background-color: var(--mdc-banner-background-color);
    border: var(--mdc-banner-border-width) solid var(--mdc-banner-border-color);
    border-radius: 0.5rem;
    filter: var(--mdc-banner-elevation);
  }

  @starting-style {
    :host([data-motion-phase='entering']) {
      opacity: 0;
      transform: translateY(calc(-1 * var(--mdc-banner-slide-offset)));
    }

    :host([data-motion-phase='entering']) .banner-inner {
      grid-template-rows: 0fr;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    :host,
    :host([data-motion-phase='entering']),
    :host([data-motion-phase='visible']),
    :host([data-motion-phase='exiting']),
    .banner-inner {
      transition: none;
    }
  }

  :host([variant='success']) {
    --mdc-banner-icon-color: var(--mds-color-theme-text-success-normal);
    --mdc-banner-background-color: var(--mds-color-theme-background-alert-success-normal);
    --mdc-banner-border-color: var(--mds-color-theme-outline-join-normal);
  }

  :host([variant='warning']) {
    --mdc-banner-icon-color: var(--mds-color-theme-text-warning-normal);
    --mdc-banner-background-color: var(--mds-color-theme-background-alert-warning-normal);
    --mdc-banner-border-color: var(--mds-color-theme-outline-warning-normal);
  }

  :host([variant='error']) {
    --mdc-banner-icon-color: var(--mds-color-theme-text-error-normal);
    --mdc-banner-background-color: var(--mds-color-theme-background-alert-error-normal);
    --mdc-banner-border-color: var(--mds-color-theme-outline-cancel-normal);
  }

  :host([variant='informational']) {
    --mdc-banner-icon-color: var(--mds-color-theme-text-accent-normal);
    --mdc-banner-background-color: var(--mds-color-theme-background-alert-theme-normal);
    --mdc-banner-border-color: var(--mds-color-theme-outline-theme-normal);
  }

  :host::part(leading) {
    display: flex;
    align-items: flex-start;
    gap: var(--mdc-banner-gap);
    align-self: stretch;
    flex: 1 0 0;
  }

  :host::part(leading-text) {
    flex: 1 0 0;
    display: flex;
    flex-direction: column;
  }

  :host(:not([secondary-label]))::part(leading) {
    align-items: center;
  }

  :host::part(leading-icon) {
    color: var(--mdc-banner-icon-color);
    flex-shrink: 0;
  }

  :host::part(trailing) {
    display: flex;
    align-items: center;
    gap: var(--mdc-banner-gap);
    align-self: stretch;
    flex-wrap: wrap;
  }

  ::slotted([slot='trailing-actions']) {
    display: flex;
    align-items: center;
    gap: var(--mdc-banner-gap);
    flex-wrap: wrap;
  }
`;

export default [styles];
