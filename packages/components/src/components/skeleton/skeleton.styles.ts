import { css } from 'lit';

const styles = css`
  :host {
    display: block;
    background-color: var(--mds-color-theme-background-skeleton-normal);
    overflow: hidden;
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

  :host([type="text"]) {
    // height: 1rem;
    border-radius: 0.25rem;
  }

  /* Explicit width/height attributes take highest priority */
  :host([data-width]) {
    width: var(--skeleton-width);
  }

  :host([data-height]) {
    height: var(--skeleton-height);
  }

  /* Default sizing when no explicit dimensions */
  :host(:not([data-width])) {
    width: 100%;
  }

  :host(:not([data-height])) {
    height: 100%;
  }

  /* Special case: text type defaults to 1rem height when no explicit height */
  :host([type="text"]:not([data-height])) {
    height: 1rem;
  }

  ::slotted(*) {
    visibility: hidden;
  }
`;

export default styles;
