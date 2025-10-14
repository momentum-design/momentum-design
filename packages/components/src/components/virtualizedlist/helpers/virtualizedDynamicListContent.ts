import { html, nothing, TemplateResult } from 'lit';
import { state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { Ref, createRef, ref } from 'lit/directives/ref.js';

import { Component } from '../../../models';
import '../../list';
import '../../listitem';
import '../../button';
import '../../buttongroup';
import '../../avatar';
import '../../textarea';
import { VirtualData, type VirtualizedListVirtualItemsChangeEvent, VirtualizerProps } from '../virtualizedlist.types';
import VirtualizedList from '../virtualizedlist.component';

const WORDS = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
  'standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ',
  'a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, ',
  'remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing ',
  ' Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions ',
  'of Lorem Ipsum.',
]
  .join(' ')
  .split(' ');

const rnd = (min: number, max: number) => min + Math.floor(Math.random() * max);

class VirtualizedDynamicListContent extends Component {
  @state()
  listItems: { key: string; data: string }[] = [];

  @state()
  virtualData: VirtualData = { virtualItems: [] };

  @state()
  virtualizerProps: VirtualizerProps = {
    useAnimationFrameWithResizeObserver: true,
    count: 0,
    estimateSize: () => 36,
    getItemKey: index => this.listItems[index]?.key,
  };

  private virtualizerRef: Ref<VirtualizedList> = createRef();

  private timerId: any;

  private counter = 0;

  private isClippyNext = false;

  private addChunks = () => {
    clearTimeout(this.timerId);
    const numOfWords = rnd(2, 30);
    let words = new Array(numOfWords)
      .fill(true)
      .map(() => WORDS[rnd(0, WORDS.length - 1)])
      .join(' ')
      .replace(/ +/gm, ' ')
      .trim();

    const brk = rnd(0, 10);
    words += brk > 6 ? '.\n' : '';
    words += brk > 8 ? '\n' : '';

    const lastChar = this.listItems.at(-1)?.data?.at(-1);
    if (!lastChar || lastChar === '\n') {
      words = words.charAt(0).toUpperCase() + words.slice(1);
    }

    this.listItems[this.listItems.length - 1].data += `${words}`;
    this.requestUpdate();

    this.timerId = setTimeout(this.addChunks, rnd(5, 200));
  };

  override connectedCallback(): void {
    super.connectedCallback();
    this.updateVirtualProps();

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this.reset();
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.reset();
  }

  onNext = async () => {
    if (this.isClippyNext) {
      this.listItems.push({ key: this.listItems.length.toString(), data: '' });
      this.addChunks();
    } else {
      clearTimeout(this.timerId);
      this.counter += 1;
      this.listItems.push({ key: this.listItems.length.toString(), data: `Question #${this.counter}` });
    }
    this.isClippyNext = !this.isClippyNext;
    this.virtualizerProps = { ...this.virtualizerProps, count: this.listItems.length };

    await this.updateComplete;
    this.virtualizerRef.value!.scrollToIndex(this.listItems.length - 1, {
      align: 'end',
      behavior: 'auto',
    });
  };

  private reset = () => {
    clearTimeout(this.timerId);
    this.counter = 0;
    this.isClippyNext = false;
    this.listItems.length = 0;
    this.virtualizerProps = { ...this.virtualizerProps, count: this.listItems.length };
  };

  private generateListItem(index: number, label: string): TemplateResult {
    return html`
      <mdc-listitem data-index=${index} label=${label}>
        <pre slot="content">${label}</pre>
      </mdc-listitem>
    `;
  }

  private updateVirtualProps() {
    this.virtualizerProps = {
      count: this.listItems.length,
      estimateSize: () => 48,
      getItemKey: (index: number) => this.listItems[index]?.key,
    };
  }

  private handleVirtualItemsChange = (event: VirtualizedListVirtualItemsChangeEvent) => {
    this.virtualData = event.detail;
  };

  protected override render(): TemplateResult {
    return html`
      <div class="vlist-dynamic-content--wrapper">
        <mdc-virtualizedlist
          ${ref(this.virtualizerRef)}
          observe-size-changes
          revert-list
          .virtualizerProps=${this.virtualizerProps}
          @virtualitemschange=${this.handleVirtualItemsChange}
        >
          ${this.listItems.length
            ? repeat(
                this.virtualData.virtualItems,
                ({ key }) => key,
                ({ index }) => this.generateListItem(index, this.listItems[index].data),
              )
            : nothing}
        </mdc-virtualizedlist>
        <div style="margin-top: 1rem;">
          <div style="display: flex; gap: 0.25rem;">
            <mdc-button @click=${this.onNext}>Get next message</mdc-button>
            <mdc-button variant="secondary" @click=${this.reset}>Reset</mdc-button>
          </div>
        </div>
      </div>

      <style>
        .vlist-dynamic-content--wrapper {
          width: 100%;
          margin-block: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        mdc-virtualizedlist {
          width: 640px;
          height: 480px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 1rem;
        }
        pre {
          text-wrap: auto;
        }
      </style>
    `;
  }

  protected override createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }
}

VirtualizedDynamicListContent.register('mdc-virtualizeddynamiclistcontent');

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-virtualizeddynamiclistcontent']: VirtualizedDynamicListContent;
  }
}
