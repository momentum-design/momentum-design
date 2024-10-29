import { css } from 'lit';
import { hostFitContentStyles, hostFocusRingStyles } from '../../utils/styles';

const styles = [
  hostFitContentStyles,
  css`
    :host {
      font-family: sans-serif;
    }
  `,
  hostFocusRingStyles,
];

export default styles;
