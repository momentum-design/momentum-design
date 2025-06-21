import OptGroup from './optgroup.component';
import { TAG_NAME } from './optgroup.constants';
import '../text';

OptGroup.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-optgroup']: OptGroup;
  }
}

export default OptGroup;
