import Button from './button.component';
import { TAG_NAME } from './button.constants';
import '../icon';

Button.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-button']: Button
    }
}

export default Button;
