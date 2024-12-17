import AvatarButton from './avatarbutton.component';
import { TAG_NAME } from './avatarbutton.constants';
import '../avatar';
import '../button';

AvatarButton.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-avatarbutton']: AvatarButton
    }
}

export default AvatarButton;
