import { css } from 'lit';

import { hostFitContentStyles } from '../../utils/styles';

const styles = css`
  :host {
    --mdc-buttongroup-border-radius: 1.25rem;
    --mdc-buttongroup-border-color: var(--mds-color-theme-outline-button-normal);
    --mdc-buttongroup-divider-color: var(--mds-color-theme-outline-secondary-normal);
    --mdc-buttongroup-border-width: var(--mds-border-theme-default);
  }

  :host::part(container) {
    display: flex;
    border-radius: var(--mdc-buttongroup-border-radius);
  }

  :host([variant='primary'])::part(container) {
    gap: 1px;
    border: none;
    background-color: var(--mds-color-theme-outline-primary-normal);
  }

  ::slotted(mdc-button) {
    width: inherit;
    border-radius: var(--mds-radius-theme-none);
    border: none;
    box-sizing: border-box;
    position: relative;
  }
  :host([orientation='horizontal'][variant='secondary']) ::slotted(mdc-button) {
    border-block-start: var(--mdc-buttongroup-border-width) solid var(--mdc-buttongroup-border-color);
    border-block-end: var(--mdc-buttongroup-border-width) solid var(--mdc-buttongroup-border-color);
  }
  :host([orientation='horizontal'][variant='secondary']) ::slotted(mdc-button:first-of-type) {
    border-inline-start: var(--mdc-buttongroup-border-width) solid var(--mdc-buttongroup-border-color);
  }
  :host([orientation='horizontal'][variant='secondary']) ::slotted(mdc-button:last-of-type) {
    border-inline-end: var(--mdc-buttongroup-border-width) solid var(--mdc-buttongroup-border-color);
  }

  :host([orientation='vertical'][variant='secondary']) ::slotted(mdc-button) {
    border-inline-start: var(--mdc-buttongroup-border-width) solid var(--mdc-buttongroup-border-color);
    border-inline-end: var(--mdc-buttongroup-border-width) solid var(--mdc-buttongroup-border-color);
  }
  :host([orientation='vertical'][variant='secondary']) ::slotted(mdc-button:first-of-type) {
    border-block-start: var(--mdc-buttongroup-border-width) solid var(--mdc-buttongroup-border-color);
  }
  :host([orientation='vertical'][variant='secondary']) ::slotted(mdc-button:last-of-type) {
    border-block-end: var(--mdc-buttongroup-border-width) solid var(--mdc-buttongroup-border-color);
  }

  :host([orientation='vertical'])::part(container) {
    flex-direction: column;
  }

  :host([variant='secondary'][orientation='horizontal']) ::slotted(mdc-button:not(:last-of-type))::after {
    content: '';
    position: absolute;
    height: 100%;
    border-inline-end: var(--mdc-buttongroup-border-width) solid var(--mdc-buttongroup-divider-color);
    inset-inline-start: 100%;
  }
  :host([variant='secondary'][orientation='vertical']) ::slotted(mdc-button:not(:last-of-type))::after {
    content: '';
    position: absolute;
    width: 100%;
    border-block-end: var(--mdc-buttongroup-border-width) solid var(--mdc-buttongroup-divider-color);
    inset-block-end: 0%;
  }

  :host([orientation='vertical']) ::slotted(mdc-button:first-of-type) {
    border-start-start-radius: var(--mdc-buttongroup-border-radius);
    border-start-end-radius: var(--mdc-buttongroup-border-radius);
  }
  :host([orientation='vertical']) ::slotted(mdc-button:last-of-type) {
    border-end-start-radius: var(--mdc-buttongroup-border-radius);
    border-end-end-radius: var(--mdc-buttongroup-border-radius);
  }

  :host([orientation='horizontal']) ::slotted(mdc-button:first-of-type) {
    border-start-start-radius: var(--mdc-buttongroup-border-radius);
    border-end-start-radius: var(--mdc-buttongroup-border-radius);
  }
  :host([orientation='horizontal']) ::slotted(mdc-button:last-of-type) {
    border-start-end-radius: var(--mdc-buttongroup-border-radius);
    border-end-end-radius: var(--mdc-buttongroup-border-radius);
  }

  :host([compact][orientation='horizontal']) ::slotted(mdc-button) {
    height: var(--mds-size-theme-md-24);
  }
  :host([compact][orientation='horizontal'][size='24']) ::slotted(mdc-button) {
    width: var(--mds-size-theme-md-24);
  }
  :host([compact][orientation='horizontal'][size='28']) ::slotted(mdc-button) {
    width: var(--mds-size-theme-md-28);
  }
  :host([compact][orientation='horizontal'][size='32']) ::slotted(mdc-button) {
    width: var(--mds-size-theme-md-32);
  }
  :host([compact][orientation='horizontal'][size='40']) ::slotted(mdc-button) {
    width: var(--mds-size-theme-lg-40);
  }
`;

export default [hostFitContentStyles, styles];
