import { css } from 'lit';

const styles = css`
  .container {
    display: flex;
    flex-direction: row;
    height: 1.5rem;
    column-gap: 0.5rem;
  }
  .mdc-checkbox__input {
    padding: 0;
    margin: 0;
    display: none;
  }
  .mdc-checkbox__input:checked ~ .check-icon {
    position: fixed;
    display: block;
    background-color: var(--mds-color-theme-control-active-normal);
  }
  .mdc-checkbox__input:not(:checked) ~ .check-icon {
    display: none;
  }
  .check-icon {
    --mdc-icon-fill-color: var(--mds-color-theme-inverted-text-primary-normal);
  }
  .label-text {
    display: flex;
    gap: 0.5rem;
  }
  .label-text:before {
    content: " ";
    width: 1rem;
    height: 1rem;
    background-color: unset;
    border: 1px solid var(--mds-color-theme-outline-button-normal);
  }
  .mdc-checkbox__input:checked ~ .check-icon, .label-text:before {
    width: 1rem;
    height: 1rem;
    border-radius: 0.125rem;
  }
`;

export default [styles];
