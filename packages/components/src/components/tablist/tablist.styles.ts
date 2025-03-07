import { css } from 'lit';

const styles = css`
  :host {
    --mdc-focus-ring-inner-width: 0.125rem;
    --mdc-focus-ring-middle-width: calc(2 * var(--mdc-focus-ring-inner-width));
    --mdc-focus-ring-outer-width: calc(0.0625rem + var(--mdc-focus-ring-middle-width));

    --mdc-tablist-gap: 0.5rem;
    --mdc-tablist-width: 100%;
    --mdc-container-button-padding: 2.75rem;

    width: var(--mdc-tablist-width);
    display: flex;
    align-items: center;

    ::slotted(mdc-tab) {
      width: initial;
    }
  }

  :host(.show-left-arrow-button-padding) {
    padding-left: var(--mdc-container-button-padding);
  }

  :host(.show-right-arrow-button-padding) {
    padding-right: var(--mdc-container-button-padding);
  }

  :host .tabs_container {
    display: flex;
    overflow-x: hidden;
    gap: var(--mdc-tablist-gap);
    padding: var(--mdc-focus-ring-outer-width);
    margin: calc(var(--mdc-focus-ring-outer-width) * -1);
  }

  :host .hide-button {
    display: none;
  }

  :host mdc-button {
    background-color: var(--mds-color-theme-background-solid-primary-normal);
    position: absolute;
    z-index: 1;
  }
`;

export default [styles];
