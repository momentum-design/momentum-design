import Avatarbutton from './avatarbutton.component';
import { TAG_NAME } from './avatarbutton.constants';
import '../avatar';

Avatarbutton.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-avatarbutton']: Avatarbutton
    }
}

export default Avatarbutton;
