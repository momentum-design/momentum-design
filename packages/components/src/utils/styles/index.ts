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
    --mdc-focus-ring-inner-color: var(--mds-color-theme-focus-0);
    --mdc-focus-ring-middle-color: var(--mds-color-theme-focus-1);
    --mdc-focus-ring-outer-color: var(--mds-color-theme-focus-2);

    --mdc-focus-ring-inner-width: 0.125rem; /* Inner ring width */
    --mdc-focus-ring-middle-width: 0.125rem; /* Middle ring width */
    --mdc-focus-ring-outer-width: 0.0625rem; /* Outer ring width */
  }

  :host(:focus) {
    position: relative;
    box-shadow: 
        0 0 0 var(--mdc-focus-ring-inner-width) var(--mdc-focus-ring-inner-color), /* Inner black shadow */
        0 0 0 calc(var(--mdc-focus-ring-inner-width) + var(--mdc-focus-ring-middle-width)) var(--mdc-focus-ring-middle-color), /* Middle blue shadow */
        0 0 0 calc(var(--mdc-focus-ring-inner-width) + var(--mdc-focus-ring-middle-width) + var(--mdc-focus-ring-outer-width)) var(--mdc-focus-ring-outer-color); /* Outer light blue shadow */
  }
`;

export { hostFitContentStyles, hostFocusRingStyles };