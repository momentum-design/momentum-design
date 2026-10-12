import MotionProvider from './motionprovider.component';
import { TAG_NAME } from './motionprovider.constants';

MotionProvider.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-motionprovider']: MotionProvider;
  }
}

export default MotionProvider;
