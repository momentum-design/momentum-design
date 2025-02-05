/* eslint-disable @typescript-eslint/no-unused-vars */
import { CSSResult, PropertyValues, TemplateResult, html } from 'lit';
import { VirtualizerController } from '@tanstack/lit-virtual';
import { property } from 'lit/decorators.js';
import { Virtualizer, VirtualizerOptions } from '@tanstack/virtual-core';
import { StyleInfo } from 'lit/directives/style-map.js';
import { Ref, createRef, ref } from 'lit/directives/ref.js';
import styles from './virtualizedlist.styles';
import { Component } from '../../models';
import { DEFAULT_COUNT, DEFAULT_MEASURE_ELEMENT } from './virtualizedlist.constants';
/**
 * virtualizedlist component, which ...
 *
 * @tagname mdc-virtualizedlist
 *
 */
class VirtualizedList extends Component {
  @property({ type: Function, attribute: 'onscroll' })
  onScroll?: (e: Event) => void;

  @property({ type: Object, attribute: 'virtualizerprops' })
  virtualizerprops: Partial<VirtualizerOptions<Element, Element>> = {};

  public scrollElementRef: Ref<HTMLDivElement> = createRef();

  private virtualizerController: VirtualizerController<Element, Element> | null;

  public virtualizer: Virtualizer<Element, Element> | null;

  constructor() {
    super();
    this.virtualizerController = null;
    this.virtualizer = null;
  }

  public override update(changedProperties: PropertyValues): void {
    super.update(changedProperties);
    if (changedProperties.get('virtualizerprops')) {
      this.virtualizer?.setOptions({ ...this.virtualizer.options, ...this.virtualizerprops });
      this.requestUpdate();
    }
  }

  public override connectedCallback(): void {
    this.virtualizerController = new VirtualizerController(this, {
      count: this.virtualizerprops?.count || DEFAULT_COUNT,
      estimateSize: this.virtualizerprops?.estimateSize || DEFAULT_MEASURE_ELEMENT,
      getScrollElement: () => this.scrollElementRef.value || null,
      ...this.virtualizerprops,
    });

    super.connectedCallback();
  }

  private getVirtualizedListElement(): TemplateResult {
    this.virtualizer = this.virtualizerController?.getVirtualizer() || null;

    if (this.virtualizer) {
      const { getVirtualItems, measureElement, getTotalSize } = this.virtualizer;
      const virtualItems = getVirtualItems();
      const listStyle: Readonly<StyleInfo> = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        transform: `translateY(${virtualItems[0]?.start ?? 0}px)`,
      };

      const event = new CustomEvent('render-list', {
        detail: { virtualItems, measureElement, listStyle },
        bubbles: true,
        composed: true,
      });
      this.dispatchEvent(event);

      return html`<div
          class="mdc-virtualizedlist-wrapper"
          style="height: ${getTotalSize()}px;"
        >
          <slot></slot>
        </div>`;
    }

    return html``;
  }

  private getVirtualizedListContainer(): TemplateResult {
    return html`<div
        ${ref(this.scrollElementRef)}
        class="mdc-virtualizedlist-scroll-container"
        @scroll="${this.onScroll && this.onScroll}"
      >
        ${this.getVirtualizedListElement()}
      </div>
    `;
  }

  public override render() {
    return this.getVirtualizedListContainer();
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default VirtualizedList;
