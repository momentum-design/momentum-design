import SubComponentFocusRing from './subcomponent-focusring.component';
import { TAG_NAME } from './subcomponent-focusring.constants';

SubComponentFocusRing.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-subcomponent-focusring']: SubComponentFocusRing;
    }
}

export default SubComponentFocusRing;
