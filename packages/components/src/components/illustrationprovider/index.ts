import IllustrationProvider from './illustrationprovider.component';
import { TAG_NAME } from './illustrationprovider.constants';

IllustrationProvider.register(TAG_NAME);

export default IllustrationProvider;

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-illustrationprovider']: IllustrationProvider;
  }
}
