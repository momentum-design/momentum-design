import Accordiongroup from './accordiongroup.component';
import { TAG_NAME } from './accordiongroup.constants';

Accordiongroup.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-accordiongroup']: Accordiongroup;
  }
}

export default Accordiongroup;
