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
  :host([size="large"]) .container > .content > .loader,
  :host([size="midsize"]) .container > .content > .loader {
    transform: scale(0.8);
  }
  :host([size="small"]) .container > .content > .loader {
    transform: scale(0.6);
  }
  :host([size="x_small"]) .container > .content > .loader {
    transform: scale(0.4);
  }
  :host([size="xx_small"]) .container > .content > .loader {
    transform: scale(0.3);
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
  .loader {
    position: absolute;
    width: 1rem;
    aspect-ratio: 1;
    border-radius: 50%;
    animation: loading-key 1s infinite linear alternate;
  }
  @keyframes loading-key {
    0%  {box-shadow: 1.25rem 0 #000, -1.25rem 0 #0002; background: #000}
    33% {box-shadow: 1.25rem 0 #000, -1.25rem 0 #0002; background: #0002}
    66% {box-shadow: 1.25rem 0 #0002,-1.25rem 0 #000; background: #0002}
    100%{box-shadow: 1.25rem 0 #0002,-1.25rem 0 #000; background: #000}
  }
`;

export default [styles];
