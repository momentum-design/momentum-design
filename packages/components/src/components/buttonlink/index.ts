import Buttonlink from './buttonlink.component';
import { TAG_NAME } from './buttonlink.constants';
import '../icon';

Buttonlink.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-buttonlink']: Buttonlink
    }
}

export default Buttonlink;
