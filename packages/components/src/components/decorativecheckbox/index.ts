import DecorativeCheckbox from './decorativecheckbox.component';
import { TAG_NAME } from './decorativecheckbox.constants';
import '../icon';

DecorativeCheckbox.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-decorative-checkbox']: DecorativeCheckbox
    }
}

export default DecorativeCheckbox;
