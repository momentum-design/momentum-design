import { css } from 'lit';

/**
 * Divider component styles
 */
const styles = css`
  /* Host styles */
  :host {
    --mdc-divider-background-color: var(--mds-color-theme-outline-secondary-normal);
    --mdc-divider-width: 0.0625rem;
    --mdc-divider-horizontal-gradient: var(--mds-color-theme-gradientdivider-default-normal);
    --mdc-divider-vertical-gradient: var(--mds-color-theme-gradientdivider-vertical-normal);
    --mdc-divider-text-size: var(--mds-font-size-body-midsize);
    --mdc-divider-text-color: var(--mds-color-theme-text-secondary-normal);
    --mdc-divider-text-margin: 1.5rem;

    display: flex;
    justify-content: center;
  }

  /* Primary and grabber divider styles */
  :host(.mdc-primary-divider),
  :host(.mdc-grabber-divider) {
    background-color: var(--mdc-divider-background-color);
  }

  /* Orientation-specific styles */
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

  /* Gradient styles for primary and grabber dividers */
  :host([orientation='horizontal'][variant='gradient'].mdc-primary-divider),
  :host([orientation='horizontal'][variant='gradient'].mdc-grabber-divider) {
    background: var(--mdc-divider-horizontal-gradient);
  }

  :host([orientation='vertical'][variant='gradient'].mdc-primary-divider),
  :host([orientation='vertical'][variant='gradient'].mdc-grabber-divider) {
    background: var(--mdc-divider-vertical-gradient);
  }

  /* Slotted content hiding for primary dividers */
  :host(.mdc-primary-divider) ::slotted(*) {
    display: none;
  }

  /** Button divider styles */
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

  :host([orientation='horizontal'][button-position='positive']),
  :host([orientation='vertical'][button-position='negative']) {
    align-items: end;
  }

  :host([orientation='horizontal'][button-position='positive']) ::slotted(mdc-button) {
    border-radius: 0.5rem 0.5rem 0 0;
  }

  :host([orientation='vertical'][button-position='negative']) ::slotted(mdc-button) {
    border-radius: 0.5rem 0 0 0.5rem;
  }

  /** Text divider styles */
  :host([orientation='horizontal'][variant='gradient'].mdc-text-divider),
  :host([orientation='horizontal'][variant='solid'].mdc-text-divider) {
    align-items: center;
  }

  :host(.mdc-text-divider) > div {
    width: 100%;
    height: 100%;
    background-color: var(--mdc-divider-background-color);
  }

  :host([orientation='horizontal'][variant='gradient'].mdc-text-divider) > div {
    background: var(--mdc-divider-horizontal-gradient);
  }

  :host(.mdc-text-divider) ::slotted(mdc-text) {
    margin: 0 var(--mdc-divider-text-margin);
    color: var(--mdc-divider-text-color);
    font-size: var(--mdc-divider-text-size);
  }
`;

export default [styles];
