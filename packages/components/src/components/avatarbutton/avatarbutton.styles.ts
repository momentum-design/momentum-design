import { css } from 'lit';

import { hostFitContentStyles, hostFocusRingStyles } from '../../utils/styles';

const styles = [
  hostFitContentStyles,
  css`
    :host {
      --mdc-avatarbutton-overlay-background-color-rest: var(--mds-color-theme-avatar-ghost);
      --mdc-avatarbutton-overlay-background-color-hover: var(--mds-color-theme-avatar-hover);
      --mdc-avatarbutton-overlay-background-color-active: var(--mds-color-theme-avatar-pressed);

      --mdc-avatarbutton-default-background-color: var(--mds-color-theme-avatar-default);
      --mdc-avatarbutton-default-foreground-color: var(--mds-color-theme-common-text-primary-normal);
      --mdc-avatarbutton-loading-indicator-background-color: var(--mds-color-theme-common-text-primary-disabled);
      --mdc-avatarbutton-loading-indicator-foreground-color: var(--mds-color-theme-common-text-primary-normal);
      --mdc-avatarbutton-loading-overlay-background-color: var(--mds-color-theme-common-overlays-secondary-normal);
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
    mdc-avatar {
      --mdc-avatar-default-background-color: var(--mdc-avatarbutton-default-background-color);
      --mdc-avatar-default-foreground-color: var(--mdc-avatarbutton-default-foreground-color);
      --mdc-avatar-loading-indicator-background-color: var(--mdc-avatarbutton-loading-indicator-background-color);
      --mdc-avatar-loading-indicator-foreground-color: var(--mdc-avatarbutton-loading-indicator-foreground-color);
      --mdc-avatar-loading-overlay-background-color: var(--mdc-avatarbutton-loading-overlay-background-color);
    }
  `,
  ...hostFocusRingStyles(),
];

export default styles;
