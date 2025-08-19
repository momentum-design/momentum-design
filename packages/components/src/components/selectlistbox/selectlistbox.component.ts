import { Component } from '../../models';
import { ROLE } from '../../utils/roles';

/**
 * Selectlistbox component as Light DOM component to act as a simple wrapper
 * for mdc-option components to ensure accessibility and proper role assignment.
 *
 * Once [ariaOwnsElements](https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals/ariaOwnsElements) is supported in browsers, this component can be removed
 * and mdc-option can be used directly in the select component with a listbox in a different
 * shadow root and aria-owns attribute to connect them.
 *
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
