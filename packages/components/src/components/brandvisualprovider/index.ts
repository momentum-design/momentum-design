import BrandVisualProvider from './brandvisualprovider.component';
import { TAG_NAME } from './brandvisualprovider.constants';

BrandVisualProvider.register(TAG_NAME);

export default BrandVisualProvider;

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-brandvisualprovider']: BrandVisualProvider;
  }
}
