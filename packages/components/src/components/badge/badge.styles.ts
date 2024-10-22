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
      border-radius: 9999px;
    }
    .mdc-badge-base {
      padding: 8px;
      height: 12px;
    }
  `,
];

export default styles;
