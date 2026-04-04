const property = (_options?: unknown) => () => undefined;

/** @tagname mdc-variants */
export default class Variants {
  @property({ type: String })
  label = 'Primary';

  @property({ type: Number })
  count = 0;

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: String })
  variant: 'primary' | 'secondary' | 'tertiary' = 'primary';

  @property({ type: Object })
  options: Record<string, unknown> = {};
}
