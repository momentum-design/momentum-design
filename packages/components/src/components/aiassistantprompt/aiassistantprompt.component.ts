import type { CSSResult } from 'lit';
import { html } from 'lit';

import { Component } from '../../models';

import styles from './aiassistantprompt.styles';

/**
 * @tagname mdc-aiassistantprompt
 *
 * @slot - Temporary content slot until the prompt API is defined.
 */
class AIAssistantPrompt extends Component {
  public override render() {
    return html`<slot>Test Content</slot>`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default AIAssistantPrompt;
