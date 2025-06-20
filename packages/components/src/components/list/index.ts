import List from './list.component';
import { TAG_NAME } from './list.constants';
import '../text';

List.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-list']: List;
  }
}

export default List;
