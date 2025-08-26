import { css } from 'lit';

import { hostFitContentStyles } from '../../utils/styles';

const styles = css`
  :host {
    --mdc-buttongroup-border-radius: 1.25rem;
    --mdc-buttongroup-border-color: var(--mds-color-theme-outline-button-normal);
    --mdc-buttongroup-divider-color: var(--mds-color-theme-outline-secondary-normal);
    --mdc-buttongroup-border-width: 1px;
  }

  :host::part(container) {
    display: flex;
    border-radius: var(--mdc-buttongroup-border-radius);
  }

  :host::part(container) {
    gap: var(--mdc-buttongroup-border-width);
  }
  :host([variant='primary'])::part(container) {
    border: none;
    background-color: var(--mds-color-theme-outline-primary-normal);
  }

  ::slotted(mdc-button) {
    width: inherit;
    border-radius: 0;
    border: none;
    box-sizing: content-box;
    position: relative;
  }

  :host([orientation='vertical'])::part(container) {
    flex-direction: column;
  }

  :host([variant='secondary'])::part(container) {
    outline: var(--mdc-buttongroup-border-width) solid var(--mdc-buttongroup-border-color);
    outline-offset: calc(-1 * var(--mdc-buttongroup-border-width));
  }

  :host([variant='secondary'][orientation='horizontal']) ::slotted(mdc-button:not(:last-of-type))::after {
    content: '';
    position: absolute;
    width: var(--mdc-buttongroup-border-width);
    height: calc(100% - 2 * var(--mdc-buttongroup-border-width));
    background: var(--mdc-buttongroup-divider-color);
    inset-inline-end: calc(-1 * var(--mdc-buttongroup-border-width));
    inset-block-start: var(--mdc-buttongroup-border-width);
  }
  :host([variant='secondary'][orientation='vertical']) ::slotted(mdc-button:not(:last-of-type))::after {
    content: '';
    position: absolute;
    width: calc(100% - 2 * var(--mdc-buttongroup-border-width));
    height: var(--mdc-buttongroup-border-width);
    background: var(--mdc-buttongroup-divider-color);
    inset-block-end: calc(-1 * var(--mdc-buttongroup-border-width));
    inset-inline-end: var(--mdc-buttongroup-border-width);
  }

  :host([orientation='vertical']) ::slotted(mdc-button:first-of-type) {
    border-top-left-radius: var(--mdc-buttongroup-border-radius);
    border-top-right-radius: var(--mdc-buttongroup-border-radius);
  }
  :host([orientation='vertical']) ::slotted(mdc-button:last-of-type) {
    border-bottom-left-radius: var(--mdc-buttongroup-border-radius);
    border-bottom-right-radius: var(--mdc-buttongroup-border-radius);
  }

  :host([orientation='horizontal']:dir(ltr)) ::slotted(mdc-button:first-of-type) {
    border-top-left-radius: var(--mdc-buttongroup-border-radius);
    border-bottom-left-radius: var(--mdc-buttongroup-border-radius);
  }
  :host([orientation='horizontal']:dir(rtl)) ::slotted(mdc-button:first-of-type) {
    border-top-right-radius: var(--mdc-buttongroup-border-radius);
    border-bottom-right-radius: var(--mdc-buttongroup-border-radius);
  }
  :host([orientation='horizontal']:dir(ltr)) ::slotted(mdc-button:last-of-type) {
    border-top-right-radius: var(--mdc-buttongroup-border-radius);
    border-bottom-right-radius: var(--mdc-buttongroup-border-radius);
  }
  :host([orientation='horizontal']:dir(rtl)) ::slotted(mdc-button:last-of-type) {
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
