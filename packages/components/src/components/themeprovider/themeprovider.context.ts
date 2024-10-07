import { createContext } from '@lit/context';

import { TAG_NAME } from './themeprovider.constants';

class ThemeProviderContext {
  public themeclass?: string;

  // create typed lit context as part of the ThemeProviderContext
  public static context = createContext<ThemeProviderContext>(TAG_NAME);

  // constructor to allow setting the defaultThemeClass
  constructor(defaultThemeClass?: string) {
    this.themeclass = defaultThemeClass;
  }
}

export default ThemeProviderContext;
