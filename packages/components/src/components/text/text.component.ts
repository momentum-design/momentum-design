import { html } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './text.styles';
import { Component } from '../../models';
import type { FontType } from './text.types';
import { getRole, getAriaLevel } from './text.utils';

/**
 * Text component, which helps creating a text element aligning with
 * styling.
 *
 * The `type` attribute allows changing the type of text, like `heading-1`, etc.
 *
 * For accessibility the `role` and `aria-level` on the component are going to be set
 * automatically based on the type e.g. heading-1 will lead to `role="heading"` and `aria-level=1`.
 *
 * @tag mdc-text
 * @tagname mdc-text
 */
class Text extends Component {
  /**
   * Text Type - defines how the text should be rendered
   *
   * Possible values: `heading-1` | `heading-2` | `heading-3` | `heading-4`
  | `heading-5` | `heading-6` | `heading-7` | `body-large` | `body-regular`
  | `body-small` | `image-title` | `label`;
   */
  @property({ attribute: 'type', reflect: true, type: String })
  public type?: FontType;

  protected handleTypeChanged(): void {
    this.role = getRole(this.type);
    this.ariaLevel = getAriaLevel(this.type);
  }

  protected override updated(changedProperties: Map<string, any>): void {
    super.updated(changedProperties);

    if (changedProperties.has('type')) {
      this.handleTypeChanged();
    }
  }

  public override render() {
    return html`<slot></slot>`;
  }

  public static override styles = styles;
}

export default Text;
