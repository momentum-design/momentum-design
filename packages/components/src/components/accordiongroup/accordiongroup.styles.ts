import { css } from 'lit';

const styles = css`
  :host {
    --mdc-accordiongroup-border-color: var(--mds-color-theme-outline-secondary-normal);

    display: flex;
    flex-direction: column;
  }
  :host([variant='stacked']) {
    row-gap: 1.5rem;
  }
  :host([variant='contained']) {
    border: 1px solid var(--mdc-accordiongroup-border-color);
    border-radius: 0.5rem;
  }
  :host([variant='contained']) ::slotted(mdc-accordion),
  :host([variant='contained']) ::slotted(mdc-accordionbutton) {
    border: 0;
    border-radius: 0;
    border-bottom: 1px solid var(--mdc-accordiongroup-border-color);
  }
  :host([variant='contained']) ::slotted(mdc-accordion:last-child),
  :host([variant='contained']) ::slotted(mdc-accordionbutton:last-child) {
    border-bottom: none;
  }
  :host([variant='borderless']) ::slotted(mdc-accordion[expanded]),
  :host([variant='borderless']) ::slotted(mdc-accordionbutton[expanded]) {
    border-bottom: 1px solid var(--mdc-accordiongroup-border-color);
  }

  :host([variant='contained']) ::slotted(mdc-accordionbutton:not(expanded)) {
    border-radius: 0;
  }
`;

export default [styles];
