import { css } from 'lit';
import { hostFitContentStyles, hostFocusRingStyles } from '../../utils/styles';

const styles = [hostFitContentStyles, css`
  :host {
    --mdc-navitem-color: var(--mds-color-theme-text-primary-normal);
    --mdc-navitem-disabled-color: var(--mds-color-theme-text-primary-disabled);
    --mdc-navitem-border-color: var(--mds-color-theme-outline-button-normal);
    --mdc-navitem-expanded-width: 12.75rem;

    /* Background color when in default (normal) or active state */
    --mdc-navitem-rest-active-background-color: var(--mds-color-theme-button-secondary-active-normal);
    --mdc-navitem-hover-background-color: var(--mds-color-theme-button-secondary-hover);
    --mdc-navitem-hover-active-background-color: var(--mds-color-theme-button-secondary-active-hover);
    --mdc-navitem-pressed-background-color: var(--mds-color-theme-button-secondary-pressed);
    --mdc-navitem-pressed-active-background-color: var(--mds-color-theme-button-secondary-active-pressed);
    --mdc-navitem-disabled-background-color: var(--mds-color-theme-button-secondary-disabled);
    --mdc-navitem-disabled-active-background-color: var(--mds-color-theme-button-secondary-active-disabled);
 
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    color: var(--mdc-navitem-color);
    border-color: var(--mdc-navitem-border-color);
    border-radius: 1.25rem;
    cursor: pointer;
  }

  :host(:dir(ltr)) {
    margin-left: 1rem;
  }

  :host(:dir(rtl)) {
    margin-right: 1rem;
  }

  :host([expanded]) {
    width: var(--mdc-navitem-expanded-width);
  }

  :host([active]) {
    background-color: var(--mdc-navitem-rest-active-background-color);
  }
  
  :host([disabled]) {
    color: var(--mdc-navitem-disabled-color);
    background-color: var(--mdc-navitem-disabled-background-color);
    pointer-events: none;
  }

  :host([active][disabled]) {
    background-color: var(--mdc-navitem-disabled-active-background-color);
    color: var(--mdc-navitem-disabled-color);
  }
  
  :host(:hover) {
    background-color: var(--mdc-navitem-hover-background-color);
  }

  :host(:hover[active]) {
    background-color: var(--mdc-navitem-hover-active-background-color);
  }

  :host(:active) {
    background-color: var(--mdc-navitem-pressed-background-color);
  }

  :host(:active[active]) {
    background-color: var(--mdc-navitem-pressed-active-background-color);
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
  
  :host(:dir(ltr)) .badge {
    position: absolute;
    right: -0.375rem;
    top: -0.375rem;
  }

  :host(:dir(rtl)) .badge {
    position: absolute;
    left: -0.375rem;
    top: -0.375rem;
  }

  :host(:not([expanded]))::part(trailing-arrow) {
    --mdc-icon-size: 0.75rem;
  }

  :host([expanded])::part(trailing-arrow) {
    --mdc-icon-size: 1rem;
    flex-shrink: 0;
  }

  :host(:dir(ltr)) .arrow {
    position: absolute;
    right: -0.75rem;
    top: 0.875rem;
  }

  :host(:dir(rtl)) .arrow {
    position: absolute;
    left: -0.75rem;
    top: 0.875rem;
  }
`, ...hostFocusRingStyles()];

export default styles;
