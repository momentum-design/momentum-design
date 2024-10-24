import { css } from 'lit';
import { hostFitContentStyles } from '../../utils/styles';

const styles = [
  hostFitContentStyles,
  css`
    :host {
      --mdc-badge-text-color: var(--mds-color-theme-text-primary-normal);
      --mdc-badge-text-background-color: var(--mds-color-theme-indicator-secure);
      
      color: var(--mdc-badge-text-color);
    }
    .mdc-badge-overlay {
      outline: 0.063rem solid var(--mdc-badge-text-color);
    }
    .mdc-badge-text {
      padding: 0 0.25rem;
      border-radius: 6.25rem;
    }
    .mdc-badge-notification {
      width: 0.75rem;
      height: 0.75rem;
      border-radius: 50%;
    }
  `,
];

export default styles;
