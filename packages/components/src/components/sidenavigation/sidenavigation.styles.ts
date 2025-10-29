import { css } from 'lit';

const styles = css`
  :host {
    --mdc-sidenavigation-expanded-width: 15rem;
    --mdc-sidenavigation-collapsed-width: 4.5rem;
    --mdc-sidenavigation-vertical-divider-button-z-index: auto;

    display: flex;
    height: 100%;
  }

  :host([expanded]) {
    width: var(--mdc-sidenavigation-expanded-width);
  }

  :host(:not([expanded])) {
    width: var(--mdc-sidenavigation-collapsed-width);
  }

  :host::part(side-navigation-container) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  :host::part(scrollable-section) {
    flex-grow: 1;
    overflow: auto;
    padding: 1rem 0;
    min-height: 0;
  }

  :host::part(fixed-section) {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 1rem;
    gap: 0.5rem;
  }

  :host::part(brand-logo-container) {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 0.5rem;
    border-radius: 1.25rem;
  }

  :host(:dir(ltr))::part(brand-logo-container) {
    padding: 0.5rem 0rem 0.5rem 1.5rem;
  }

  :host(:dir(rtl))::part(brand-logo-container) {
    padding: 0.5rem 1.5rem 0.5rem 0rem;
  }

  ::slotted([slot='brand-logo']) {
    width: 1.5rem;
    height: 1.5rem;
    flex-shrink: 0;
    aspect-ratio: 1 / 1;
  }

  :host::part(separator) {
    margin-bottom: 0.75rem;
  }

  :host::part(vertical-divider-button) {
    z-index: var(--mdc-sidenavigation-vertical-divider-button-z-index);
  }

  /* Hidden by default */
  :host([show-grabber-on-hover])::part(vertical-divider),
  :host([show-grabber-on-hover])::part(vertical-divider-button) {
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease-in-out;
  }

  /* Show on hover or keyboard focus (not when mouse interaction is active) */
  :host([show-grabber-on-hover]:hover)::part(vertical-divider),
  :host([show-grabber-on-hover]:hover)::part(vertical-divider-button),
  :host([show-grabber-on-hover]:focus-within:not([data-mouse-interaction]))::part(vertical-divider),
  :host([show-grabber-on-hover]:focus-within:not([data-mouse-interaction]))::part(vertical-divider-button) {
    opacity: 1;
    pointer-events: all;
  }
`;

export default [styles];
