import ListBox from './listbox.component';
import { TAG_NAME } from './listbox.constants';

ListBox.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-listbox']: ListBox;
  }
}

export default ListBox;
