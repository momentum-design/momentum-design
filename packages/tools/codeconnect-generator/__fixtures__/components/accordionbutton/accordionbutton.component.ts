const property = (_options?: unknown) => () => undefined;

import { DisabledMixin } from '../utils/mixins/DisabledMixin';

class BaseComponent {
  static register(_tag: string): void {}
}

export default class AccordionButton extends DisabledMixin(BaseComponent) {
  @property({ type: Boolean, reflect: true })
  expanded = false;

  @property({ type: String, attribute: 'header-text' })
  headerText?: string;
}
