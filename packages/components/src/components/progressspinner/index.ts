import Progressspinner from './progressspinner.component';
import { TAG_NAME } from './progressspinner.constants';
import '../icon';

Progressspinner.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-progressspinner']: Progressspinner
    }
}

export default Progressspinner;
