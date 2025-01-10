import { css } from 'lit';
import { hostFitContentStyles } from '../../utils/styles';

const styles = [
  hostFitContentStyles,
  css`
    :host {
      --mdc-icon-fill-color: currentColor;
      --mdc-icon-computed-size: var(--computed-icon-size);
    }
    :host::part(icon) {
      height: var( --mdc-icon-computed-size, 100%);
      width: var( --mdc-icon-computed-size, 100%);
      fill: var(--mdc-icon-fill-color);
    }
  `,
];

export default styles;
