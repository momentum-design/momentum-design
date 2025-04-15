import { css } from 'lit';
import { hostFocusRingStyles } from '../../utils/styles';

const styles = [css`
  :host {
    --mdc-checkbox-background-color-hover: var(--mds-color-theme-control-inactive-hover);
    --mdc-checkbox-border-color: var(--mds-color-theme-outline-button-normal);
    --mdc-checkbox-checked-background-color-hover: var(--mds-color-theme-control-active-hover);
    --mdc-checkbox-checked-background-color: var(--mds-color-theme-control-active-normal);
    --mdc-checkbox-checked-pressed-icon-color: var(--mds-color-theme-control-active-pressed);
    --mdc-checkbox-disabled-background-color: var(--mds-color-theme-control-inactive-disabled);
    --mdc-checkbox-disabled-border-color: var(--mds-color-theme-outline-primary-disabled);
    --mdc-checkbox-disabled-checked-icon-color: var(--mds-color-theme-control-active-disabled);
    --mdc-checkbox-disabled-icon-color: var(--mds-color-theme-text-primary-disabled);
    --mdc-checkbox-icon-background-color: var(--mds-color-theme-control-inactive-normal);
    --mdc-checkbox-icon-border-color: var(--mds-color-theme-outline-input-normal);
    --mdc-checkbox-icon-color: var(--mds-color-theme-inverted-text-primary-normal);
    --mdc-checkbox-pressed-icon-color: var(--mds-color-theme-control-inactive-pressed);

    flex-direction: row;
    align-items: flex-start;
  }
  .mdc-label, .input {
    cursor: pointer;
  }
  :host([checked]) .icon-container,
  :host([indeterminate]) .icon-container {
    background: var(--mdc-checkbox-checked-background-color);
    border-color: transparent;
  }
  :host([checked]) .container:hover .icon-container,
  :host([indeterminate]) .container:hover .icon-container {
    background: var(--mdc-checkbox-checked-background-color-hover);
  }
  :host([checked]) .container:active .icon-container,
  :host([indeterminate]) .container:active .icon-container {
    background: var(--mdc-checkbox-checked-pressed-icon-color);
  }
  :host([disabled]) .mdc-label,
  :host([disabled]) .input {
    cursor: default;
  }
  :host([disabled]) .container:hover {
    background: unset;
  }
  :host([disabled]) .icon-container {
    border-color: var(--mdc-checkbox-disabled-border-color);
    background: var(--mdc-checkbox-disabled-background-color);
  }
  :host([disabled]) .icon {
    --mdc-icon-fill-color: var(--mdc-checkbox-disabled-icon-color);
  }
  :host([disabled][checked]) .icon-container,
  :host([disabled][indeterminate]) .icon-container,
  :host([disabled][checked]) .container:hover .icon-container,
  :host([disabled][indeterminate]) .container:hover .icon-container {
    background: var(--mdc-checkbox-disabled-checked-icon-color);
    border: 0.0625rem solid var(--mdc-checkbox-disabled-border-color);
  }
  .input {
    margin: 0;
    padding: 0;
    position: absolute;
    opacity: 0.1%;
    overflow: visible;
    z-index: 1;
  }
  .icon-container {
    display: flex;
    align-items: center;
    border: 0.0625rem solid var(--mdc-checkbox-icon-border-color);
    background: var(--mdc-checkbox-icon-background-color);
  }
  .container:hover {
    background: var(--mdc-checkbox-background-color-hover);
  }
  .container:active {
    background: var(--mdc-checkbox-pressed-icon-color);
  }
  .input, .icon-container {
    width: 1rem;
    height: 1rem;
  }
  .input,
  .icon-container,
  .container {
    border-radius: 0.125rem;
  }
  .icon {
    --mdc-icon-fill-color: var(--mdc-checkbox-icon-color);
  }
  .container {
    margin: 0.125rem 0;
  }
  .text-container {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  
  /* High Contrast Mode */
  @media (forced-colors: active) {
    :host([checked]) .icon-container,
    :host([indeterminate]) .icon-container {
      border: 0.0625rem solid var(--mdc-checkbox-border-color);
    }
  }
`, ...hostFocusRingStyles(true)];

export default styles;
