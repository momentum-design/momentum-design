import { property, state } from 'lit/decorators.js';
import { CSSResult } from 'lit';
import { DEFAULTS } from './themeprovider.constants';
import { Provider } from '../../models';
import ThemeProviderContext from './themeprovider.context';
import styles from './themeprovider.styles';

/**
 * ThemeProvider component, which sets the passed in themeclass as class.
 * If the themeclass switches, the existing themeclass will be removed as a class
 * and the new themeclass will be added.
 *
 * CSS variables defined in the themeclass will be used for the styling of child dom nodes.
 *
 * Themeclass context can be be consumed from Lit child components
 * (see providerUtils.consume for how to consume)
 *
 * ThemeProvider also includes basic font defaults for text.
 *
 * @tagname mdc-themeprovider
 *
 * @slot default - children
 *
 * @cssproperty --mdc-themeprovider-font-family - Option to override the font family
 * @cssproperty --mdc-themeprovider-color-default - Option to override the default color
 */
class ThemeProvider extends Provider<ThemeProviderContext> {
  constructor() {
    super({
      context: ThemeProviderContext.context,
      initialValue: new ThemeProviderContext(DEFAULTS.THEMECLASS),
    });
  }

  /**
   * Context object of the ThemeProvider, to be consumed by child components
   */
  public static get Context() {
    return ThemeProviderContext.context;
  }

  /**
   * To keep track of the current theme class
   * @internal
   */
  @state()
  private currentThemeClass?: string;

  /**
   * Current theme class
   *
   * Has to be fully qualified, such that
   * the theme class matches the class of the respective
   * theme stylesheet
   *
   * Default: 'mds-theme-stable-darkWebex'
   */
  @property({ type: String })
  themeclass: string = DEFAULTS.THEMECLASS;

  override connectedCallback(): void {
    super.connectedCallback();

    // Set the default typography class
    this.classList.add(DEFAULTS.TYPOGRAPHYCLASS);
  }

  protected override updated(changedProperties: Map<string, any>) {
    super.updated(changedProperties);

    if (changedProperties.has('themeclass')) {
      this.setThemeInClassList();
      this.currentThemeClass = this.themeclass;
    }
  }

  /**
   * Update all observing components of this
   * provider to update the themeclass
   *
   * Is called on every re-render, see Provider class
   */
  protected updateContext(): void {
    if (this.context.value.themeclass !== this.themeclass) {
      this.context.value.themeclass = this.themeclass;

      this.context.updateObservers();
    }
  }

  /**
   * Function to update the active theme classnames to update the theme tokens
   * as CSS variables on the web component.
   */
  private setThemeInClassList() {
    // remove all existing theme classes from the classList:
    if (this.currentThemeClass) {
      this.classList.remove(...this.currentThemeClass.split(' '));
    }
    // add current theme class to classList:
    if (this.themeclass) {
      this.classList.add(...this.themeclass.split(' '));
    }
  }

  public static override styles: Array<CSSResult> = [...Provider.styles, styles];
}

export default ThemeProvider;
