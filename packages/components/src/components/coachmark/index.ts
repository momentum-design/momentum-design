import Coachmark from './coachmark.component';
import { TAG_NAME } from './coachmark.constants';

Coachmark.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-coachmark']: Coachmark;
  }
}

export default Coachmark;
