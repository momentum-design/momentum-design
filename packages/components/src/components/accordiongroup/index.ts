import AccordionGroup from './accordiongroup.component';
import { TAG_NAME } from './accordiongroup.constants';

AccordionGroup.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-accordiongroup']: AccordionGroup;
  }
}

export default AccordionGroup;
