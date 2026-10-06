import { css } from 'lit';

const styles = css`
  :host([data-motion-surface]) {
    transition: var(--mds-transition-background-color), var(--mds-transition-border-color);
  }

  :host([selected]) {
    border-width: 2px;
    --mdc-chip-background-color: var(--mds-color-theme-background-label-default-active);
  }

  :host([selected]:active),
  :host([selected]:focus) {
    transition: none;
  }

  :host([selected]:active) {
    --mdc-chip-background-color: var(--mds-color-theme-background-label-default-normal);
  }

  :host([selected]:focus) {
    --mdc-chip-background-color: var(--mds-color-theme-background-label-default-active);
  }

  .check-icon-wrapper {
    display: inline-flex;
    flex-shrink: 0;
    opacity: 0;
    transition: var(--mds-transition-fade-out);
  }

  :host([selected]) .check-icon-wrapper {
    opacity: 1;
    transition: var(--mds-transition-fade-in);
  }

  @starting-style {
    :host([data-motion-active][selected]) .check-icon-wrapper {
      opacity: 0;
    }
  }

  :host([disabled]),
  :host([disabled]:hover),
  :host([disabled]:active) {
    --mdc-chip-border-color: var(--mds-color-theme-outline-primary-disabled);
    --mdc-chip-background-color: var(--mds-color-theme-background-primary-disabled);
    --mdc-chip-color: var(--mds-color-theme-text-primary-disabled);
    cursor: auto;
  }

  @media (prefers-reduced-motion: reduce) {
    :host([data-motion-surface]),
    .check-icon-wrapper {
      transition: none;
    }
  }
`;

export default [styles];
