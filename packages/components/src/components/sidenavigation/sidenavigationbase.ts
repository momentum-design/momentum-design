import { Provider } from '../../models';

import SideNavigationContext from './sidenavigation.context';

/**
 * The `SideNavigationBase` class serves as a foundational component for the side navigation feature. It extends the `Provider` class, which allows it to manage and provide the `SideNavigationContext` to its child components. Since `KeyToActionMixin` cannot be directly applied to a `Provider` with context, this base class is created as an intermediate layer. The `SideNavigation` component then extends this class and wraps it with `KeyToActionMixin` to gain mixin functionality while maintaining context management.
 */
class SideNavigationBase extends Provider<SideNavigationContext> {}

export default SideNavigationBase;
