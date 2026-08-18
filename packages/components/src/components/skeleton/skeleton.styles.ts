import { css } from 'lit';

const styles = css`
  :host {
    --mdc-skeleton-background-color: var(--mds-color-theme-background-skeleton-normal);
    --mdc-skeleton-height: 100%;
    --mdc-skeleton-width: 100%;
    display: block;
    overflow: hidden;
    background-color: var(--mdc-skeleton-background-color);
    height: var(--mdc-skeleton-height);
    width: var(--mdc-skeleton-width);
  }

  :host([motion]) {
    background-image: linear-gradient(
      90deg,
      var(--mds-color-theme-background-skeleton-shimmer-0) 0%,
      var(--mds-color-theme-background-skeleton-shimmer-1) 50%,
      var(--mds-color-theme-background-skeleton-shimmer-2) 100%
    );
    background-repeat: no-repeat;
    background-size: 200% 100%;
    animation: skeleton-shimmer 2s linear infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    :host([motion]) {
      animation: none;
      background-position: 50% 0;
    }
  }

  @keyframes skeleton-shimmer {
    0% {
      background-position: 200% 0;
    }

    100% {
      background-position: -200% 0;
    }
  }

  :host([variant='rectangular']) {
    border-radius: 0.25rem;
  }

  :host([variant='rounded']) {
    border-radius: 0.5rem;
  }

  :host([variant='circular']) {
    border-radius: 50%;
  }

  :host([variant='button']) {
    border-radius: 1.25rem;
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
