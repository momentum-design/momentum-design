import VirtualizedList from './virtualizedlist.component';
import { TAG_NAME, VIRTUALIZED_WRAPPER_TAG_NAME } from './virtualizedlist.constants';
import VirtualizedWrapper from './virtualizedlist.test.component';

VirtualizedList.register(TAG_NAME);
VirtualizedWrapper.register(VIRTUALIZED_WRAPPER_TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-virtualizedlist']: VirtualizedList
        ['mdc-virtualizedwrapper']: VirtualizedWrapper
    }
}

export default VirtualizedList;
