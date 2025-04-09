import { css } from 'lit';
import { hostFitContentStyles } from '../../utils/styles';

const styles = [hostFitContentStyles, css`
  :host {
    --mdc-button-secondary-color: var(--mds-color-theme-text-primary-normal);
    --mdc-button-secondary-border-color: var(--mds-color-theme-outline-button-normal);
    --mdc-button-secondary-hover-background-color: var(--mds-color-theme-button-secondary-hover);
    --mdc-button-secondary-pressed-background-color: var(--mds-color-theme-button-secondary-pressed);
    --mdc-button-secondary-disabled-background-color: var(--mds-color-theme-button-secondary-disabled);
    --mdc-button-secondary-disabled-color: var(--mds-color-theme-text-primary-disabled);
    --mdc-button-secondary-active-background-color: var(--mds-color-theme-button-secondary-active-normal);

    position: relative;
    display: flex;
    gap: 1rem;
    justify-content: flex-start;
    align-items: center;
    border: none;
    background-color: unset;
    outline: unset;
  }

  :host([disabled]) {
    background-color: unset;
    outline: unset;
  }

  :host {
    flex-grow: 1;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    color: var(--mdc-button-secondary-color);
    border-color: var(--mdc-button-secondary-border-color);
    border-radius: 1.25rem;
    font-weight: var(--mds-font-apps-body-large-medium-font-weight);
    margin-left: 1rem;
  }
  
  :host(:hover), 
  :host(:hover[active]) {
    background-color: var(--mdc-button-secondary-hover-background-color);
  }

  :host(:active) {
    background-color: var(--mdc-button-secondary-pressed-background-color);
  }

  :host([disabled]), 
  :host([active][disabled]) {
    color: var(--mdc-button-secondary-disabled-color);
    background-color: var(--mdc-button-secondary-disabled-background-color);
  }

  :host([active]) {
    background-color: var(--mdc-button-secondary-active-background-color);
  }

  :host::before {
    content: '';
    display: block;
    position: absolute;
    left: -1rem;
    background-color: var(--mdc-button-secondary-color);
    width: 0.25rem;
    height: 1rem;
    border-radius: 0 0.25rem 0.25rem 0;
    align-self: center;
    pointer-events: none;
    visibility: hidden;
  }

  :host([active])::before {
    visibility: visible;
  }

  :host([disabled])::before {
    background-color: var(--mdc-button-secondary-disabled-color);
  }

  :host::part(text-container) {
    width: 8rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  :host::part(icon-container) {
    position: relative;
    display: inline-block;
  }

  .badge {
    position: absolute;
    right: -0.375rem;
    top: -0.375rem;
  }
`];

export default styles;
