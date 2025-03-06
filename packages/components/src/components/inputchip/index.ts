import Inputchip from './inputchip.component';
import { TAG_NAME } from './inputchip.constants';

Inputchip.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-inputchip']: Inputchip
    }
}

export default Inputchip;
