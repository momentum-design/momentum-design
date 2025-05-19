import Buttongroup from './buttongroup.component';
import { TAG_NAME } from './buttongroup.constants';

Buttongroup.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-buttongroup']: Buttongroup
    }
}

export default Buttongroup;
