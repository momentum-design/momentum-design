import { css } from 'lit';
import { hostFitContentStyles, hostFocusRingStyles } from '../../utils/styles';

const styles = [
  hostFitContentStyles,
  css`
    .button:focus, .radio:focus, .checkbox:focus {
      outline: none;
    }
  `,
  ...hostFocusRingStyles(),
];

export default styles;
