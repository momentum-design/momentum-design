import { css } from 'lit';

const styles = css`
  :host {
    --mdc-sidenavigation-expanded-width: 15rem;
    --mdc-sidenavigation-collapsed-width: 4.5rem;
    --mdc-sidenavigation-vertical-divider-button-z-index: auto;
    --mdc-sidenavigation-top-padding: 1rem;

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
    overflow-y: auto;
    overflow-x: hidden;
    padding: var(--mdc-sidenavigation-top-padding) 0;
    min-height: 0;
  }

  :host::part(scrollable-menubar) {
    width: 100%;
  }

  ::slotted([slot='scrollable-menubar']) {
    --mdc-menusection-divider-margin-block: 0.5rem 0.75rem;
    --mdc-menusection-gap: 0.25rem;
  }

  ::slotted(mdc-navmenuitem[slot='scrollable-menubar']) {
    margin-bottom: 0.25rem;
  }

  :host([expanded]) ::slotted([slot='scrollable-menubar']) {
    --mdc-menusection-divider-width: var(--mdc-sidenavigation-expanded-width);
    --mdc-menusection-header-padding: 0.25rem 1.5rem 0 1.5rem;
  }

  :host(:not([expanded])) ::slotted([slot='scrollable-menubar']) {
    --mdc-menusection-divider-width: var(--mdc-sidenavigation-collapsed-width);
  }

  :host::part(fixed-section) {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 1rem;
    gap: 0.5rem;
  }

  :host::part(fixed-menubar) {
    width: 100%;
  }

  ::slotted([slot='fixed-menubar']) {
    --mdc-menusection-divider-margin-block: 0.5rem 0.75rem;
    --mdc-menusection-gap: 0.25rem;
  }

  :host([expanded]) ::slotted([slot='fixed-menubar']) {
    --mdc-menusection-divider-width: var(--mdc-sidenavigation-expanded-width);
    --mdc-menusection-header-padding: 0.25rem 1.5rem 0 1.5rem;
  }

  :host(:not([expanded])) ::slotted([slot='fixed-menubar']) {
    --mdc-menusection-divider-width: var(--mdc-sidenavigation-collapsed-width);
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
    flex-shrink: 0;
    margin-bottom: 0.75rem;
  }

  :host::part(vertical-divider-button) {
    z-index: var(--mdc-sidenavigation-vertical-divider-button-z-index);
  }

  :host([variant='flexible-on-hover'])::part(vertical-divider),
  :host([variant='flexible-on-hover'])::part(vertical-divider-button) {
    opacity: 0;
  }

  :host([data-grabber-visible][variant='flexible-on-hover'])::part(vertical-divider),
  :host([data-grabber-visible][variant='flexible-on-hover'])::part(vertical-divider-button) {
    opacity: 1;
  }
`;

export default [styles];
