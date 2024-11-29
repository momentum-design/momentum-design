import { css } from 'lit';

const styles = css`
  :host {
    --mdc-avatar-default-background-color: var(--mds-color-theme-avatar-default);
    --mdc-avatar-default-foreground-color: var(--mds-color-theme-common-text-primary-normal);
    --mdc-avatar-loading-background-color: var(--mds-color-theme-common-overlays-secondary-normal);
  }
  :host([size="xx_large"]) .container, :host([size="xx_large"]) .content {
    width: 7.75rem;
    height: 7.75rem;
  }
  :host([size="x_large"]) .container, :host([size="x_large"]) .content {
    width: 5.5rem;
    height: 5.5rem;
  }
  :host([size="large"]) .container, :host([size="large"]) .content {
    width: 4.5rem;
    height: 4.5rem;
  }
  :host([size="midsize"]) .container, :host([size="midsize"]) .content {
    width: 4rem;
    height: 4rem;
  }
  :host([size="small"]) .container, :host([size="small"]) .content {
    width: 3rem;
    height: 3rem;
  }
  :host([size="x_small"]) .container, :host([size="x_small"]) .content {
    width: 2rem;
    height: 2rem;
  }
  :host([size="xx_small"]) .container, :host([size="xx_small"]) .content {
    width: 1.5rem;
    height: 1.5rem;
  }
  .place-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .container {
    padding: unset;
    margin: unset;
    border-radius: 10%;
    background-color: unset;
    color: var(--mdc-avatar-default-foreground-color);
  }
  .content {
    cursor: pointer;
    background-color: var(--mdc-avatar-default-background-color);
    border-radius: 50%;
    position: relative;
    display: grid;
    place-items: center;
  }
  .photo {
    border-radius: 50%;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .icon {
    height: 100%;
    width: 100%;
    color: white;
  }
  .presence {
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .loading__container {
    position: absolute;
    display: grid;
    place-items: center;
    background-color: var(--mdc-avatar-loading-background-color);
  }
  .loading__wrapper {
    position: absolute;
    display: flex;
    justify-content: space-evenly;
  }
 .loading__icon {
    vertical-align: middle;
    animation-duration: 1.4s;
    animation-iteration-count: infinite;
    animation-name: loading;
    animation-fill-mode: both;
  }
  .loading__icon:nth-of-type(2) {
    animation-delay: 0.2s;
  }
  .loading__icon:nth-of-type(3) {
    animation-delay: 0.4s;
  }
  .loading__icon:not(:last-child) {
    margin-right: 0.5rem;
  }
  @keyframes loading {
    0%,
    100% {
      opacity: 0.1;
      transform: scale(0, 0);
    }

    20% {
      opacity: 1;
      transform: scale(1, 1);
    }
  }
`;

export default [styles];
