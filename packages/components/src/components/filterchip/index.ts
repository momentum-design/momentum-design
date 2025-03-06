import Filterchip from './filterchip.component';
import { TAG_NAME } from './filterchip.constants';

Filterchip.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-filterchip']: Filterchip
    }
}

export default Filterchip;
