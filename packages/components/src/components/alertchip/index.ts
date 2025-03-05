import Alertchip from './alertchip.component';
import { TAG_NAME } from './alertchip.constants';
import '../text';
import '../icon';

Alertchip.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-alertchip']: Alertchip
    }
}

export default Alertchip;
