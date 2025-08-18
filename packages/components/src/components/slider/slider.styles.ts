import { css } from 'lit';

const styles = css`
  :host {
    width: 100%;
    --mdc-slider-track-color: var(--mds-color-theme-control-indicator-inactive-normal);
    --mdc-slider-thumb-color: var(--mds-color-theme-overlay-button-secondary-normal);
    --mdc-slider-thumb-border-color: var(--mds-color-theme-outline-input-normal);
    --mdc-slider-progress-color: var(--mds-color-theme-control-active-normal);
    --mdc-slider-thumb-size: 23px;
    --mdc-slider-tick-color: #bdbdbd;
    --mdc-slider-disabled-opacity: 0.4;
    --mdc-slider-soft-disabled-opacity: 0.7;
  }

  :host::part(slider-label) {
    margin-bottom: 0.5rem;
    display: block;
  }

  :host::part(slider-label),
  :host::part(slider-label-start),
  :host::part(slider-label-end) {
    color: var(--mds-color-theme-text-primary-normal);
    font-size: var(--mds-font-apps-body-midsize-medium-font-size);
    font-weight: var(--mds-font-apps-body-midsize-medium-font-weight);
    line-height: var(--mds-font-apps-body-midsize-medium-line-height);
  }

  :host::part(slider-track) {
    width: 100%;
    height: 32px;
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  :host::part(slider-labels) {
    display: flex;
    justify-content: space-between;
  }

  :host::part(leading-icon),
  :host::part(trailing-icon) {
    flex-shrink: 0;
  }

  input[type='range'] {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 0.5rem;
    background: var(--mdc-slider-track-color);
    border-radius: 0.25rem;
    outline: none;
    position: relative;
    z-index: 2;
    margin: 0;
    cursor: pointer;
    transition: background 0.2s;
  }
  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: var(--mdc-slider-thumb-size);
    height: var(--mdc-slider-thumb-size);
    background: var(--mdc-slider-thumb-color);
    border-radius: 50%;
    /* box-shadow: -60rem 0 0 60rem var(--mdc-slider-progress-color); */
    border: 1px solid var(--mdc-slider-thumb-border-color);
    transition:
      background 0.2s,
      box-shadow 0.2s;
  }

  /* :host::part(slider-ticks) {
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    height: 4px;
    pointer-events: none;
    z-index: 1;
  }
  :host::part(slider-tick) {
    position: absolute;
    top: 0;
    width: 4px;
    height: 4px;
    background: var(--mdc-slider-tick-color);
    border-radius: 50%;
    transform: translateY(-50%);
  } */

  /* input[type='range']:hover::-webkit-slider-thumb {
    background: #0072ce;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  }
  input[type='range']:active::-webkit-slider-thumb {
    background: #003e6b;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.16);
  } */
  input[type='range']:focus::-webkit-slider-thumb {
    /* replace this with focus ring */
    outline: 2px solid #0072ce;
    outline-offset: 2px;
  }
  input[type='range']::-moz-range-thumb {
    width: var(--mdc-slider-thumb-size);
    height: var(--mdc-slider-thumb-size);
    background: var(--mdc-slider-thumb-color);
    border-radius: 50%;
    border: 2px solid #fff;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    transition:
      background 0.2s,
      box-shadow 0.2s;
  }
  input[type='range']:hover::-moz-range-thumb {
    background: #0072ce;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  }
  input[type='range']:active::-moz-range-thumb {
    background: #003e6b;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.16);
  }
  input[type='range']:focus::-moz-range-thumb {
    outline: 2px solid #0072ce;
    outline-offset: 2px;
  }
  input[type='range']::-ms-thumb {
    width: var(--mdc-slider-thumb-size);
    height: var(--mdc-slider-thumb-size);
    background: var(--mdc-slider-thumb-color);
    border-radius: 50%;
    border: 2px solid #fff;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    transition:
      background 0.2s,
      box-shadow 0.2s;
  }
  input[type='range']:hover::-ms-thumb {
    background: #0072ce;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  }
  input[type='range']:active::-ms-thumb {
    background: #003e6b;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.16);
  }
  input[type='range']:focus::-ms-thumb {
    outline: 2px solid #0072ce;
    outline-offset: 2px;
  }
  input[type='range']:disabled {
    opacity: var(--mdc-slider-disabled-opacity);
    cursor: not-allowed;
  }
  :host([disabled]) input[type='range'] {
    opacity: var(--mdc-slider-disabled-opacity);
    cursor: not-allowed;
  }
  :host([soft-disabled]) input[type='range'] {
    opacity: var(--mdc-slider-soft-disabled-opacity);
    cursor: not-allowed;
  }
`;

export default [styles];
