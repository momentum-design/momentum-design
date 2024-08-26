import ThemeProvider from './themeprovider.component';
import { TAG_NAME } from './themeprovider.constants';

ThemeProvider.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-themeprovider']: ThemeProvider
    }
}

export default ThemeProvider;
