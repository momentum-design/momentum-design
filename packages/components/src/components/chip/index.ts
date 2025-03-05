import Chip from './chip.component';
import { TAG_NAME } from './chip.constants';

Chip.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-chip']: Chip
    }
}

export default Chip;
