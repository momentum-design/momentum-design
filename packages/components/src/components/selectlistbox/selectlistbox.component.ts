import { Component } from '../../models';
import { ROLE } from '../../utils/roles';

/**
 * @tagname mdc-selectlistbox
 *
 * @slot default - This is a default/unnamed slot, which can be used to insert mdc-option components.
 */
class Selectlistbox extends Component {
  override connectedCallback(): void {
    super.connectedCallback();
    this.role = ROLE.LISTBOX;
  }

  protected override createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }
}

export default Selectlistbox;
