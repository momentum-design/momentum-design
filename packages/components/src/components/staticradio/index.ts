import DecorativeRadio from './decorativeradio.component';
import { TAG_NAME } from './decorativeradio.constants';

DecorativeRadio.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-decorative-radio']: DecorativeRadio
    }
}

export default DecorativeRadio;
