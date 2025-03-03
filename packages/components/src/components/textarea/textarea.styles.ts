import { css } from 'lit';
import { hostFocusRingStyles } from '../../utils/styles';

const styles = [css`
  :host {
    --mdc-textarea-text-color: var(--mds-color-theme-text-primary-normal);
    --mdc-textarea-background-color: var(--mds-color-theme-background-primary-ghost);
    --mdc-textarea-border-color: var(--mds-color-theme-outline-input-normal);
    --mdc-textarea-scroll-background-color: var(--mds-color-theme-scrollbar-button-normal);
  }

  :host::part(textarea){
    min-width: 400px;
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

  :host::part(trailing-button) {
    position: absolute;
    right: 6px;
    top: 6px;
    
  }

  :host::part(textarea-footer) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`, ...hostFocusRingStyles(true)];

export default [styles];
