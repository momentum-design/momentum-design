import { css } from 'lit';

/**
 * Divider component styles
 */
const styles = css`
  :host {
    --mdc-divider-background-color: var(--mds-color-theme-outline-secondary-normal);
    --mdc-divider-width: 0.0625rem;
    --mdc-divider-horizontal-gradient: var(--mds-color-theme-gradientdivider-default-normal);
    --mdc-divider-vertical-gradient: linear-gradient(
      0deg,
      #00000000 0%,
      #00000033 22.4%,
      #00000033 72.4%,
      #00000000 100%
    );
    --mdc-divider-text-font-size: var(--mds-font-size-body-midsize);
    --mdc-divider-text-font-color: var(--mds-color-theme-common-text-secondary-normal);
    --mdc-divider-text-margin: 1.5rem;
    background-color: var(--mdc-divider-background-color);
  }

  :host(:not(.mdc-text-divider)) {
    display: flex;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
  }

  /* Hide all slotted content for primary dividers */
  :host(.mdc-primary-divider) ::slotted(*) {
    display: none;
  }

  :host([orientation='horizontal']) {
    flex-direction: row;
    height: var(--mdc-divider-width);
    width: 100%;
  }

  :host([orientation='vertical']) {
    flex-direction: column;
    height: 100%;
    width: var(--mdc-divider-width);
  }

  :host([orientation='horizontal'][variant='gradient']) {
    background: var(--mdc-divider-horizontal-gradient);
  }

  :host([orientation='vertical'][variant='gradient']) {
    background: var(--mdc-divider-vertical-gradient);
  }

  :host([orientation='vertical']) ::slotted(mdc-button) {
    width: 1.25rem;
    height: 2.5rem;
    border-radius: 0 0.5rem 0.5rem 0;
  }

  :host([orientation='horizontal']) ::slotted(mdc-button) {
    height: 1.25rem;
    width: 2.5rem;
    border-radius: 0 0 0.5rem 0.5rem;
  }

  /** Button divider positioning styling is WIP */
  :host([button-Direction='up'].btn-up) ::slotted(mdc-button) {
    top: -0.5rem;
  }

  :host([orientation='horizontal'].btn-down) ::slotted(mdc-button) {
    bottom: -0.5rem;
  }

  :host([orientation='horizontal'].btn-left) ::slotted(mdc-button) {
    left: -0.5rem;
  }

  :host([orientation='horizontal'].btn-right) ::slotted(mdc-button) {
    right: -0.5rem;
  }

  /** Text divider styling is WIP */
  :host([orientation='horizontal'].mdc-text-divider) {
    display: flex;
  }

  :host([orientation='horizontal'].mdc-text-divider)::before,
  :host([orientation='horizontal'].mdc-text-divider)::after {
    flex: 1;
    content: '';
    padding: 3px;
    background-color: var(--mdc-divider-background-color);
    margin: 5px;
  }

  :host([orientation='horizontal'][variant='gradient'].mdc-text-divider)::before {
    background: linear-gradient(to right, rgba(0, 0, 0, 0), var(--mdc-divider-background-color));
  }

  :host([orientation='horizontal'][variant='gradient'].mdc-text-divider)::after {
    background: linear-gradient(to left, rgba(0, 0, 0, 0), var(--mdc-divider-background-color));
  }
`;

export default [styles];
