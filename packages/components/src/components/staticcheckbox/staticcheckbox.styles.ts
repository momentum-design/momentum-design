import { css } from 'lit';

const styles = [
  css`
    :host {
      --mdc-checkbox-border-color: var(--mds-color-theme-outline-input-normal);
      --mdc-checkbox-background-color: var(--mds-color-theme-control-inactive-normal);
      --mdc-checkbox-icon-color: var(--mds-color-theme-inverted-text-primary-normal);
      --mdc-checkbox-size: 1rem;
      margin: 0.125rem 0;
      border-radius: 0.125rem;
    }

    :host::part(icon-container) {
      display: flex;
      align-items: center;
      border: 0.0625rem solid var(--mdc-checkbox-border-color);
      background-color: var(--mdc-checkbox-background-color);
      width: var(--mdc-checkbox-size);
      height: var(--mdc-checkbox-size);
      border-radius: 0.125rem;
    }

    :host::part(checkbox-icon) {
      --mdc-icon-fill-color: var(--mdc-checkbox-icon-color);
    }

    :host([checked]),
    :host([indeterminate]) {
      --mdc-checkbox-background-color: var(--mds-color-theme-control-active-normal);
      --mdc-checkbox-border-color: transparent;
    }

    :host([readonly]) {
      --mdc-checkbox-border-color: var(--mds-color-theme-outline-primary-normal);
      --mdc-checkbox-background-color: var(--mds-color-theme-control-inactive-disabled);
      --mdc-checkbox-icon-color: var(--mds-color-theme-text-primary-normal);
    }

    :host([disabled]),
    :host([soft-disabled]) {
      --mdc-checkbox-border-color: var(--mds-color-theme-outline-primary-disabled);
      --mdc-checkbox-background-color: var(--mds-color-theme-control-inactive-disabled);
      --mdc-checkbox-icon-color: var(--mds-color-theme-text-primary-disabled);
      cursor: default;
    }

    :host([disabled][checked]),
    :host([disabled][indeterminate]),
    :host([soft-disabled][checked]),
    :host([soft-disabled][indeterminate]) {
      --mdc-checkbox-background-color: var(--mds-color-theme-control-active-disabled);
      --mdc-checkbox-border-color: var(--mds-color-theme-outline-primary-disabled);
    }

    /* High Contrast Mode */
    @media (forced-colors: active) {
      :host([checked]),
      :host([indeterminate]) {
        --mdc-checkbox-background-color: Highlight;
        --mdc-checkbox-border-color: Highlight;
        --mdc-checkbox-icon-color: Highlight;
      }
      :host([readonly]) {
        --mdc-checkbox-border-color: GrayText;
        --mdc-checkbox-icon-color: GrayText;
      }
      :host([disabled]),
      :host([soft-disabled]) {
        --mdc-checkbox-background-color: ButtonFace;
        --mdc-checkbox-border-color: GrayText;
        --mdc-checkbox-icon-color: GrayText;
      }
      :host([disabled][checked]),
      :host([disabled][indeterminate]),
      :host([soft-disabled][checked]),
      :host([soft-disabled][indeterminate]) {
        --mdc-checkbox-background-color: ButtonFace;
        --mdc-checkbox-border-color: GrayText;
        --mdc-checkbox-icon-color: GrayText;
      }
    }
  `,
];

export default styles;
