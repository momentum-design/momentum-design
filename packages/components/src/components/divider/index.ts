import Divider from './divider.component';
import { TAG_NAME } from './divider.constants';

Divider.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-divider']: Divider
    }
}

export default Divider;
