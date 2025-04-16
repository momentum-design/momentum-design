import { css } from 'lit';
import { hostFocusRingStyles } from '../../utils/styles';

const styles = [css`
  :host {
    --mdc-checkbox-background-color-hover: var(--mds-color-theme-control-inactive-hover);
    --mdc-checkbox-disabled-border-color: var(--mds-color-theme-outline-primary-disabled);
    --mdc-checkbox-disabled-checked-icon-color: var(--mds-color-theme-control-active-disabled);
    --mdc-checkbox-pressed-icon-color: var(--mds-color-theme-control-inactive-pressed);

    flex-direction: row;
    align-items: flex-start;
  }
  .mdc-label, .input {
    cursor: pointer;
  }

  :host([disabled]) .mdc-label,
  :host([disabled]) .input {
    cursor: default;
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

  .input {
    width: 1rem;
    height: 1rem;
    border-radius: 0.125rem;
  }
 
  .text-container {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  

`, ...hostFocusRingStyles(true)];

export default styles;
