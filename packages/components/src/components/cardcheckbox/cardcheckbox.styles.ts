import { css } from 'lit';

import { hostFocusRingStyles } from '../../utils/styles';

const styles = css`
  :host {
    cursor: pointer;
    user-select: none;
    background-color: transparent;
  }

  :host([data-motion-background]) {
    transition: var(--mds-transition-background-color);
  }

  :host(:dir(ltr))::part(check) {
    margin-left: auto;
  }

  :host(:dir(rtl))::part(check) {
    margin-right: auto;
  }

  :host(:hover) {
    background-color: var(--mds-color-theme-background-primary-hover);
  }

  :host(:active) {
    background-color: var(--mds-color-theme-background-primary-active);
  }

  :host([checked]) {
    border: 1px solid var(--mds-color-theme-outline-input-active);
    box-shadow: 0 0 0 1px var(--mds-color-theme-outline-input-active);
    background-color: var(--mds-color-theme-background-primary-active);
  }

  :host([checked]:hover) {
    background-color: var(--mds-color-theme-background-primary-hover);
  }

  :host([checked]:active) {
    background-color: var(--mds-color-theme-background-primary-ghost);
  }

  :host::part(check-icon-container) {
    display: flex;
    align-items: center;
    justify-content: center;
    transform: scale(1);
    transform-origin: center;
    transition: var(--mds-transition-grow-shrink);
  }

  @starting-style {
    :host([checked])::part(check-icon-container) {
      transform: scale(0.8);
    }
  }

  @starting-style {
    :host([data-motion-active]:not([checked]))::part(check-icon-container) {
      transform: scale(0.8);
    }
  }

  :host::part(check-icon) {
    opacity: 1;
    color: var(--mds-color-theme-text-secondary-normal);
    transition: var(--mds-transition-fade-out);
  }

  :host([checked])::part(check-icon) {
    color: var(--mds-color-theme-text-accent-normal);
    transition: var(--mds-transition-fade-in);
  }

  @starting-style {
    :host([checked])::part(check-icon) {
      opacity: 0;
    }
  }

  @starting-style {
    :host([data-motion-active]:not([checked]))::part(check-icon) {
      opacity: 0;
    }
  }

  :host([disabled]) {
    background-color: var(--mds-color-theme-background-primary-ghost);
    color: var(--mds-color-theme-text-primary-disabled);
    border-color: var(--mds-color-theme-outline-primary-disabled);
  }

  :host([disabled])::part(image) {
    opacity: 0.5;
  }

  :host([disabled])::part(check-icon) {
    color: var(--mds-color-theme-text-primary-disabled);
  }

  @media (prefers-reduced-motion: reduce) {
    :host([data-motion-background]),
    :host::part(check-icon-container),
    :host::part(check-icon) {
      transition: none;
    }
  }
`;

export default [styles, ...hostFocusRingStyles()];
