import Animation from './animation.component';
import { TAG_NAME } from './animation.constants';

Animation.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-animation']: Animation;
  }
}

export default Animation;
