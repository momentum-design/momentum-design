import { css } from 'lit';
import { hostFitContentStyles } from '../../utils/styles';

const styles = [
  hostFitContentStyles,
  css`
    :host {
      --mdc-badge-text-color: var(--mds-color-theme-text-primary-normal);
      --mdc-badge-text-background-color: var(--mds-color-theme-indicator-secure);
    }
    .mdc-badge-container {
      max-height: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100%;
    }
    .mdc-badge-overlay {
      outline: 1px solid var(--mdc-badge-text-color);
    }
    .mdc-badge-text {
      padding: 0 0.25rem;
      border-radius: 6.25rem;
      line-height: 1px;
      color: var(--mdc-badge-text-color);
      background-color: var(--mdc-badge-text-background-color);
    }
  `,
];

export default styles;
