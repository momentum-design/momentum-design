import { css } from 'lit';

export default css`
  :host {
    display: block;
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .surface {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: var(--mds-color-theme-background-gradient-uplift-base, #000);
  }

  .surface canvas {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: block;
  }

  .dom-root {
    position: absolute;
    inset: 0;
    overflow: hidden;
    isolation: isolate;
  }

  .dom-stage {
    position: absolute;
    left: 0;
    top: 0;
    width: 1280px;
    height: 720px;
    transform-origin: 0 0;
  }

  .dom-ellipse-group {
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 0;
  }

  .dom-ellipse {
    position: absolute;
    left: 0;
    top: 0;
    overflow: visible;
    transform-origin: 0 0;
  }

  .dom-grain {
    position: absolute;
    inset: 0;
    background-repeat: repeat;
    background-size: 160px 160px;
    mix-blend-mode: overlay;
    pointer-events: none;
  }
`;
