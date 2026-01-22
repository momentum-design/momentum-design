import OverflowObserver from './overflowobserver.component';
import { TAG_NAME } from './overflowobserver.constants';

OverflowObserver.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-overflowobserver']: OverflowObserver;
  }
}

export default OverflowObserver;
