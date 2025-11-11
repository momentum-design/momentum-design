import type { ReactiveElement } from 'lit';
import { type Context, ContextConsumer, ContextType } from '@lit/context';
import type { Options } from '@lit/context/lib/controllers/context-consumer';

type ConsumeOptions<C extends Context<unknown, unknown>> = Options<C> & {
  host: ReactiveElement;
  /**
   * List of properties which need update when context changes
   *
   * For example a property getter depends on the context value and the property must be reflected to attribute.
   *
   * Background: Lit does not track dependencies between context consumers and properties, so
   * we need to manually request an update for those properties.
   *
   * You can do it in the `updated` lifecycle method as well, but it will trigger an extra update cycle.
   * While this approach will batch the updates with the context update cycle (which happens anyway).
   */
  syncProperties?: string[];
};

const consume = <C extends Context<unknown, unknown>>(options: ConsumeOptions<C>) => {
  const { host, context, subscribe, callback, syncProperties } = options;

  const contextCallback =
    (callback || syncProperties) &&
    ((value: ContextType<C>) => {
      if (syncProperties) {
        syncProperties.forEach(prop => {
          host.requestUpdate(prop);
        });
      }

      callback?.(value);
    });

  return new ContextConsumer<C, typeof host>(host, {
    context,
    callback: contextCallback,
    subscribe: subscribe ?? true,
  });
};

const providerUtils = {
  consume,
};
export default providerUtils;
