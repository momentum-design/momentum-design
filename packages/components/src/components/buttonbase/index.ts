import Buttonbase from './buttonbase.component';
import { TAG_NAME } from './buttonbase.constants';

Buttonbase.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-buttonbase']: Buttonbase
    }
}

export default Buttonbase;
