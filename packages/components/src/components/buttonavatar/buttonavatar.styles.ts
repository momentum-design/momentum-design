import { css } from 'lit';
import { hostFitContentStyles, hostFocusRingStyles } from '../../utils/styles';

const styles = [hostFitContentStyles, css`
  :host {
    padding: unset;
    margin: unset;
  }
`, hostFocusRingStyles];

export default styles;
