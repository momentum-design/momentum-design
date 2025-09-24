import { css } from 'lit';

import { hostFitContentStyles } from '../../utils/styles';

const styles = [
  hostFitContentStyles,
  css`
    :host {
      --mdc-illustration-size: auto;
    }
    :host::part(illustration) {
      height: var(--mdc-illustration-size);
      width: var(--mdc-illustration-size);
    }
  `,
];

export default styles;
