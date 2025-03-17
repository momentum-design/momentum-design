import { css } from 'lit';
import { hostFitContentStyles } from '../../utils/styles';

const styles = css`
  :host {
    height: 1.5rem;
    gap: 0.25rem;
    padding: 0 0.25rem 0 0.5rem;
    border-radius: 0.25rem;
    border: 1px solid;
    cursor: pointer;

    --mdc-chip-color: var(--mds-color-theme-text-primary-normal);
    --mdc-chip-border-color: var(--mds-color-theme-outline-button-normal);
    --mdc-chip-background-color: var(--mds-color-theme-background-label-default-normal);

    color: var(--mdc-chip-color);
    border-color: var(--mdc-chip-border-color);
    background-color: var(--mdc-chip-background-color);
  }

  :host(:hover) {
    --mdc-chip-background-color: var(--mds-color-theme-background-label-default-hover);
  }
  
  :host(:active) {
    --mdc-chip-background-color: var(--mds-color-theme-background-label-default-active);
  }
  
  :host([error]){
    --mdc-chip-border-color: var(--mds-color-theme-outline-cancel-normal);
    --mdc-chip-background-color: var(--mds-color-theme-background-label-error-normal);
  }

  :host([error]:hover) {
    --mdc-chip-background-color: var(--mds-color-theme-background-label-error-hover);
  }

  :host([error]:active) {
    --mdc-chip-background-color: var(--mds-color-theme-background-label-error-active);
  }

  :host([disabled]), :host([disabled]:hover), :host([disabled]:active) {
    --mdc-chip-border-color: var(--mds-color-theme-common-outline-primary-disabled);
    --mdc-chip-background-color: var(--mds-color-theme-background-primary-disabled);
    --mdc-chip-color: var(--mds-color-theme-text-primary-disabled);
    cursor: auto;
  }

  :host::part(close-icon){
    border-radius: 0.25rem;
  }
`;

export default [hostFitContentStyles, styles];
