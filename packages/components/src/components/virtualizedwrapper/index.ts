import VirtualizedWrapper from './virtualizedwrapper.component';
import { TAG_NAME } from './virtualizedwrapper.constants';

VirtualizedWrapper.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-virtualizedwrapper']: VirtualizedWrapper
    }
}

export default VirtualizedWrapper;
