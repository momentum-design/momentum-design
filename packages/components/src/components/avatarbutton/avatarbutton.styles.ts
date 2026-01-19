import { css } from 'lit';

import { hostFitContentStyles, hostFocusRingStyles } from '../../utils/styles';

const styles = [
  hostFitContentStyles,
  css`
    :host {
      --mdc-avatarbutton-overlay-background-color-rest: var(--mds-color-theme-avatar-ghost);
      --mdc-avatarbutton-overlay-background-color-hover: var(--mds-color-theme-avatar-hover);
      --mdc-avatarbutton-overlay-background-color-active: var(--mds-color-theme-avatar-pressed);
      padding: unset;
      margin: unset;
      outline: none;
      border-radius: 0.25rem;
      position: relative;
      cursor: pointer;
    }
    :host::part(overlay) {
      position: absolute;
      border-radius: 100vh;
      height: 100%;
      width: 100%;
      z-index: 1;
      background-color: var(--mdc-avatarbutton-overlay-background-color-rest);
    }
    :host(:not([is-typing]):hover)::part(overlay) {
      background-color: var(--mdc-avatarbutton-overlay-background-color-hover);
    }
    :host(:not([is-typing]):active)::part(overlay) {
      background-color: var(--mdc-avatarbutton-overlay-background-color-active);
    }
    :host([icon-on-hover]:hover)::part(overlay) {
      background-color: var(--mds-color-theme-common-overlays-secondary-normal);
    }
    .icon-hover__container {
      position: absolute;
      z-index: auto;
    }
    :host(:hover) .icon-hover__container {
      z-index: 2;
    }
    :host([size='124']) .icon-hover {
      width: 4rem;
      height: 4rem;
    }
    :host([size='88']) .icon-hover {
      width: 3rem;
      height: 3rem;
    }
    :host([size='72']) .icon-hover {
      width: 2.5rem;
      height: 2.5rem;
    }
    :host([size='64']) .icon-hover {
      width: 2.25rem;
      height: 2.25rem;
    }
    :host([size='48']) .icon-hover {
      width: 1.75rem;
      height: 1.75rem;
    }
    :host([size='32']) .icon-hover {
      width: 1.25rem;
      height: 1.25rem;
    }
    :host([size='24']) .icon-hover {
      width: 1rem;
      height: 1rem;
    }
  `,
  ...hostFocusRingStyles(),
];

export default styles;
