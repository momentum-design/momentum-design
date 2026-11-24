import { css } from 'lit';

import { hostFitContentStyles } from '../../utils/styles';

const styles = [
  hostFitContentStyles,
  css`
    :host {
      --mdc-avatar-default-background-color: var(--mds-color-theme-avatar-default);
      --mdc-avatar-default-foreground-color: var(--mds-color-theme-common-text-primary-normal);
      --mdc-avatar-loading-indicator-background-color: var(--mds-color-theme-common-text-primary-disabled);
      --mdc-avatar-loading-indicator-foreground-color: var(--mds-color-theme-common-text-primary-normal);
      --mdc-avatar-loading-overlay-background-color: var(--mds-color-theme-common-overlays-secondary-normal);
    }
    :host([size='124']) {
      width: var(--mds-size-theme-xl-124);
      height: var(--mds-size-theme-xl-124);
    }
    :host([size='88']) {
      width: var(--mds-size-theme-xl-88);
      height: var(--mds-size-theme-xl-88);
    }
    :host([size='72']) {
      width: var(--mds-size-theme-xl-72);
      height: var(--mds-size-theme-xl-72);
    }
    :host([size='64']) {
      width: var(--mds-size-theme-lg-64);
      height: var(--mds-size-theme-lg-64);
    }
    :host([size='48']) {
      width: var(--mds-size-theme-lg-48);
      height: var(--mds-size-theme-lg-48);
    }
    :host([size='32']) {
      width: var(--mds-size-theme-md-32);
      height: var(--mds-size-theme-md-32);
    }
    :host([size='24']) {
      width: var(--mds-size-theme-md-24);
      height: var(--mds-size-theme-md-24);
    }
    :host([size='124'])::part(loader) {
      transform: scale(1.5);
    }
    :host([size='88'])::part(loader) {
      transform: scale(1.2);
    }
    :host([size='72'])::part(loader),
    :host([size='64'])::part(loader) {
      transform: scale(0.8);
    }
    :host([size='48'])::part(loader) {
      transform: scale(0.6);
    }
    :host([size='32'])::part(loader) {
      transform: scale(0.4);
    }
    :host([size='24'])::part(loader) {
      transform: scale(0.3);
    }
    :host {
      width: var(--mds-size-theme-md-32);
      height: var(--mds-size-theme-md-32);
      background-color: var(--mdc-avatar-default-background-color);
      color: var(--mdc-avatar-default-foreground-color);
      border-radius: var(--mds-radius-theme-full);
      position: relative;
      display: grid;
      place-items: center;
      flex-shrink: 0;
    }
    :host::part(photo) {
      border-radius: var(--mds-radius-theme-full);
      height: 100%;
      width: 100%;
      object-fit: cover;
      overflow: hidden;
    }
    :host::part(presence) {
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: 1;
    }

    :host([size='124'])::part(presence) {
      bottom: -0.25rem;
      right: -0.21875rem;
    }

    :host([size='88'])::part(presence),
    :host([size='72'])::part(presence),
    :host([size='64'])::part(presence) {
      bottom: -0.09375rem;
      right: -0.09375rem;
    }

    :host([size='48'])::part(presence) {
      bottom: -0.03125rem;
      right: -0.03125rem;
    }

    :host([size='32'])::part(presence) {
      bottom: -0.15625rem;
      right: -0.15625rem;
    }

    :host([size='24'])::part(presence) {
      bottom: -0.1875rem;
      right: -0.1875rem;
    }

    :host::part(loading-wrapper) {
      position: absolute;
      border-radius: var(--mds-radius-theme-full);
      width: 100%;
      height: 100%;
      background-color: var(--mdc-avatar-loading-overlay-background-color);
      display: grid;
      place-items: center;
    }
    :host::part(loader) {
      position: absolute;
      width: var(--mds-size-theme-md-16);
      transform: scale(0.4);
      aspect-ratio: 1;
      border-radius: var(--mds-radius-theme-full);
      animation: loading-key 1s infinite linear alternate;
    }
    @keyframes loading-key {
      0% {
        box-shadow:
          1.25rem 0 var(--mdc-avatar-loading-indicator-foreground-color),
          -1.25rem 0 var(--mdc-avatar-loading-indicator-background-color);
        background: var(--mdc-avatar-loading-indicator-foreground-color);
      }
      33% {
        box-shadow:
          1.25rem 0 var(--mdc-avatar-loading-indicator-foreground-color),
          -1.25rem 0 var(--mdc-avatar-loading-indicator-background-color);
        background: var(--mdc-avatar-loading-indicator-background-color);
      }
      66% {
        box-shadow:
          1.25rem 0 var(--mdc-avatar-loading-indicator-background-color),
          -1.25rem 0 var(--mdc-avatar-loading-indicator-foreground-color);
        background: var(--mdc-avatar-loading-indicator-background-color);
      }
      100% {
        box-shadow:
          1.25rem 0 var(--mdc-avatar-loading-indicator-background-color),
          -1.25rem 0 var(--mdc-avatar-loading-indicator-foreground-color);
        background: var(--mdc-avatar-loading-indicator-foreground-color);
      }
    }

    /* High Contrast Mode */
    @media (forced-colors: active) {
      :host {
        outline: var(--mds-border-theme-emphasis) solid;
      }
    }
  `,
];

export default styles;
