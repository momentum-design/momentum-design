import { css } from 'lit';

const styles = css`
  :host {
    cursor: pointer;
    padding: 0.5rem 1rem;
    border-radius: 1.25rem;
    width: fit-content;
    font-weight: var(--mds-font-apps-body-large-medium-font-weight);
    line-height: var(--mds-font-apps-body-large-medium-line-height);
    outline: none;
  }
  :host([active]){
    font-weight: var(--mds-font-apps-body-large-bold-font-weight);
  }

  :host([variant="primary"]:focus), :host([variant="secondary"]:focus),:host([variant="tertiary"]:focus){
    box-shadow: var(--Focus-0-X, 0px) var(--Focus-0-Y, 0px) var(--Focus-0-Blur, 0px) 
    var(--Focus-0-Spread, 2px) var(--Focus-0-Shadow, #000), var(--Focus-2-X, 0px) 
    var(--Focus-2-Y, 0px) var(--Focus-2-Blur, 0px) var(--Focus-2-Spread, 5px) 
    var(--Focus-2-Shadow, rgba(100, 180, 250, 0.35)), var(--Focus-1-X, 0px) 
    var(--Focus-1-Y, 0px) var(--Focus-2-Blur, 0px) var(--Focus-1-Spread, 4px) var(--Focus-1-Shadow, #64B4FA);
  }

  :host([variant="primary"]){
    background: var(--mds-color-theme-button-primary-normal);
    color: var(--mds-color-theme-inverted-text-primary-normal);
  }
  :host([variant="primary"]:hover){
    background: var(--color-theme-button-primary-hover,);
  }
  :host([variant="primary"]:active), :host([variant="primary"].pressed){
    background: var(--color-theme-button-primary-pressed);
  }
  :host([variant="primary"]:disabled), :host([variant="primary"][disabled]), :host([variant="primary"][soft-disabled]){
    background: var(--color-theme-button-primary-disabled);
    color: var(--color-theme-text-primary-disabled);
  }
  :host([variant="primary"]:disabled), :host([variant="primary"][disabled]){
    box-shadow: none;
    cursor: not-allowed;
  }

  :host([variant="secondary"]){
    color: var(--color-theme-text-primary-normal);
    border: 1px solid var(--color-theme-outline-button-normal);
    background: var(--color-theme-button-secondary-normal);
  }
  :host([variant="secondary"]:hover){
    background: var(--color-theme-button-secondary-hover);
  }
  :host([variant="secondary"]:active), :host([variant="secondary"].pressed){
    background: var(--color-theme-button-secondary-pressed);
  }
  :host([variant="secondary"]:disabled), :host([variant="secondary"][disabled]),
   :host([variant="secondary"][soft-disabled]){
    color: var(--color-theme-text-primary-disabled);
    border: 1px solid var(--color-theme-outline-primary-disabled);
    background: var(--color-theme-button-secondary-disabled);
  }
  :host([variant="secondary"]:disabled), :host([variant="secondary"][disabled]){
    box-shadow: none;
    cursor: not-allowed;
  }

  :host([variant="tertiary"]){
    border: none;
    color: var(--color-theme-text-primary-normal);
  }
  :host([variant="tertiary"]:hover){
    background: var(--color-theme-button-secondary-hover);
  }
  :host([variant="tertiary"]:active), :host([variant="tertiary"].pressed){
    background: var(--color-theme-button-secondary-pressed);
  }
  :host([variant="tertiary"]:disabled), :host([variant="tertiary"][disabled]), 
  :host([variant="tertiary"][soft-disabled]){
    color: var(--color-theme-text-primary-disabled);
    background: var(--color-theme-button-secondary-disabled);
  }
  :host([variant="tertiary"]:disabled), :host([variant="tertiary"][disabled]){
    box-shadow: none;
    cursor: not-allowed;
  }

  :host([size="40"]){
    font-size: var(--mds-font-size-heading-xlarge);
  }
  :host([size="32"]){
    font-size: var(--mds-font-size-heading-large);
  }
  :host([size="28"]){
    font-size: 1.75rem;
  }
  :host([size="24"]){
    font-size: var(--mds-font-size-heading-midsize);
  }
  :host([size="20"]){
    font-size: var(--mds-font-size-heading-small);
  }


`;

export default [styles];
