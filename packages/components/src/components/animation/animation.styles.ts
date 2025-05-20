import { css } from 'lit';
import { hostFitContentStyles } from '../../utils/styles';

const styles = [hostFitContentStyles, css`
  :host svg{
    display: block;
  }
`];

export default styles;
