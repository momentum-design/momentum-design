import { css } from 'lit';

import { hostFitContentStyles, hostFocusRingStyles } from '../../utils/styles';

const styles = [
  hostFitContentStyles,
  css`
    :host {
      --mdc-button-height: unset;
      --mdc-button-background: transparent;
      --mdc-button-border-color: transparent;
      --mdc-button-text-color: unset;

      border: var(--mds-border-theme-default) solid var(--mdc-button-border-color);
      cursor: pointer;
      user-select: none;

      background-color: var(--mdc-button-background);
      color: var(--mdc-button-text-color);
      font-size: var(--mds-font-apps-body-midsize-regular-font-size);
      height: var(--mdc-button-height);
      outline: none;
    }

    :host([disabled]),
    :host([soft-disabled]) {
      --mdc-button-background: var(--mds-color-theme-text-primary-disabled);
    }
    :host([size='124']) {
      --mdc-button-height: var(--mds-size-theme-xl-124);
    }
    :host([size='88']) {
      --mdc-button-height: var(--mds-size-theme-xl-88);
    }
    :host([size='72']) {
      --mdc-button-height: var(--mds-size-theme-xl-72);
    }
    :host([size='64']) {
      --mdc-button-height: var(--mds-size-theme-lg-64);
    }
    :host([size='52']) {
      --mdc-button-height: var(--mds-size-theme-lg-52);
    }
    :host([size='40']) {
      --mdc-button-height: var(--mds-size-theme-lg-40);
    }
    :host([size='32']) {
      --mdc-button-height: var(--mds-size-theme-md-32);
    }
    :host([size='28']) {
      --mdc-button-height: var(--mds-size-theme-md-28);
      font-size: var(--mds-font-size-body-midsize);
    }
    :host([size='24']) {
      --mdc-button-height: var(--mds-size-theme-md-24);
    }
    :host([size='20']) {
      --mdc-button-height: var(--mds-size-theme-md-20);
    }
  `,
  ...hostFocusRingStyles(),
];

export default styles;
