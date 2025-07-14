import Skeleton from './skeleton.component';
import { TAG_NAME } from './skeleton.constants';

Skeleton.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-skeleton']: Skeleton;
  }
}

export default Skeleton;
