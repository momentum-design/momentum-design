import { css } from 'lit';
import { hostFitContentStyles, hostFocusRingStyles } from '../../utils/styles';

const styles = [hostFitContentStyles, css`
  :host {
    font-size: var(--mds-font-size-body-midsize);
    line-height: var(--mds-font-lineheight-body-midsize);
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  :host([disabled]) .input-label,
  :host([disabled]) .input,
  :host([disabled]) .input::placeholder,
  :host([disabled]) .input-footer {
    color: var(--mds-color-theme-text-primary-disabled);
  }

  :host([disabled]) .input {
    border-color: var(--mds-color-theme-outline-primary-disabled);
    background: var(--mds-color-theme-background-primary-disabled);
  }

  .input-header, .input-footer {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .input-label{
    color: var(--mds-color-theme-text-primary-normal);
  }
  
  .input-container, .input{
    width: 100%;
  }

  .input {
    color: var(--mds-color-theme-text-primary-normal);
    height: 2rem;
    border-radius: 0.5rem;
    border: 0.0625rem solid var(--mds-color-theme-outline-input-normal);
    background-color: var(--mds-color-theme-background-primary-ghost);
    padding: 0.34375rem 1.75rem 0.34375rem 0.75rem;
    outline: none;
  }

  .input:hover{
    background-color: var(--mds-color-theme-background-primary-hover);
  }

  .input:active, .input:focus{
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
  .input-container{
    position: relative;
  }
  .clear-button{
    position: absolute;
    right: 0.3rem;
    top: 0.4rem;
  }
`, hostFocusRingStyles(true)];

export default styles;
