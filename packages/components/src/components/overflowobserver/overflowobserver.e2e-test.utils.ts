import { html, nothing, type TemplateResult } from 'lit';
import { property, query } from 'lit/decorators.js';

import { Component } from '../../models';
import providerUtils from '../../utils/provider';
import Text from '../text';

import OverflowObserver from './overflowobserver.component';

class OverflowObserverE2EUtil extends Component {
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

OverflowObserverE2EUtil.register('mdc-overflowobserver-e2e');

export default OverflowObserverE2EUtil;

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-overflowobserver-e2e']: OverflowObserverE2EUtil;
  }
}
