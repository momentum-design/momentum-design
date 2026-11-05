import { css } from 'lit';

import { hostFocusRingStyles } from '../../utils/styles';

const styles = css`
  :host {
    --mdc-accordionbutton-border-color: var(--mds-color-theme-outline-secondary-normal);
    --mdc-accordionbutton-hover-color: var(--mds-color-theme-background-primary-hover);
    --mdc-accordionbutton-active-color: var(--mds-color-theme-background-primary-active);
    --mdc-accordionbutton-disabled-color: var(--mds-color-theme-text-primary-disabled);

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
  }

  :host::part(header-section) {
    width: 100%;
    cursor: pointer;
    user-select: none;
    display: flex;
  }

  :host::part(header-button-section) {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  :host::part(body-section) {
    width: 100%;
  }

  :host([variant='default'][expanded])::part(header-section) {
    border-radius: var(--mds-radius-theme-sm) var(--mds-radius-theme-sm) var(--mds-radius-theme-none)
      var(--mds-radius-theme-none);
  }

  :host::part(header-section):hover {
    background-color: var(--mdc-accordionbutton-hover-color);
  }

  :host::part(header-section):active {
    background-color: var(--mdc-accordionbutton-active-color);
  }

  :host([disabled])::part(header-section) {
    color: var(--mdc-accordionbutton-disabled-color);
  }

  :host([disabled][expanded])::part(header-section) {
    border-bottom: unset;
  }

  :host([disabled])::part(header-section):active,
  :host([disabled])::part(header-section):hover {
    background-color: unset;
  }

  :host([size='small'])::part(header-section),
  :host([size='small'])::part(body-section) {
    padding: var(--mds-spacing-theme-pad-v-md) var(--mds-spacing-theme-pad-h-md);
  }

  :host([size='large'])::part(header-section),
  :host([size='large'])::part(body-section) {
    padding: var(--mds-spacing-theme-pad-v-xl) var(--mds-spacing-theme-pad-h-xl);
  }

  :host::part(leading-header),
  :host::part(trailing-header) {
    display: flex;
    flex-direction: row;
    gap: var(--mds-spacing-theme-gap-xs);
    align-items: center;
  }

  :host::part(toggle-icon) {
    padding: var(--mds-spacing-theme-pad-v-2xs) var(--mds-spacing-theme-pad-h-2xs);
  }

  :host([variant='default']) {
    border: var(--mds-border-theme-default) solid var(--mdc-accordionbutton-border-color);
    border-radius: var(--mds-radius-theme-sm);
  }

  :host([expanded])::part(header-section) {
    border-bottom: var(--mds-border-theme-default) solid var(--mdc-accordionbutton-border-color);
    border-radius: var(--mds-radius-theme-sm) var(--mds-radius-theme-sm) var(--mds-radius-theme-none)
      var(--mds-radius-theme-none);
  }

  :host(:is([variant='default'], [variant='stacked']):not([expanded]))::part(header-section) {
    border-radius: var(--mds-radius-theme-sm);
  }

  :host([variant='contained'])::part(header-section) {
    border-radius: inherit;
  }

  :host([variant='default'])::part(header-section) {
    border-radius: var(--mds-radius-theme-sm);
  }

  :host([variant='borderless']) {
    border: var(--mds-border-theme-none) none;
    border-radius: var(--mds-radius-theme-none);
  }

  :host([variant='borderless'])::part(header-section) {
    border-radius: var(--mds-radius-theme-none);
  }

  :host([variant='borderless']:not([expanded]))::part(header-section) {
    border-bottom: var(--mds-border-theme-default) solid var(--mdc-accordionbutton-border-color);
    border-radius: var(--mds-radius-theme-none);
  }

  :host([variant='default']:not([expanded]))::part(header-section) {
    border-bottom: var(--mds-border-theme-none) none;
  }
`;

export default [styles, ...hostFocusRingStyles(true)];
