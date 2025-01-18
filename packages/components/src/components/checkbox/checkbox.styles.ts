import { css } from 'lit';

const styles = css`
  :host {
    display: flex;
    flex-direction: column;
    height: 1.5rem;
  }
  :host([indeterminate]) {
    cursor: none;
    pointer-events: none;
  }
  :host([disabled]) .mdc-checkbox__label-text {
    color: var(--mds-color-theme-text-primary-disabled);
  }
  :host([disabled]) > .mdc-checkbox__container > .mdc-checkbox__label-text:before {
    border: 1px solid var(--mds-color-theme-outline-primary-disabled);
  }
  :host([disabled]) > .mdc-checkbox__container > .mdc-checkbox__label-text > .mdc-checkbox__icon {
    --mdc-icon-fill-color: var(--mds-color-theme-text-primary-disabled);
    border: 1px solid var(--color-theme-outline-primary-disabled);
    background: var(--mds-color-theme-control-active-disabled);
  }
  .mdc-checkbox__input {
    padding: 0;
    margin: 0;
    display: none;
  }
  .mdc-checkbox__input:checked ~ .mdc-checkbox__label-text > .mdc-checkbox__icon {
    display: block;
    background-color: var(--mds-color-theme-control-active-normal);
  }
  .mdc-checkbox__input:not(:checked) ~ .mdc-checkbox__label-text > .mdc-checkbox__icon {
    display: none;
  }
  .mdc-checkbox__icon {
    position: absolute;
    --mdc-icon-fill-color: var(--mds-color-theme-inverted-text-primary-normal);
  }
  .mdc-checkbox__label-text {
    align-items: center;
    cursor: pointer;
    display: flex;
    gap: 0.5rem;
  }
  .mdc-checkbox__label-text:before {
    content: " ";
    background-color: unset;
    border: 1px solid var(--mds-color-theme-outline-button-normal);
    height: 1rem;
    width: 1rem;
  }
  .mdc-checkbox__label-text:hover:before {
    background-color: var(--mds-color-theme-control-inactive-hover);
  }
  .mdc-checkbox__input:checked ~ .mdc-checkbox__label-text > .mdc-checkbox__icon, .mdc-checkbox__label-text:before {
    border-radius: 0.125rem;
  }
  .mdc-checkbox__help-text {
    color: var(--mds-color-theme-text-secondary-normal);
    margin-left: 1.5rem;
  }
`;

export default [styles];
