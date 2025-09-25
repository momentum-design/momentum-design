import { css } from 'lit';

const styles = [
  css`
    :host {
      --mdc-toggle-width: 3rem;
      --mdc-toggle-height: 1.5rem;
      --mdc-toggle-width-compact: 2rem;
      --mdc-toggle-height-compact: 1rem;
      --mdc-toggle-border-radius: 0.75rem;
      --mdc-toggle-border-radius-compact: 0.5rem;
      --mdc-toggle-border: 1px solid var(--mds-color-theme-outline-input-normal);

      --mdc-toggle-inactive-rest-color: var(--mds-color-theme-control-inactive-normal);
      --mdc-toggle-inactive-disabled-color: var(--mds-color-theme-control-inactive-disabled);
      --mdc-toggle-active-rest-color: var(--mds-color-theme-control-active-normal);
      --mdc-toggle-active-disabled-color: var(--mds-color-theme-control-active-disabled);

      --mdc-toggle-icon-color-normal: var(--mds-color-theme-common-inverted-text-primary-normal);
      --mdc-toggle-icon-color-disabled: var(--mds-color-theme-common-inverted-text-primary-disabled);
      --mdc-toggle-icon-background-color-normal: var(--mds-color-theme-common-text-primary-normal);
      --mdc-toggle-icon-background-color-disabled: var(--mds-color-theme-common-text-primary-disabled);

      border-radius: var(--mdc-toggle-border-radius);
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

    :host::part(icon) {
      padding: 0.25rem;
      --mdc-icon-fill-color: var(--mdc-toggle-icon-color-normal);
      background-color: var(--mdc-toggle-icon-background-color-normal);
      border-radius: 50%;
    }

    :host([disabled])::part(icon) {
      --mdc-icon-fill-color: var(--mdc-toggle-icon-color-disabled);
      background-color: var(--mdc-toggle-icon-background-color-disabled);
    }

    :host([size='compact'])::part(icon) {
      padding: 0.125rem;
    }

    :host([disabled])::part(slider) {
      background-color: var(--mdc-toggle-inactive-disabled-color);
    }

    :host([disabled][checked])::part(slider) {
      background-color: var(--mdc-toggle-active-disabled-color);
    }

    /* High Contrast Mode */
    @media (forced-colors: active) {
      :host([checked])::part(slider),
      :host::part(icon) {
        border: var(--mdc-toggle-border);
      }
      :host::part(icon) {
        --mdc-icon-fill-color: CanvasText;
      }
    }
  `,
];

export default styles;
