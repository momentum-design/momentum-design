import { css } from 'lit';

const styles = [
  css`
    :host {
      --mdc-staticradio-inner-circle-size: 0.375rem;
      --mdc-staticradio-outer-circle-size: 1rem;
      --mdc-staticradio-inner-circle-background-color: var(--mds-color-theme-inverted-text-primary-normal);
      --mdc-staticradio-outer-circle-border-color: var(--mds-color-theme-outline-input-normal);
      --mdc-staticradio-outer-circle-background-color: var(--mds-color-theme-control-inactive-normal);

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
      width: var(--mdc-staticradio-outer-circle-size);
      height: var(--mdc-staticradio-outer-circle-size);
      border: 0.0625rem solid var(--mdc-staticradio-outer-circle-border-color);
      background-color: var(--mdc-staticradio-outer-circle-background-color);
      border-radius: 50%;
    }

    .radio-icon:after {
      content: '';
      position: absolute;
      display: none;
    }

    :host([checked]) {
      --mdc-staticradio-outer-circle-border-color: var(--mds-color-theme-control-active-normal);
      --mdc-staticradio-outer-circle-background-color: var(--mds-color-theme-control-active-normal);
    }

    :host([checked]) .radio-icon:after {
      display: block;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: var(--mdc-staticradio-inner-circle-size);
      height: var(--mdc-staticradio-inner-circle-size);
      border-radius: 50%;
      background-color: var(--mdc-staticradio-inner-circle-background-color);
    }

    :host([readonly]) {
      --mdc-staticradio-outer-circle-border-color: var(--mds-color-theme-outline-input-normal);
      --mdc-staticradio-outer-circle-background-color: transparent;
    }

    :host([readonly][checked]) {
      --mdc-staticradio-inner-circle-background-color: var(--mds-color-theme-text-primary-normal);
      --mdc-staticradio-outer-circle-border-color: var(--mds-color-theme-outline-input-normal);
      --mdc-staticradio-outer-circle-background-color: transparent;
    }

    :host([disabled]),
    :host([soft-disabled]) {
      --mdc-staticradio-outer-circle-border-color: var(--mds-color-theme-outline-primary-disabled);
      --mdc-staticradio-outer-circle-background-color: var(--mds-color-theme-control-inactive-disabled);
    }

    :host([disabled][checked]),
    :host([soft-disabled][checked]) {
      --mdc-staticradio-inner-circle-background-color: var(--mds-color-theme-inverted-text-primary-disabled);
      --mdc-staticradio-outer-circle-border-color: transparent;
      --mdc-staticradio-outer-circle-background-color: var(--mds-color-theme-control-active-disabled);
    }

    @media (forced-colors: active) {
      :host([checked]) {
        --mdc-staticradio-outer-circle-border-color: SelectedItem;
        --mdc-staticradio-outer-circle-background-color: SelectedItem;
      }
      :host([readonly]),
      :host([readonly][checked]) {
        --mdc-staticradio-inner-circle-background-color: Highlight;
        --mdc-staticradio-outer-circle-border-color: Highlight;
        --mdc-staticradio-outer-circle-background-color: ButtonFace;
      }
      :host([disabled]),
      :host([soft-disabled]) {
        --mdc-staticradio-outer-circle-border-color: GrayText;
        --mdc-staticradio-outer-circle-background-color: GrayText;
        --mdc-staticradio-inner-circle-background-color: GrayText;
      }

      :host([disabled][checked]),
      :host([soft-disabled][checked]) {
        --mdc-staticradio-outer-circle-border-color: GrayText;
        --mdc-staticradio-outer-circle-background-color: GrayText;
      }
    }
  `,
];

export default styles;
