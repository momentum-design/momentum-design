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
  background-color: var(--mds-color-theme-outline-secondary-normal);
  --mdc-outline-secondary-normal: var(--mds-color-theme-outline-secondary-normal);
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
  background: var(--mds-color-theme-gradientdivider-default-normal)             
}


:host([orientation="vertical"]) ::slotted(mdc-button) {
  width: 1.25;
  height: 2.5rem;
  border-radius: 0 0.5rem 0.5rem 0;
}

:host([orientation="horizontal"]) ::slotted(mdc-button) {
  height: 1.25;
  width: 2.5rem;
  border-radius: 0 0 0.5rem 0.5rem;
}
`;

export default [styles];
