import { css } from 'lit';

const styles = [
  css`
    /* Hide native number spin buttons; the custom steppers replace them. */
    :host::part(input-text)::-webkit-outer-spin-button,
    :host::part(input-text)::-webkit-inner-spin-button,
    ::slotted(input)::-webkit-outer-spin-button,
    ::slotted(input)::-webkit-inner-spin-button {
      appearance: none;
      margin: 0;
    }

    :host::part(input-text),
    ::slotted(input) {
      appearance: textfield;
    }

    :host::part(stepper-buttons) {
      display: flex;
      align-items: center;
      gap: 0.375rem;
    }
  `,
];

export default styles;
