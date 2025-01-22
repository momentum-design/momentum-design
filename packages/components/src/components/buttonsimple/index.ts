import Buttonsimple from './buttonsimple.component';
import { TAG_NAME } from './buttonsimple.constants';

Buttonsimple.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-buttonsimple']: Buttonsimple
    }
}

export default Buttonsimple;
