import Presence from './presence.component';
import { TAG_NAME } from './presence.constants';
import '../icon';

Presence.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-presence']: Presence
    }
}

export default Presence;
