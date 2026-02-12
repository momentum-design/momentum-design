const property = (_options?: unknown) => () => undefined;

type Constructor<T = Record<string, unknown>> = new (...args: any[]) => T;

export const DisabledMixin = <T extends Constructor>(Base: T) => {
  return class extends Base {
    @property({ type: Boolean, reflect: true })
    disabled = false;
  };
};
