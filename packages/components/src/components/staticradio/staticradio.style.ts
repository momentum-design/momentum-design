import { css } from 'lit';

const styles = [css`
:host{
    display: block;
    position: relative;
    width: 1rem;
    height: 1rem;
    margin: 0.125rem 0;
    border-radius: 50%;

    --mdc-radio-inner-circle-size: 0.375rem;
    --mdc-radio-text-disabled-color: var(--mds-color-theme-text-primary-disabled);
    --mdc-radio-disabled-border-color: var(--mds-color-theme-outline-primary-disabled);
    --mdc-radio-normal-border-color: var(--mds-color-theme-outline-input-normal);
    --mdc-radio-inner-circle-normal-background: var(--mds-color-theme-inverted-text-primary-normal);
    --mdc-radio-inner-circle-disabled-background: var(--mds-color-theme-inverted-text-primary-disabled);
    --mdc-radio-control-inactive-color: var(--mds-color-theme-control-inactive-normal);
    --mdc-radio-control-inactive-disabled-background: var(--mds-color-theme-control-inactive-disabled);
    --mdc-radio-control-active-color: var(--mds-color-theme-control-active-normal);
    --mdc-radio-control-active-disabled-background: var(--mds-color-theme-control-active-disabled);
  }
  
  .icon:after {
    content: "";
    position: absolute;
    display: none;
  }

  :host([disabled]) .icon,
  :host([disabled][readonly]) .icon {
    border-color: var(--mdc-radio-disabled-border-color);
    background: var(--mdc-radio-control-inactive-disabled-background);
  }

  :host([disabled][checked]) .icon,
  :host([disabled][readonly][checked]) .icon {
    border: var(--mdc-radio-control-active-disabled-background);
    background: var(--mdc-radio-control-active-disabled-background);
  }

  :host([disabled][checked]) .icon:after,
  :host([disabled][readonly][checked]) .icon:after {
    background: var(--mdc-radio-inner-circle-disabled-background);
  }

  .icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 1rem;
    height: 1rem;
    border: 0.0625rem solid var(--mdc-radio-normal-border-color);
    background-color: var(--mdc-radio-control-inactive-color);
    border-radius: 50%;
  }

  :host([checked]) .icon {
    border-color: var(--mdc-radio-control-active-color);
    background-color: var(--mdc-radio-control-active-color);
  }

  :host([checked]) .icon:after {
    display: block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: var(--mdc-radio-inner-circle-size);
    height: var(--mdc-radio-inner-circle-size);
    border-radius: 50%;
    background: var(--mdc-radio-inner-circle-normal-background);
  }

  :host([readonly]) .icon,
  :host([readonly]:hover) .icon {
    border-color: var(--mdc-radio-normal-border-color);
    background-color: var(--mdc-radio-control-inactive-color);
  }

  :host([readonly][checked]) .icon {
    border-color: var(--mdc-radio-normal-border-color);
  }
  
  :host([readonly][checked]) .icon:after,
  :host([readonly][checked]:hover) .icon:after,
  :host([readonly][checked]:active) .icon:after {
    background-color: var(--mdc-radio-text-disabled-color);
  }
`];

export default styles;
