// eslint-disable-next-line max-classes-per-file
import { CSSResult, PropertyValues, TemplateResult, css, html } from 'lit';
import { property, state } from 'lit/decorators.js';
import { VirtualItem } from '@tanstack/virtual-core';
import { createRef, ref, type Ref } from 'lit/directives/ref.js';
import { repeat } from 'lit/directives/repeat.js';
import { styleMap } from 'lit/directives/style-map.js';

import { Component } from '../../models';

import '../list';
import '../listitem';
import '../button';
import '../buttongroup';
import '../avatar';
import '../textarea';
import type VirtualizedList from './virtualizedlist.component';
import { VirtualizerProps, type VirtualizedListVirtualItemsChangeEvent, VirtualData } from './virtualizedlist.types';

class VirtualizedWrapper extends Component {
  public override onscroll: ((this: GlobalEventHandlers, ev: Event) => void) | null;

  @property({ type: Object, attribute: 'virtualizerprops' })
  virtualizerProps: VirtualizerProps = {
    count: 100,
    estimateSize: () => 100,
    getItemKey: index => this.listItemTexts[index],
  };

  @property({ type: String })
  story: 'text' | 'interactive' | 'dynamic' = 'text';

  @property({ type: String, reflect: true })
  loop: 'true' | 'false' = 'false';

  @property({ type: Number, reflect: true, attribute: 'initial-focus' })
  initialFocus: number = 0;

  @state()
  virtualData: VirtualData = { virtualItems: [], measureElement: () => null };

  @state()
  listItemTexts = new Array(this.virtualizerProps.count).fill(true).map((_, index) => `list item number ${index}`);

  constructor() {
    super();
    this.onscroll = null;
  }

  public override update(changedProperties: PropertyValues) {
    super.update(changedProperties);
    if (changedProperties.has('virtualizerProps')) {
      this.updateListItemTextArray();
    }
  }

  public override connectedCallback() {
    super.connectedCallback();
    if (this.virtualizerProps?.count) {
      this.updateListItemTextArray();
    }
  }

  private updateListItemTextArray() {
    this.listItemTexts = new Array(this.virtualizerProps?.count)
      .fill(true)
      .map((_, index) => `list item number ${index}`);
  }

  private renderItem(index: number) {
    if (this.story === 'text') {
      return html`<mdc-listitem data-index=${index} label="${this.listItemTexts[index]}"></mdc-listitem> `;
    }
    if (this.story === 'interactive') {
      return html`
        <mdc-listitem data-index=${index}>
          <span slot="leading-text-primary-label">${this.listItemTexts[index]}</span>
          <mdc-button
            slot="trailing-controls"
            color="positive"
            prefix-icon="data-range-selection-bold"
            aria-label="mock label"
          ></mdc-button>
          <mdc-button slot="trailing-controls" variant="tertiary">Learn More</mdc-button>
        </mdc-listitem>
      `;
    }
    if (this.story === 'dynamic') {
      return html`
        <mdc-listitem data-index=${index} style="--mdc-listitem-height: ${50 + (index % 5) * 10}px">
          <span slot="leading-text-primary-label">${this.listItemTexts[index]}</span>
          <mdc-button
            slot="trailing-controls"
            color="positive"
            prefix-icon="data-range-selection-bold"
            aria-label="mock label"
          ></mdc-button>
          <mdc-button slot="trailing-controls" variant="tertiary">Learn More</mdc-button>
        </mdc-listitem>
      `;
    }

    return html``;
  }

  private handleVirtualItemsChange = (event: VirtualizedListVirtualItemsChangeEvent) => {
    this.virtualData = event.detail;
  };

