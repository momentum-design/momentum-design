import Avatar from './avatar.component';
import { TAG_NAME } from './avatar.constants';
import '../icon';
import '../presence';
import '../text';

Avatar.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-avatar']: Avatar
    }
}

export default Avatar;
