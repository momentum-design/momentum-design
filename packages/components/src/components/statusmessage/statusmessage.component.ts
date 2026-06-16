// AI-Assisted
import { CSSResult, html, nothing } from 'lit';
import { property, queryAssignedNodes, state } from 'lit/decorators.js';

import { Component } from '../../models';

import { DEFAULTS } from './statusmessage.constants';
import styles from './statusmessage.styles';
import type { StatusMessageSeverity } from './statusmessage.types';
import { getStatusMessageIcon } from './statusmessage.utils';

/**
 * @remarks
 * Displays a compact inline status message with optional severity icon and color.
 * Use it for helper, validation, or status text where a full alert container is not needed.
 *
 * @tagname mdc-statusmessage
 *
 * @dependency mdc-icon
 * @dependency mdc-text
 *
 * @slot default - Message content. Slotted content takes precedence over the `message` attribute.
 * @slot icon - Custom icon content. Overrides the default severity icon.
 *
 * @csspart container - The container for the icon and message text.
 * @csspart icon - The default severity icon slot or rendered icon.
 * @csspart text - The rendered message text when using the `message` attribute.
 *
 * @cssproperty --mdc-statusmessage-color - Color for the icon and message text.
 * @cssproperty --mdc-statusmessage-font-size - Font size for the message text.
 * @cssproperty --mdc-statusmessage-font-weight - Font weight for the message text.
 * @cssproperty --mdc-statusmessage-line-height - Line height for the message text.
 * @cssproperty --mdc-statusmessage-gap - Gap between the icon and message text.
 * @cssproperty --mdc-statusmessage-icon-size - Width and height of the default severity icon.
 */
class StatusMessage extends Component {
  /**
   * The severity used to set the status message color and default icon.
   * Can be `default`, `error`, `warning`, `success`, or `priority`.
   * @default default
   */
  @property({ type: String, reflect: true })
  severity: StatusMessageSeverity = DEFAULTS.SEVERITY;

  /**
   * Message text to render when no default slot content is provided.
   */
  @property({ type: String, reflect: true })
  message?: string;

  @queryAssignedNodes()
  private defaultSlotNodes!: Node[];

  @state()
  private hasDefaultSlotContent = false;

  protected override firstUpdated(): void {
    this.updateDefaultSlotContent();
  }

  private updateDefaultSlotContent() {
    this.hasDefaultSlotContent = this.defaultSlotNodes.some(node => Boolean(node.textContent?.trim()));
  }

  private renderIcon() {
    const icon = getStatusMessageIcon(this.severity || DEFAULTS.SEVERITY);

    if (!icon) {
      return nothing;
    }

    return html`<mdc-icon part="icon" name="${icon}"></mdc-icon>`;
  }

  private renderMessage() {
    if (!this.message || this.hasDefaultSlotContent) {
      return nothing;
    }

    return html`
      <mdc-text part="text" tagname="${DEFAULTS.TEXT_TAGNAME}" type="${DEFAULTS.TEXT_TYPE}">${this.message}</mdc-text>
    `;
  }

  public override render() {
    return html`
      <div part="container">
        <slot name="icon" part="icon">${this.renderIcon()}</slot>
        <slot part="text" @slotchange="${this.updateDefaultSlotContent}"></slot>
        ${this.renderMessage()}
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default StatusMessage;
// End AI-Assisted
