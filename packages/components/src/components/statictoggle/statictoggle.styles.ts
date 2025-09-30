import { css } from 'lit';

const styles = [
  css`
    :host {
      --mdc-statictoggle-width: 3rem;
      --mdc-statictoggle-height: 1.5rem;
      --mdc-statictoggle-width-compact: 2rem;
      --mdc-statictoggle-height-compact: 1rem;
      --mdc-statictoggle-border-radius: 0.75rem;
      --mdc-statictoggle-border-radius-compact: 0.5rem;
      --mdc-statictoggle-border: 1px solid var(--mds-color-theme-outline-input-normal);

      --mdc-statictoggle-inactive-rest-color: var(--mds-color-theme-control-inactive-normal);
      --mdc-statictoggle-inactive-disabled-color: var(--mds-color-theme-control-inactive-disabled);
      --mdc-statictoggle-active-rest-color: var(--mds-color-theme-control-active-normal);
      --mdc-statictoggle-active-disabled-color: var(--mds-color-theme-control-active-disabled);

      --mdc-statictoggle-icon-color-normal: var(--mds-color-theme-common-inverted-text-primary-normal);
      --mdc-statictoggle-icon-color-disabled: var(--mds-color-theme-common-inverted-text-primary-disabled);
      --mdc-statictoggle-icon-background-color-normal: var(--mds-color-theme-common-text-primary-normal);
      --mdc-statictoggle-icon-background-color-disabled: var(--mds-color-theme-common-text-primary-disabled);

      border-radius: var(--mdc-statictoggle-border-radius);
    }

    :host::part(slider) {
      width: var(--mdc-statictoggle-width);
      height: var(--mdc-statictoggle-height);
      background: var(--mdc-statictoggle-inactive-rest-color);
      border-radius: var(--mdc-statictoggle-border-radius);
      border: var(--mdc-statictoggle-border);
      display: flex;
      align-items: center;
      justify-content: flex-start;
      transition: background-color 0.3s ease;
      outline: none;
      padding: 1px;
    }

    :host([checked])::part(slider) {
      background-color: var(--mdc-statictoggle-active-rest-color);
      justify-content: flex-end;
      border-color: transparent;
    }

    :host([size='compact'])::part(slider) {
      width: var(--mdc-statictoggle-width-compact);
      height: var(--mdc-statictoggle-height-compact);
      border-radius: var(--mdc-statictoggle-border-radius-compact);
    }

    :host::part(toggle-icon) {
      padding: 0.25rem;
      --mdc-icon-fill-color: var(--mdc-statictoggle-icon-color-normal);
      background-color: var(--mdc-statictoggle-icon-background-color-normal);
      border-radius: 50%;
    }

    :host([disabled])::part(toggle-icon) {
      --mdc-icon-fill-color: var(--mdc-statictoggle-icon-color-disabled);
      background-color: var(--mdc-statictoggle-icon-background-color-disabled);
    }

    :host([size='compact'])::part(toggle-icon) {
      padding: 0.125rem;
    }

    :host([disabled])::part(slider) {
      background-color: var(--mdc-statictoggle-inactive-disabled-color);
    }

    :host([disabled][checked])::part(slider) {
      background-color: var(--mdc-statictoggle-active-disabled-color);
    }

    /* High Contrast Mode */
    @media (forced-colors: active) {
      :host([checked])::part(slider),
      :host::part(toggle-icon) {
        border: var(--mdc-statictoggle-border);
      }
      :host::part(toggle-icon) {
        --mdc-icon-fill-color: CanvasText;
      }
    }
  `,
];

export default styles;
