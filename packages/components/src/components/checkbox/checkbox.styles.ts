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
  .mdc-label, .mdc-checkbox__input {
    cursor: pointer;
  }
  :host([checked]) .mdc-checkbox__icon-container,
  :host([indeterminate]) .mdc-checkbox__icon-container {
    background: var(--mdc-checkbox-checked-background-color);
    border: unset;
  }
  :host([checked]) .mdc-checkbox__container:hover .mdc-checkbox__icon-container,
  :host([indeterminate]) .mdc-checkbox__container:hover .mdc-checkbox__icon-container {
    background: var(--mdc-checkbox-checked-background-color-hover);
  }
  :host([checked]) .mdc-checkbox__container:active > .mdc-checkbox__icon-container,
  :host([indeterminate]) .mdc-checkbox__container:active > .mdc-checkbox__icon-container {
    background: var(--mdc-checkbox-checked-pressed-icon-color);
  }
  :host([disabled]) .mdc-label,
  :host([disabled]) .mdc-checkbox__input {
    cursor: default;
  }
  :host([disabled]) .mdc-checkbox__container:hover .mdc-checkbox__icon-container {
    background: unset;
  }
  :host([disabled]) .mdc-checkbox__icon-container {
    background: var(--mdc-checkbox-disabled-background-color);
  }
  :host([disabled]) .mdc-checkbox__icon {
    --mdc-icon-fill-color: var(--mdc-checkbox-disabled-icon-color);
  }
  :host([disabled]) .mdc-checkbox__icon-container,
  :host([disabled][checked]) .mdc-checkbox__icon-container,
  :host([disabled][indeterminate]) .mdc-checkbox__icon-container {
    border: 0.0625rem solid var(--mdc-checkbox-disabled-border-color);
    background: var(--mdc-checkbox-disabled-checked-icon-color);
  }
  .mdc-checkbox__input {
    margin: 0;
    padding: 0;
    position: absolute;
    opacity: 0.1%;
    overflow: visible;
    z-index: 1;
  }
  .mdc-checkbox__icon-container {
    display: flex;
    align-items: center;
    border: 0.0625rem solid var(--mdc-checkbox-icon-border-color);
    background: var(--mdc-checkbox-icon-background-color);
  }
  .mdc-checkbox__container:hover {
    border-color: var(--mdc-checkbox-background-color-hover);
    background: var(--mdc-checkbox-background-color-hover);
  }
  .mdc-checkbox__container:active {
    border-color: var(--mdc-checkbox-pressed-icon-color);
    background: var(--mdc-checkbox-pressed-icon-color);
  }
  .mdc-checkbox__input, .mdc-checkbox__icon-container {
    width: 1rem;
    height: 1rem;
  }
  .mdc-checkbox__input,
  .mdc-checkbox__icon-container,
  .mdc-checkbox__container {
    border-radius: 0.125rem;
  }
  .mdc-checkbox__icon {
    --mdc-icon-fill-color: var(--mdc-checkbox-icon-color);
  }
  .mdc-checkbox__container {
    margin: 0.125rem 0;
  }
  .mdc-checkbox__text-container {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  
  /* High Contrast Mode */
  @media (forced-colors: active) {
    :host([checked]) .mdc-checkbox__icon-container,
    :host([indeterminate]) .mdc-checkbox__icon-container {
      border: 0.0625rem solid var(--mdc-checkbox-border-color);
    }
  }
`, ...hostFocusRingStyles(true)];

export default styles;
