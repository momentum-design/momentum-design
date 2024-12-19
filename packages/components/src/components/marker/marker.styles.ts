import { css } from 'lit';

const styles = css`
  :host {
    --mdc-marker-width: 0.25rem;
    --mdc-marker-solid-background-color: var(--mds-color-theme-outline-secondary-normal);
    --mdc-marker-striped-color: var(--mds-color-theme-outline-secondary-normal);
    --mdc-marker-striped-background-color: transparent; 

    width: var(--mdc-marker-width);
    height: 100%;
    display: block;
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
