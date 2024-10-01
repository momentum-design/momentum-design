import { property, state } from 'lit/decorators.js';
import { Provider } from '../../models';
import IconProviderContext from './iconprovider.context';
import { ALLOWED_FILE_EXTENSIONS, DEFAULTS, LENGTH_UNIT_DEFAULT_SIZE } from './iconprovider.constants';

/**
 * IconProvider component, which allows to be consumed from sub components
 * (see `providerUtils.consume` for how to consume)
 *
 * Bundling icons will be up to the consumer of this component, such
 * that only a url has to be passed in from which the icons will be
 * fetched.
 *
 * @tag mdc-iconprovider
 * @tagname mdc-iconprovider
 */
class IconProvider extends Provider<IconProviderContext> {
  constructor() {
    // initialise the context by running the Provider constructor:
    super({
      context: IconProviderContext.context,
      initialValue: new IconProviderContext(),
    });
  }

  public static get Context() {
    return IconProviderContext.context;
  }

  /**
   * Internal state to store the default icon size.
   * This value is used to determine the size of the icon if provided.
   */
  @state() private internalDefaultIconSize?: number;

  /**
   * Url of where icons will be fetched from
   */
  @property({ type: String })
  url?: string;

  /**
   * File extension of icons, default: 'svg'
   */
  @property({ type: String, attribute: 'file-extension', reflect: true })
  fileExtension?: string = DEFAULTS.FILE_EXTENSION;

  /**
   * Length unit used for sizing of icons, default: 'em'
   */
  @property({ type: String, attribute: 'length-unit', reflect: true })
  lengthUnit: string = DEFAULTS.LENGTH_UNIT;

  /**
   * The default size of the icon.
   * This property can be set via the 'default-size' attribute.
   * If not set, it falls back to the size defined by the length unit.
   */
  @property({ type: Number, attribute: 'default-size', reflect: true })
  get defaultSize() {
    if (this.internalDefaultIconSize) {
      return this.internalDefaultIconSize;
    }

    if (this.lengthUnit) {
      return LENGTH_UNIT_DEFAULT_SIZE[this.lengthUnit];
    }

    return LENGTH_UNIT_DEFAULT_SIZE[DEFAULTS.LENGTH_UNIT];
  }

  set defaultSize(value) {
    const oldValue = this.internalDefaultIconSize;
    this.internalDefaultIconSize = value;
    this.requestUpdate('defaultSize', oldValue);
  }

  private updateValuesInContext() {
    // only update fileExtension on context if its an allowed fileExtension
    if (this.fileExtension && ALLOWED_FILE_EXTENSIONS.includes(this.fileExtension)) {
      this.context.value.fileExtension = this.fileExtension;
    }
    this.context.value.url = this.url;
    this.context.value.lengthUnit = this.lengthUnit;
    this.context.value.defaultSize = this.defaultSize;
  }

  protected updateContext(): void {
    let shouldUpdateConsumers = false;

    if (
      this.context.value.fileExtension !== this.fileExtension
      || this.context.value.url !== this.url
      || this.context.value.lengthUnit !== this.lengthUnit
      || this.context.value.defaultSize !== this.defaultSize
    ) {
      this.updateValuesInContext();

      shouldUpdateConsumers = true;
    }

    if (shouldUpdateConsumers) {
      this.context.updateObservers();
    }
  }
}

export default IconProvider;
