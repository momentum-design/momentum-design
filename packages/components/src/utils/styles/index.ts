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
    outline: 0.046875rem solid black; 
  }

  :host([focusRingVisible])::before {
    content: "";
    position: absolute;
    top: -0.04625rem;    
    left: -0.04625rem;   
    right: -0.04625rem;  
    bottom: -0.04625rem; 
    outline: 0.0625rem solid blue;
    border-radius: inherit;
  }

  :host([focusRingVisible])::after {
    content: "";
    position: absolute;
    top: -0.10875rem;    
    left: -0.10875rem;   
    right: -0.10875rem;  
    bottom: -0.10875rem; 
    outline: 0.03125rem solid lightblue;
    border-radius: inherit; 
  }
`;

export { hostFitContentStyles, hostFocusRingStyles };
