import { css } from 'lit';

import { baseHostStyleVariables, focusRingBoxShadow } from '../../utils/styles';

const styles = css`
  :host {
    width: 100%;
    --mdc-slider-tooltip-left: 0;
    --mdc-slider-tick-left: 0;
    --mdc-slider-input-size: 0.5rem;
    --mdc-slider-thumb-size: 1.5rem;
    --mdc-slider-tick-size: 0.25rem;
    --mdc-slider-track-height: 2rem;
    --mdc-slider-thumb-color: var(--mds-color-theme-overlay-button-secondary-normal);
    --mdc-slider-thumb-border-color: var(--mds-color-theme-outline-input-normal);
    --mdc-slider-tick-color: var(--mds-color-theme-inverted-text-primary-normal);
    --mdc-slider-progress-color: var(--mds-color-theme-control-active-normal);
    --mdc-slider-track-color: var(--mds-color-theme-control-indicator-inactive-normal);
  }

  :host([disabled]),
  :host([soft-disabled]) {
    --mdc-slider-progress-color: var(--mds-color-theme-control-active-disabled);
    --mdc-slider-track-color: var(--mds-color-theme-control-inactive-disabled);
  }

  :host::part(slider-label),
  :host::part(slider-label-start),
  :host::part(slider-label-end) {
    color: var(--mds-color-theme-text-primary-normal);
    font-size: var(--mds-font-apps-body-midsize-medium-font-size);
    font-weight: var(--mds-font-apps-body-midsize-medium-font-weight);
    line-height: var(--mds-font-apps-body-midsize-medium-line-height);
  }

  :host([disabled])::part(leading-icon),
  :host([disabled])::part(trailing-icon),
  :host([soft-disabled])::part(leading-icon),
  :host([soft-disabled])::part(trailing-icon),
  :host([disabled])::part(slider-label),
  :host([disabled])::part(slider-label-start),
  :host([disabled])::part(slider-label-end),
  :host([soft-disabled])::part(slider-label),
  :host([soft-disabled])::part(slider-label-start),
  :host([soft-disabled])::part(slider-label-end) {
    color: var(--mds-color-theme-text-primary-disabled);
  }

  :host::part(slider-label) {
    margin-bottom: 0.5rem;
    display: block;
  }

  :host::part(slider-track) {
    width: 100%;
    height: var(--mdc-slider-track-height);
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  :host::part(slider-wrapper) {
    position: relative;
    width: 100%;
    height: var(--mdc-slider-track-height);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host::part(slider-labels) {
    display: flex;
    justify-content: space-between;
  }

  :host::part(leading-icon),
  :host::part(trailing-icon) {
    flex-shrink: 0;
  }

  #start-slider {
    height: 0;
    z-index: 1;
  }

  input[type='range'] {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: var(--mdc-slider-input-size);
    border-radius: 0.25rem;
    outline: none;
    margin: 0;
    position: absolute;
    pointer-events: none;
  }

  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    pointer-events: all;
    cursor: pointer;
    width: var(--mdc-slider-thumb-size);
    height: var(--mdc-slider-thumb-size);
    background: var(--mdc-slider-thumb-color);
    border-radius: 50%;
    border: 1px solid var(--mdc-slider-thumb-border-color);
  }

  input[type='range']::-moz-range-thumb {
    pointer-events: all;
    cursor: pointer;
    width: var(--mdc-slider-thumb-size);
    height: var(--mdc-slider-thumb-size);
    background: var(--mdc-slider-thumb-color);
    border-radius: 50%;
    border: 1px solid var(--mdc-slider-thumb-border-color);
  }

  input[type='range']::-ms-thumb {
    pointer-events: all;
    cursor: pointer;
    width: var(--mdc-slider-thumb-size);
    height: var(--mdc-slider-thumb-size);
    background: var(--mdc-slider-thumb-color);
    border-radius: 50%;
    border: 1px solid var(--mdc-slider-thumb-border-color);
  }

  :host([disabled]) input[type='range']::-webkit-slider-thumb {
    cursor: unset;
  }

  :host([disabled]) input[type='range']::-moz-range-thumb {
    cursor: unset;
  }

  :host([disabled]) input[type='range']::-ms-thumb {
    cursor: unset;
  }

  :host(:not([soft-disabled])) input[type='range']:not(:disabled):hover::-webkit-slider-thumb {
    --mdc-slider-thumb-color: var(--mds-color-theme-overlay-button-secondary-hover);
    --mdc-slider-thumb-border-color: var(--mds-color-theme-outline-input-active);
  }

  :host(:not([soft-disabled])) input[type='range']:not(:disabled):active::-webkit-slider-thumb {
    --mdc-slider-thumb-color: var(--mds-color-theme-overlay-button-secondary-pressed);
    --mdc-slider-thumb-border-color: var(--mds-color-theme-outline-input-active);
  }

  :host(:not([soft-disabled])) input[type='range']:not(:disabled):hover::-moz-range-thumb {
    --mdc-slider-thumb-color: var(--mds-color-theme-overlay-button-secondary-hover);
    --mdc-slider-thumb-border-color: var(--mds-color-theme-outline-input-active);
  }

  :host(:not([soft-disabled])) input[type='range']:not(:disabled):active::-moz-range-thumb {
    --mdc-slider-thumb-color: var(--mds-color-theme-overlay-button-secondary-pressed);
    --mdc-slider-thumb-border-color: var(--mds-color-theme-outline-input-active);
  }

  :host(:not([soft-disabled])) input[type='range']:not(:disabled):hover::-ms-thumb {
    --mdc-slider-thumb-color: var(--mds-color-theme-overlay-button-secondary-hover);
    --mdc-slider-thumb-border-color: var(--mds-color-theme-outline-input-active);
  }

  :host(:not([soft-disabled])) input[type='range']:not(:disabled):active::-ms-thumb {
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
    position: absolute;
    bottom: 120%;
    border-radius: 0.5rem;
    border: 1px solid var(--mds-color-theme-outline-secondary-normal);
    background-color: var(--mds-color-theme-background-solid-primary-normal);
    filter: var(--mds-elevation-3);
    padding: 0.5rem;
    transform: translateX(-50%);
    left: calc(
      var(--mdc-slider-tooltip-left) * (100% - var(--mdc-slider-thumb-size)) + (var(--mdc-slider-thumb-size) / 2)
    );
  }

  :host::part(slider-ticks) {
    position: absolute;
    bottom: 7%;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
  }

  :host::part(slider-tick) {
    position: absolute;
    top: 50%;
    width: var(--mdc-slider-tick-size);
    height: var(--mdc-slider-tick-size);
    background: var(--mdc-slider-tick-color);
    border-radius: 50%;
    transform: translateX(-50%);
    left: calc(
      var(--mdc-slider-tick-left) * (100% - var(--mdc-slider-thumb-size)) + (var(--mdc-slider-thumb-size) / 2)
    );
  }

  @media (forced-colors: active) {
    :host::part(end-slider),
    :host::part(single-slider),
    :host::part(slider-tick) {
      border: 1px solid;
    }
  }
`;

export default [baseHostStyleVariables, styles];
