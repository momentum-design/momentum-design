import { css } from 'lit';

const styles = css`
  :host {
    --mdc-focus-ring-inner-width: 0.125rem;
    --mdc-focus-ring-middle-width: calc(2 * var(--mdc-focus-ring-inner-width));
    --mdc-focus-ring-outer-width: calc(0.0625rem + var(--mdc-focus-ring-middle-width));

    --mdc-tablist-gap: 0.5rem;
    --mdc-tablist-container-width: 100%;
    --mdc-container-button-padding: 2.75rem;


    display: flex;
    align-items: center;

    ::slotted(mdc-tab) {
      width: initial;
    }
  }
  
  :host .tab_list__container {
    width: var(--mdc-tablist-container-width);
  }

  :host .show-left-button-padding {
    padding-left: var(--mdc-container-button-padding);
  }

  :host .show-right-button-padding {
    padding-right: var(--mdc-container-button-padding);
  }

  :host .tab_list {
    display: flex;
    position: relative;
    overflow-x: hidden;
    gap: var(--mdc-tablist-gap);
    padding: var(--mdc-focus-ring-outer-width);
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
