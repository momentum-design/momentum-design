import { CSSResult, LitElement } from 'lit';

import styles from './component.styles';

/**
 * Core Component class to ultimately be inherited by all Web Components within
 * this package.
 *
 * LitElement defines class and style automatically to allow passing in styling
 * overrides. We are keeping those to allow for further customization.
 *
 * @public
 */
class Component extends LitElement {
  /**
   * Register `this` extended `Component` Class as a custom element within the
   * DOM's custom elements registry.
   *
   * @remarks
   * This method must be called in order for this component to be consumable
   * within the DOM.
   *
   * @example
   * ```ts
   * import CustomComponent from './custom-component';
   *
   * // Standard registration.
   * CustomComponent.register();
   *
   * // Custom registration.
   * CustomComponent.register({
   *   name: 'custom-component',
   *   prefix: 'prefix',
   * });
   *
   * export default CustomComponent;
   * ```
   *
   *
   * @returns - Void.
   */
  public static register(namespace: string): void {
    if (customElements.get(namespace)) {
      return;
    }

    customElements.define(namespace, this as any);
  }

  /**
   * Styles associated with the Base Component.
   */
  public static override styles: Array<CSSResult> = [styles];
}

export default Component;
