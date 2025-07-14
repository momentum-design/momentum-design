import { css } from 'lit';

const styles = css`
  :host {
    --mdc-dialog-primary-background-color: var(--mds-color-theme-background-solid-primary-normal);
    --mdc-dialog-border-color: var(--mds-color-theme-outline-secondary-normal);
    --mdc-dialog-header-text-color: var(--mds-color-theme-text-primary-normal);
    --mdc-dialog-description-text-color: var(--mds-color-theme-text-secondary-normal);
    --mdc-dialog-elevation-3: var(--mds-elevation-3);
    --mdc-dialog-width: 27rem; /* Default to small */
    --mdc-dialog-padding: 1.5rem;

    background-color: var(--mdc-dialog-primary-background-color);
    border: 0.0625rem solid var(--mdc-dialog-border-color);
    border-radius: 0.5rem;
    filter: var(--mdc-dialog-elevation-3);
    display: none;
    padding: var(--mdc-dialog-padding);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    position: absolute;
    right: 50%;
    bottom: 50%;
    transform: translate(50%, 50%);
  }

  :host([variant='promotional']) {
    --mdc-dialog-border-color: var(--mds-color-theme-outline-promotion-normal);
  }

  :host([visible]) {
    display: flex;
  }

  :host([size='medium']) {
    --mdc-dialog-width: 41rem;
  }

  :host([size='large']) {
    --mdc-dialog-width: 62rem;
  }

  :host([size='xlarge']) {
    --mdc-dialog-width: 90%;
  }

  @media (max-width: 62rem) {
    :host([size='xlarge']) {
      --mdc-dialog-width: 100%;
    }
  }

  :host([size='fullscreen']) {
    --mdc-dialog-width: 100%;
    height: 100%;
    border: none;
    border-radius: 0;
  }

  :host {
    width: var(--mdc-dialog-width);
    max-width: 100%;
  }

  :host::part(header-section),
  :host::part(body),
  :host::part(footer) {
    display: flex;
    align-self: stretch;
  }

  :host::part(header-section) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  :host::part(header) {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    width: 100%;
  }

  :host::part(header-text) {
    width: calc(100% - 2rem);
    color: var(--mdc-dialog-header-text-color);
  }

  :host::part(description-text) {
    color: var(--mdc-dialog-description-text-color);
  }

  :host::part(body) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }

  :host::part(footer) {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: flex-end;
  }

  :host::part(dialog-close-btn) {
    position: absolute;
    top: var(--mdc-dialog-padding);
    right: var(--mdc-dialog-padding);
  }

  :host(:dir(rtl))::part(dialog-close-btn) {
    right: auto;
    left: var(--mdc-dialog-padding);
  }

  mdc-text::part(text) {
    margin: 0;
  }
`;

export default [styles];
