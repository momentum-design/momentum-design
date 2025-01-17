import { css } from 'lit';

const styles = css`
  :host {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 2rem;
  }
  .mdc-checkbox__native-control {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 1rem;
    height: 1rem;
    border: 1px solid var(--mds-color-theme-outline-button-normal);
    border-radius: 0.125rem;
    background: none;
  }
  .mdc-checkbox__native-control:checked {
    -webkit-appearance: revert;
    -moz-appearance: revert;
    appearance: revert;
    accent-color: var(--mds-color-theme-control-active-normal);
  }
`;

export default [styles];
