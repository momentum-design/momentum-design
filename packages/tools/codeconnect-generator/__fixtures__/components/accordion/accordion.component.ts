const property = (_options?: unknown) => () => undefined;

import AccordionButton from '../accordionbutton/accordionbutton.component';

export default class Accordion extends AccordionButton {
  @property({ type: String, attribute: 'open-button-aria-label', reflect: true })
  openButtonAriaLabel?: string;
}
