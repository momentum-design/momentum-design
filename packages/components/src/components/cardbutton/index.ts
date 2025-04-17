import Cardbutton from './cardbutton.component';
import { TAG_NAME } from './cardbutton.constants';

Cardbutton.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-cardbutton']: Cardbutton
    }
}

export default Cardbutton;
