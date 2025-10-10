import { css } from 'lit';

const styles = [
  css`
    :host {
      --mdc-toggle-width: 3rem;
      --mdc-toggle-height: 1.5rem;
      --mdc-toggle-border-radius: 0.75rem;
      --mdc-toggle-border-color: var(--mds-color-theme-outline-input-normal);
      --mdc-toggle-background-color: var(--mds-color-theme-control-inactive-normal);
      --mdc-toggle-icon-color: var(--mds-color-theme-common-inverted-text-primary-normal);
      --mdc-toggle-icon-background-color: var(--mds-color-theme-common-text-primary-normal);

      border-radius: var(--mdc-toggle-border-radius);
    }

    :host::part(slider) {
      width: var(--mdc-toggle-width);
      height: var(--mdc-toggle-height);
      background-color: var(--mdc-toggle-background-color);
      border: 1px solid var(--mdc-toggle-border-color);
      border-radius: var(--mdc-toggle-border-radius);
      display: flex;
      align-items: center;
      justify-content: flex-start;
      transition: background-color 0.3s ease;
      outline: none;
      padding: 1px;
    }

    :host::part(toggle-icon) {
      padding: 0.25rem;
      --mdc-icon-fill-color: var(--mdc-toggle-icon-color);
      background-color: var(--mdc-toggle-icon-background-color);
      border-radius: 50%;
    }

    :host([size='compact'])::part(slider) {
      --mdc-toggle-width: 2rem;
      --mdc-toggle-height: 1rem;
      --mdc-toggle-border-radius: 0.5rem;
    }

    :host([size='compact'])::part(toggle-icon) {
      padding: 0.125rem;
    }

    :host([checked]) {
      --mdc-toggle-border-color: transparent;
      --mdc-toggle-background-color: var(--mds-color-theme-control-active-normal);
    }
    :host([checked])::part(slider) {
      justify-content: flex-end;
    }

    :host([readonly]) {
      --mdc-toggle-icon-background-color: var(--mds-color-theme-common-text-primary-normal);
      --mdc-toggle-border-color: var(--mds-color-theme-outline-primary-disabled);
      --mdc-toggle-background-color: var(--mds-color-theme-control-inactive-disabled);
    }

    :host([disabled]),
    :host([soft-disabled]) {
      --mdc-toggle-icon-color: var(--mds-color-theme-common-inverted-text-primary-disabled);
      --mdc-toggle-icon-background-color: var(--mds-color-theme-common-text-primary-disabled);
      --mdc-toggle-border-color: var(--mds-color-theme-outline-primary-disabled);
      --mdc-toggle-background-color: var(--mds-color-theme-control-inactive-disabled);
      cursor: default;
    }

    :host([checked][disabled]),
    :host([checked][soft-disabled]) {
      --mdc-toggle-icon-color: var(--mds-color-theme-common-inverted-text-primary-disabled);
      --mdc-toggle-icon-background-color: var(--mds-color-theme-common-text-primary-disabled);
      --mdc-toggle-border-color: transparent;
      --mdc-toggle-background-color: var(--mds-color-theme-control-active-disabled);
    }

    /* High Contrast Mode */
    @media (forced-colors: active) {
      :host::part(toggle-icon) {
        --mdc-toggle-icon-color: CanvasText;
        border: 1px solid var(--mdc-toggle-border-color);
      }
      :host([checked]) {
        --mdc-toggle-border-color: Highlight;
        --mdc-toggle-background-color: Highlight;
      }
      :host([readonly]) {
        --mdc-toggle-border-color: GrayText;
        --mdc-toggle-background-color: Canvas;
      }
      :host([disabled]),
      :host([soft-disabled]) {
        --mdc-toggle-icon-color: GrayText;
        --mdc-toggle-icon-background-color: Canvas;
        --mdc-toggle-border-color: GrayText;
        --mdc-toggle-background-color: Canvas;
      }
      :host([checked][disabled]),
      :host([checked][soft-disabled]) {
        --mdc-toggle-icon-color: GrayText;
        --mdc-toggle-icon-background-color: Canvas;
        --mdc-toggle-border-color: Highlight;
        --mdc-toggle-background-color: Highlight;
      }
    }
  `,
];

export default styles;
