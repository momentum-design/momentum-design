import Bullet from './bullet.component';
import { TAG_NAME } from './bullet.constants';

Bullet.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-bullet']: Bullet
    }
}

export default Bullet;
