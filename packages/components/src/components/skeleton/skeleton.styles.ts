import { css } from 'lit';

const styles = css`
  :host {
    display: block;
    --mdc-skeleton-background-color: var(--mds-color-theme-background-skeleton-normal);
    --mdc-skeleton-height: 100%;
    --mdc-skeleton-width: 100%;
    overflow: hidden;
    background-color: var(--mdc-skeleton-background-color);
    height: var(--mdc-skeleton-height);
    width: var(--mdc-skeleton-width);
  }

  :host([type="rectangular"]) {
    border-radius: 0.25rem;
  }

  :host([type="rounded"]) {
    border-radius: 0.5rem;
  }

  :host([type="circular"]) {
    border-radius: 50%;
  }

  /* this will become a button */
  :host([type="text"]) {
    border-radius: 0.25rem;
  }

  /* When there's slotted content, fit to content size */
  :host([has-content]) {
    width: fit-content;
    height: fit-content;
  }


  ::slotted(*) {
    visibility: hidden;
  }
`;

export default styles;
