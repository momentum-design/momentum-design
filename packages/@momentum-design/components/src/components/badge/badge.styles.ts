import { css } from 'lit';
import { hostFitContentStyles } from '../../utils/styles';

const styles = [
  hostFitContentStyles,
  css`
    :host {
      --mdc-badge-icon-background-color: var(--mds-color-theme-background-accent-normal);
    }

    .mdc-badge-container {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 9999px;
      background-color: var(--mdc-badge-icon-background-color);
    }

    .mdc-badge-icon-container {
      height: 80%;
      width: 80%;
    }
  `,
];

export default styles;
