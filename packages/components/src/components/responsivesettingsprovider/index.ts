import ResponsiveSettingsProvider from './responsivesettingsprovider.component';
import { TAG_NAME } from './responsivesettingsprovider.constants';

ResponsiveSettingsProvider.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-responsivesettingsprovider']: ResponsiveSettingsProvider;
  }
}

export default ResponsiveSettingsProvider;
