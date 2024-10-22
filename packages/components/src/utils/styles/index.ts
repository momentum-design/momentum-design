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

    --mdc-focus-ring-inner-width: 0.125rem;
    --mdc-focus-ring-middle-width: 0.125rem;
    --mdc-focus-ring-outer-width: 0.0625rem;

    --mdc-focus-ring-middle-offset: var(--mdc-focus-ring-inner-width);
    --mdc-focus-ring-outer-offset: calc(var(--mdc-focus-ring-inner-width) + var(--mdc-focus-ring-middle-width));
  }

  :host(:focus-visible) {
    position: relative;
    outline: var(--mdc-focus-ring-inner-width) solid var(--mdc-focus-ring-inner-color);
  }

  :host(:focus-visible)::before,
  :host(:focus-visible)::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
  }

  :host(:focus-visible)::before {
    outline: var(--mdc-focus-ring-middle-width) solid var(--mdc-focus-ring-middle-color);
    outline-offset: var(--mdc-focus-ring-middle-offset);
  }

  :host(:focus-visible)::after {
    outline: var(--mdc-focus-ring-outer-width) solid var(--mdc-focus-ring-outer-color);
    outline-offset: var(--mdc-focus-ring-outer-offset);
  }
`;

export { hostFitContentStyles, hostFocusRingStyles };
