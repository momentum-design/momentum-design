import Modalcontainer from './modalcontainer.component';
import { TAG_NAME } from './modalcontainer.constants';
import '../text';

Modalcontainer.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-modalcontainer']: Modalcontainer
    }
}

export default Modalcontainer;
