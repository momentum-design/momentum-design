import { css } from 'lit';

import { hostFocusRingStyles } from '../../utils/styles';

const styles = [
  css`
    :host {
      --mdc-textarea-disabled-border-color: var(--mds-color-theme-outline-primary-disabled);
      --mdc-textarea-disabled-text-color: var(--mds-color-theme-text-primary-disabled);
      --mdc-textarea-disabled-background-color: var(--mds-color-theme-background-input-disabled);
      --mdc-textarea-text-color: var(--mds-color-theme-text-primary-normal);
      --mdc-textarea-background-color: var(--mds-color-theme-background-primary-ghost);
      --mdc-textarea-border-color: var(--mds-color-theme-outline-input-normal);
      --mdc-textarea-text-secondary-normal: var(--mds-color-theme-text-secondary-normal);
      --mdc-textarea-error-border-color: var(--mds-color-theme-text-error-normal);
      --mdc-textarea-warning-border-color: var(--mds-color-theme-text-warning-normal);
      --mdc-textarea-success-border-color: var(--mds-color-theme-text-success-normal);
      --mdc-textarea-primary-border-color: var(--mds-color-theme-text-accent-normal);
      --mdc-textarea-hover-background-color: var(--mds-color-theme-background-primary-hover);
      --mdc-textarea-focused-background-color: var(--mds-color-theme-background-primary-ghost);
      --mdc-textarea-focused-border-color: var(--mds-color-theme-outline-input-active);
      --mdc-textarea-text-font-size: var(--mds-font-size-body-midsize);
      --mdc-textarea-text-line-height: var(--mds-font-lineheight-body-midsize);
    }

    :host([disabled])::part(textarea),
    :host([disabled]) textarea::placeholder {
      color: var(--mdc-input-disabled-text-color);
    }

    :host([disabled])::part(textarea-container),
    :host([readonly])::part(textarea-container) {
      border-color: var(--mdc-textarea-disabled-border-color);
      background: var(--mdc-textarea-disabled-background-color);
    }

    :host([disabled][help-text-type='default'])::part(textarea-container),
    :host([disabled][help-text-type='success'])::part(textarea-container),
    :host([disabled][help-text-type='warning'])::part(textarea-container),
    :host([disabled][help-text-type='error'])::part(textarea-container),
    :host([disabled][help-text-type='priority'])::part(textarea-container) {
      border-color: var(--mdc-textarea-disabled-border-color);
    }

    :host::part(textarea) {
      min-height: 6.25rem;
      color: var(--mdc-textarea-text-color);
      font-family: inherit;
      font-size: var(--mdc-textarea-text-font-size);
      line-height: var(--mdc-textarea-text-line-height);
      background-color: var(--mdc-textarea-background-color);
      resize: none;
      border: none;
      outline: none;
      box-sizing: border-box;
      width: 100%;
    }

    :host::part(textarea-container) {
      display: flex;
      border-radius: 0.5rem;
      border: 0.0625rem solid var(--mdc-textarea-border-color);
      overflow: hidden;
      padding: 0.375rem 0.25rem 0.25rem 0.75rem;
    }

    :host(:dir(rtl))::part(textarea-container) {
      padding: 0.375rem 0.75rem 0.25rem 0.25rem;
    }

    :host(:not([disabled]))::part(textarea-container):hover {
      background-color: var(--mdc-textarea-hover-background-color);
    }

    :host(:not([disabled]))::part(textarea-container):active,
    :host(:not([disabled]))::part(textarea-container):focus-within {
      background-color: var(--mdc-textarea-focused-background-color);
      border-color: var(--mdc-textarea-focused-border-color);
    }

    :host::part(textarea-footer) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }

    textarea::placeholder {
      color: var(--mdc-textarea-text-secondary-normal);
    }

    :host::part(character-counter) {
      margin-left: auto;
      color: var(--mdc-textarea-text-secondary-normal);
    }

    :host([help-text-type='error'])::part(character-counter) {
      color: var(--mdc-textarea-error-border-color);
    }

    :host([disabled])::part(character-counter) {
      color: var(--mds-color-theme-text-primary-disabled);
    }

    :host([help-text-type='error'])::part(textarea-container),
    :host([help-text-type='error'])::part(textarea-container):focus-within {
      border-color: var(--mdc-textarea-error-border-color);
    }
    :host([help-text-type='warning'])::part(textarea-container),
    :host([help-text-type='warning'])::part(textarea-container):focus-within {
      border-color: var(--mdc-textarea-warning-border-color);
    }
    :host([help-text-type='success'])::part(textarea-container),
    :host([help-text-type='success'])::part(textarea-container):focus-within {
      border-color: var(--mdc-textarea-success-border-color);
    }
    :host([help-text-type='priority'])::part(textarea-container),
    :host([help-text-type='priority'])::part(textarea-container):focus-within {
      border-color: var(--mdc-textarea-primary-border-color);
    }

    .hidden {
      opacity: 0;
      pointer-events: none;
    }
  `,
  ...hostFocusRingStyles(true),
];

export default styles;
