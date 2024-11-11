import Button from './button.component';
import { TAG_NAME } from './button.constants';

Button.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-button']: Button
    }
}

export default Button;
