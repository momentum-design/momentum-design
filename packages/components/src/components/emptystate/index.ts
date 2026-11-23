import EmptyState from './emptystate.component';
import { TAG_NAME } from './emptystate.constants';
import '../text';

EmptyState.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-emptystate']: EmptyState;
  }
}

export default EmptyState;
