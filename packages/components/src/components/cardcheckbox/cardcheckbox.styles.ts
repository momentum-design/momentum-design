import { css } from 'lit';
import { hostFocusRingStyles } from '../../utils/styles';

const styles = css`
  :host {
    cursor: pointer;
    user-select: none;
  }

  :host::part(check){
    margin-left: auto;
  }

  :host(:hover) {
    background-color: var(--mds-color-theme-background-primary-hover);
  }

  :host(:active) {
    background-color: var(--mds-color-theme-background-primary-active);
  }

  :host([checked]){
    border: 2px solid var(--mds-color-theme-outline-input-active);
    background-color: var(--mds-color-theme-background-primary-active);
  }

  :host([checked]:hover){
    background-color: var(--mds-color-theme-background-primary-hover);
  }

  :host([checked]:active){
    background-color: var(--mds-color-theme-background-primary-ghost);
  }

  :host::part(check-icon){
    color: var(--mds-color-theme-text-secondary-normal);
  }

  :host([checked])::part(check-icon){
    color: var(--mds-color-theme-text-accent-normal);
  }

  :host([disabled]) {
    background-color: var(--mds-color-theme-background-primary-ghost);
    color: var(--mds-color-theme-text-primary-disabled);
    border-color: var(--mds-color-theme-outline-primary-disabled);
  }

  :host([disabled])::part(image){
    opacity: 0.5;
  }
  
  :host([disabled])::part(check-icon){
    color: var(--mds-color-theme-text-primary-disabled);
  }
`;

export default [styles, ...hostFocusRingStyles()];
