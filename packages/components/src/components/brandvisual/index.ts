import Brandvisual from './brandvisual.component';
import { TAG_NAME } from './brandvisual.constants';

Brandvisual.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-brandvisual']: Brandvisual;
  }
}

export default Brandvisual;
