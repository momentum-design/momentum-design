import CardCheckbox from './cardcheckbox.component';
import { TAG_NAME } from './cardcheckbox.constants';
import '../icon';
import '../text';
import '../staticcheckbox';

CardCheckbox.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-cardcheckbox']: CardCheckbox
    }
}

export default CardCheckbox;
