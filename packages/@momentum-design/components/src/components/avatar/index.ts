import Avatar from './avatar.component';
import { TAG_NAME } from './avatar.constants';

Avatar.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-avatar']: Avatar
    }
}

export default Avatar;
