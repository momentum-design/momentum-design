import { css } from 'lit';

const styles = [
  css`
    :host {
      --mdc-staticcheckbox-border-color: var(--mds-color-theme-outline-input-normal);
      --mdc-staticcheckbox-background-color: var(--mds-color-theme-control-inactive-normal);
      --mdc-staticcheckbox-icon-color: var(--mds-color-theme-inverted-text-primary-normal);
      --mdc-staticcheckbox-size: 1rem;
      margin: 0.125rem 0;
      border-radius: 0.125rem;
    }

    :host::part(icon-container) {
      display: flex;
      align-items: center;
      border: 0.0625rem solid var(--mdc-staticcheckbox-border-color);
      background-color: var(--mdc-staticcheckbox-background-color);
      width: var(--mdc-staticcheckbox-size);
      height: var(--mdc-staticcheckbox-size);
      border-radius: 0.125rem;
    }

    :host::part(checkbox-icon) {
      --mdc-icon-fill-color: var(--mdc-staticcheckbox-icon-color);
    }

    :host([checked]),
    :host([indeterminate]) {
      --mdc-staticcheckbox-background-color: var(--mds-color-theme-control-active-normal);
      --mdc-staticcheckbox-border-color: transparent;
    }

    :host([readonly]) {
      --mdc-staticcheckbox-border-color: var(--mds-color-theme-outline-primary-normal);
      --mdc-staticcheckbox-background-color: var(--mds-color-theme-control-inactive-disabled);
      --mdc-staticcheckbox-icon-color: var(--mds-color-theme-text-primary-normal);
    }

    :host([disabled]),
    :host([soft-disabled]) {
      --mdc-staticcheckbox-border-color: var(--mds-color-theme-outline-primary-disabled);
      --mdc-staticcheckbox-background-color: var(--mds-color-theme-control-inactive-disabled);
      --mdc-staticcheckbox-icon-color: var(--mds-color-theme-text-primary-disabled);
      cursor: default;
    }

    :host([disabled][checked]),
    :host([disabled][indeterminate]),
    :host([soft-disabled][checked]),
    :host([soft-disabled][indeterminate]) {
      --mdc-staticcheckbox-background-color: var(--mds-color-theme-control-active-disabled);
      --mdc-staticcheckbox-border-color: var(--mds-color-theme-outline-primary-disabled);
    }

    /* High Contrast Mode */
    @media (forced-colors: active) {
      :host([checked]),
      :host([indeterminate]) {
        --mdc-staticcheckbox-background-color: SelectedItem;
        --mdc-staticcheckbox-border-color: SelectedItemText;
        --mdc-staticcheckbox-icon-color: SelectedItemText;
      }
      :host([readonly]) {
        --mdc-staticcheckbox-border-color: Highlight;
        --mdc-staticcheckbox-icon-color: HighlightText;
      }
      :host([disabled]),
      :host([soft-disabled]) {
        --mdc-staticcheckbox-background-color: GrayText;
        --mdc-staticcheckbox-border-color: GrayText;
        --mdc-staticcheckbox-icon-color: GrayText;
      }
      :host([disabled][checked]),
      :host([disabled][indeterminate]),
      :host([soft-disabled][checked]),
      :host([soft-disabled][indeterminate]) {
        --mdc-staticcheckbox-border-color: GrayText;
        --mdc-staticcheckbox-icon-color: GrayText;
      }
    }
  `,
];

export default styles;
