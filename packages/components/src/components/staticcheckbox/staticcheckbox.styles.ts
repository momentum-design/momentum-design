import { css } from 'lit';

const styles = [css`
  :host{
    margin: 0.125rem 0;
    border-radius: 0.125rem;
    --mdc-checkbox-border-color: var(--mds-color-theme-outline-button-normal);
    --mdc-checkbox-checked-pressed-icon-color: var(--mds-color-theme-control-active-pressed);
    --mdc-checkbox-checked-background-color: var(--mds-color-theme-control-active-normal);
    --mdc-checkbox-disabled-background-color: var(--mds-color-theme-control-inactive-disabled);
    --mdc-checkbox-disabled-border-color: var(--mds-color-theme-outline-primary-disabled);
    --mdc-checkbox-checked-background-color-hover: var(--mds-color-theme-control-active-hover);
    --mdc-checkbox-checked-background-color: var(--mds-color-theme-control-active-normal);
    --mdc-checkbox-disabled-icon-color: var(--mds-color-theme-text-primary-disabled);
    --mdc-checkbox-icon-background-color: var(--mds-color-theme-control-inactive-normal);
    --mdc-checkbox-icon-border-color: var(--mds-color-theme-outline-input-normal);
    --mdc-checkbox-icon-color: var(--mds-color-theme-inverted-text-primary-normal);
  }

  :host(:hover) {
    background: var(--mdc-checkbox-background-color-hover);
  }
  :host(:active) {
    background: var(--mdc-checkbox-pressed-icon-color);
  }

  :host([checked]) .icon-container,
  :host([indeterminate]) .icon-container {
    background: var(--mdc-checkbox-checked-background-color);
    border-color: transparent;
  }

  :host([checked]:hover) .icon-container,
  :host([indeterminate]:hover) .icon-container {
    background: var(--mdc-checkbox-checked-background-color-hover);
  }
  :host([checked]:active) .icon-container,
  :host([indeterminate]:active) .icon-container {
    background: var(--mdc-checkbox-checked-pressed-icon-color);
  }
  :host([disabled]) .icon-container {
    border-color: var(--mdc-checkbox-disabled-border-color);
    background: var(--mdc-checkbox-disabled-background-color);
  }

  :host([disabled]:hover) {
    background: unset;
  }

  .icon-container {
    display: flex;
    align-items: center;
    border: 0.0625rem solid var(--mdc-checkbox-icon-border-color);
    background: var(--mdc-checkbox-icon-background-color);
    width: 1rem;
    height: 1rem;
  }

  .icon-container {
    border-radius: 0.125rem;
  }

  .icon {
    --mdc-icon-fill-color: var(--mdc-checkbox-icon-color);
  }

  :host([disabled]) .icon {
    --mdc-icon-fill-color: var(--mdc-checkbox-disabled-icon-color);
  }

  /* High Contrast Mode */
  @media (forced-colors: active) {
    :host([checked]) .icon-container,
    :host([indeterminate]) .icon-container {
      border: 0.0625rem solid var(--mdc-checkbox-border-color);
    }
  }
`];

export default styles;
