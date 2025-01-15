import { css } from 'lit';
import { hostFitContentStyles, hostFocusRingStyles } from '../../utils/styles';

const styles = [hostFitContentStyles, css`

  :host {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  :host([disabled]) .mdc-label,
  :host([disabled]) .input,
  :host([disabled]) .input::placeholder,
  :host([disabled]) .input-footer {
    color: var(--mds-color-theme-text-primary-disabled);
  }

  :host([disabled]) .input {
    border-color: var(--mds-color-theme-outline-primary-disabled);
    background: var(--mds-color-theme-background-primary-disabled);
  }
  
  .input-header, .input-footer, .input-container {
    font-size: var(--mds-font-size-body-midsize);
    line-height: var(--mds-font-lineheight-body-midsize);
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .mdc-label{
    color: var(--mds-color-theme-text-primary-normal);
  }

  .input-container, .input{
    width: 100%;
  }

  .leading-icon{
    aspect-ratio: 1;
  }

  .input-container{
    height: 2rem;
    border-radius: 0.5rem;
    border: 0.0625rem solid var(--mds-color-theme-outline-input-normal);
    gap: 0.375rem;
    padding: 0.34375rem 0.375rem 0.34375rem 0.75rem;
  }
  
  .text-container{
    display: flex;
    gap: 0.25rem;
  }

  .input {
    border: none;
    color: var(--mds-color-theme-text-primary-normal);
    background-color: var(--mds-color-theme-background-primary-ghost);
    outline: none;
  }

  .input::selection { 
    background-color: var(--mds-color-theme-background-accent-active);
    color: var(--mds-color-theme-inverted-text-primary-normal);
  }


  .prefix-text{
    color: var(--mds-color-theme-text-secondary-normal);
  }

  .input-container:hover{
    background-color: var(--mds-color-theme-background-primary-hover);
  }

  .input-container:active, .input-container:focus{
    background-color: var(--mds-color-theme-background-primary-active);
  }

  .input::placeholder, .input-footer{
    color: var(--mds-color-theme-text-secondary-normal);
  }

  :host([helpTextType="error"]) .input-footer {
    color: var(--mds-color-theme-text-error-normal);
  }
  :host([helpTextType="warning"]) .input-footer {
    color: var(--mds-color-theme-text-warning-normal);
  }
  :host([helpTextType="success"]) .input-footer {
    color: var(--mds-color-theme-text-success-normal);
  }
  :host([helpTextType="priority"]) .input-footer {
    color: var(--mds-color-theme-text-accent-normal);
  }

  :host([helpTextType="error"]) .input {
    border-color: var(--mds-color-theme-text-error-normal);
  }
  :host([helpTextType="warning"]) .input {
    border-color: var(--mds-color-theme-text-warning-normal);
  }
  :host([helpTextType="success"]) .input {
    border-color: var(--mds-color-theme-text-success-normal);
  }
  :host([helpTextType="priority"]) .input {
    border-color: var(--mds-color-theme-text-accent-normal);
  }

  .hidden{
    opacity: 0;
    pointer-events: none;
  }

`, ...hostFocusRingStyles(true)];

export default styles;
