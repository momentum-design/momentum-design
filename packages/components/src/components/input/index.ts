import Input from './input.component';
import { TAG_NAME } from './input.constants';
import '../icon';
import '../text';
import '../button';

Input.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-input']: Input
    }
}

export default Input;
