import { Context, ContextConsumer } from '@lit/context';
import { ReactiveElement } from 'lit';

type ConsumeOptions<C> = {
  host: ReactiveElement;
  context: C;
  subscribe?: boolean;
  callback?: any;
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
