import { Component } from '../../models';
import utils from '../../utils/tag-name';

export const TAG_NAME = utils.constructTagName('popoverportal');

/**
 * PopoverPortal in a placeholder component
 *
 * When the popover appended to another container, this component is used to mark the original place of the
 * popover in the DOM. When the portal removed from the DOM, we remove the popover from the container as well.
 *
 * We need this behavior to support on hover menus. Without the portal:
 * - Each time when then consumer renders the menu we append a new instance of the popover to the container which
 *   cause memory leak.
 * - Trigger component will open all popovers at once, because all of them has the same triggerID and all
 *   listeners attached to the document.
 *
 * Portal component make sure the popover clean up when it was normally (without append-to) removed from the DOM.
 * This is especially important when the popover is used in a framework like React or Angular, where virtual does not
 * know about the popover moved to another place in the DOM.
 *
 * @internal
 */
export class PopoverPortal extends Component {
  onDisconnect: Function | undefined;

  override connectedCallback() {
    super.connectedCallback();
    // We don't want the portal to be focusable or visible for screen readers
    this.ariaHidden = 'true';
  }

  /**
   * When the portal removed from the DOM, we remove the popover from the container as well.
   * @internal
   */
  override disconnectedCallback() {
    super.disconnectedCallback();
    this.onDisconnect?.();
  }
}
