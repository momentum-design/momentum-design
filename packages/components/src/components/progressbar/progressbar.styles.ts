import { css } from 'lit';

import { hostFitContentStyles } from '../../utils/styles';

const styles = [
  hostFitContentStyles,
  css`
    :host {
      --mdc-progressbar-background-color: var(--mds-color-theme-control-indicator-inactive-normal);
      --mdc-progressbar-progress-background-color: var(--mds-color-theme-control-active-normal);
      --mdc-progressbar-height: 0.25rem;
      --mdc-progressbar-border: 0.5px solid transparent;
      --mdc-progressbar-border-radius: var(--mdc-progressbar-height);

      width: 100%;
    }

    :host::part(label-container) {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }

    :host::part(inline-label-container) {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      width: 100%;
    }

    :host::part(progress-container) {
      display: flex;
      align-items: center;
      width: 100%;
      height: var(--mdc-progressbar-height);
    }

    :host::part(gap) {
      gap: 0.25rem;
    }

    :host([variant='inline'])::part(label) {
      overflow: unset;
    }

    :host::part(progress-bar) {
      height: 100%;
      background-color: var(--mdc-progressbar-progress-background-color);
      border-radius: var(--mdc-progressbar-border-radius);
      transition: width 0.3s ease-in-out;
    }

    :host::part(success) {
      --mdc-progressbar-progress-background-color: var(--mds-color-theme-indicator-stable);
    }

    :host::part(error) {
      --mdc-progressbar-progress-background-color: var(--mds-color-theme-indicator-attention);
    }

    :host::part(remaining) {
      height: 100%;
      flex-grow: 1;
      background-color: var(--mdc-progressbar-background-color);
      border-radius: var(--mdc-progressbar-border-radius);
    }

    :host::part(percentage) {
      font-size: var(--mds-font-apps-body-midsize-regular-font-size);
      font-weight: var(--mds-font-apps-body-midsize-regular-font-weight);
      line-height: var(--mds-font-apps-body-midsize-regular-line-height);
    }

    @media (forced-colors: active) {
      :host::part(progress-container),
      :host::part(progress-bar) {
        border: var(--mdc-progressbar-border);
      }
    }
  `,
];

export default styles;
