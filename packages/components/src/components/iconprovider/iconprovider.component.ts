import { property } from 'lit/decorators.js';
import { Provider } from '../../models';
import IconProviderContext from './iconprovider.context';
import {
  ALLOWED_FILE_EXTENSIONS,
  DEFAULTS,
  ALLOWED_LENGTH_UNITS } from './iconprovider.constants';

/**
 * IconProvider component, which allows to be consumed from sub components
 * (see `providerUtils.consume` for how to consume)
 *
 * Bundling icons will be up to the consumer of this component, such
 * that only a url has to be passed in from which the icons will be
 * fetched.
 *
 * @tagname mdc-iconprovider
 *
 * @slot - children
 */
class IconProvider extends Provider<IconProviderContext> {
  constructor() {
    // initialise the context by running the Provider constructor:
    super({
      context: IconProviderContext.context,
      initialValue: new IconProviderContext(),
    });
  }

  /**
   * Context object of the IconProvider, to be consumed by child components
   */
  public static get Context() {
    return IconProviderContext.context;
  }

  /**
   * Url of where icons will be fetched from
   */
  @property({ type: String })
  url?: string;

  /**
   * File extension of icons
   * @default svg
   */
  @property({ type: String, attribute: 'file-extension', reflect: true })
  fileExtension?: string = DEFAULTS.FILE_EXTENSION;

  /**
   * Length unit used for sizing of icons
   * @default em
   */
  @property({ type: String, attribute: 'length-unit', reflect: true })
  lengthUnit: string = DEFAULTS.LENGTH_UNIT;

  /**
   * The default size of the icon.
   * If not set, it falls back to the size defined by the length unit.
   * @default 1
   */
  @property({ type: Number, reflect: true })
  size?: number = DEFAULTS.SIZE;

  private updateValuesInContext() {
    // only update fileExtension on context if its an allowed fileExtension
    if (this.fileExtension && ALLOWED_FILE_EXTENSIONS.includes(this.fileExtension)) {
      this.context.value.fileExtension = this.fileExtension;
    } else {
    // Ensure both fileExtension and context are updated to the default if its not an allowed fileExtension
      this.fileExtension = DEFAULTS.FILE_EXTENSION;
      this.context.value.fileExtension = DEFAULTS.FILE_EXTENSION;
    }
    this.context.value.url = this.url;
    this.context.value.size = this.size;

    if (this.lengthUnit && ALLOWED_LENGTH_UNITS.includes(this.lengthUnit)) {
      this.context.value.lengthUnit = this.lengthUnit;
    } else {
    // Ensure both lengthUnit and context are updated to the default if its not an allowed lengthUnit
      this.lengthUnit = DEFAULTS.LENGTH_UNIT;
      this.context.value.lengthUnit = DEFAULTS.LENGTH_UNIT;
    }
  }

  protected updateContext(): void {
    if (
      this.context.value.fileExtension !== this.fileExtension
      || this.context.value.url !== this.url
      || this.context.value.lengthUnit !== this.lengthUnit
      || this.context.value.size !== this.size
    ) {
      this.updateValuesInContext();
      this.context.updateObservers();
    }
  }
}
export default IconProvider;
