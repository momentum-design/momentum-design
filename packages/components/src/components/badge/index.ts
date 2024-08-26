import Badge from './badge.component';
import { TAG_NAME } from './badge.constants';

Badge.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-badge']: Badge
    }
}

export default Badge;
