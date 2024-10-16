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
  :host([focusRingVisible]) {
    position: relative;
    outline: 0.125rem solid black;
  }

  :host([focusRingVisible])::before {
    content: "";
    position: absolute;
    top: -0.125rem;    
    left: -0.125rem;   
    right: -0.125rem;  
    bottom: -0.125rem; 
    outline: 0.125rem solid blue;
    border-radius: inherit;
  }

  :host([focusRingVisible])::after {
    content: "";
    position: absolute;
    top: -0.25rem;     
    left: -0.25rem;    
    right: -0.25rem;   
    bottom: -0.25rem;  
    outline: 0.0625rem solid lightblue;
    border-radius: inherit;
  }
`;

export { hostFitContentStyles, hostFocusRingStyles };
