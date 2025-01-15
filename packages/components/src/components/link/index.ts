import Link from './link.component';
import { TAG_NAME } from './link.constants';
import '../icon';

Link.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-link']: Link
    }
}

export default Link;
