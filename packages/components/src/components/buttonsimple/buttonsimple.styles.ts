import { css } from 'lit';

import { hostFitContentStyles, hostFocusRingStyles } from '../../utils/styles';

const styles = [
  hostFitContentStyles,
  css`
    :host {
      --mdc-button-height: unset;

      border: 0.0625rem solid transparent;
      cursor: pointer;
      user-select: none;

      background-color: var(--mds-color-theme-text-primary-normal);
      color: var(--mds-color-theme-inverted-text-secondary-normal);
      font-size: var(--mds-font-apps-body-midsize-regular-font-size);
      height: var(--mdc-button-height);
      outline: none;
    }

    :host([disabled]),
    :host([soft-disabled]) {
      background-color: var(--mds-color-theme-text-primary-disabled);
    }
    :host([size='124']) {
      --mdc-button-height: 7.75rem;
    }
    :host([size='88']) {
      --mdc-button-height: 5.5rem;
    }
    :host([size='72']) {
      --mdc-button-height: 4.5rem;
    }
    :host([size='64']) {
      --mdc-button-height: 4rem;
    }
    :host([size='52']) {
      --mdc-button-height: 3.25rem;
    }
    :host([size='40']) {
      --mdc-button-height: 2.5rem;
    }
    :host([size='32']) {
      --mdc-button-height: 2rem;
    }
    :host([size='28']) {
      --mdc-button-height: 1.75rem;
      font-size: var(--mds-font-size-body-midsize);
    }
    :host([size='24']) {
      --mdc-button-height: 1.5rem;
    }
    :host([size='20']) {
      --mdc-button-height: 1.25rem;
    }
  `,
  ...hostFocusRingStyles(),
];

export default styles;
