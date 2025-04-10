import SelectableCard from './selectablecard.component';
import { TAG_NAME } from './selectablecard.constants';
import '../decorativecheckbox';
import '../decorativeradio';
import '../icon';
import '../text';

SelectableCard.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-selectable-card']: SelectableCard
    }
}

export default SelectableCard;
