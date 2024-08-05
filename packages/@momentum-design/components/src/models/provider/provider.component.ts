import { ContextProvider } from '@lit-labs/context';
import { CSSResult, html } from 'lit';

import Component from '../component';

import styles from './provider.styles';

type ConstructorOptions<C> = {
  context: { __context__: C };
  initialValue?: C;
};

/**
 * Provider Component class to ultimately be inherited by all Provider-type Web
 * Components within this package.
 *
 * @public
 */
abstract class Provider<C> extends Component {
  /**
   * Constructor of the Provider.
   *
   * Execute in the constructor of the provider implementation,
   * like so
   *
   * ```
   * constructor() {
   *   super(TAG_NAME, {initialValue: new ContextClass(defaultValues)});
   * }
   * ```
   * @param host - host of where the context will be hooked onto, e.g. this
   * @param context - context (returned by createContext)
   * @param initialValue - initialValue of the ContextClass, like `new ContextClass(defaultValues)`
   */
  constructor({ context, initialValue }: ConstructorOptions<C>) {
    super();

    this.context = new ContextProvider(this, {
      context,
      initialValue,
    });
  }

  /**
   * Context associated with this provider.
   *
   * @remarks
   * Providing a Context type as a generic when creating extended Provider Class
   * definitions will help enforce the property validation.
   */
  protected context: ContextProvider<{ __context__: C }>;

  /**
   * Styles associated with this Provider Component.
   */
  public static override styles: CSSResult | Array<CSSResult> = styles;

  /**
   * Update the context of this Provider and trigger its consumers to update.
   *
   * @remarks
   * This method is called every time this Provider is re-rendered and should
   * be used to update the local Context based on any deltas between this
   * Provider's attributes and this Provider's context that caused the
   * re-render. If the `render()` method is overwritten, this call must be made
   * manually.
   */
  protected abstract updateContext(): void;

  /**
   * Render this Provider.
   *
   * @remarks
   * This method calls `updateContext()` then validates whether or not to
   * update all consumers based on the results of the `shouldUpdateConsumers`
   * getter.
   *
   * @returns - This Provider as an HTML Element.
   */
  public override render() {
    this.updateContext();

    return html`<slot></slot>`;
  }
}

export default Provider;
