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
    --mdc-focus-ring-inner-color: var(--mds-color-theme-text-primary-normal);
    --mdc-focus-ring-middle-color: var(--mds-color-theme-outline-theme-normal);
    --mdc-focus-ring-outer-color: lightblue;

    --mdc-focus-ring-inner-width: 0.125rem;
    --mdc-focus-ring-middle-width: 0.125rem;
    --mdc-focus-ring-outer-width: 0.0625rem;

    --mdc-focus-ring-middle-offset: var(--mdc-focus-ring-inner-width);
    --mdc-focus-ring-outer-offset: calc(var(--mdc-focus-ring-inner-width) + var(--mdc-focus-ring-middle-width));

    --mdc-focus-ring-z-index: 1; 
  }

  :host([focusRingVisible]) {
    position: relative;
    outline: var(--mdc-focus-ring-inner-width) solid var(--mdc-focus-ring-inner-color);
    z-index: var(--mdc-focus-ring-z-index)
  }

  :host([focusRingVisible])::before {
    content: "";
    position: absolute;
    top: calc(-1 * var(--mdc-focus-ring-middle-offset));    
    left: calc(-1 * var(--mdc-focus-ring-middle-offset));   
    right: calc(-1 * var(--mdc-focus-ring-middle-offset));  
    bottom: calc(-1 * var(--mdc-focus-ring-middle-offset)); 
    outline: var(--mdc-focus-ring-middle-width) solid var(--mdc-focus-ring-middle-color);
    border-radius: inherit;
  }

  :host([focusRingVisible])::after {
    content: "";
    position: absolute;
    top: calc(-1 * var(--mdc-focus-ring-outer-offset));      
    left: calc(-1 * var(--mdc-focus-ring-outer-offset));     
    right: calc(-1 * var(--mdc-focus-ring-outer-offset));    
    bottom: calc(-1 * var(--mdc-focus-ring-outer-offset));   
    outline: var(--mdc-focus-ring-outer-width) solid var(--mdc-focus-ring-outer-color);
    border-radius: inherit;
  }
`;

export { hostFitContentStyles, hostFocusRingStyles };
