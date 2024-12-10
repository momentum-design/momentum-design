import { css } from 'lit';
import { hostFitContentStyles } from '../../utils/styles';

const styles = [hostFitContentStyles, css`
  :host {
    --mdc-avatar-default-background-color: var(--mds-color-theme-avatar-default);
    --mdc-avatar-default-foreground-color: var(--mds-color-theme-common-text-primary-normal);
    --mdc-avatar-loading-foreground-color: var(--mds-color-theme-common-text-primary-normal);
    --mdc-avatar-loading-background-color: var(--mds-color-core-white-alpha-50);
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
  :host([size="xx_large"]) .content > .loader {
    transform: scale(1.5);
  }
  :host([size="x_large"]) .content > .loader {
    transform: scale(1.2);
  }
  :host([size="large"]) .content > .loader,
  :host([size="midsize"]) .content > .loader {
    transform: scale(0.8);
  }
  :host([size="small"]) .content > .loader {
    transform: scale(0.6);
  }
  :host([size="x_small"]) .content > .loader {
    transform: scale(0.4);
  }
  :host([size="xx_small"]) .content > .loader {
    transform: scale(0.3);
  }
  :host([is-typing]) .content {
    opacity: 0.7;
  }
  .container {
    padding: unset;
    margin: unset;
    border-radius: 10%;
    background-color: unset;
    color: var(--mdc-avatar-default-foreground-color);
  }
  .content {
    width: 2rem;
    height: 2rem;
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
  .presence {
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .loader {
    position: absolute;
    width: 1rem;
    transform: scale(0.4);
    aspect-ratio: 1;
    border-radius: 50%;
    animation: loading-key 1s infinite linear alternate;
  }
  @keyframes loading-key {
    0%  {box-shadow: 1.25rem 0 #FFF, -1.25rem 0 #FFF2; background: #FFF;}
    33% {box-shadow: 1.25rem 0 #FFF, -1.25rem 0 #FFF2; background: #FFF2;}
    66% {box-shadow: 1.25rem 0 #FFF2, -1.25rem 0 #FFF; background: #FFF2;}
    100%{box-shadow: 1.25rem 0 #FFF2, -1.25rem 0 #FFF; background: #FFF;}
  }
`];

export default styles;
