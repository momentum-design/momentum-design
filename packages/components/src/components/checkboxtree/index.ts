import '../button';
import '../checkbox';
import '../icon';
import '../statusmessage';
import '../text';
import '../toggletip';
import CheckboxTree from './checkboxtree.component';
import { TAG_NAME } from './checkboxtree.constants';

CheckboxTree.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-checkboxtree']: CheckboxTree;
  }
}

export default CheckboxTree;
