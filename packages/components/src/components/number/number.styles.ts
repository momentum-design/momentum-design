import { css } from 'lit';

const styles = [
  css`
    /* Hide native number spin buttons; the custom steppers replace them. The input is
       fallback content inside this shadow root, so it is targeted directly rather than
       via ::part()/::slotted(), which only cross a shadow boundary from the outside. */
    input[part='input-text']::-webkit-outer-spin-button,
    input[part='input-text']::-webkit-inner-spin-button {
      appearance: none;
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox hides the spinners via textfield appearance. */
    input[part='input-text'] {
      appearance: textfield;
      -moz-appearance: textfield;
    }

    :host::part(stepper-buttons) {
      display: flex;
      align-items: center;
      gap: 0.375rem;
    }
  `,
];

export default styles;
