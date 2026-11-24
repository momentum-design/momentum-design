import { css } from 'lit';

import { hostFocusRingStyles } from '../../utils/styles';

const styles = css`
  :host {
    --mdc-accordiongroup-items-border-color: var(--mds-color-theme-outline-secondary-normal);

    display: flex;
    flex-direction: column;
  }
  :host([variant='stacked']) {
    row-gap: var(--mds-spacing-theme-gap-xl);
  }
  :host([variant='stacked']) ::slotted(mdc-accordion),
  :host([variant='stacked']) ::slotted(mdc-accordionbutton) {
    border: var(--mds-border-theme-default) solid var(--mdc-accordiongroup-items-border-color);
    border-radius: var(--mds-radius-theme-sm);
  }
  :host([variant='stacked']) ::slotted(mdc-accordion:not[expanded]),
  :host([variant='stacked']) ::slotted(mdc-accordionbutton:not[expanded]) {
    border-bottom: var(--mds-border-theme-none) none;
  }
  :host([variant='contained']) {
    border: var(--mds-border-theme-default) solid var(--mdc-accordiongroup-items-border-color);
    border-radius: var(--mds-radius-theme-sm);
  }
  :host([variant='contained']) ::slotted(mdc-accordion),
  :host([variant='contained']) ::slotted(mdc-accordionbutton) {
    border-bottom: var(--mds-border-theme-default) solid var(--mdc-accordiongroup-items-border-color);
  }
  :host([variant='contained']) ::slotted(mdc-accordion:first-child),
  :host([variant='contained']) ::slotted(mdc-accordionbutton:first-child) {
    border-radius: var(--mds-radius-theme-sm) var(--mds-radius-theme-sm) var(--mds-radius-theme-none)
      var(--mds-radius-theme-none);
  }
  :host([variant='contained']) ::slotted(mdc-accordion:last-child),
  :host([variant='contained']) ::slotted(mdc-accordionbutton:last-child) {
    border-bottom: var(--mds-border-theme-none) none;
    border-radius: var(--mds-radius-theme-none) var(--mds-radius-theme-none) var(--mds-radius-theme-sm)
      var(--mds-radius-theme-sm);
  }
  :host([variant='contained']) ::slotted(mdc-accordion[expanded]:last-child),
  :host([variant='contained']) ::slotted(mdc-accordionbutton[expanded]:last-child) {
    border-radius: inherit;
  }
  :host([variant='borderless']) ::slotted(mdc-accordion[expanded]),
  :host([variant='borderless']) ::slotted(mdc-accordionbutton[expanded]) {
    border-bottom: var(--mds-border-theme-default) solid var(--mdc-accordiongroup-items-border-color);
  }
`;

export default [styles, ...hostFocusRingStyles()];
