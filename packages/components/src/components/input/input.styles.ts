import { css } from 'lit';

import { hostFocusRingStyles } from '../../utils/styles';

const styles = [
  css`
    :host {
      --mdc-input-disabled-border-color: var(--mds-color-theme-outline-primary-disabled);
      --mdc-input-disabled-text-color: var(--mds-color-theme-text-primary-disabled);
      --mdc-input-disabled-background-color: var(--mds-color-theme-background-input-disabled);
      --mdc-input-border-color: var(--mds-color-theme-outline-input-normal);
      --mdc-input-text-color: var(--mds-color-theme-text-primary-normal);
      --mdc-input-background-color: var(--mds-color-theme-background-primary-ghost);
      --mdc-input-selection-background-color: var(--mds-color-theme-background-accent-active);
      --mdc-input-selection-text-color: var(--mds-color-theme-inverted-text-primary-normal);
      --mdc-input-support-text-color: var(--mds-color-theme-text-secondary-normal);
      --mdc-input-hover-background-color: var(--mds-color-theme-background-primary-hover);
      --mdc-input-focused-background-color: var(--mds-color-theme-background-primary-ghost);
      --mdc-input-focused-border-color: var(--mds-color-theme-outline-input-active);
      --mdc-input-error-border-color: var(--mds-color-theme-text-error-normal);
      --mdc-input-warning-border-color: var(--mds-color-theme-text-warning-normal);
      --mdc-input-success-border-color: var(--mds-color-theme-text-success-normal);
      --mdc-input-primary-border-color: var(--mds-color-theme-text-accent-normal);
    }
    :host,
    .input-container,
    .input-section,
    .input {
      width: 100%;
    }

    :host::part(label) {
      font-size: var(--mds-font-apps-body-midsize-medium-font-size);
      font-weight: var(--mds-font-apps-body-midsize-medium-font-weight);
      line-height: var(--mds-font-apps-body-midsize-medium-line-height);
    }

    input {
      font-family: inherit;
    }

    :host .input-container:hover {
      background-color: var(--mdc-input-hover-background-color);
    }

    :host .input-container:active,
    :host .input-container:focus-within {
      background-color: var(--mdc-input-focused-background-color);
      border-color: var(--mdc-input-focused-border-color);
    }

    :host([readonly]) .leading-icon {
      color: var(--mdc-input-support-text-color);
    }

    :host([disabled]) .input,
    :host([disabled]) .input::placeholder,
    :host([disabled]) .prefix-text {
      color: var(--mdc-input-disabled-text-color);
    }

    :host([disabled]) .input-container,
    :host([readonly]) .input-container,
    :host([disabled][help-text-type='default']) .input-container,
    :host([disabled][help-text-type='success']) .input-container,
    :host([disabled][help-text-type='warning']) .input-container,
    :host([disabled][help-text-type='error']) .input-container,
    :host([disabled][help-text-type='priority']) .input-container {
      border-color: var(--mdc-input-disabled-border-color);
      background: var(--mdc-input-disabled-background-color);
    }

    .leading-icon {
      aspect-ratio: 1;
    }

    .input-container {
      height: 2rem;
      border-radius: 0.5rem;
      border: 0.0625rem solid var(--mdc-input-border-color);
      display: flex;
      align-items: center;
      gap: 0.375rem;
      padding: 0.34375rem 0.375rem 0.34375rem 0.75rem;
      min-width: 3.25rem;
    }

    .input-section {
      display: flex;
      gap: 0.25rem;
    }

    .input {
      border: none;
      color: var(--mdc-input-text-color);
      background-color: var(--mdc-input-background-color);
      outline: none;
    }

    .input::selection {
      background-color: var(--mdc-input-selection-background-color);
      color: var(--mdc-input-selection-text-color);
    }

    .prefix-text {
      color: var(--mdc-input-support-text-color);
      white-space: nowrap; /* restrict prefix text to be in one line */
    }

    .input::placeholder {
      color: var(--mdc-input-support-text-color);
    }

    :host([help-text-type='error']) .input-container,
    :host([help-text-type='error']) .input-container:focus-within {
      border-color: var(--mdc-input-error-border-color);
    }
    :host([help-text-type='warning']) .input-container,
    :host([help-text-type='warning']) .input-container:focus-within {
      border-color: var(--mdc-input-warning-border-color);
    }
    :host([help-text-type='success']) .input-container,
    :host([help-text-type='success']) .input-container:focus-within {
      border-color: var(--mdc-input-success-border-color);
    }
    :host([help-text-type='priority']) .input-container,
    :host([help-text-type='priority']) input-container:focus-within {
      border-color: var(--mdc-input-primary-border-color);
    }

    .hidden {
      opacity: 0;
      pointer-events: none;
    }
  `,
  ...hostFocusRingStyles(true),
];

export default styles;
