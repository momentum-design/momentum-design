import NumberInput from './numberinput.component';
import { TAG_NAME } from './numberinput.constants';

NumberInput.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-numberinput']: NumberInput
    }
}

export default NumberInput;
