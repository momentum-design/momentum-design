import { css } from 'lit';

import { hostFocusRingStyles } from '../../utils/styles';

const styles = [
  css`
    :host {
      --mdc-input-text-color: var(--mds-color-theme-text-primary-normal);
      --mdc-input-border-color: var(--mds-color-theme-outline-input-normal);
      --mdc-input-background-color: var(--mds-color-theme-background-primary-ghost);
      --mdc-input-support-text-color: var(--mds-color-theme-text-secondary-normal);
      --mdc-input-selection-text-color: var(--mds-color-theme-inverted-text-primary-normal);
      --mdc-input-selection-background-color: var(--mds-color-theme-background-accent-active);
    }
    :host,
    :host::part(input-container),
    :host::part(input-section),
    :host::part(input-text),
    ::slotted(input) {
      width: 100%;
    }

    :host::part(input-text),
    ::slotted(input) {
      font-family: inherit;
    }

    :host::part(input-container) {
      background-color: var(--mdc-input-background-color);
      border-color: var(--mdc-input-border-color);
    }

    :host::part(input-container):hover {
      --mdc-input-background-color: var(--mds-color-theme-background-primary-hover);
    }

    :host::part(input-container):active,
    :host::part(input-container):focus-within {
      --mdc-input-border-color: var(--mds-color-theme-outline-input-active);
    }

    :host::part(leading-icon) {
      aspect-ratio: 1;
    }

    :host::part(input-container) {
      height: 2rem;
      border-radius: 0.5rem;
      border: 0.0625rem solid var(--mdc-input-border-color);
      display: flex;
      align-items: center;
      gap: 0.375rem;
      padding: 0.34375rem 0.375rem 0.34375rem 0.75rem;
      min-width: 3.25rem;
    }

    :host::part(input-section) {
      display: flex;
      gap: 0.25rem;
    }

    :host::part(input-text),
    ::slotted(input) {
      border: none;
      color: var(--mdc-input-text-color);
      background-color: inherit;
      outline: none;
    }

    :host::part(input-text)::selection,
    ::slotted(input)::selection {
      background-color: var(--mdc-input-selection-background-color);
      color: var(--mdc-input-selection-text-color);
    }

    :host::part(prefix-text) {
      color: var(--mdc-input-support-text-color);
      white-space: nowrap; /* restrict prefix text to be in one line */
    }

    input::placeholder {
      color: var(--mdc-input-support-text-color);
    }

    :host([disabled]) {
      --mdc-input-text-color: var(--mds-color-theme-text-primary-disabled);
      --mdc-input-support-text-color: var(--mds-color-theme-text-primary-disabled);
      --mdc-input-border-color: var(--mds-color-theme-outline-primary-disabled);
      --mdc-input-background-color: var(--mds-color-theme-background-input-disabled);
    }

    :host([readonly])::part(leading-icon) {
      color: var(--mdc-input-support-text-color);
    }

    :host([readonly])::part(input-container) {
      --mdc-input-border-color: var(--mds-color-theme-outline-primary-disabled);
      --mdc-input-background-color: var(--mds-color-theme-background-input-disabled);
    }

    :host([help-text-type='error'])::part(input-container),
    :host([help-text-type='error'])::part(input-container):focus-within,
    :host([help-text-type='warning'])::part(input-container),
    :host([help-text-type='warning'])::part(input-container):focus-within,
    :host([help-text-type='success'])::part(input-container),
    :host([help-text-type='success'])::part(input-container):focus-within,
    :host([help-text-type='priority'])::part(input-container),
    :host([help-text-type='priority'])::part(input-container):focus-within {
      border-color: var(--mdc-help-text-color);
    }

    .hidden {
      opacity: 0;
      pointer-events: none;
    }
  `,
  ...hostFocusRingStyles(true),
];

export default styles;
