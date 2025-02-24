import ListItem from './listitem.component';
import { TAG_NAME } from './listitem.constants';
import '../text';

ListItem.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-listitem']: ListItem
    }
}

export default ListItem;
