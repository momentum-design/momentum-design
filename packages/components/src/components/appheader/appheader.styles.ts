import { css } from 'lit';

const styles = css`
  :host {
    --mdc-appheader-height: var(--mds-size-theme-lg-64);
  }

  :host::part(container) {
    display: flex;
    align-items: center;
    width: 100%;
    height: var(--mdc-appheader-height);
    padding: var(--mds-spacing-theme-pad-v-md) var(--mds-spacing-theme-pad-h-md);
  }

  :host::part(leading-section),
  :host::part(center-section),
  :host::part(trailing-section) {
    display: flex;
    height: 100%;
  }

  :host::part(leading-section) {
    justify-content: flex-start;
    flex: 1;
  }

  :host::part(center-section) {
    justify-content: center;
    align-items: center;
  }

  :host::part(trailing-section) {
    justify-content: flex-end;
    flex: 1;
  }
`;

export default [styles];
