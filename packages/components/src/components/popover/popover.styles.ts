import { css } from 'lit';

const styles = css`

  :host {
    --mdc-popover-primary-background-color: var(--mds-color-theme-background-solid-primary-normal);
    --mdc-popover-border-color: var(--mds-color-theme-outline-secondary-normal);
    --mdc-popover-inverted-background-color: var(--mds-color-theme-inverted-background-normal);
    --mdc-popover-inverted-border-color: var(--mds-color-theme-inverted-outline-primary-normal);
    --mdc-popover-inverted-text-color: var(--mds-color-theme-inverted-text-primary-normal);
  }

  .popover-container {
    display: none;
    position: absolute;

    &[data-color="contrast"] {
      .popover-arrow {
        background-color: var(--mdc-popover-inverted-background-color);
        border-color: var(--mdc-popover-inverted-border-color);
      }
      
      .popover-close {
        color: var(--mdc-popover-inverted-text-color);
      }
    }
  }

  .popover-container[visible] {
    display: block;
  }

  .popover-content {
    // max-height: 5rem;
    overflow-y: auto;
  }

  .popover-backdrop {
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
  }

  .popover-arrow {
    position: absolute;
    width: 1rem;
    height: 1rem;
    background-color: var(--mdc-popover-primary-background-color);
    transform: rotate(45deg);
    z-index: -1;
    pointer-events: none;
    border: 0.0625rem solid var(--mdc-popover-border-color);
  }

  .popover-close {
    position: absolute;
    right: 0.75rem;
    top: 0.75rem;
    cursor: pointer;
  }

  .popover-arrow[data-side="top"] {
    border-top: none;
    border-left: none;
    border-bottom-right-radius: 0.1875rem;
    border-top-left-radius: 100%;
  }

  .popover-arrow[data-side="bottom"] {
    border-bottom: none;
    border-right: none;
    border-top-left-radius: 0.1875rem;
    border-bottom-right-radius: 100%;
  }

  .popover-arrow[data-side="right"] {
    border-top: none;
    border-right: none;
    border-bottom-left-radius: 0.1875rem;
    border-top-right-radius: 100%;
  }

  .popover-arrow[data-side="left"] {
    border-bottom: none;
    border-left: none;
    border-top-right-radius: 0.1875rem;
    border-bottom-left-radius: 100%;
  }
`;

export default [styles];
