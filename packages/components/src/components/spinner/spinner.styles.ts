import { css } from 'lit';

import { hostFitContentStyles } from '../../utils/styles';

const styles = [
  hostFitContentStyles,
  css`
    :host {
      --mdc-spinner-default-color: var(--mds-color-theme-control-active-normal);
      --mdc-spinner-inverted-color: var(--mds-color-theme-inverted-control-active-normal);
      --mdc-spinner-button-variant-color: currentColor;
      --mdc-spinner-color: var(--mdc-spinner-default-color);
      --mdc-spinner-size: 100%;
    }

    :host([inverted]) {
      --mdc-spinner-color: var(--mdc-spinner-inverted-color);
    }

    :host([size='large']) {
      --mdc-spinner-size: 6rem;
    }

    :host([size='midsize']) {
      --mdc-spinner-size: 3rem;
    }

    :host([size='small']) {
      --mdc-spinner-size: 1.5rem;
    }

    :host([variant='button']) {
      --mdc-spinner-color: var(--mdc-spinner-button-variant-color);
    }

    :host::part(container) {
      width: var(--mdc-spinner-size);
      height: var(--mdc-spinner-size);
      animation: rotate 1.5s linear infinite;
    }

    :host::part(circle) {
      fill: none;
      stroke: var(--mdc-spinner-color);
      stroke-width: 8%;
      stroke-linecap: round;
      animation: dash 1.5s ease-in-out infinite;
      transform: rotate(-90deg);
      transform-origin: center;
    }

    @keyframes rotate {
      100% {
        transform: rotate(360deg);
      }
    }

    @keyframes dash {
      0% {
        stroke-dasharray: 1, 470;
      }
      50% {
        stroke-dasharray: 209, 470;
        stroke-dashoffset: -83;
      }
      100% {
        stroke-dasharray: 209, 470;
        stroke-dashoffset: -292;
      }
    }
  `,
];

export default styles;
