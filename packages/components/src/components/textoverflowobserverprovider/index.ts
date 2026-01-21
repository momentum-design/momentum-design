import TextOverflowObserverProvider from './textoverflowobserverprovider.component';
import { TAG_NAME } from './textoverflowobserverprovider.constants';

TextOverflowObserverProvider.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-textoverflowobserverprovider']: TextOverflowObserverProvider;
  }
}

export default TextOverflowObserverProvider;
