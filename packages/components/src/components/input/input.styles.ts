import { css } from 'lit';
import { hostFocusRingStyles } from '../../utils/styles';

const styles = [css`
:host, .input-container, .input-section, .input{
  width: 100%;
}
  :host([disabled]) .input,
  :host([disabled]) .input::placeholder{
    color: var(--mds-color-theme-text-primary-disabled);
  }

  :host([disabled]) .input {
    border-color: var(--mds-color-theme-outline-primary-disabled);
    background: var(--mds-color-theme-background-primary-disabled);
  }

  .leading-icon{
    aspect-ratio: 1;
  }

  .input-container{
    height: 2rem;
    border-radius: 0.5rem;
    border: 0.0625rem solid var(--mds-color-theme-outline-input-normal);
    display: flex;
    align-items: center;
    gap: 0.375rem;
    padding: 0.34375rem 0.375rem 0.34375rem 0.75rem;
  }
  
  .input-section{
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

  .input::placeholder{
    color: var(--mds-color-theme-text-secondary-normal);
  }

  :host([help-text-type="error"]) .input-container {
    border-color: var(--mds-color-theme-text-error-normal);
  }
  :host([help-text-type="warning"]) .input-container {
    border-color: var(--mds-color-theme-text-warning-normal);
  }
  :host([help-text-type="success"]) .input-container {
    border-color: var(--mds-color-theme-text-success-normal);
  }
  :host([help-text-type="priority"]) .input-container {
    border-color: var(--mds-color-theme-text-accent-normal);
  }

  .hidden{
    opacity: 0;
    pointer-events: none;
  }
`, ...hostFocusRingStyles(true)];

export default styles;
