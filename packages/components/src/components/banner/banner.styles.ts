import { css } from 'lit';

const styles = css`
  :host {
    /* CSS custom properties for theming */
    --mdc-banner-background-color: var(--mds-color-theme-background-solid-primary-normal);
    --mdc-banner-border-color: var(--mds-color-theme-outline-primary-normal);
    --mdc-banner-text-color: var(--mds-color-theme-text-primary-normal);
    --mdc-banner-icon-color: var(--mdc-banner-text-color);
    --mdc-banner-elevation-3: var(--mds-elevation-3);
    --mdc-banner-padding: 0.75rem;
    --mdc-banner-gap: 0.5rem;

    /* Base banner layout - flexible for any content */
    display: flex;
    padding: var(--mdc-banner-padding);
    align-items: flex-start;
    gap: var(--mdc-banner-gap);
    align-self: stretch;
    width: 100%;
    background-color: var(--mdc-banner-background-color);
    border: 0.0625rem solid var(--mdc-banner-border-color);
    border-radius: 0.5rem;
    filter: var(--mdc-banner-elevation-3);
  }

  /* Variant specific colors */
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

  /* Leading section - contains icon */
  :host::part(leading) {
    display: flex;
    align-items: flex-start;
    gap: var(--mdc-banner-gap);
    align-self: stretch;
  }

  /* Content section - contains title and subtitle text */
  :host::part(content) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    align-self: stretch;
    flex: 1 0 0;
  }

  /* Trailing section - contains action buttons and controls */
  :host::part(trailing) {
    display: flex;
    align-items: center;
    gap: var(--mdc-banner-gap);
    align-self: stretch;
  }

  /* Icon styling for variant-based icons */
  :host::part(banner-leading-icon) {
    color: var(--mdc-banner-icon-color);
    padding: 0.25rem 0;
  }

  /* Title text styling */
  :host::part(title) {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    align-self: stretch;
  }

  /* Subtitle text styling */
  :host::part(subtitle) {
    display: flex;
    align-items: flex-start;
    gap: 0.25rem;
  }

  /* Trailing actions slot styling - ensures proper button alignment */
  ::slotted([slot="trailing-actions"]) {
    display: flex;
    align-items: center;
    gap: var(--mdc-banner-gap);
    flex-wrap: wrap;
  }

  /* Individual button styling within trailing actions */
  ::slotted(mdc-button) {
    flex-shrink: 0;
  }

  /* Direct button children in trailing-actions slot */
  ::slotted([slot="trailing-actions"] mdc-button),
  ::slotted([slot="trailing-actions"]) ::slotted(mdc-button) {
    flex-shrink: 0;
  }
`;

export default [styles];
