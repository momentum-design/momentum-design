import { CSSResult, PropertyValues, TemplateResult, html } from 'lit';
import { VirtualizerController } from '@tanstack/lit-virtual';
import { Ref, createRef, ref } from 'lit/directives/ref.js';
import { property } from 'lit/decorators.js';
import { Virtualizer, VirtualItem } from '@tanstack/virtual-core';
import styles from './virtualizedlist.styles';
import { Component } from '../../models';

/**
 * virtualizedlist component, which ...
 *
 * @tagname mdc-virtualizedlist
 *
 */
class Virtualizedlist extends Component {
  /**
   * Lenght of the array being virtualized
   */
  @property({ type: Number })
  count: number = 0;

  @property({ type: Function, reflect: true })
  onScroll: (() => void) | undefined;

  private scrollElementRef: Ref<HTMLDivElement> = createRef();

  private virtualizerController: VirtualizerController<HTMLDivElement, Element> | null;

  private virtualizer: Virtualizer<HTMLDivElement, Element> | null;

  private virtualItems: Array<VirtualItem>;

  constructor() {
    super();
    this.virtualizerController = null;
    this.virtualizer = null;
    this.virtualItems = [];
  }

  public override connectedCallback(): void {
    super.connectedCallback();
    this.initializeVirtualizer();
  }

  public override update(changedProperties: PropertyValues): void {
    super.update(changedProperties);
    if (changedProperties.has('count')) {
      this.initializeVirtualizer();
    }

    this.virtualItems = this.virtualizer?.getVirtualItems() || [];
    this.dispatchVirtualItemsUpdated();
  }

  private initializeVirtualizer() {
    if (this.scrollElementRef.value) {
      this.virtualizerController = new VirtualizerController(this, {
        getScrollElement: () => this.scrollElementRef.value || null,
        count: this.count,
        estimateSize: () => 45,
      });

      this.virtualizer = this.virtualizerController.getVirtualizer();
      this.virtualItems = this.virtualizer?.getVirtualItems();
    }
  }

  get measureElement() {
    return this.virtualizer ? this.virtualizer.measureElement : null;
  }

  private dispatchVirtualItemsUpdated() {
    this.dispatchEvent(new CustomEvent('virtual-items-updated', {
      detail: { items: this.virtualItems },
      bubbles: true,
      composed: true,
    }));
  }

  private getVirtualizedListContainer(): TemplateResult {
    const height = this.virtualizer?.getTotalSize();

    return html`<div
        class="list scroll-container"
        ${ref(this.scrollElementRef)}
        @scroll=${this.onScroll && this.onScroll}
      >
        <div
          class="listWrapper"
          style="position: relative; height: ${height}px; width: 100%;"
        >
          <slot></slot>
        </div>
      </div>
      <style>
        .list {
          border: 1px solid #e6e4dc;
          max-width: 100%;
        }
        .scroll-container {
          height: 400px;
          width: 400px;
          overflow-y: auto;
        }
      </style>
    `;
  }

  public override render() {
    return this.getVirtualizedListContainer();
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Virtualizedlist;
