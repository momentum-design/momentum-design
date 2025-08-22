import { css } from 'lit';

import { baseHostStyleVariables, focusRingBoxShadow } from '../../utils/styles';

const styles = css`
  :host {
    width: 100%;
    --mdc-slider-thumb-color: var(--mds-color-theme-overlay-button-secondary-normal);
    --mdc-slider-thumb-border-color: var(--mds-color-theme-outline-input-normal);
    --mdc-slider-thumb-size: 1.4375rem;
    --mdc-slider-track-height: 2rem;
    --mdc-slider-tick-color: var(--mds-color-theme-inverted-text-primary-normal);
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
    height: var(--mdc-slider-track-height);
    display: flex;
    align-items: center;
    gap: 0.75rem;
    position: relative;
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
    border-radius: 0.25rem;
    outline: none;
    margin: 0;
    cursor: pointer;
  }

  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: var(--mdc-slider-thumb-size);
    height: var(--mdc-slider-thumb-size);
    background: var(--mdc-slider-thumb-color);
    border-radius: 50%;
    border: 1px solid var(--mdc-slider-thumb-border-color);
  }

  input[type='range']::-moz-range-thumb {
    width: var(--mdc-slider-thumb-size);
    height: var(--mdc-slider-thumb-size);
    background: var(--mdc-slider-thumb-color);
    border-radius: 50%;
    border: 1px solid var(--mdc-slider-thumb-border-color);
  }

  input[type='range']::-ms-thumb {
    width: var(--mdc-slider-thumb-size);
    height: var(--mdc-slider-thumb-size);
    background: var(--mdc-slider-thumb-color);
    border-radius: 50%;
    border: 1px solid var(--mdc-slider-thumb-border-color);
  }

  input[type='range']:hover::-webkit-slider-thumb {
    --mdc-slider-thumb-color: var(--mds-color-theme-overlay-button-secondary-hover);
    --mdc-slider-thumb-border-color: var(--mds-color-theme-outline-input-active);
  }

  input[type='range']:active::-webkit-slider-thumb {
    --mdc-slider-thumb-color: var(--mds-color-theme-overlay-button-secondary-pressed);
    --mdc-slider-thumb-border-color: var(--mds-color-theme-outline-input-active);
  }

  input[type='range']:hover::-moz-range-thumb {
    --mdc-slider-thumb-color: var(--mds-color-theme-overlay-button-secondary-hover);
    --mdc-slider-thumb-border-color: var(--mds-color-theme-outline-input-active);
  }

  input[type='range']:active::-moz-range-thumb {
    --mdc-slider-thumb-color: var(--mds-color-theme-overlay-button-secondary-pressed);
    --mdc-slider-thumb-border-color: var(--mds-color-theme-outline-input-active);
  }

  input[type='range']:hover::-ms-thumb {
    --mdc-slider-thumb-color: var(--mds-color-theme-overlay-button-secondary-hover);
    --mdc-slider-thumb-border-color: var(--mds-color-theme-outline-input-active);
  }

  input[type='range']:active::-ms-thumb {
    --mdc-slider-thumb-color: var(--mds-color-theme-overlay-button-secondary-pressed);
    --mdc-slider-thumb-border-color: var(--mds-color-theme-outline-input-active);
  }

  input[type='range']:focus::-webkit-slider-thumb {
    box-shadow: ${focusRingBoxShadow};
  }

  input[type='range']:focus::-moz-range-thumb {
    box-shadow: ${focusRingBoxShadow};
  }

  input[type='range']:focus::-ms-thumb {
    box-shadow: ${focusRingBoxShadow};
  }

  :host::part(slider-tooltip) {
    /* make this position dynamic, above slider thumb */
    position: absolute;
    top: 1rem;
    left: 50%;
  }

  :host::part(slider-ticks) {
    position: absolute;
    left: 34px;
    right: 0;
    top: 50%;
    height: 0.25rem;
    width: 90.75%;
    z-index: 1;
  }

  :host::part(slider-tick) {
    position: absolute;
    top: 0;
    width: 0.25rem;
    height: 0.25rem;
    background: var(--mdc-slider-tick-color);
    /* background-color: white; */
    border-radius: 50%;
    transform: translateY(-50%);
  }
`;

export default [baseHostStyleVariables, styles];
