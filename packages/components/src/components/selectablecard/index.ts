import SelectableCard from './selectablecard.component';
import { TAG_NAME } from './selectablecard.constants';
import '../checkbox';
import '../radio';
import '../icon';

SelectableCard.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-selectable-card']: SelectableCard
    }
}

export default SelectableCard;
