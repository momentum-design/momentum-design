import { css } from 'lit';
import { hostFocusRingStyles } from '../../utils/styles';

const styles = [css`
  :host {
    --mdc-textarea-disabled-border-color: var(--mds-color-theme-outline-primary-disabled);
    --mdc-textarea-disabled-text-color: var(--mds-color-theme-text-primary-disabled);
    --mdc-textarea-disabled-background-color: var(--mds-color-theme-background-primary-disabled);
    --mdc-textarea-text-color: var(--mds-color-theme-text-primary-normal);
    --mdc-textarea-background-color: var(--mds-color-theme-background-primary-ghost);
    --mdc-textarea-border-color: var(--mds-color-theme-outline-input-normal);
    --mdc-textarea-text-secondary-normal : var(--mds-color-theme-text-secondary-normal);
    --mdc-textarea-error-border-color: var(--mds-color-theme-text-error-normal);
    --mdc-textarea-warning-border-color: var(--mds-color-theme-text-warning-normal);
    --mdc-textarea-success-border-color: var(--mds-color-theme-text-success-normal);
    --mdc-textarea-primary-border-color: var(--mds-color-theme-text-accent-normal);
    --mdc-textarea-hover-background-color: var(--mds-color-theme-background-primary-hover);
    --mdc-textarea-focused-background-color: var(--mds-color-theme-background-primary-active);
    --mdc-textarea-focused-border-color: var(--mds-color-theme-outline-input-active);
  }

  :host([disabled])::part(textarea),
  :host([disabled])::part(textarea)::placeholder{
    color: var(--mdc-input-disabled-text-color);
  }

  :host([disabled])::part(textarea),
  :host([readonly])::part(textarea){
    border-color: var(--mdc-textarea-disabled-border-color);
    background: var(--mdc-textarea-disabled-background-color);
  }

  :host([disabled][help-text-type="default"])::part(textarea-container),
  :host([disabled][help-text-type="success"])::part(textarea-container),
  :host([disabled][help-text-type="warning"])::part(textarea-container),
  :host([disabled][help-text-type="error"])::part(textarea-container),
  :host([disabled][help-text-type="priority"])::part(textarea-container){
    border-color: var(--mdc-textarea-disabled-border-color);
  }

  :host::part(textarea){
    min-height: 100px;
    padding: 6px 32px 4px 12px;
    color: var(--mdc-textarea-text-color);
    background-color: var(--mdc-textarea-background-color);
    resize: none;
    border: none;
    outline: none;
  }


  :host::part(textarea-container) {
    position: relative;
    border-radius: 0.5rem;
    border: 0.0625rem solid var(--mdc-textarea-border-color);
    overflow: hidden;
    padding: 2px;
  }

  :host::part(cancel-button) {
    position: absolute;
    right: 6px;
    top: 6px;
  }

  :host(:not([disabled]))::part(textarea-container):hover{
    background-color: var(--mdc-textarea-hover-background-color);
  }

  :host(:not([disabled]))::part(textarea-container):active, 
  :host(:not([disabled]))::part(textarea-container):focus-within{
    background-color: var(--mdc-textarea-focused-background-color);
    border-color:  var(--mdc-textarea-focused-border-color);
  }

  :host::part(textarea-footer) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .textarea::placeholder{
    color: var(--mdc-textarea-text-secondary-normal);
  }

  :host::part(character-counter){
    color: var(--mdc-textarea-text-secondary-normal);
  }

  :host([disabled])::part(character-counter){
    color: var(--mds-color-theme-text-primary-disabled);
  }

  :host([help-text-type="error"])::part(textarea-container) {
    border-color: var(--mdc-textarea-error-border-color);
  }
  :host([help-text-type="warning"])::part(textarea-container) {
    border-color: var(--mdc-textarea-warning-border-color);
  }
  :host([help-text-type="success"])::part(textarea-container) {
    border-color: var(--mdc-textarea-success-border-color);
  }
  :host([help-text-type="priority"])::part(textarea-container) {
    border-color: var(--mdc-textarea-primary-border-color);
  }

  .hidden {
    opacity: 0;
    pointer-events: none;
  }

`, ...hostFocusRingStyles(true)];

export default [styles];
