import List from './list.component';
import { TAG_NAME } from './list.constants';

List.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-list']: List;
  }
}

export default List;
