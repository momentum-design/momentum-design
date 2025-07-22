import { css } from 'lit';

import { hostFitContentStyles } from '../../utils/styles';

const styles = css`
  :host {
    width: 100%;
    gap: 0.5rem;
  }

  ::slotted(mdc-stepperitem) {
    flex-shrink: 0;
  }

  :host([orientation='vertical']) {
    flex-direction: column;
    height: 100%;
    align-items: flex-start;
  }
`;

export default [hostFitContentStyles, styles];
