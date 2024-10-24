import Badge from './badge.component';
import { TAG_NAME } from './badge.constants';
import '../icon';
import '../text';

Badge.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-badge']: Badge
    }
}

export default Badge;
