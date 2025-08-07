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
    border-radius: 0.5rem 0.5rem 0 0;
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
    padding: 1rem;
  }

  :host([size='large'])::part(header-section),
  :host([size='large'])::part(body-section) {
    padding: 1.5rem;
  }

  :host::part(leading-header),
  :host::part(trailing-header) {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
  }

  :host::part(trailing-header__icon) {
    padding: 0.25rem;
  }

  :host([variant='default']) {
    border: 1px solid var(--mdc-accordionbutton-border-color);
    border-radius: 0.5rem;
  }

  :host([expanded])::part(header-section) {
    border-bottom: 1px solid var(--mdc-accordionbutton-border-color);
    border-radius: 0.5rem 0.5rem 0 0;
  }

  :host(:is([variant='default'], [variant='stacked']):not([expanded]))::part(header-section) {
    border-radius: 0.5rem;
  }

  :host([variant='contained'])::part(header-section) {
    border-radius: inherit;
  }

  :host([variant='default'])::part(header-section) {
    border-radius: 0.5rem;
  }

  :host([variant='borderless']) {
    border: none;
    border-radius: 0;
  }

  :host([variant='borderless'])::part(header-section) {
    border-radius: 0;
  }

  :host([variant='borderless']:not([expanded]))::part(header-section) {
    border-bottom: 1px solid var(--mdc-accordionbutton-border-color);
    border-radius: 0;
  }

  :host([variant='default']:not([expanded]))::part(header-section) {
    border-bottom: none;
  }
`;

export default [styles, ...hostFocusRingStyles(true)];
