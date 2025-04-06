import { css } from 'lit';
import { hostFitContentStyles, hostFocusRingStyles } from '../../utils/styles';

const styles = [hostFitContentStyles, css`
  :host {
    --mdc-button-secondary-color: var(--mds-color-theme-text-primary-normal);
    --mdc-button-secondary-border-color: var(--mds-color-theme-outline-button-normal);
    --mdc-button-secondary-hover-background-color: var(--mds-color-theme-button-secondary-hover);
    --mdc-button-secondary-pressed-background-color: var(--mds-color-theme-button-secondary-pressed);
    --mdc-button-secondary-disabled-background-color: var(--mds-color-theme-button-secondary-disabled);
    --mdc-button-secondary-disabled-color: var(--mds-color-theme-text-primary-disabled);

    --mdc-button-secondary-active-background-color: var(--mds-color-theme-button-secondary-active-normal);

    display: flex;
    padding-right: 1rem;
    gap: 1rem;
    justify-content: flex-start;
    width: 100%;
    height: 100%;

    border: none;
    background-color: unset;
    outline: unset;
    //box-shadow: none;
  }

  :host([disabled]) {
    background-color: unset;
    outline: unset;
  }

  :host::part(nav-item-tab) {
    flex-grow: 1;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    color: var(--mdc-button-secondary-color);
    border-color: var(--mdc-button-secondary-border-color);
    border-radius: 1.25rem;
    font-weight: var(--mds-font-apps-body-large-medium-font-weight);
  }
  
  :host(:hover)::part(nav-item-tab), 
  :host(:hover[active])::part(nav-item-tab) {
    background-color: var(--mdc-button-secondary-hover-background-color);
  }

  :host(:active)::part(nav-item-tab) {
    background-color: var(--mdc-button-secondary-pressed-background-color);
  }

  :host([disabled])::part(nav-item-tab), 
  :host([active][disabled])::part(nav-item-tab) {
    color: var(--mdc-button-secondary-disabled-color);
    background-color: var(--mdc-button-secondary-disabled-background-color);
  }

  :host([active])::part(nav-item-tab) {
    background-color: var(--mdc-button-secondary-active-background-color);
  }

  :host::part(marker-container) {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    flex-shrink: 0;
    align-self: stretch;
  }

  :host::part(marker) {
    background-color: var(--mdc-button-secondary-color);
    width: 0.25rem;
    height: 1rem;
    flex-shrink: 0;
    border-radius: 0rem 0.25rem 0.25rem 0rem;
  }

  :host::part(text-container) {
    width: 8rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  :host([disabled])::part(marker) {
    background-color: var(--mdc-button-secondary-disabled-color);
  }
  
`, ...hostFocusRingStyles(true)];

export default styles;
