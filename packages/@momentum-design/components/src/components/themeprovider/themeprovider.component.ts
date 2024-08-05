import { property } from 'lit/decorators.js';
import { DEFAULTS, THEMES } from './themeprovider.constants';
import { Provider } from '../../models';
import ThemeProviderContext from './themeprovider.context';
import styles from './themeprovider.styles';
import type { Theme } from './themeprovider.types';

/**
 * ThemeProvider component, which sets the theme css variables
 * for the child dom nodes and allows to be consumed from sub components
 * (see providerUtils.consume for how to consume)
 *
 * ThemeProvider also includes the different font faces available
 * for Text components.
 *
 * @tag mdc-themeprovider
 * @tagname mdc-themeprovider
 */
class ThemeProvider extends Provider<ThemeProviderContext> {
  constructor() {
    // initialise the context by running the Provider constructor:
    super({
      context: ThemeProviderContext.context,
      initialValue: new ThemeProviderContext(DEFAULTS.THEME),
    });
  }

  public static get Context() {
    return ThemeProviderContext.context;
  }

  /**
   * Available themes to switch to
   *
   * Has to be a space separated string, like className
   * e.g.: `mds-theme-stable-darkWebex mds-theme-stable-lightWebex`
   */
  @property({ type: String })
  themes: string = THEMES.join(' ');

  /**
   * Current theme attribute
   *
   * Has to be fully qualified, such that
   * the theme name matches the className of the respective
   * theme stylesheet
   */
  @property({ type: String })
  theme: Theme = DEFAULTS.THEME;

  protected override updated(changedProperties: Map<string, any>) {
    super.updated(changedProperties);

    if (changedProperties.has('theme')) {
      this.updateActiveThemeClass();
    }
  }

  /**
   * Update all observing components of this
   * provider to update the theme
   */
  protected updateContext(): void {
    let shouldUpdateConsumers = false;

    if (this.context.value.theme !== this.theme) {
      this.context.value.theme = this.theme;

      shouldUpdateConsumers = true;
    }

    if (shouldUpdateConsumers) {
      this.context.updateObservers();
    }
  }

  /**
   * Function to update the active theme classname to update the theme tokens
   * as CSS variables on the web component.
   */
  private updateActiveThemeClass() {
    // remove all existing theme classes from the classList:
    this.classList.remove(...this.themes.split(' '));
    // add current theme class to classList:
    this.classList.add(this.theme);
  }

  public static override styles = styles;
}

export default ThemeProvider;
