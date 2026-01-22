import { html, nothing, type TemplateResult } from 'lit';
import { property, query } from 'lit/decorators.js';

import { Component } from '../../models';
import providerUtils from '../../utils/provider';
import Text from '../text';

import OverflowObserver from './overflowobserver.component';

class TextOverflowObserverE2EUtil extends Component {
  @query('mdc-text')
  private textElement!: HTMLElement;

  @property({ type: Boolean })
  overflowing: boolean = false;

  private readonly context = providerUtils.consume({
    host: this,
    context: OverflowObserver.Context,
  });

  public observeText() {
    this.context.value?.observeResizeForOverflow(this.textElement as unknown as Text);
  }

  public unobserveText() {
    this.context.value?.unobserveResizeForOverflow(this.textElement as unknown as Text);
  }

  protected override createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  protected override render(): TemplateResult {
    return html`<mdc-text
      style=${this.overflowing ? `width: 50px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;` : nothing}
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</mdc-text
    >`;
  }
}

TextOverflowObserverE2EUtil.register('mdc-textoverflowobserver-provider-e2e');

export default TextOverflowObserverE2EUtil;

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-textoverflowobserver-provider-e2e']: TextOverflowObserverE2EUtil;
  }
}
