import type { ReactiveElement } from 'lit';
import { type Context, ContextConsumer } from '@lit/context';
import type { Options } from '@lit/context/lib/controllers/context-consumer';

type ConsumeOptions<C extends Context<unknown, unknown>> = Options<C> & {
  host: ReactiveElement;
};

const consume = <C extends Context<unknown, unknown>>(options: ConsumeOptions<C>) => {
  const { host, context, subscribe, callback } = options;

  return new ContextConsumer<C, typeof host>(host, {
    context,
    callback,
    subscribe: subscribe ?? true,
  });
};

const providerUtils = {
  consume,
};
export default providerUtils;
