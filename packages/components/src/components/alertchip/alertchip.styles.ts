import { css } from 'lit';
import { hostFitContentStyles, hostFocusRingStyles } from '../../utils/styles';

const styles = css`
  :host {
    height: 1.5rem;
    gap: 0.25rem;
    padding: 0 0.5rem;
    border-radius: 0.25rem;
    border: 1px solid;
    cursor: pointer;
  }

  :host::part(label){
    color: var(--mds-color-theme-text-primary-normal);
  }

  :host([variant="neutral"])::part(icon){
    color: var(--mds-color-theme-text-secondary-normal);
  }
  
  :host([variant="neutral"]){
    border-color: var(--mds-color-theme-outline-secondary-normal);
    background: var(--mds-color-theme-background-alert-default-normal);
  }

  :host([variant="neutral"]:hover){
    background: var(--mds-color-theme-background-alert-default-hover);
  }

  :host([variant="neutral"]:active){
    background: var(--mds-color-theme-background-alert-default-active);
  }

  :host([variant="error"])::part(icon){
    color: var(--mds-color-theme-text-error-normal);
  }
  
  :host([variant="error"]){
    border-color: var(--mds-color-theme-outline-cancel-normal);
    background: var(--mds-color-theme-background-alert-error-normal);
  }

  :host([variant="error"]:hover){
    background: var(--mds-color-theme-background-alert-error-hover);
  }

  :host([variant="error"]:active){
    background: var(--mds-color-theme-background-alert-error-active);
  }

  :host([variant="warning"])::part(icon){
    color: var(--mds-color-theme-text-warning-normal);
  }

  :host([variant="warning"]){
    border-color: var(--mds-color-theme-outline-warning-normal);
    background: var(--mds-color-theme-background-alert-warning-normal);
  }

  :host([variant="warning"]:hover){
    background: var(--mds-color-theme-background-alert-warning-hover);
  }

  :host([variant="warning"]:active){
    background: var(--mds-color-theme-background-alert-warning-active);
  }

  :host([variant="success"])::part(icon){
    color: var(--mds-color-theme-text-success-normal);
  }

  :host([variant="success"]){
    border-color: var(--mds-color-theme-outline-join-normal);
    background: var(--mds-color-theme-background-alert-success-normal);
  }

  :host([variant="success"]:hover){
    background: var(--mds-color-theme-background-alert-success-hover);
  }

  :host([variant="success"]:active){
    background: var(--mds-color-theme-background-alert-success-active);
  }

  :host([variant="informational"])::part(icon){
    color: var(--mds-color-theme-text-accent-normal);
  }

  :host([variant="informational"]){
    border-color: var(--mds-color-theme-outline-theme-normal);
    background: var(--mds-color-theme-background-alert-theme-normal);
  }

  :host([variant="informational"]:hover){
    background: var(--mds-color-theme-background-alert-theme-hover);
  }

  :host([variant="informational"]:active){
    background: var(--mds-color-theme-background-alert-theme-active);
  }
`;

export default [hostFitContentStyles, styles, ...hostFocusRingStyles()];
