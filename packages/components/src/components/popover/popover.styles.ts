import { css } from 'lit';

const styles = css`
  :host {
    --mdc-popover-arrow-border-radius: 0.1875rem;
    --mdc-popover-arrow-border: 0.0625rem solid var(--mds-color-theme-outline-secondary-normal);

    --mdc-popover-primary-background-color: var(--mds-color-theme-background-solid-primary-normal);
    --mdc-popover-border-color: var(--mds-color-theme-outline-secondary-normal);
    --mdc-popover-inverted-background-color: var(--mds-color-theme-inverted-background-normal);
    --mdc-popover-inverted-border-color: var(--mds-color-theme-inverted-outline-primary-normal);
    --mdc-popover-inverted-text-color: var(--mds-color-theme-inverted-text-primary-normal);
    --mdc-popover-elevation-3: var(--mds-elevation-3);
    --mdc-popover-overflow-y: unset;
    --mdc-popover-max-width: unset;
    --mdc-popover-max-height: auto;

    display: none;
    position: absolute;
    box-sizing: content-box;
    background-color: var(--mdc-popover-primary-background-color);
    border-radius: 0.5rem;
    border: 0.0625rem solid var(--mdc-popover-border-color);
    filter: var(--mdc-popover-elevation-3);
    width: var(--mdc-popover-max-width);
  }

  :host([visible]) {
    display: block;
  }

  :host([color='contrast']) {
    background-color: var(--mdc-popover-inverted-background-color);
    border-color: var(--mdc-popover-inverted-border-color);
    color: var(--mdc-popover-inverted-text-color);
  }

  :host([color='contrast']) {

    .popover-arrow {
      background-color: var(--mdc-popover-inverted-background-color);
      border-color: var(--mdc-popover-inverted-border-color);
    }

    .popover-close {
      color: var(--mdc-popover-inverted-text-color);
    }
  }

  :host::part(popover-content) {
    position: relative;
    padding: 0.75rem;
    overflow: var(--mdc-popover-overflow-y);
    min-width: max-content;
    z-index: 9998;
    max-height: var(--mdc-popover-max-height);
  }

  .popover-hover-bridge {
    position: absolute;
    transform: translateX(-50%);
    background: transparent;
    pointer-events: auto;
  }

  .popover-arrow {
    position: absolute;
    width: 1rem;
    height: 1rem;
    background-color: var(--mdc-popover-primary-background-color);
    transform: rotate(45deg);
    pointer-events: none;
    border: var(--mdc-popover-arrow-border);
  }

  .popover-close {
    position: absolute;
    right: 0.75rem;
    top: 0.75rem;
    cursor: pointer;
    z-index: 9999;
  }

  .popover-arrow[data-side='top'] {
    border-top: none;
    border-left: none;
    border-bottom-right-radius: var(--mdc-popover-arrow-border-radius);
    border-top-left-radius: 100%;
  }

  .popover-arrow[data-side='bottom'] {
    border-bottom: none;
    border-right: none;
    border-top-left-radius: var(--mdc-popover-arrow-border-radius);
    border-bottom-right-radius: 100%;
  }

  .popover-arrow[data-side='right'] {
    border-top: none;
    border-right: none;
    border-bottom-left-radius: var(--mdc-popover-arrow-border-radius);
    border-top-right-radius: 100%;
  }

  .popover-arrow[data-side='left'] {
    border-bottom: none;
    border-left: none;
    border-top-right-radius: var(--mdc-popover-arrow-border-radius);
    border-bottom-left-radius: 100%;
  }
`;

export default [styles];
