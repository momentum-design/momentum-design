import Toggle from './toggle.component';
import { TAG_NAME } from './toggle.constants';
import '../icon';
import '../button';

Toggle.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-toggle']: Toggle
    }
}

export default Toggle;
