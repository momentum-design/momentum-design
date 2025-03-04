import { css } from 'lit';

const styles = css`
  :host {
    display: flex;
    align-items: center;

    ::slotted(mdc-tab) {
      width: initial;
    }
  }
  
  :host .tab_list__container {
    width: 100%;
  }

  :host .show-left-button-padding {
    padding-left: 44px;
  }

  :host .show-right-button-padding {
    padding-right: 44px;
  }

  :host .tab_list {
    display: flex;
    position: relative;
    gap: 8px;
    overflow-x: hidden;
    padding: 4px;
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
