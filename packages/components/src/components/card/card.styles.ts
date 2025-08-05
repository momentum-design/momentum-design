import { css } from 'lit';

import { hostFitContentStyles } from '../../utils/styles';

const styles = css`
  :host {
    --mdc-card-width: 20rem;
    align-items: stretch;
    border-radius: 0.5rem;
    border: 1px solid var(--mds-color-theme-outline-primary-normal);
    box-shadow: none;
    transition: box-shadow 0.2s;
    width: var(--mdc-card-width);
  }

  :host([variant='ghost']) {
    border-color: transparent;
  }

  :host([orientation='horizontal']) {
    min-width: 40rem;
    --mdc-card-width: 40rem;
  }

  :host([orientation='vertical']) {
    min-width: 20rem;
    flex-direction: column;
  }

  :host([orientation='vertical'])::part(image) {
    object-fit: cover;
    height: 12.5rem;
    width: 100%;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }

  :host([orientation='horizontal'])::part(image) {
    object-fit: cover;
    width: 10rem;
    height: 100%;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }

  :host::part(text-content) {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  :host::part(header) {
    display: flex;
    gap: 0.5rem;
  }

  :host::part(icon) {
    margin-top: 0.25rem;
  }

  :host::part(body) {
    width: 100%;
    height: inherit;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
  }

  ::slotted([slot='body']) {
    padding-bottom: 0.5rem;
    margin-top: 0.75rem;
  }

  :host([variant='promotional']) {
    border-color: var(--mds-color-theme-outline-promotion-normal);
  }

  :host(:dir(ltr))::part(icon-button),
  :host(:dir(ltr))::part(footer) {
    margin-left: auto;
  }

  :host(:dir(rtl))::part(icon-button),
  :host(:dir(rtl))::part(footer) {
    margin-right: auto;
  }

  :host::part(icon-button),
  :host::part(footer) {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
  }

  :host::part(footer) {
    gap: 1rem;
  }

  ::slotted([slot='before-body']),
  ::slotted([slot='after-body']) {
    margin-top: 1rem;
  }

  ::slotted([slot='footer-link']),
  ::slotted([slot='footer-button-primary']),
  ::slotted([slot='footer-button-secondary']) {
    margin-bottom: 0.5rem;
  }

  mdc-text::part(text) {
    margin: 0;
  }
`;

export default [hostFitContentStyles, styles];
