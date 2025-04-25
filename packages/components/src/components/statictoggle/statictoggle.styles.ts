import { css } from 'lit';

const styles = [css`
  :host {
    --mdc-toggle-width: 3rem;
    --mdc-toggle-height: 1.5rem;
    --mdc-toggle-width-compact: 2rem;
    --mdc-toggle-height-compact: 1rem;
    --mdc-toggle-border-radius: 0.75rem;
    --mdc-toggle-border-radius-compact: 0.5rem;
    --mdc-toggle-border: 1px solid var(--mds-color-theme-outline-input-normal);

    --mdc-toggle-inactive-rest-color: var(--mds-color-theme-control-inactive-normal);
    --mdc-toggle-inactive-hover-color: var(--mds-color-theme-control-inactive-hover);
    --mdc-toggle-inactive-pressed-color: var(--mds-color-theme-control-inactive-pressed);
    --mdc-toggle-inactive-disabled-color: var(--mds-color-theme-control-inactive-disabled);
    --mdc-toggle-active-rest-color: var(--mds-color-theme-control-active-normal);
    --mdc-toggle-active-hover-color: var(--mds-color-theme-control-active-hover);
    --mdc-toggle-active-pressed-color: var(--mds-color-theme-control-active-pressed);
    --mdc-toggle-active-disabled-color: var(--mds-color-theme-control-active-disabled);

    --mdc-toggle-icon-color-normal: var(--mds-color-theme-common-inverted-text-primary-normal);
    --mdc-toggle-icon-color-disabled: var(--mds-color-theme-common-inverted-text-primary-disabled);
    --mdc-toggle-icon-background-color-normal: var(--mds-color-theme-common-text-primary-normal);
    --mdc-toggle-icon-background-color-disabled: var(--mds-color-theme-common-text-primary-disabled);
  }

  :host::part(slider) {
    width: var(--mdc-toggle-width);
    height: var(--mdc-toggle-height);
    background: var(--mdc-toggle-inactive-rest-color);
    border-radius: var(--mdc-toggle-border-radius);
    border: var(--mdc-toggle-border);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    transition: background-color 0.3s ease;
    outline: none;
    padding: 1px;
  }

  :host([checked])::part(slider) {
    background-color: var(--mdc-toggle-active-rest-color);
    justify-content: flex-end;
    border-color: transparent;
  }

  :host([size='compact'])::part(slider) {
    width: var(--mdc-toggle-width-compact);
    height: var(--mdc-toggle-height-compact);
    border-radius: var(--mdc-toggle-border-radius-compact);
  }
  
  .icon {
    padding: 0.25rem;
   --mdc-icon-fill-color: var(--mdc-toggle-icon-color-normal);
   background-color: var(--mdc-toggle-icon-background-color-normal);
   border-radius: 50%;
  }

  :host([disabled]) .icon {
    --mdc-icon-fill-color: var(--mdc-toggle-icon-color-disabled);
  }

  :host([size='compact']) .icon {
    padding: 0.125rem;
  }

  :host(:hover:not([disabled]))::part(slider) {
    background-color: var(--mdc-toggle-inactive-hover-color);
  }

  :host(:active:not([disabled]))::part(slider) {
    background-color: var(--mdc-toggle-inactive-pressed-color);
  }

  :host(:hover:not([disabled])[checked])::part(slider) {
    background-color: var(--mdc-toggle-active-hover-color);
  }

  :host(:active:not([disabled])[checked])::part(slider) {
    background-color: var(--mdc-toggle-active-pressed-color);
  }

  :host([disabled])::part(slider) {
    background-color: var(--mdc-toggle-inactive-disabled-color);
  }

  :host([disabled][checked])::part(slider) {
    background-color: var(--mdc-toggle-active-disabled-color);
  }

  :host([disabled]) .icon {
    background-color: var(--mdc-toggle-icon-background-color-disabled);
  }

  /* High Contrast Mode */
  @media (forced-colors: active) {
    :host([checked])::part(slider), .icon {
      border: var(--mdc-toggle-border);
    }
  }
`];

export default styles;
