import { css } from 'lit';

import { hostFitContentStyles, hostFocusRingStyles } from '../../utils/styles';

const styles = [
  hostFitContentStyles,
  css`
    :host {
      --mdc-icon-fill-color: currentColor;
      --mdc-icon-size: var(--computed-icon-size);
      --mdc-icon-border-radius: 0.25rem;

      height: var(--mdc-icon-size);
      width: var(--mdc-icon-size);
      border-radius: var(--mdc-icon-border-radius);
    }
    :host::part(icon) {
      height: 100%;
      width: 100%;
      fill: var(--mdc-icon-fill-color);
    }
  `,
  ...hostFocusRingStyles(),
];

export default styles;
