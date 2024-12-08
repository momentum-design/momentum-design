import { css } from 'lit';

const styles = css`
  :host {
    --mdc-bullet-background-color: var(--mds-color-theme-outline-secondary-normal);
    --mdc-bullet-size-small: 0.25rem;
    --mdc-bullet-size-medium: 0.5rem;
    --mdc-bullet-size-large: 1rem;

    border-radius: 50%;
    display: block;
    aspect-ratio: 1;
    background-color: var(--mdc-bullet-background-color);
  }
  :host([size="small"]) {
    height: var(--mdc-bullet-size-small);
  }
  :host([size="medium"]) {
    height: var(--mdc-bullet-size-medium);
  }
  :host([size="large"]) {
    height: var(--mdc-bullet-size-large);
  }
`;

export default [styles];
