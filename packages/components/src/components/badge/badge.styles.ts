import { css } from 'lit';
import { hostFitContentStyles } from '../../utils/styles';

const styles = [
  hostFitContentStyles,
  css`
    :host {
      --mdc-badge-text-color: var(--mds-color-theme-text-primary-normal);
      --mdc-badge-text-background-color: var(--mds-color-theme-indicator-secure);
      --mdc-badge-overlay-background-color: var(--mds-color-theme-background-solid-primary-normal);
      
      color: var(--mdc-badge-text-color);
    }
    .mdc-badge-overlay {
      outline: 0.0625rem solid var(--mdc-badge-overlay-background-color);
    }
    .mdc-badge-text {
      padding: 0 0.25rem;
      border-radius: 6.25rem;
      min-width: 1rem;
      display: flex;
      justify-content: center;
    }
    .mdc-badge-notification {
      width: 0.75rem;
      height: 0.75rem;
      border-radius: 50%;
    }
  `,
];

export default styles;