  override render() {
    return html`
      <div part="wrapper">
        <mdc-virtualizedlist
          @scroll=${this.onscroll}
          @virtualitemschange=${this.handleVirtualItemsChange}
          .virtualizerProps=${this.virtualizerProps}
          initial-focus=${this.initialFocus}
          loop=${this.loop}
        >
          ${repeat(
            this.virtualData.virtualItems,
            ({ key }) => key,
            ({ index }) => this.renderItem(index),
          )}
        </mdc-virtualizedlist>
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [
    ...Component.styles,
    css`
      :host([story='text'])::part(wrapper) {
        width: 500px;
        height: 500px;
      }
      :host([story='interactive'])::part(wrapper) {
        width: 100%;
        height: 500px;
      }
      :host([story='dynamic'])::part(wrapper) {
        width: 100%;
        height: 500px;
      }
    `,
  ];
}

VirtualizedWrapper.register('mdc-virtualizedwrapper');

class VirtualizedDynamicList extends Component {
  @state()
  listItems: string[] = new Array(20).fill(true).map((_, index) => `list item number ${index}`);

  @state()
  virtualData: VirtualData = { virtualItems: [], measureElement: () => null };

  @state()
  virtualizerProps: VirtualizerProps = { count: 0, estimateSize: () => 0, getItemKey: index => this.listItems[index] };

  counter = this.listItems.length;

  override connectedCallback(): void {
    super.connectedCallback();
    this.updateVirtualProps();
  }

  private generateListItem(index: number, label: string): TemplateResult {
    return html`
      <mdc-listitem data-index=${index} label=${label}>
        <mdc-buttongroup slot="trailing-controls">
          <mdc-button variant="primary" color="positive" @click=${() => this.addItem(0, 5)}>Add 5 At Top</mdc-button>
          <mdc-button variant="primary" color="positive" @click=${() => this.addItem(index)}>Add Above</mdc-button>
          <mdc-button variant="primary" color="positive" @click=${() => this.addItem(index + 1)}>Add Below</mdc-button>
          <mdc-button variant="primary" color="positive" @click=${() => this.addItem()}>Add Last</mdc-button>
        </mdc-buttongroup>
        <mdc-buttongroup slot="trailing-controls">
          <mdc-button variant="primary" color="negative" @click=${() => this.removeItem(index)}>Remove This</mdc-button>
          <mdc-button variant="primary" color="negative" @click=${() => this.removeItem(index - 1)}
            >Remove Above</mdc-button
          >
          <mdc-button variant="primary" color="negative" @click=${() => this.removeItem(index + 1)}
            >Remove Below</mdc-button
          >
        </mdc-buttongroup>
      </mdc-listitem>
    `;
  }

  protected addItem(index?: number, count = 1): void {
    // eslint-disable-next-line no-return-assign
    const newItems = new Array(count).fill(true).map(() => `list item number ${(this.counter += 1)}`);

    if (index === undefined) {
      this.listItems = [...this.listItems, ...newItems];
    } else {
      this.listItems = [
        ...this.listItems.slice(0, index),
        ...newItems,
        ...this.listItems.slice(index, this.listItems.length),
      ];
    }
    this.updateVirtualProps();
  }

  protected removeItem(index?: number): void {
    if (index === undefined) {
      this.listItems = this.listItems.slice(0, -1);
    } else {
      this.listItems = [...this.listItems.slice(0, index), ...this.listItems.slice(index + 1, this.listItems.length)];
    }
    this.updateVirtualProps();
  }

  private updateVirtualProps() {
    this.virtualizerProps = {
      count: this.listItems.length,
      estimateSize: () => 44,
      getItemKey: (index: number) => this.listItems[index],
    };
  }

  private handleVirtualItemsChange = (event: VirtualizedListVirtualItemsChangeEvent) => {
    this.virtualData = event.detail;
  };

  protected override render(): TemplateResult {
    return html`
      <div id="VirtualizedDynamicList--wrapper">
        <mdc-virtualizedlist
          .virtualizerProps=${this.virtualizerProps}
          @virtualitemschange=${this.handleVirtualItemsChange}
        >
          ${repeat(
            this.virtualData.virtualItems,
            ({ key }) => key,
            ({ index }) => this.generateListItem(index, this.listItems[index]),
          )}
        </mdc-virtualizedlist>
      </div>
      <div style="margin-top: 1rem;">
        <div>Current List Size: <span data-test="counter">${this.listItems.length}</span></div>
        <div style="display: flex; gap: 0.25rem;">
          <mdc-button @click=${() => this.removeItem()}>Remove Last</mdc-button>
        </div>
      </div>
      <style>
        #VirtualizedDynamicList--wrapper {
          width: 100%;
          height: calc(100% - 200px);
        }
      </style>
    `;
  }
}

VirtualizedDynamicList.register('mdc-virtualizeddynamiclist');

class ChatExample extends Component {
  @state()
  chatMessages: Record<string, { name: string; message: string; parent?: string }> = {
    msg_001: { name: 'Alice Johnson', message: 'Hey team! Just finished the quarterly report. Ready for review.' },
    msg_002: { name: 'Bob Smith', message: "Great work Alice! I'll take a look this afternoon." },
    msg_003: { name: 'Carol Davis', message: "Perfect timing. We can discuss it in tomorrow's standup." },
    msg_004: {
      name: 'Alice Johnson',
      message: 'Sounds good! Also, anyone know if the client meeting is still at 3pm?',
      parent: 'msg_001',
    },
    msg_005: { name: 'Bob Smith', message: "Yes, still at 3pm. I'll send the calendar invite.", parent: 'msg_001' },
    msg_006: { name: 'David Wilson', message: 'Morning everyone! Can someone help me with the API documentation?' },
    msg_007: { name: 'Emma Brown', message: 'Good morning! What specific part are you struggling with?' },
    msg_008: {
      name: 'David Wilson',
      message: 'I need to understand the authentication flow for the new endpoints.',
      parent: 'msg_006',
    },
    msg_009: {
      name: 'Frank Miller',
      message: 'I can help with that! Let me share the updated docs.',
      parent: 'msg_006',
    },
    msg_010: {
      name: 'Emma Brown',
      message: 'Frank has the latest version, mine might be outdated.',
      parent: 'msg_006',
    },
    msg_011: { name: 'Carol Davis', message: 'Quick question - has anyone tested the new deployment pipeline?' },
    msg_012: { name: 'Bob Smith', message: 'I ran it yesterday, worked perfectly! No issues on my end.' },
    msg_013: { name: 'Alice Johnson', message: 'Same here. The performance improvements are noticeable.' },
    msg_014: { name: 'Carol Davis', message: 'Excellent! Should we roll it out to staging then?', parent: 'msg_011' },
    msg_015: { name: 'Alice Johnson', message: "I think we're ready. Bob, what do you think?", parent: 'msg_011' },
    msg_016: {
      name: 'Bob Smith',
      message: "Let's do it! I can handle the deployment this evening.",
      parent: 'msg_011',
    },
    msg_017: { name: 'Frank Miller', message: 'Just pushed the hotfix for the login issue. Please test when you can.' },
    msg_018: { name: 'Emma Brown', message: "Thanks Frank! I'll test it right now." },
    msg_019: { name: 'David Wilson', message: 'Login is working perfectly on my end now. Great job!' },
    msg_020: { name: 'Frank Miller', message: 'Awesome! The fix was simpler than I thought.', parent: 'msg_017' },
    msg_021: { name: 'Bob Smith', message: 'Should we backport this to the release branch?', parent: 'msg_017' },
    msg_022: {
      name: 'Alice Johnson',
      message: 'Yes, definitely. This was blocking our demo tomorrow.',
      parent: 'msg_017',
    },
    msg_023: { name: 'Emma Brown', message: 'Hey team, reminder that code freeze is at 5pm today for the sprint.' },
    msg_024: { name: 'Carol Davis', message: 'Perfect timing! I just submitted my last PR.' },
    msg_025: { name: 'David Wilson', message: 'Mine is still in review. Carol, could you take a look?' },
    msg_026: { name: 'Carol Davis', message: "Sure! Send me the link and I'll review it now.", parent: 'msg_025' },
    msg_027: { name: 'Bob Smith', message: 'I can also help with reviews if needed.', parent: 'msg_025' },
    msg_028: { name: 'Frank Miller', message: 'Does anyone know if the database migration is scheduled for tonight?' },
    msg_029: { name: 'Emma Brown', message: "Yes, it's scheduled for 11pm. I'll be monitoring it." },
    msg_030: { name: 'Alice Johnson', message: 'I can stay online too in case we need to rollback.' },
    msg_031: {
      name: 'Frank Miller',
      message: "Great! I'll prepare the rollback scripts just in case.",
      parent: 'msg_028',
    },
    msg_032: { name: 'Bob Smith', message: 'Should we create a war room channel for tonight?', parent: 'msg_028' },
    msg_033: { name: 'Emma Brown', message: "Good idea! I'll set it up and invite everyone.", parent: 'msg_028' },
    msg_034: { name: 'Grace Lee', message: 'Just joined the team! Excited to work with everyone. 👋' },
    msg_035: { name: 'Alice Johnson', message: 'Welcome Grace! Great to have you on board!' },
    msg_036: { name: 'Bob Smith', message: 'Welcome! Let me know if you need help getting set up.' },
    msg_037: {
      name: 'Grace Lee',
      message: 'Thanks everyone! Alice, could you help me with the development environment setup?',
      parent: 'msg_034',
    },
    msg_038: {
      name: 'Alice Johnson',
      message: "Absolutely! I'll send you the setup guide and we can pair tomorrow.",
      parent: 'msg_034',
    },
    msg_039: {
      name: 'Carol Davis',
      message: "Grace, I've added you to all the relevant Slack channels too.",
      parent: 'msg_034',
    },
    msg_040: { name: 'David Wilson', message: 'Quick update: the API rate limiting is now live in production.' },
    msg_041: { name: 'Frank Miller', message: 'Nice! Are we seeing any impact on performance?' },
    msg_042: { name: 'Emma Brown', message: 'Monitoring shows everything looks good so far.' },
    msg_043: {
      name: 'David Wilson',
      message: 'Perfect! The new limits should prevent the timeout issues we had last week.',
      parent: 'msg_040',
    },
    msg_044: { name: 'Bob Smith', message: 'Great work David! This was a critical fix.', parent: 'msg_040' },
    msg_045: { name: 'Carol Davis', message: 'Thanks everyone! This has been a productive week.' },
    msg_046: { name: 'Grace Lee', message: 'Looking forward to contributing next week!' },
    msg_047: { name: 'Alice Johnson', message: 'Have a great weekend everyone!' },
    msg_048: { name: 'Frank Miller', message: 'See you all on Monday! 🎉' },
    msg_049: { name: 'Emma Brown', message: "One last thing - don't forget the retrospective is moved to Tuesday." },
    msg_050: { name: 'Bob Smith', message: "Thanks for the reminder! I'll update my calendar." },
    msg_051: { name: 'Carol Davis', message: 'Same here. What time was it again?', parent: 'msg_049' },
    msg_052: { name: 'Emma Brown', message: '2pm, right after the sprint planning meeting.', parent: 'msg_049' },
    msg_053: {
      name: 'Grace Lee',
      message: 'Should I join the retrospective even though I just started?',
      parent: 'msg_049',
    },
    msg_054: {
      name: 'Alice Johnson',
      message: "Absolutely! It's a great way to learn about our process.",
      parent: 'msg_049',
    },
  };

  listItems: string[] = this.getOrderedMessageKeys();

  @state()
  virtualData: VirtualData = { virtualItems: [], measureElement: () => null };

  @state()
  virtualizerProps: VirtualizerProps = {
    count: this.listItems.length,
    estimateSize: () => 48,
    getItemKey: index => this.listItems[index],
  };

  // Start AI-Assisted
  @state()
  textareaValue: string = '';

  private messageCounter = 54; // Start after existing messages

  private randomMessageTimer?: number;

  private textareaRef: Ref<HTMLElement> = createRef();

  private readonly randomMessages = [
    'Just finished reviewing the latest pull request.',
    'The build is now passing on all environments.',
    "Quick reminder about tomorrow's team meeting.",
    "I've updated the documentation with the latest changes.",
    'The performance metrics look great this week!',
    'Does anyone have time to pair on this feature?',
    'Just deployed the hotfix to production.',
    'The client feedback has been very positive.',
    "I'll be working from home tomorrow.",
    'Great work on the sprint demo today!',
    'The new feature is ready for QA testing.',
    'Coffee break anyone? ☕',
    'The integration tests are now automated.',
    'Thanks for the code review feedback!',
    'The database migration completed successfully.',
  ];

  private readonly teamMembers = [
    'Alice Johnson',
    'Bob Smith',
    'Carol Davis',
    'David Wilson',
    'Emma Brown',
    'Frank Miller',
    'Grace Lee',
  ];
  // End AI-Assisted

  private virtualizerRef: Ref<VirtualizedList> = createRef();

  private getOrderedMessageKeys(): string[] {
    const allKeys = Object.keys(this.chatMessages);
    const topLevelKeys = allKeys.filter(key => !this.chatMessages[key].parent);
    const orderedKeys: string[] = [];

    // Process each top-level message and its threads
    topLevelKeys.forEach(topLevelKey => {
      orderedKeys.push(topLevelKey);

      // Find all threaded messages for this top-level message
      const threadedMessages = allKeys.filter(key => this.chatMessages[key].parent === topLevelKey);

      // Add threaded messages immediately after their parent
      orderedKeys.push(...threadedMessages);
    });

    return orderedKeys;
  }

  // Start AI-Assisted
  override connectedCallback(): void {
    super.connectedCallback();
    this.startRandomMessageTimer();
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.stopRandomMessageTimer();
  }

  private startRandomMessageTimer(): void {
    this.randomMessageTimer = window.setInterval(() => {
      this.addRandomMessage();
    }, 5000);
  }

  private stopRandomMessageTimer(): void {
    if (this.randomMessageTimer) {
      clearInterval(this.randomMessageTimer);
      this.randomMessageTimer = undefined;
    }
  }

  private addRandomMessage(): void {
    const randomMessage = this.randomMessages[Math.floor(Math.random() * this.randomMessages.length)];
    const randomAuthor = this.teamMembers[Math.floor(Math.random() * this.teamMembers.length)];
    const messageId = `msg_${String(this.messageCounter + 1).padStart(3, '0')}`;

    // Randomly decide if this should be a threaded message (30% chance)
    let parentId: string | undefined;

    // Find a recent top-level message to thread under
    const topLevelMessages = Object.keys(this.chatMessages)
      .filter(key => !this.chatMessages[key].parent)
      .slice(-10); // Get last 5 top-level messages

    if (topLevelMessages.length > 0) {
      parentId = topLevelMessages[Math.floor(Math.random() * topLevelMessages.length)];
    }

    this.messageCounter += 1;
    this.chatMessages = {
      ...this.chatMessages,
      [messageId]: {
        name: randomAuthor,
        message: randomMessage,
        ...(parentId && { parent: parentId }),
      },
    };
  }

  private handleTextareaKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  };

  private handleTextareaInput = (event: Event): void => {
    const target = event.target as HTMLTextAreaElement;
    this.textareaValue = target.value;
  };

  private sendMessage(): void {
    if (this.textareaValue.trim()) {
      const messageId = `msg_${String(this.messageCounter + 1).padStart(3, '0')}`;
      this.messageCounter += 1;

      this.chatMessages = {
        ...this.chatMessages,
        [messageId]: {
          name: 'You',
          message: this.textareaValue.trim(),
        },
      };

      this.textareaValue = '';

      // Focus back to textarea after sending
      if (this.textareaRef.value) {
        const textarea = this.textareaRef.value.querySelector('textarea');
        if (textarea) {
          textarea.value = '';
          textarea.focus();
        }
      }
    }
  }
  // End AI-Assisted

  protected override update(changedProperties: PropertyValues): void {
    super.update(changedProperties);

    if (changedProperties.has('chatMessages')) {
      this.listItems = this.getOrderedMessageKeys();
      this.virtualizerProps = {
        count: this.listItems.length,
        estimateSize: () => 50,
        getItemKey: (index: number) => this.listItems[index],
      };
    }
  }

  private generateListItem({ index }: VirtualItem): TemplateResult {
    const message = this.chatMessages[this.listItems[index]];

    return html`
      <mdc-listitem data-index=${index} ${ref(this.virtualData.measureElement)}>
        <div
          slot="content"
          style=${styleMap({
            display: 'flex',
            gap: '0.5rem',
            'align-items': 'center',
            ...(message.parent ? { 'margin-left': '1rem' } : {}),
          })}
        >
          <mdc-avatar
            initials=${message.name
              .split(' ')
              .map(str => str[0])
              .join('')}
          ></mdc-avatar>
          <mdc-text tagname="span">${message.message}</mdc-text>
        </div>
      </mdc-listitem>
    `;
  }

  private handleVirtualItemsChange = (event: VirtualizedListVirtualItemsChangeEvent) => {
    this.virtualData = event.detail;
  };

  protected override createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  protected override render(): TemplateResult {
    return html`
      <div id="VirtualizedDynamicList--wrapper">
        <mdc-virtualizedlist
          ${ref(this.virtualizerRef)}
          .virtualizerProps=${this.virtualizerProps}
          @virtualitemschange=${this.handleVirtualItemsChange}
          initial-focus=${this.listItems.length - 1}
          stick-to-bottom
        >
          ${repeat(this.virtualData.virtualItems, ({ key }) => key, this.generateListItem.bind(this))}
        </mdc-virtualizedlist>
        <!-- Start AI-Assisted -->
        <div class="chat-input-container">
          <mdc-textarea
            ${ref(this.textareaRef)}
            placeholder="Type a message... (Press Enter to send, Shift+Enter for new line)"
            .value=${this.textareaValue}
            @input=${this.handleTextareaInput}
            @keydown=${this.handleTextareaKeyDown}
            resize="none"
            rows="2"
          ></mdc-textarea>
          <mdc-button @click=${this.sendMessage} variant="primary" ?disabled=${!this.textareaValue.trim()}>
            Send
          </mdc-button>
        </div>
        <!-- End AI-Assisted -->
      </div>
      <style>
        #VirtualizedDynamicList--wrapper {
          width: 100%;
          height: min(100%, 600px);
          display: flex;
          flex-direction: column;
        }

        /* Start AI-Assisted */
        .chat-input-container {
          display: flex;
          gap: 0.5rem;
          padding: 0.5rem;
          border-top: 1px solid var(--mds-color-theme-outline-secondary-normal);
          align-items: flex-end;
        }

        .chat-input-container mdc-textarea {
          flex: 1;
        }
        /* End AI-Assisted */
      </style>
    `;
  }
}

ChatExample.register('mdc-virtualizedlist-chat-example');

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-virtualizedwrapper']: VirtualizedWrapper;
    ['mdc-virtualizeddynamiclist']: VirtualizedDynamicList;
    ['mdc-virtualizedlist-chat-example']: ChatExample;
  }
}
