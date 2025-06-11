import '../button';
import '../icon';
import '../text';
import '../toggletip';
import Input from './input.component';
import { TAG_NAME } from './input.constants';

Input.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-input']: Input
    }
}

export default Input;
