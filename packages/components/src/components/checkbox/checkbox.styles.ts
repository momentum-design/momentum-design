import { css } from 'lit';
import { hostFocusRingStyles } from '../../utils/styles';

const styles = [css`
  :host {
    --mdc-checkbox-background-color-hover: var(--mds-color-theme-control-inactive-hover);
    --mdc-checkbox-pressed-icon-color: var(--mds-color-theme-control-inactive-pressed);
    --mdc-checkbox-checked-pressed-icon-color: var(--mds-color-theme-control-active-pressed);
    --mdc-checkbox-checked-background-color-hover: var(--mds-color-theme-control-active-hover);
    --mdc-checkbox-disabled-checked-icon-color: var(--mds-color-theme-control-active-disabled);
    
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

  :host(:hover) mdc-staticcheckbox{
    background: var(--mdc-checkbox-background-color-hover);
  }
  :host(:active) mdc-staticcheckbox{
    background: var(--mdc-checkbox-pressed-icon-color);
  }

  :host([checked]:hover)::part(icon-container),
  :host([indeterminate]:hover)::part(icon-container) {
    background: var(--mdc-checkbox-checked-background-color-hover);
  }
  :host([checked]:active)::part(icon-container),
  :host([indeterminate]:active)::part(icon-container) {
    background: var(--mdc-checkbox-checked-pressed-icon-color);
  }

  :host([disabled])  mdc-staticcheckbox {
    background: unset;
  }

  :host([disabled][checked])::part(icon-container),
  :host([disabled][indeterminate])::part(icon-container) {
    background-color: var(--mdc-checkbox-disabled-checked-icon-color);
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
