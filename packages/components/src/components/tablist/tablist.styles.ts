import { css } from 'lit';

const styles = css`
  :host {
    --mdc-tablist-focus-ring-outer-width: calc(0.0625rem + calc(2 * 0.125rem));
    --mdc-tablist-gap: 0.5rem;
    --mdc-tablist-width: 100%;
    --mdc-tablist-arrow-button-margin: 0.75rem;

    width: var(--mdc-tablist-width);
    display: flex;
    align-items: center;

    ::slotted(mdc-tab) {
      width: initial;
    }
  }

  :host .tabs_container {
    display: flex;
    overflow-x: hidden;
    gap: var(--mdc-tablist-gap);
    padding: var(--mdc-tablist-focus-ring-outer-width);
  }

  :host .hide-arrow-button {
    display: none;
  }

  :host mdc-button[prefix-icon|="arrow"] {
    background-color: var(--mds-color-theme-background-solid-primary-normal);
    z-index: 1;
  }

  :host mdc-button[prefix-icon="arrow-left-regular"] {
    margin-right: var(--mdc-tablist-arrow-button-margin);
  }

  :host mdc-button[prefix-icon="arrow-right-regular"] {
    margin-left: var(--mdc-tablist-arrow-button-margin);
  }
`;

export default [styles];
