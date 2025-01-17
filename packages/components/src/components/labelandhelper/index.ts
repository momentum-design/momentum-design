import LabelAndHelper from './labelandhelper.component';
import { TAG_NAME } from './labelandhelper.constants';
import '../icon';
import '../text';

LabelAndHelper.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-labelandhelper']: LabelAndHelper;
  }
}

export default LabelAndHelper;
