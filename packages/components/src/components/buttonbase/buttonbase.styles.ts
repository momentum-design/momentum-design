import { css } from 'lit';

const styles = css`
  :host {
    cursor: pointer;
    display: flex;
    padding: 0.5rem;
    align-items: center;
    border-radius: 1.25rem;
    width: fit-content;
    font-size: var(--mds-font-apps-body-large-medium-font-size);
    font-weight: var(--mds-font-apps-body-large-medium-font-weight);
    line-height: var(--mds-font-apps-body-large-medium-line-height);
  }

  :host([disabled]), :host([soft-disabled]), :host([active][disabled]), :host([active][soft-disabled]){
    background: var(--color-theme-button-primary-disabled, rgba(255, 255, 255, 0.20));
    color: var(--color-theme-text-primary-disabled, rgba(255, 255, 255, 0.40));
    cursor: not-allowed;
  }

  :host(:hover), :host([active]:hover){
    background: var(--color-theme-button-primary-hover, rgba(255, 255, 255, 0.80));
    color: var(--color-theme-inverted-text-primary-normal, rgba(0, 0, 0, 0.95));
  }

  :host(:focus), :host([active]:focus){
    color: var(--color-theme-inverted-text-primary-normal, rgba(0, 0, 0, 0.95));
    background: var(--color-theme-button-primary-normal, rgba(255, 255, 255, 0.95));
/* Focus State */
box-shadow: var(--Focus-0-X, 0px) var(--Focus-0-Y, 0px) var(--Focus-0-Blur, 0px) var(--Focus-0-Spread, 2px) 
  var(--color-theme-inverted-text-primary-normal, rgba(0, 0, 0, 0.95)), 
  var(--Focus-2-X, 0px) var(--Focus-2-Y, 0px) var(--Focus-2-Blur, 0px) var(--Focus-2-Spread, 5px) 
  var(--Focus-2-Shadow, rgba(100, 180, 250, 0.35)), 
  var(--Focus-1-X, 0px) var(--Focus-1-Y, 0px) var(--Focus-2-Blur, 0px) var(--Focus-1-Spread, 4px) 
  var(--Focus-1-Shadow, #64B4FA);
  }

  :host(:active), :host(.pressed), :host([active]:active), :host([active].pressed){
    background: var(--color-theme-button-primary-pressed, rgba(255, 255, 255, 0.70));
    color: var(--color-theme-inverted-text-primary-normal, rgba(0, 0, 0, 0.95));
  }

  :host([active]){
    background: var(--color-theme-button-primary-normal, rgba(255, 255, 255, 0.95));
    color: var(--color-theme-inverted-text-primary-normal, rgba(0, 0, 0, 0.95));
    font-weight: var(--mds-font-apps-body-large-bold-font-weight);
  }

`;

export default [styles];
