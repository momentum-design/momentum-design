import { css } from 'lit';

const styles = css`
  :host {
    width: 0.25rem;
    height: 100%;
    display: inline-block;

    --mdc-marker-solid-background-color: var(--mds-color-theme-outline-secondary-normal);
    --mdc-marker-striped-color: var(--mds-color-theme-outline-secondary-normal);
    --mdc-marker-striped-background-color: #FFFFFF; 
  }

  :host([variant='solid']) {
    background: var(--mdc-marker-solid-background-color, rgba(0, 0, 0, 0.20));
  }

  :host([variant='striped']) {
    background: repeating-linear-gradient(
      135deg,
      var(--mdc-marker-striped-color, rgba(0, 0, 0, 0.20)),
      var(--mdc-marker-striped-color, rgba(0, 0, 0, 0.20)) 0.1875rem,
      var(--mdc-marker-striped-background-color, white) 0.1875rem, 
      var(--mdc-marker-striped-background-color, white) 0.375rem
    );
  }
`;

export default [styles];
