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
    padding: 0.75rem;
    background-color: var(--mdc-popover-primary-background-color);
    border-radius: 0.5rem;
    border: 0.0625rem solid var(--mdc-popover-border-color);
  }

  .popover-container[visible] {
    display: block;
  }

  .popover-arrow {
    position: absolute;
    width: 1rem;
    height: 1rem;;
    background-color: var(--mdc-popover-primary-background-color);
    transform: rotate(45deg);
    z-index: -1;
    pointer-events: none;
    border: 0.0625rem solid var(--mdc-popover-border-color);
  }

  .popover-container[inverted] {
    background-color: var(--mdc-popover-inverted-background-color);
    border-color: var(--mdc-popover-inverted-border-color);
    color: var(--mdc-popover-inverted-text-color);

    .popover-arrow {
      background-color: var(--mdc-popover-inverted-background-color);
      border-color: var(--mdc-popover-inverted-border-color);
    }
    
    .popover-close {
      color: var(--mdc-popover-inverted-text-color);
    }
  }

  .popover-close {
    position: absolute;
    right: 12px;
    top: 12px;
    cursor: pointer;
  }

  .popover-arrow[data-side="top"] {
    border-top: none;
    border-left: none;
    border-bottom-right-radius: 3px;
  }

  .popover-arrow[data-side="bottom"] {
    border-bottom: none;
    border-right: none;
    border-top-left-radius: 3px;
  }

  .popover-arrow[data-side="right"] {
    border-top: none;
    border-right: none;
    border-bottom-left-radius: 3px;
  }

  .popover-arrow[data-side="left"] {
    border-bottom: none;
    border-left: none;
    border-top-right-radius: 3px;
  }
`;

export default [styles];
