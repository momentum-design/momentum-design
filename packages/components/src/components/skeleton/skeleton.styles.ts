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
    border-radius: 0.25rem;
    height: 1rem;
  }

  /* When width or height are explicitly set via CSS custom properties */
  :host([style*="--skeleton-width"]) {
    width: var(--skeleton-width);
  }

  :host([style*="--skeleton-height"]) {
    height: var(--skeleton-height);
  }

  /* Fallback sizing when no explicit dimensions and no content */
  :host(:not([style*="--skeleton-width"]):not([style*="--skeleton-height"])) {
    width: 100%;
    height: 100%;
  }

  /* Override for text type default height when no explicit height is set */
  :host([type="text"]:not([style*="--skeleton-height"])) {
    height: 1rem;
  }

  .skeleton-content {
    width: 100%;
    height: 100%;
    visibility: hidden;
  }
`;

export default styles;
