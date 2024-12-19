import Marker from './marker.component';
import { TAG_NAME } from './marker.constants';

Marker.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-marker']: Marker
    }
}

export default Marker;
