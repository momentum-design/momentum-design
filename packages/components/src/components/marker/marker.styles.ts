import { css } from 'lit';

const styles = css`
  :host {
    width: 0.25rem;
    height: 100%;
    display: block;

    --mdc-marker-solid-background-color: var(--mds-color-theme-outline-secondary-normal);
    --mdc-marker-striped-color: var(--mds-color-theme-outline-secondary-normal);
    --mdc-marker-striped-background-color: transparent; 
  }

  :host([variant='solid']) {
    background: var(--mdc-marker-solid-background-color);
  }

  :host([variant='striped']) {
    background: repeating-linear-gradient(
      135deg,
      var(--mdc-marker-striped-color),
      var(--mdc-marker-striped-color) 0.1875rem,
      var(--mdc-marker-striped-background-color) 0.1875rem, 
      var(--mdc-marker-striped-background-color) 0.375rem
    );
  }
`;

export default [styles];
