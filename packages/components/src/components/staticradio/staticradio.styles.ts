import { css } from 'lit';

const styles = [
  css`
    :host {
      --mdc-radio-inner-circle-size: 0.375rem;
      --mdc-radio-outer-circle-size: 1rem;
      --mdc-radio-inner-circle-background-color: var(--mds-color-theme-inverted-text-primary-normal);
      --mdc-radio-outer-circle-border-color: var(--mds-color-theme-outline-input-normal);
      --mdc-radio-outer-circle-background-color: var(--mds-color-theme-control-inactive-normal);

      display: block;
      position: relative;
      width: 1rem;
      height: 1rem;
      margin: 0.125rem 0;
      border-radius: 50%;
    }

    :host::part(radio-icon) {
      position: absolute;
      top: 0;
      left: 0;
      width: var(--mdc-radio-outer-circle-size);
      height: var(--mdc-radio-outer-circle-size);
      border: 0.0625rem solid var(--mdc-radio-outer-circle-border-color);
      background-color: var(--mdc-radio-outer-circle-background-color);
      border-radius: 50%;
    }

    .radio-icon:after {
      content: '';
      position: absolute;
      display: none;
    }

    :host([checked]) {
      --mdc-radio-outer-circle-border-color: var(--mds-color-theme-control-active-normal);
      --mdc-radio-outer-circle-background-color: var(--mds-color-theme-control-active-normal);
    }

    :host([checked]) .radio-icon:after {
      display: block;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: var(--mdc-radio-inner-circle-size);
      height: var(--mdc-radio-inner-circle-size);
      border-radius: 50%;
      background-color: var(--mdc-radio-inner-circle-background-color);
    }

    :host([readonly]) {
      --mdc-radio-outer-circle-border-color: var(--mds-color-theme-outline-input-normal);
      --mdc-radio-outer-circle-background-color: transparent;
    }

    :host([readonly][checked]) {
      --mdc-radio-inner-circle-background-color: var(--mds-color-theme-text-primary-normal);
      --mdc-radio-outer-circle-border-color: var(--mds-color-theme-outline-input-normal);
      --mdc-radio-outer-circle-background-color: transparent;
    }

    :host([disabled]),
    :host([soft-disabled]) {
      --mdc-radio-outer-circle-border-color: var(--mds-color-theme-outline-primary-disabled);
      --mdc-radio-outer-circle-background-color: var(--mds-color-theme-control-inactive-disabled);
    }

    :host([disabled][checked]),
    :host([soft-disabled][checked]) {
      --mdc-radio-inner-circle-background-color: var(--mds-color-theme-inverted-text-primary-disabled);
      --mdc-radio-outer-circle-border-color: transparent;
      --mdc-radio-outer-circle-background-color: var(--mds-color-theme-control-active-disabled);
    }

    @media (forced-colors: active) {
      :host([checked]) {
        --mdc-radio-outer-circle-border-color: SelectedItem;
        --mdc-radio-outer-circle-background-color: SelectedItem;
      }
      :host([readonly]),
      :host([readonly][checked]) {
        --mdc-radio-inner-circle-background-color: Highlight;
        --mdc-radio-outer-circle-border-color: Highlight;
        --mdc-radio-outer-circle-background-color: ButtonFace;
      }
      :host([disabled]),
      :host([soft-disabled]) {
        --mdc-radio-outer-circle-border-color: GrayText;
        --mdc-radio-outer-circle-background-color: GrayText;
        --mdc-radio-inner-circle-background-color: GrayText;
      }

      :host([disabled][checked]),
      :host([soft-disabled][checked]) {
        --mdc-radio-outer-circle-border-color: GrayText;
        --mdc-radio-outer-circle-background-color: GrayText;
      }
    }
  `,
];

export default styles;
