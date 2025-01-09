import { css } from 'lit';
import { hostFitContentStyles } from '../../utils/styles';

const styles = [
  hostFitContentStyles,
  css`
    :host {
      --mdc-icon-fill-color: currentColor;
    }
    :host::part(icon) {
      height: var(--computed-icon-size, 100%);
      width: var(--computed-icon-size, 100%);
      fill: var(--mdc-icon-fill-color);
    }
  `,
];

export default styles;
