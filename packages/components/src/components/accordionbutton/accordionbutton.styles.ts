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
  }

  :host::part(header-button-section) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  :host::part(body-section) {
    width: 100%;
  }

  :host([expanded])::part(header-section) {
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

  :host([variant='stacked']) {
    border: 1px solid var(--mdc-accordionbutton-border-color);
    border-radius: 0.5rem;
  }

  :host([variant='stacked'])::part(header-section),
  :host([variant='contained'])::part(header-section) {
    border-bottom: 1px solid var(--mdc-accordionbutton-border-color);
  }

  :host([variant='borderless']) {
    border: none;
    border-radius: 0;
  }

  :host([variant='borderless'])::part(header-section) {
    border-bottom: 1px solid var(--mdc-accordionbutton-border-color);
    border-radius: 0;
  }

  :host(:not([expanded])[variant='borderless'])::part(header-section) {
    border-radius: 0;
  }

  :host(:not([expanded]))::part(header-section) {
    border-radius: 0.5rem;
    border-bottom: none;
  }
`;

export default [styles, ...hostFocusRingStyles(true)];
