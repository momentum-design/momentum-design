import StaticCheckbox from './staticcheckbox.component';
import { TAG_NAME } from './staticcheckbox.constants';
import '../icon';

StaticCheckbox.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-staticcheckbox']: StaticCheckbox;
  }
}

export default StaticCheckbox;
