import { css } from 'lit';

const styles = css`
  :host {
    --mdc-toast-icon-color: var(--mds-color-theme-text-secondary-normal);
    --mdc-toast-background-color: var(--mds-color-theme-background-solid-primary-normal);
    --mdc-toast-border-color: var(--mds-color-theme-outline-secondary-normal);
    --mdc-toast-header-text-color: var(--mds-color-theme-text-primary-normal);
    --mdc-toast-elevation-3: var(--mds-elevation-3);
    --mdc-toast-width: 21.25rem;
    --mdc-toast-padding: 1rem;

    display: flex;
    width: var(--mdc-toast-width);
    background-color: var(--mdc-toast-background-color);
    border: 0.0625rem solid var(--mdc-toast-border-color);
    border-radius: 0.5rem;
    filter: var(--mdc-toast-elevation-3);
    padding: var(--mdc-toast-padding);
    position: relative;
    box-sizing: border-box;

    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  :host::part(toast-prefix-icon) {
    color: var(--mdc-toast-icon-color);
  }

  :host([variant='success'])::part(toast-prefix-icon) {
    --mdc-toast-icon-color: var(--mds-color-theme-text-success-normal);
  }

  :host([variant='warning'])::part(toast-prefix-icon) {
    --mdc-toast-icon-color: var(--mds-color-theme-text-error-normal);
  }

  :host([variant='error'])::part(toast-prefix-icon) {
    --mdc-toast-icon-color: var(--mds-color-theme-text-warning-normal);
  }

  :host::part(content-container) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 0.75rem;
    width: 100%;
  }

  :host::part(toast-content) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    flex: 1;
  }

  :host::part(toast-header) {
    color: var(--mdc-toast-header-text-color);
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.25rem;
  }

  :host::part(body) {
    margin-top: 0.5rem;
    color: var(--mdc-toast-header-text-color);
    font-size: 0.95rem;
    line-height: 1.3rem;
  }

  :host::part(footer) {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: flex-end;
    align-self: stretch;
  }

  :host::part(toast-header) {
    display: -webkit-box;
    -webkit-line-clamp: 2; /* Limit to 2 lines */
    -webkit-box-orient: vertical;
    overflow: clip;
    text-overflow: ellipsis;
  }

  :host::part(text) {
    margin: unset;
  }
`;

export default [styles];
