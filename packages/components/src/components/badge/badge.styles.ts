import { css } from 'lit';
import { hostFitContentStyles } from '../../utils/styles';

const styles = [
  hostFitContentStyles,
  css`
    .mdc-badge-container {
      max-height: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100%;
    }
    .mdc-badge-overlay {
      border: 1px solid black;
    }
    .mdc-badge-text {
      padding: 0 4px;
      border-radius: 6.25rem;
      line-height: 1px;
      color: var(--mds-color-theme-text-primary-normal);
      background-color: var(--mds-color-theme-indicator-secure);
    }
  `,
];

export default styles;
