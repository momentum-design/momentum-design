import SpatialNavigationProvider from './spatialnavigationprovider.component';
import { TAG_NAME } from './spatialnavigationprovider.constants';

SpatialNavigationProvider.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-spatialnavigationprovider']: SpatialNavigationProvider;
  }
}

export default SpatialNavigationProvider;
