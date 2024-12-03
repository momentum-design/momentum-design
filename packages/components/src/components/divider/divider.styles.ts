import { css } from 'lit';

/**
 * Divider component styles
 */
const styles = css`
  :host {
  display: flex;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  background-color: var(--mds-color-theme-outline-secondary-normal, rgba(0, 0, 0, 0.20));
  --mdc-outline-secondary-normal: var(--mds-color-theme-outline-secondary-normal, rgba(0, 0, 0, 0.20));
}

/* For horizontal orientation */
:host([orientation="horizontal"]) {
  flex-direction: row;
  height: 0.0625rem;
  width: 100%;
}

/* For vertical orientation */
:host([orientation="vertical"]) {
  flex-direction: column;
  height: 100%;
  width: 0.0625rem;
}

/* For gradient variant */
:host([variant="gradient"]) {
  background: linear-gradient(to right, 
    rgba(0, 0, 0, 0) 0%,                 
    var(--mdc-outline-secondary-normal) 20%,     
    var(--mdc-outline-secondary-normal) 80%,  
    rgba(0, 0, 0, 0) 100%);               
}


:host([orientation="vertical"]) ::slotted(mdc-button) {
  width: 20px;
  height: 40px;
  border-radius: 0px 8px 8px 0px;
}

:host([orientation="horizontal"]) ::slotted(mdc-button) {
  height: 20px;
  width: 40px;
  border-radius: 0px 0px 8px 8px;
}
`;

export default [styles];
