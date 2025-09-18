import { css } from 'lit';

const styles = css`
  :host {
    --mdc-banner-background-color: var(--mds-color-theme-background-solid-primary-normal);
    --mdc-banner-border-color: var(--mds-color-theme-outline-secondary-normal);
    --mdc-banner-icon-color: var(--mds-color-theme-text-primary-normal);
    --mdc-banner-elevation: var(--mds-elevation-3);
    --mdc-banner-padding: 0.75rem;
    --mdc-banner-gap: 0.5rem;

    display: flex;
    padding: var(--mdc-banner-padding);
    align-items: flex-start;
    gap: var(--mdc-banner-gap);
    align-self: stretch;
    width: 100%;
    background-color: var(--mdc-banner-background-color);
    border: 1px solid var(--mdc-banner-border-color);
    border-radius: 0.5rem;
    filter: var(--mdc-banner-elevation);
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
    gap: 0.25rem;
  }

  :host(:not([secondary-label]))::part(leading) {
    align-items: center;
  }

  :host::part(leading-icon) {
    color: var(--mdc-banner-icon-color);
    padding: 0.25rem 0;
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
