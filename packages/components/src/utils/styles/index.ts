import { css } from 'lit';

const hostFitContentStyles = css`
  :host {
    align-items: center;
    display: flex;
    height: fit-content;
    justify-content: center;
    width: fit-content;
  }
`;

const hostFocusRingStyles = css`
  *:focus {
    outline: none;
  }

  :host {
    --mdc-focus-ring-inner-color: black;
    --mdc-focus-ring-middle-color: blue;
    --mdc-focus-ring-outer-color: lightblue;

    --mdc-focus-ring-inner-width: 0.125rem;
    --mdc-focus-ring-middle-width: calc(2 * var(--mdc-focus-ring-inner-width));
    --mdc-focus-ring-outer-width: calc(0.0625rem + var(--mdc-focus-ring-middle-width));

    --mdc-focus-ring-middle-offset: var(--mdc-focus-ring-inner-width);
    --mdc-focus-ring-outer-offset: calc(var(--mdc-focus-ring-inner-width) + var(--mdc-focus-ring-middle-width));
  }
  
  :host(:focus) {
    position: relative;
    box-shadow: 0 0 0 var( --mdc-focus-ring-inner-width) var(--mdc-focus-ring-inner-color),
      0 0 0 var(--mdc-focus-ring-middle-width) var(--mdc-focus-ring-middle-color), 0 0 0 var(--mdc-focus-ring-outer-width) var(--mdc-focus-ring-outer-color);
  }
`;

export { hostFitContentStyles, hostFocusRingStyles };