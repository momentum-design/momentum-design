import { css } from 'lit';

import { hostFitContentStyles } from '../../utils/styles';

const styles = [
  hostFitContentStyles,
  css`
    :host {
      --mdc-presence-active-background-color: var(--mds-color-theme-indicator-stable);
      --mdc-presence-away-background-color: var(--mds-color-theme-indicator-locked);
      --mdc-presence-away-calling-background-color: var(--mds-color-theme-indicator-locked);
      --mdc-presence-busy-background-color: var(--mds-color-theme-indicator-unstable);
      --mdc-presence-dnd-background-color: var(--mds-color-theme-indicator-attention);
      --mdc-presence-meeting-background-color: var(--mds-color-theme-indicator-unstable);
      --mdc-presence-on-call-background-color: var(--mds-color-theme-indicator-unstable);
      --mdc-presence-on-device-background-color: var(--mds-color-theme-indicator-locked);
      --mdc-presence-on-mobile-background-color: var(--mds-color-theme-indicator-locked);
      --mdc-presence-pause-background-color: var(--mds-color-theme-indicator-locked);
      --mdc-presence-pto-background-color: var(--mds-color-theme-indicator-locked);
      --mdc-presence-presenting-background-color: var(--mds-color-theme-indicator-attention);
      --mdc-presence-quiet-background-color: var(--mds-color-theme-indicator-locked);
      --mdc-presence-scheduled-background-color: var(--mds-color-theme-indicator-unstable);
      --mdc-presence-overlay-background-color: var(--mds-color-theme-background-solid-primary-normal);
    }

    :host::part(presence-content) {
      border-radius: 50%;
      background-color: var(--mdc-presence-overlay-background-color);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    :host([size='24'])::part(presence-content),
    :host([size='32'])::part(presence-content),
    :host([size='48'])::part(presence-content) {
      width: 1.125rem;
      height: 1.125rem;
    }
    :host([size='64'])::part(presence-content) {
      width: 1.5625rem;
      height: 1.5625rem;
    }
    :host([size='72'])::part(presence-content) {
      width: 1.75rem;
      height: 1.75rem;
    }
    :host([size='88'])::part(presence-content) {
      width: 2.125rem;
      height: 2.125rem;
    }
    :host([size='124'])::part(presence-content) {
      width: 2.75rem;
      height: 2.75rem;
    }

    :host::part(mdc-presence-icon) {
      border-radius: 50%;
    }
    :host::part(mdc-presence-icon__active) {
      color: var(--mdc-presence-active-background-color);
    }
    :host::part(mdc-presence-icon__away) {
      color: var(--mdc-presence-away-background-color);
    }
    :host::part(mdc-presence-icon__away-calling) {
      color: var(--mdc-presence-away-calling-background-color);
    }
    :host::part(mdc-presence-icon__busy) {
      color: var(--mdc-presence-busy-background-color);
    }
    :host::part(mdc-presence-icon__dnd) {
      color: var(--mdc-presence-dnd-background-color);
    }
    :host::part(mdc-presence-icon__meeting) {
      color: var(--mdc-presence-meeting-background-color);
    }
    :host::part(mdc-presence-icon__on-call) {
      color: var(--mdc-presence-on-call-background-color);
    }
    :host::part(mdc-presence-icon__on-device) {
      color: var(--mdc-presence-on-device-background-color);
    }
    :host::part(mdc-presence-icon__on-mobile) {
      color: var(--mdc-presence-on-mobile-background-color);
    }
    :host::part(mdc-presence-icon__pause) {
      color: var(--mdc-presence-pause-background-color);
    }
    :host::part(mdc-presence-icon__pto) {
      color: var(--mdc-presence-pto-background-color);
    }
    :host::part(mdc-presence-icon__presenting) {
      color: var(--mdc-presence-presenting-background-color);
    }
    :host::part(mdc-presence-icon__quiet) {
      color: var(--mdc-presence-quiet-background-color);
    }
    :host::part(mdc-presence-icon__scheduled) {
      color: var(--mdc-presence-scheduled-background-color);
    }
  `,
];

export default styles;
