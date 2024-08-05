import { createContext } from '@lit-labs/context';

import { TAG_NAME } from './themeprovider.constants';
import type { Theme } from './themeprovider.types';

class ThemeProviderContext {
  public theme?: Theme;

  // create typed lit context as part of the ThemeProviderContext
  public static context = createContext<ThemeProviderContext>(TAG_NAME);

  // constructor to allow setting the defaultTheme
  constructor(defaultTheme?: Theme) {
    this.theme = defaultTheme;
  }
}

export default ThemeProviderContext;
