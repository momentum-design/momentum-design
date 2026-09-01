import Number from './number.component';
import { TAG_NAME } from './number.constants';

Number.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-number']: Number
    }
}

export default Number;
