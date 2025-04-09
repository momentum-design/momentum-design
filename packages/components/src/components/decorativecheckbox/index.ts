import Decorativecheckbox from './decorativecheckbox.component';
import { TAG_NAME } from './decorativecheckbox.constants';
import '../icon';

Decorativecheckbox.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-decorativecheckbox']: Decorativecheckbox
    }
}

export default Decorativecheckbox;
