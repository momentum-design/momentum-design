import { css } from 'lit';
import { hostFitContentStyles } from '../../utils/styles';

const styles = [hostFitContentStyles, css`
  :host {
    --mdc-avatar-default-background-color: var(--mds-color-theme-avatar-default);
    --mdc-avatar-default-foreground-color: var(--mds-color-theme-common-text-primary-normal);
    --mdc-avatar-loading-indicator-background-color: var(--mds-color-theme-common-text-primary-disabled);
    --mdc-avatar-loading-indicator-foreground-color: var(--mdc-avatar-default-foreground-color);
    --mdc-avatar-loading-overlay-background-color: var(--mds-color-theme-common-overlays-secondary-normal);
  }
  :host([size="xx_large"]) .content {
    width: 7.75rem;
    height: 7.75rem;
  }
  :host([size="x_large"]) .content {
    width: 5.5rem;
    height: 5.5rem;
  }
  :host([size="large"]) .content {
    width: 4.5rem;
    height: 4.5rem;
  }
  :host([size="midsize"]) .content {
    width: 4rem;
    height: 4rem;
  }
  :host([size="small"]) .content {
    width: 3rem;
    height: 3rem;
  }
  :host([size="x_small"]) .content {
    width: 2rem;
    height: 2rem;
  }
  :host([size="xx_small"]) .content {
    width: 1.5rem;
    height: 1.5rem;
  }
  :host([size="xx_large"]) .content > .loading__wrapper > .loader {
    transform: scale(1.5);
  }
  :host([size="x_large"]) .content > .loading__wrapper > .loader {
    transform: scale(1.2);
  }
  :host([size="large"]) .content > .loading__wrapper > .loader,
  :host([size="midsize"]) .content > .loading__wrapper > .loader {
    transform: scale(0.8);
  }
  :host([size="small"]) .content > .loading__wrapper > .loader {
    transform: scale(0.6);
  }
  :host([size="x_small"]) .content > .loading__wrapper > .loader {
    transform: scale(0.4);
  }
  :host([size="xx_small"]) .content > .loading__wrapper > .loader {
    transform: scale(0.3);
  }
  .content {
    width: 2rem;
    height: 2rem;
    background-color: var(--mdc-avatar-default-background-color);
    color: var(--mdc-avatar-default-foreground-color);
    border-radius: 100vh;
    position: relative;
    display: grid;
    place-items: center;
  }
  .photo {
    border-radius: 100vh;
    height: 100%;
    width: 100%;
    object-fit: cover;
    overflow: hidden;
  }
  .presence {
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .loading__wrapper {
    position: absolute;
    border-radius: 100vh;
    width: 100%;
    height: 100%;
    background-color: var(--mdc-avatar-loading-overlay-background-color);
    display: grid;
    place-items: center;
  }
  .loader {
    position: absolute;
    width: 1rem;
    transform: scale(0.4);
    aspect-ratio: 1;
    border-radius: 100vh;
    animation: loading-key 1s infinite linear alternate;
  }
  @keyframes loading-key {
    0%  {
      box-shadow: 1.25rem 0 var(--mdc-avatar-loading-indicator-foreground-color),
        -1.25rem 0 var(--mdc-avatar-loading-indicator-background-color);
      background: var(--mdc-avatar-loading-indicator-foreground-color);
    }
    33% {
      box-shadow: 1.25rem 0 var(--mdc-avatar-loading-indicator-foreground-color),
        -1.25rem 0 var(--mdc-avatar-loading-indicator-background-color);
      background: var(--mdc-avatar-loading-indicator-background-color);
    }
    66% {
      box-shadow: 1.25rem 0 var(--mdc-avatar-loading-indicator-background-color),
        -1.25rem 0 var(--mdc-avatar-loading-indicator-foreground-color);
      background: var(--mdc-avatar-loading-indicator-background-color);
    }
    100%{
      box-shadow: 1.25rem 0 var(--mdc-avatar-loading-indicator-background-color),
        -1.25rem 0 var(--mdc-avatar-loading-indicator-foreground-color);
      background: var(--mdc-avatar-loading-indicator-foreground-color);
    }
  }

  /* High Contrast Mode */
  @media (forced-colors: active) {
    .content:not(.photo) {
      outline: 0.125rem solid;
    }
  }
`];

export default styles;
