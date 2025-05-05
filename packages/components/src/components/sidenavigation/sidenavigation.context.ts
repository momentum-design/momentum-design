import { createContext } from '@lit/context';

import { TAG_NAME } from './sidenavigation.constants';

class SideNavigationContext {
  public variant?: string;

  public customerName?: string;

  public isExpanded?: boolean;

  public static context = createContext<SideNavigationContext>(TAG_NAME);

  // Constructor to allow setting default values
  constructor(
    defaultVariant?: string,
    defaultCustomerName?: string,
    defaultIsExpanded?: boolean,
  ) {
    this.variant = defaultVariant;
    this.customerName = defaultCustomerName;
    this.isExpanded = defaultIsExpanded;
  }
}

export default SideNavigationContext;
