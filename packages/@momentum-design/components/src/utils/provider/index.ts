import { Context, ContextConsumer } from '@lit-labs/context';
import { ReactiveElement } from 'lit';

type ConsumeOptions<C> = {
  host: ReactiveElement;
  context: C;
  subscribe?:boolean
}
const consume = <C extends Context<unknown, unknown>>(options: ConsumeOptions<C>) => {
  const { host, context, subscribe } = options;

  return new ContextConsumer<C, typeof host>(host, {
    context,
    subscribe: subscribe ?? true,
  });
};

const providerUtils = {
  consume,
};
export default providerUtils;
