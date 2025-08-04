import { css } from 'lit';

import { hostFitContentStyles } from '../../utils/styles';

const styles = css`
  :host {
    --mdc-buttongroup-border-radius: 1.25rem;
    --mdc-buttongroup-border-color: var(--mds-color-theme-outline-button-normal);
    --mdc-buttongroup-divider-color: var(--mds-color-theme-outline-secondary-normal);
  }

  :host::part(container) {
    display: flex;
    border-radius: var(--mdc-buttongroup-border-radius);
    border: 1px solid var(--mdc-buttongroup-border-color);
  }

  :host([variant='primary'])::part(container) {
    border: none;
    background-color: var(--mds-color-theme-outline-primary-normal);
    gap: 1px;
  }

  ::slotted(mdc-button) {
    width: inherit;
    border-radius: 0;
    border: none;
    box-sizing: content-box;
  }

  :host([orientation='vertical'])::part(container) {
    flex-direction: column;
  }

  :host([orientation='horizontal'][variant='secondary']:dir(ltr)) ::slotted(mdc-button:not(:last-child)) {
    border-right: 1px solid var(--mdc-buttongroup-divider-color);
  }
  :host([orientation='horizontal'][variant='secondary']:dir(rtl)) ::slotted(mdc-button:not(:last-child)) {
    border-left: 1px solid var(--mdc-buttongroup-divider-color);
  }
  :host([orientation='vertical'][variant='secondary']) ::slotted(mdc-button:not(:last-child)) {
    border-bottom: 1px solid var(--mdc-buttongroup-divider-color);
  }

  :host([orientation='vertical']) ::slotted(mdc-button:first-child) {
    border-top-left-radius: var(--mdc-buttongroup-border-radius);
    border-top-right-radius: var(--mdc-buttongroup-border-radius);
  }
  :host([orientation='vertical']) ::slotted(mdc-button:last-child) {
    border-bottom-left-radius: var(--mdc-buttongroup-border-radius);
    border-bottom-right-radius: var(--mdc-buttongroup-border-radius);
  }

  :host([orientation='horizontal']:dir(ltr)) ::slotted(mdc-button:first-child) {
    border-top-left-radius: var(--mdc-buttongroup-border-radius);
    border-bottom-left-radius: var(--mdc-buttongroup-border-radius);
  }
  :host([orientation='horizontal']:dir(rtl)) ::slotted(mdc-button:first-child) {
    border-top-right-radius: var(--mdc-buttongroup-border-radius);
    border-bottom-right-radius: var(--mdc-buttongroup-border-radius);
  }
  :host([orientation='horizontal']:dir(ltr)) ::slotted(mdc-button:last-child) {
    border-top-right-radius: var(--mdc-buttongroup-border-radius);
    border-bottom-right-radius: var(--mdc-buttongroup-border-radius);
  }
  :host([orientation='horizontal']:dir(rtl)) ::slotted(mdc-button:last-child) {
    border-top-left-radius: var(--mdc-buttongroup-border-radius);
    border-bottom-left-radius: var(--mdc-buttongroup-border-radius);
  }

  :host([compact][orientation='horizontal']) ::slotted(mdc-button) {
    height: 1.5rem;
  }
  :host([compact][orientation='horizontal'][size='24']) ::slotted(mdc-button) {
    width: 1.5rem;
  }
  :host([compact][orientation='horizontal'][size='28']) ::slotted(mdc-button) {
    width: 1.75rem;
  }
  :host([compact][orientation='horizontal'][size='32']) ::slotted(mdc-button) {
    width: 2rem;
  }
  :host([compact][orientation='horizontal'][size='40']) ::slotted(mdc-button) {
    width: 2.5rem;
  }
`;

export default [hostFitContentStyles, styles];
