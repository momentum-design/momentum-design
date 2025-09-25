import { css } from 'lit';

const styles = [
  css`
    :host {
      margin: 0.125rem 0;
      border-radius: 0.125rem;
      --mdc-staticcheckbox-border-color: var(--mds-color-theme-outline-button-normal);
      --mdc-staticcheckbox-checked-background-color: var(--mds-color-theme-control-active-normal);
      --mdc-staticcheckbox-disabled-background-color: var(--mds-color-theme-control-inactive-disabled);
      --mdc-staticcheckbox-disabled-icon-color: var(--mds-color-theme-text-primary-disabled);
      --mdc-staticcheckbox-icon-background-color: var(--mds-color-theme-control-inactive-normal);
      --mdc-staticcheckbox-icon-border-color: var(--mds-color-theme-outline-input-normal);
      --mdc-staticcheckbox-icon-color: var(--mds-color-theme-inverted-text-primary-normal);
      --mdc-staticcheckbox-disabled-border-color: var(--mds-color-theme-outline-primary-disabled);
      --mdc-staticcheckbox-disabled-checked-icon-color: var(--mds-color-theme-control-active-disabled);
    }

    :host([checked])::part(icon-container),
    :host([indeterminate])::part(icon-container) {
      background: var(--mdc-staticcheckbox-checked-background-color);
      border-color: transparent;
    }

    :host([disabled])::part(icon-container) {
      border-color: var(--mdc-staticcheckbox-disabled-border-color);
      background: var(--mdc-staticcheckbox-disabled-background-color);
    }

    :host([disabled][checked])::part(icon-container),
    :host([disabled][indeterminate])::part(icon-container) {
      background: var(--mdc-staticcheckbox-disabled-checked-icon-color);
      border: 0.0625rem solid var(--mdc-staticcheckbox-disabled-border-color);
    }

    :host::part(icon-container) {
      display: flex;
      align-items: center;
      border: 0.0625rem solid var(--mdc-staticcheckbox-icon-border-color);
      background: var(--mdc-staticcheckbox-icon-background-color);
      width: 1rem;
      height: 1rem;
      border-radius: 0.125rem;
    }

    :host::part(icon) {
      --mdc-icon-fill-color: var(--mdc-staticcheckbox-icon-color);
    }

    :host([disabled])::part(icon) {
      --mdc-icon-fill-color: var(--mdc-staticcheckbox-disabled-icon-color);
    }

    /* High Contrast Mode */
    @media (forced-colors: active) {
      :host([checked])::part(icon-container) :host([indeterminate])::part(icon-container) {
        border: 0.0625rem solid var(--mdc-staticcheckbox-border-color);
      }
    }
  `,
];

export default styles;
