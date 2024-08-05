import IconProvider from './iconprovider.component';
import { TAG_NAME } from './iconprovider.constants';

IconProvider.register(TAG_NAME);

export default IconProvider;

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-iconprovider']: IconProvider
    }
}
