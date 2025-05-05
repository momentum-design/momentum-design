import { css } from 'lit';
import { hostFitContentStyles, hostFocusRingStyles } from '../../utils/styles';

const styles = [hostFitContentStyles, css`
  :host {
    --mdc-navitem-color: var(--mds-color-theme-text-primary-normal);
    --mdc-navitem-border-color: var(--mds-color-theme-outline-button-normal);
    --mdc-navitem-hover-background-color: var(--mds-color-theme-button-secondary-hover);
    --mdc-navitem-pressed-background-color: var(--mds-color-theme-button-secondary-pressed);
    --mdc-navitem-disabled-background-color: var(--mds-color-theme-button-secondary-disabled);
    --mdc-navitem-disabled-color: var(--mds-color-theme-text-primary-disabled);
    --mdc-navitem-active-background-color: var(--mds-color-theme-button-secondary-active-normal);
 
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    color: var(--mdc-navitem-color);
    border-color: var(--mdc-navitem-border-color);
    border-radius: 1.25rem;
    margin-left: 1rem;
    cursor: pointer;
  }

  :host(:dir(rtl)) {
    margin-right: 1rem;
  }

  :host([disabled]) {
    pointer-events: none;
  }

  :host([isExpanded]) {
    width: 12.75rem;
  }
  
  :host(:hover), 
  :host(:hover[active]) {
    background-color: var(--mdc-navitem-hover-background-color);
  }

  :host(:active) {
    background-color: var(--mdc-navitem-pressed-background-color);
  }

  :host([disabled]), 
  :host([active][disabled]) {
    color: var(--mdc-navitem-disabled-color);
    background-color: var(--mdc-navitem-disabled-background-color);
  }

  :host([active]) {
    background-color: var(--mdc-navitem-active-background-color);
  }

  :host::before {
    content: '';
    display: block;
    position: absolute;
    background-color: var(--mdc-navitem-color);
    width: 0.25rem;
    height: 1rem;
    pointer-events: none;
    visibility: hidden;
  }

  :host(:dir(ltr))::before {
    left: -1rem;
    border-radius: 0 0.25rem 0.25rem 0;
  }

  :host(:dir(rtl))::before {
    right: -1rem;
    border-radius: 0.25rem 0 0 0.25rem;
  }

  :host([active])::before {
    visibility: visible;
  }

  :host([disabled])::before {
    background-color: var(--mdc-navitem-disabled-color);
  }

  :host::part(text-container) {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  :host::part(icon-container) {
    position: relative;
  }
  
  .badge {
    position: absolute;
    right: -0.375rem;
    top: -0.375rem;
  }
`, ...hostFocusRingStyles()];

export default styles;
