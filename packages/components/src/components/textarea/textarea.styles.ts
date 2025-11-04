import { css } from 'lit';

import { hostFocusRingStyles } from '../../utils/styles';

const styles = [
  css`
    :host {
      --mdc-textarea-text-color: var(--mds-color-theme-text-primary-normal);
      --mdc-textarea-border-color: var(--mds-color-theme-outline-input-normal);
      --mdc-textarea-background-color: var(--mds-color-theme-background-primary-ghost);
      --mdc-textarea-container-background-color: var(--mds-color-theme-background-primary-ghost);
      --mdc-textarea-text-secondary-normal: var(--mds-color-theme-text-secondary-normal);
      --mdc-textarea-text-font-size: var(--mds-font-size-body-midsize);
      --mdc-textarea-text-line-height: var(--mds-font-lineheight-body-midsize);
      width: 100%;
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
      background-color: var(--mdc-textarea-container-background-color);
      width: 100%;
      position: relative;
    }

    :host(:dir(rtl))::part(textarea-container) {
      padding: 0.375rem 0.75rem 0.25rem 0.25rem;
    }

    :host(:not([disabled]))::part(textarea-container):hover {
      --mdc-textarea-container-background-color: var(--mds-color-theme-background-primary-hover);
    }

    :host(:not([disabled]))::part(textarea-container):active,
    :host(:not([disabled]))::part(textarea-container):focus-within {
      --mdc-textarea-container-background-color: var(--mds-color-theme-background-primary-ghost);
      --mdc-textarea-border-color: var(--mds-color-theme-outline-input-active);
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
      color: var(--mdc-help-text-color);
    }

    :host([help-text-type='error'])::part(textarea-container),
    :host([help-text-type='error'])::part(textarea-container):focus-within,
    :host([help-text-type='warning'])::part(textarea-container),
    :host([help-text-type='warning'])::part(textarea-container):focus-within,
    :host([help-text-type='success'])::part(textarea-container),
    :host([help-text-type='success'])::part(textarea-container):focus-within,
    :host([help-text-type='priority'])::part(textarea-container),
    :host([help-text-type='priority'])::part(textarea-container):focus-within {
      --mdc-textarea-border-color: var(--mdc-help-text-color);
    }

    :host([disabled])::part(character-counter) {
      color: var(--mds-color-theme-text-primary-disabled);
    }

    :host([disabled])::part(textarea),
    :host([disabled]) textarea::placeholder {
      color: var(--mdc-input-disabled-text-color);
    }

    :host([disabled])::part(textarea-container),
    :host([readonly])::part(textarea-container) {
      --mdc-textarea-border-color: var(--mds-color-theme-outline-primary-disabled);
      --mdc-textarea-container-background-color: var(--mds-color-theme-background-input-disabled);
    }

    .hidden {
      opacity: 0;
      pointer-events: none;
    }

    :host::part(resize-button) {
      position: absolute;
      bottom: 0.25rem;
      right: 0.25rem;
      cursor: nwse-resize;
      opacity: 0.5;
      z-index: 1;
      border-radius: 50%;
    }

    :host::part(resize-button):focus-visible {
      opacity: 1;
    }

    :host(:dir(rtl))::part(resize-button) {
      left: 0.25rem;
      right: unset;
      cursor: nesw-resize;
      transform: scaleX(-1);
    }

    :host([readonly])::part(resize-button),
    :host([disabled])::part(resize-button) {
      cursor: default;
    }
  `,
  ...hostFocusRingStyles(true),
];

export default styles;
