import ButtonAvatar from './buttonavatar.component';
import { TAG_NAME } from './buttonavatar.constants';
import '../avatar';
import '../button';

ButtonAvatar.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-buttonavatar']: ButtonAvatar
    }
}

export default ButtonAvatar;
