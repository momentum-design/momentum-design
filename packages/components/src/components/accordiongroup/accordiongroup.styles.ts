import { css } from 'lit';

import { hostFocusRingStyles } from '../../utils/styles';

const styles = css`
  :host {
    --mdc-accordiongroup-items-border-color: var(--mds-color-theme-outline-secondary-normal);

    display: flex;
    flex-direction: column;
  }
  :host([variant='stacked']) {
    row-gap: 1.5rem;
  }
  :host([variant='stacked']) ::slotted(mdc-accordion),
  :host([variant='stacked']) ::slotted(mdc-accordionbutton) {
    border: 1px solid var(--mdc-accordiongroup-items-border-color);
    border-radius: 0.5rem;
  }
  :host([variant='stacked']) ::slotted(mdc-accordion:not[expanded]),
  :host([variant='stacked']) ::slotted(mdc-accordionbutton:not[expanded]) {
    border-bottom: none;
  }
  :host([variant='contained']) {
    border: 1px solid var(--mdc-accordiongroup-items-border-color);
    border-radius: 0.5rem;
  }
  :host([variant='contained']) ::slotted(mdc-accordion),
  :host([variant='contained']) ::slotted(mdc-accordionbutton) {
    border-bottom: 1px solid var(--mdc-accordiongroup-items-border-color);
  }
  :host([variant='contained']) ::slotted(mdc-accordion:first-child),
  :host([variant='contained']) ::slotted(mdc-accordionbutton:first-child) {
    border-radius: 0.5rem 0.5rem 0 0;
  }
  :host([variant='contained']) ::slotted(mdc-accordion:last-child),
  :host([variant='contained']) ::slotted(mdc-accordionbutton:last-child) {
    border-bottom: none;
    border-radius: 0 0 0.5rem 0.5rem;
  }
  :host([variant='contained']) ::slotted(mdc-accordion[expanded]:last-child),
  :host([variant='contained']) ::slotted(mdc-accordionbutton[expanded]:last-child) {
    border-radius: inherit;
  }
  :host([variant='borderless']) ::slotted(mdc-accordion[expanded]),
  :host([variant='borderless']) ::slotted(mdc-accordionbutton[expanded]) {
    border-bottom: 1px solid var(--mdc-accordiongroup-items-border-color);
  }
`;

export default [styles, ...hostFocusRingStyles()];
