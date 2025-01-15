import { css } from 'lit';
import { hostFitContentStyles } from '../../utils/styles';

const styles = [
  hostFitContentStyles,
  css`
    :host {
      --mdc-icon-fill-color: currentColor;
      --mdc-icon-computed-size: var(--computed-icon-size);

      height: var(--mdc-icon-computed-size);
      width: var(--mdc-icon-computed-size);
    }
    :host::part(icon) {
      height: 100%;
      width: 100%;
      fill: var(--mdc-icon-fill-color);
    }
  `,
];

export default styles;
