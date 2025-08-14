import { css } from 'lit';

const styles = css`
  :host {
    display: block;
    width: 100%;
    --mdc-slider-track-color: #d1d5db;
    --mdc-slider-thumb-color: #005fa3;
    --mdc-slider-thumb-size: 20px;
    --mdc-slider-tick-color: #bdbdbd;
    --mdc-slider-disabled-opacity: 0.4;
    --mdc-slider-soft-disabled-opacity: 0.7;
    --mdc-slider-label-color: #222;
    --mdc-slider-label-font: 14px/1.2 'Inter', Arial, sans-serif;
  }

  :host::part(slider-container) {
    width: 100%;
    padding: 16px 0 0 0;
    box-sizing: border-box;
  }

  :host::part(slider-label) {
    display: block;
    color: var(--mdc-slider-label-color);
    font: var(--mdc-slider-label-font);
    margin-bottom: 8px;
  }

  :host::part(slider-track) {
    position: relative;
    width: 100%;
    height: 32px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  :host::part(slider-ticks) {
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
    width: 2px;
    height: 12px;
    background: var(--mdc-slider-tick-color);
    border-radius: 1px;
    transform: translateY(-50%);
  }

  input[type='range'] {
    -webkit-appearance: none;
    width: 100%;
    height: 4px;
    background: var(--mdc-slider-track-color);
    border-radius: 2px;
    outline: none;
    position: relative;
    z-index: 2;
    margin: 0;
    transition: background 0.2s;
  }
  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: var(--mdc-slider-thumb-size);
    height: var(--mdc-slider-thumb-size);
    background: var(--mdc-slider-thumb-color);
    border-radius: 50%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    border: 2px solid #fff;
    cursor: pointer;
    transition:
      background 0.2s,
      box-shadow 0.2s;
  }
  input[type='range']:hover::-webkit-slider-thumb {
    background: #0072ce;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  }
  input[type='range']:active::-webkit-slider-thumb {
    background: #003e6b;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.16);
  }
  input[type='range']:focus::-webkit-slider-thumb {
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
  :host([disabled])::part(slider-container) input[type='range'] {
    opacity: var(--mdc-slider-disabled-opacity);
    cursor: not-allowed;
  }
  :host([soft-disabled])::part(slider-container) input[type='range'] {
    opacity: var(--mdc-slider-soft-disabled-opacity);
    cursor: not-allowed;
  }

  :host::part(slider-tooltip) {
    position: absolute;
    top: -32px;
    transform: translateX(-50%);
    background: #fff;
    color: #222;
    font: var(--mdc-slider-label-font);
    padding: 4px 10px;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    pointer-events: none;
    z-index: 10;
    white-space: nowrap;
    min-width: 32px;
    max-width: 80px;
    text-align: center;
    left: unset;
  }

  :host::part(slider-labels) {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    font: var(--mdc-slider-label-font);
    color: var(--mdc-slider-label-color);
  }

  :host::part(slider-label-start),
  :host::part(slider-label-end) {
    min-width: 40px;
    text-align: center;
  }

  mdc-icon[part='leading-icon'],
  mdc-icon[part='trailing-icon'] {
    font-size: 20px;
    margin: 0 8px;
    color: #888;
    vertical-align: middle;
  }

  @media (max-width: 600px) {
    :host::part(slider-root) {
      padding: 8px 0 0 0;
    }
    :host::part(slider-label) {
      font-size: 12px;
    }
    :host::part(slider-labels) {
      font-size: 12px;
    }
    :host::part(slider-tooltip) {
      font-size: 12px;
      padding: 2px 6px;
    }
  }
`;

export default [styles];
