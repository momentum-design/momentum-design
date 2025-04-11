import Toggletip from './toggletip.component';
import { TAG_NAME } from './toggletip.constants';
import '../button';
import '../screenreaderannouncer';

Toggletip.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-toggletip']: Toggletip
    }
}

export default Toggletip;
