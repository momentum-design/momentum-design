import Chip from './chip.component';
import { TAG_NAME } from './chip.constants';
import '../text';
import '../icon';

Chip.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-chip']: Chip;
  }
}

export default Chip;
