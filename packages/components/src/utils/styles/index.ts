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
  :host {
    --mdc-focus-ring-inner-color: var(--mds-color-theme-focus-default-0);
    --mdc-focus-ring-middle-color: var(--mds-color-theme-focus-default-1);
    --mdc-focus-ring-outer-color: var(--mds-color-theme-focus-default-2); 

    --mdc-focus-ring-inner-width: 0.125rem;
    --mdc-focus-ring-middle-width: calc(2 * var(--mdc-focus-ring-inner-width));
    --mdc-focus-ring-outer-width: calc(0.0625rem + var(--mdc-focus-ring-middle-width));

    --mdc-focus-ring-middle-offset: var(--mdc-focus-ring-inner-width);
    --mdc-focus-ring-outer-offset: calc(var(--mdc-focus-ring-inner-width) + var(--mdc-focus-ring-middle-width));
  }
  :host([disabled]:focus) {
    box-shadow: none;
  }
  :host(:focus) {
    position: relative;
    box-shadow: 
        0 0 0 var(--mdc-focus-ring-inner-width) var(--mdc-focus-ring-inner-color),
        0 0 0 var(--mdc-focus-ring-middle-width) var(--mdc-focus-ring-middle-color),
        0 0 0 var(--mdc-focus-ring-outer-width) var(--mdc-focus-ring-outer-color);
  }

  /* High Contrast Mode */
  @media (forced-colors: active) {
    :host(:focus) {
      outline: 0.125rem solid var(--mds-color-theme-focus-default-0);
    }
  }
`;

export { hostFitContentStyles, hostFocusRingStyles };
