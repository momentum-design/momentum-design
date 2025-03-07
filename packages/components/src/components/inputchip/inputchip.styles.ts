import { css } from 'lit';
import { hostFitContentStyles } from '../../utils/styles';

const styles = css`
  :host {
    height: 1.5rem;
    gap: 0.25rem;
    padding: 0 0.5rem;
    border-radius: 0.25rem;
    border: 1px solid;
    cursor: pointer;

    border-color: var(--mds-color-theme-outline-button-normal);
    background-color: var(--mds-color-theme-background-label-default-normal);
  }

  :host(:hover) {
    background-color: var(--mds-color-theme-background-label-default-hover);
  }

  :host(:active) {
    background-color: var(--mds-color-theme-background-label-default-active);
  }
  
  :host([error]){
    border-color: var(--mds-color-theme-outline-cancel-normal);
    background: var(--mds-color-theme-background-label-error-normal);
  }

  :host([error]:hover) {
    background: var(--mds-color-theme-background-label-error-hover);
  }

  :host([error]:active) {
    background: var(--mds-color-theme-background-label-error-active);
  }

  :host([disabled]), :host([disabled]:hover), :host([disabled]:active) {
    border-color: var(--mds-color-theme-outline-primary-disabled);
    background: var(--mds-color-theme-background-primary-disabled);
    color: var(--mds-color-theme-text-primary-disabled);
    cursor: auto;
  }

  :host::part(close-icon){
    border-radius: 0.25rem;
  }
`;

export default [hostFitContentStyles, styles];
