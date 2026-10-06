import AnimatedBackground from './animatedbackground.component';
import { TAG_NAME } from './animatedbackground.constants';

AnimatedBackground.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-animatedbackground']: AnimatedBackground;
  }
}

export default AnimatedBackground;
