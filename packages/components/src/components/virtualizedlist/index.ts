import Virtualizedlist from './virtualizedlist.component';
import { TAG_NAME } from './virtualizedlist.constants';

Virtualizedlist.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-virtualizedlist']: Virtualizedlist
    }
}

export default Virtualizedlist;
