import { css } from 'lit';
import { hostFitContentStyles } from '../../utils/styles';

const styles = [
  hostFitContentStyles,
  css`
    svg {
      height: 100%;
      width: 100%;
      fill: currentColor;
    }
  `,
];

export default styles;
