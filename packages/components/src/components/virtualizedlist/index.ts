import VirtualizedList from './virtualizedlist.component';
import { TAG_NAME } from './virtualizedlist.constants';

VirtualizedList.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-virtualizedlist']: VirtualizedList;
  }
}

export default VirtualizedList;
