import { css } from 'lit';

const styles = css`
  :host {
    --mdc-spinner-size: 3rem;
    --mdc-track-color: var(--mds-color-theme-control-indicator-inactive-normal);
    --mdc-progress-color: var(--mds-color-theme-control-active-normal);
    --mdc-progress-success-color: var(--mds-color-theme-text-success-normal);
    --mdc-progress-error-color: var(--mds-color-theme-text-error-normal);

    display: block;
  }

  :host::part(spinner-container) {
    width: 3rem;
    height: 3rem;
    position: relative;
  }

  :host::part(spinner-base) {
    width: var(--mdc-spinner-size);
    height: var(--mdc-spinner-size);
    rotate: -90deg;
  }

  :host::part(spinner-track) {
    stroke: var(--mdc-track-color);
    stroke-linecap: round;
    fill: none;
  }

  :host::part(spinner-progress) {
    stroke: var(--mdc-progress-color);
    stroke-linecap: round;
    fill: none;
    transition: stroke-dasharray 0.3s ease-in-out;
  }

  :host::part(success-icon) {
    color: var(--mdc-progress-success-color);
}

  :host::part(error-icon) {
    color: var(--mdc-progress-error-color);
    margin: 0.5rem;
  }
`;

export default [styles];
