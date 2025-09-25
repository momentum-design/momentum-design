import { css } from 'lit';

const styles = [
  css`
    :host {
      display: block;
      position: relative;
      width: 1rem;
      height: 1rem;
      margin: 0.125rem 0;
      border-radius: 50%;

      --mdc-radio-inner-circle-size: 0.375rem;
      --mdc-radio-inner-circle-background-color: var(--mds-color-theme-inverted-text-primary-normal);
      --mdc-radio-control-background-color: var(--mds-color-theme-control-inactive-normal);
      --mdc-radio-control-border-color: var(--mds-color-theme-outline-input-normal);
      --mdc-radio-text-disabled-color: var(--mds-color-theme-text-primary-disabled);
    }

    :host::part(radio-icon) {
      background-color: var(--mdc-radio-control-background-color);
      border-color: var(--mdc-radio-control-border-color);
    }

    .icon:after {
      content: '';
      position: absolute;
      display: none;
    }

    :host::part(radio-icon) {
      position: absolute;
      top: 0;
      left: 0;
      width: 1rem;
      height: 1rem;
      border: 0.0625rem solid var(--mdc-radio-control-border-color);
      background-color: var(--mdc-radio-control-background-color);
      border-radius: 50%;
    }

    :host([checked]) .icon:after {
      display: block;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: var(--mdc-radio-inner-circle-size);
      height: var(--mdc-radio-inner-circle-size);
      border-radius: 50%;
      background: var(--mdc-radio-inner-circle-background-color);
    }

    :host([readonly][checked]) .icon:after {
      --mdc-radio-inner-circle-background-color: var(--mdc-radio-text-disabled-color);
    }

    :host(:not([readonly]):not([disabled])[checked])::part(radio-icon) {
      --mdc-radio-control-border-color: var(--mds-color-theme-control-active-normal);
      --mdc-radio-control-background-color: var(--mds-color-theme-control-active-normal);
    }

    :host([disabled])::part(radio-icon),
    :host([disabled][readonly])::part(radio-icon) {
      --mdc-radio-control-border-color: var(--mds-color-theme-outline-primary-disabled);
      --mdc-radio-control-background-color: var(--mds-color-theme-control-inactive-disabled);
    }

    :host([disabled][checked])::part(radio-icon),
    :host([disabled][readonly][checked])::part(radio-icon) {
      border: var(--mds-color-theme-control-active-disabled);
      --mdc-radio-control-background-color: var(--mds-color-theme-control-active-disabled);
    }

    :host([disabled][checked]) .icon:after,
    :host([disabled][readonly][checked]) .icon:after {
      --mdc-radio-inner-circle-background-color: var(--mds-color-theme-inverted-text-primary-disabled);
    }
  `,
];

export default styles;
