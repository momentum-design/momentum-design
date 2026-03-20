import{am as N,a2 as V,u as W,k as s,R as v,C as T,n as P,t as M,a4 as O,h as z}from"./iframe-C6gz75uu.js";import{t as q}from"./if-defined-C_NTEn5h.js";import{b as U,a as c,T as K}from"./index-DNi--4Lp.js";import{B as G}from"./button.component-B1o2fJAQ.js";import{K as H,a as j}from"./KeyDownHandledMixin-Dnjzip49.js";import{L as Y}from"./ListNavigationMixin-C7XHAB3I.js";import{C as J,E as Q}from"./CaptureDestroyEventForChildElement-CO91rV6z.js";import{T as X,g as y,a as B,b as Z}from"./TabListComponentMixin-BfM39Yem.js";import"./index-DQ4jECvl.js";import{h as tt,d as D}from"./utils-B5QUENNQ.js";import"./index-8qW2nxAP.js";import"./preload-helper-C1FmrZbK.js";import"./button.utils-rNW36Ji7.js";import"./buttonsimple.component-Cq3liiCN.js";import"./DisabledMixin-B_w9ZmxY.js";import"./IconNameMixin-fK157EiE.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./index-Bjb1ds6w.js";import"./index-Buz5Gdoh.js";import"./index-DTrDRi1E.js";import"./badge.constants-B-M99ScR.js";const at=[N,V`
    :host {
      --mdc-tablist-focus-ring-outer-width: var(--mdc-focus-ring-outer-width);
      --mdc-tablist-gap: 0.5rem;
      --mdc-tablist-width: 100%;
      --mdc-tablist-arrow-button-margin: 0.75rem;

      width: var(--mdc-tablist-width);
      display: flex;
      align-items: center;
    }

    :host ::slotted(mdc-tab) {
      width: initial;
    }

    :host::part(container) {
      display: flex;
      overflow-x: hidden;
      gap: var(--mdc-tablist-gap);
      padding: var(--mdc-tablist-focus-ring-outer-width);
    }

    :host mdc-button[prefix-icon='arrow-left-regular'] {
      margin-right: var(--mdc-tablist-arrow-button-margin);
    }

    :host mdc-button[prefix-icon='arrow-right-regular'] {
      margin-left: var(--mdc-tablist-arrow-button-margin);
    }
  `],et=[...at],it=W.constructTagName("tablist"),b={FORWARD:"forward",BACKWARD:"backward"};var ot=Object.defineProperty,m=(o,t,e,i)=>{for(var a=void 0,n=o.length-1,d;n>=0;n--)(d=o[n])&&(a=d(t,e,a)||a);return a&&ot(t,e,a),a};const f=class f extends Y(J(H(j(X(T))))){constructor(){super(),this.orientation="horizontal",this.showForwardArrowButton=!1,this.showBackwardArrowButton=!1,this.itemsStore=new Q(this,{isValidItem:this.isValidItem,onStoreUpdate:this.onElementStoreUpdate.bind(this)})}get navItems(){return this.itemsStore.items}isRtl(){var t;return((t=document.querySelector("html"))==null?void 0:t.getAttribute("dir"))==="rtl"||window.getComputedStyle(this).direction==="rtl"}isValidItem(t){return t.matches(`${U}:not([disabled])`)}onElementStoreUpdate(t,e,i){if(e==="added")t.tabIndex=-1,this.navItems.length===0&&(t.tabIndex=0);else if(e==="removed"&&t.tabIndex===0){let a=i+1;a>=this.navItems.length&&(a=i-1);const n=this.navItems.at(a);n instanceof c&&n.focus(),this.resetTabIndexes(a,!1)}}resetTabIndexAndSetFocus(t,e){var n;const i=super.resetTabIndexAndSetFocus(t,e,!1,!1),a=(n=this.navItems)==null?void 0:n.at(t);return a instanceof c&&a.focus(),this.handleArrowButtonVisibility(),i}async firstUpdated(){var i,a;if(!this.navItems)return;if(Array.isArray(this.navItems)&&this.navItems.length===0){this.onerror&&this.onerror("The tablist component must have at least one child tab");return}const t=this.navItems.map(n=>n.tabId);new Set(t).size!==this.navItems.length&&this.onerror&&this.onerror("The tabs inside the tab list must have unique tab ids"),new ResizeObserver(async()=>{this.handleArrowButtonVisibility()}).observe(this),this.activeTabId||(this.activeTabId=(i=y(this.navItems))==null?void 0:i.tabId),(a=this.tabsContainer)==null||a.addEventListener("focusin",this.handleFocus.bind(this))}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.tabsContainer)==null||t.removeEventListener("focusin",this.handleFocus)}async handleFocus(t){if(t.relatedTarget instanceof c||!(t.target instanceof c))return;const e=B(this.navItems||[]);if(!(e instanceof c))return;const i=this.navItems.findIndex(a=>a===e);this.resetTabIndexAndSetFocus(i,void 0)}shouldShowArrowButton(t){return t===b.FORWARD?this.showForwardArrowButton:this.showBackwardArrowButton}switchFocus(){var t,e;!this.showBackwardArrowButton&&!this.showForwardArrowButton?(t=B(this.navItems||[]))==null||t.focus():(this.showBackwardArrowButton&&!this.showForwardArrowButton||this.showForwardArrowButton&&!this.showBackwardArrowButton)&&((e=this.notFocusedArrowButton)==null||e.focus())}handleArrowButtonVisibility(){var w,g,A;if(!this.navItems||!this.tabsContainer)return;let t=!1;((w=this.shadowRoot)==null?void 0:w.activeElement)instanceof G&&(t=!0);const e=y(this.navItems),i=Z(this.navItems);if(!e||!i)return;const a=e.getBoundingClientRect().left,n=(g=this.tabsContainer)==null?void 0:g.getBoundingClientRect().left,d=i.getBoundingClientRect().right,l=(A=this.tabsContainer)==null?void 0:A.getBoundingClientRect().right,_=e.getBoundingClientRect().right,L=i.getBoundingClientRect().left;if(!this.isRtl()){a<=n?this.showBackwardArrowButton=!0:this.showBackwardArrowButton=!1,d>l?this.showForwardArrowButton=!0:this.showForwardArrowButton=!1,t&&this.switchFocus();return}_>l?this.showBackwardArrowButton=!0:this.showBackwardArrowButton=!1,L<n?this.showForwardArrowButton=!0:this.showForwardArrowButton=!1,t&&this.switchFocus()}async scrollTabs(t){var a;const e=this.isRtl()?-1:1,i=this.isRtl()?1:-1;(a=this.tabsContainer)==null||a.scrollBy({left:this.tabsContainer.clientWidth*(t===b.FORWARD?e:i),behavior:"instant"}),this.handleArrowButtonVisibility()}render(){const t=this.isRtl()?"left":"right",e=this.isRtl()?"right":"left",i=a=>s` ${this.shouldShowArrowButton(a)?s`<mdc-button
            variant="tertiary"
            prefix-icon="arrow-${a===b.FORWARD?t:e}-regular"
            aria-label="Scroll tabs ${a===b.FORWARD?t:e}"
            @click="${()=>this.scrollTabs(a)}"
          ></mdc-button>`:z}`;return s` ${i("backward")}
      <div part="container" role="${v.TABLIST}" tabindex="-1" aria-label="${q(this.dataAriaLabel)}">
        <slot></slot>
      </div>
      ${i(b.FORWARD)}`}};f.styles=[...T.styles,...et];let r=f;m([P({type:String,attribute:"data-aria-label"})],r.prototype,"dataAriaLabel");m([M('[part="container"]')],r.prototype,"tabsContainer");m([M("mdc-button:not(:focus-visible)")],r.prototype,"notFocusedArrowButton");m([O()],r.prototype,"showForwardArrowButton");m([O()],r.prototype,"showBackwardArrowButton");r.register(it);const{action:nt}=__STORYBOOK_MODULE_ACTIONS__,st=o=>s` <mdc-tablist
      @change="${nt("onchange")}"
      active-tab-id="${o["active-tab-id"]}"
      data-aria-label=${o["data-aria-label"]}
    >
      <mdc-tab
        variant=${o.tabvariant}
        text="Calls"
        icon-name="audio-call-bold"
        tab-id="calls-tab"
        aria-controls="calls-panel"
      >
      </mdc-tab>
      <mdc-tab
        variant=${o.tabvariant}
        text="Videos"
        icon-name="video-bold"
        tab-id="videos-tab"
        aria-controls="videos-panel"
      >
        <mdc-badge slot="postfix" type="counter" counter="5" aria-label="5 New videos"></mdc-badge>
      </mdc-tab>
      <mdc-tab
        variant=${o.tabvariant}
        text="Music"
        icon-name="file-music-bold"
        tab-id="music-tab"
        aria-controls="music-panel"
      >
      </mdc-tab>
      <mdc-tab
        variant=${o.tabvariant}
        text="Documents"
        icon-name="document-bold"
        tab-id="documents-tab"
        aria-controls="documents-panel"
      >
      </mdc-tab>
      <mdc-tab
        variant=${o.tabvariant}
        text="Meetings"
        icon-name="calendar-month-bold"
        tab-id="meetings-tab"
        aria-controls="meetings-panel"
      >
      </mdc-tab>
    </mdc-tablist>

    <!-- The following is an example of the markup for the tab panels.
This markup is not part of the component and is only provided for context. -->
    <div id="calls-panel" role="tabpanel" hidden>
      <p>Calls panel</p>
    </div>
    <div id="videos-panel" role="tabpanel" hidden>
      <p>Videos panel</p>
    </div>
    <div id="music-panel" role="tabpanel" hidden>
      <p>Music panel</p>
    </div>
    <div id="documents-panel" role="tabpanel" hidden>
      <p>Documents panel</p>
    </div>
    <div id="meetings-panel" role="tabpanel" hidden>
      <p>Meetings panel</p>
    </div>
    <!-- End of example markup for the tab panels -->`,Ct={title:"Components/tablist",tags:["autodocs"],component:"mdc-tablist",render:st,argTypes:{"active-tab-id":{control:"select",description:"ID of the active tab. Defaults to the first tab if not provided.",options:["calls-tab","videos-tab","music-tab","documents-tab","meetings-tab"]},"data-aria-label":{control:"text"},tabvariant:{control:"select",description:"Set the variant of tab inside the tablist",options:Object.values(K)},...tt(["itemsStore"])}},h={args:{"active-tab-id":"documents-tab","data-aria-label":"Media types",tabvariant:"line"}},p={parameters:{...D(s` <b>Note:</b> This logic of updating the tab panels based on the active tab has been added only on this
        storybook example. <code>mdc-tablist</code> component does not control this logic. This implementation has to be
        added on the consumer's side`,!0)},render:o=>s` <mdc-tablist
        @change="${e=>{const i=document.querySelector(`mdc-tab[tab-id="${e.detail.tabId}"]`),a=i==null?void 0:i.getAttribute("aria-controls");document.querySelectorAll('[role="tabpanel"]').forEach(d=>{const l=d;l.hidden=l.id!==a})}}"
        active-tab-id="${o["active-tab-id"]}"
        data-aria-label=${o["data-aria-label"]}
      >
        <mdc-tab
          variant=${o.tabvariant}
          text="Calls"
          icon-name="audio-call-bold"
          tab-id="calls-tab"
          aria-controls="calls-panel"
        >
        </mdc-tab>
        <mdc-tab
          variant=${o.tabvariant}
          text="Videos"
          icon-name="video-bold"
          tab-id="videos-tab"
          aria-controls="videos-panel"
        >
          <mdc-badge slot="badge" type="counter" counter="5" aria-label="5 New videos"></mdc-badge>
        </mdc-tab>
        <mdc-tab
          variant=${o.tabvariant}
          text="Music"
          icon-name="file-music-bold"
          tab-id="music-tab"
          aria-controls="music-panel"
        >
        </mdc-tab>
        <mdc-tab
          variant=${o.tabvariant}
          text="Documents"
          icon-name="document-bold"
          tab-id="documents-tab"
          aria-controls="documents-panel"
        >
        </mdc-tab>
        <mdc-tab
          variant=${o.tabvariant}
          text="Meetings"
          icon-name="calendar-month-bold"
          tab-id="meetings-tab"
          aria-controls="meetings-panel"
        >
        </mdc-tab>
      </mdc-tablist>

      <!-- The following is an example of the markup for the tab panels.
This markup is not part of the component and is only provided for context. -->
      <div id="calls-panel" role="tabpanel" hidden>
        <p>Calls panel</p>
      </div>
      <div id="videos-panel" role="tabpanel" hidden>
        <p>Videos panel</p>
      </div>
      <div id="music-panel" role="tabpanel" hidden>
        <p>Music panel</p>
      </div>
      <div id="documents-panel" role="tabpanel">
        <p>Documents panel</p>
      </div>
      <div id="meetings-panel" role="tabpanel" hidden>
        <p>Meetings panel</p>
      </div>
      <!-- End of example markup for the tab panels -->`,args:{tabvariant:"glass","active-tab-id":"documents-tab","data-aria-label":"Media types"}},u={render:()=>s`
    <div role="${v.MAIN}">
      <mdc-tablist active-tab-id="tab-2" data-aria-label="Tablist with a lot of tabs">
        ${new Array(100).fill(void 0).map((o,t)=>s`<mdc-tab text="Tab #${t+1}" tab-id="tab-${t+1}"></mdc-tab>`)}
      </mdc-tablist>
    </div>
  `,...D(s`<p role="${v.REGION}">
      When the tabs overflow the available space, arrow buttons appear at the left and right ends of the tablist. These
      buttons allow users to scroll through the tabs horizontally. The arrow buttons are automatically shown or hidden
      based on the scroll position.
    </p>`)};var x,I,$;h.parameters={...h.parameters,docs:{...(x=h.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    'active-tab-id': 'documents-tab',
    'data-aria-label': 'Media types',
    tabvariant: 'line'
  }
}`,...($=(I=h.parameters)==null?void 0:I.docs)==null?void 0:$.source}}};var R,C,E;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  parameters: {
    ...describeStory(html\` <b>Note:</b> This logic of updating the tab panels based on the active tab has been added only on this
        storybook example. <code>mdc-tablist</code> component does not control this logic. This implementation has to be
        added on the consumer's side\`, true)
  },
  render: args => {
    const updateTabPanel = (event: CustomEvent) => {
      const activeTab = document.querySelector(\`mdc-tab[tab-id="\${event.detail.tabId}"]\`);
      const panelId = activeTab?.getAttribute('aria-controls');
      const panels = document.querySelectorAll('[role="tabpanel"]');
      panels.forEach(panelElement => {
        const el = panelElement as HTMLElement;
        el.hidden = el.id !== panelId;
      });
    };
    return html\` <mdc-tablist
        @change="\${updateTabPanel}"
        active-tab-id="\${args['active-tab-id']}"
        data-aria-label=\${args['data-aria-label']}
      >
        <mdc-tab
          variant=\${args.tabvariant}
          text="Calls"
          icon-name="audio-call-bold"
          tab-id="calls-tab"
          aria-controls="calls-panel"
        >
        </mdc-tab>
        <mdc-tab
          variant=\${args.tabvariant}
          text="Videos"
          icon-name="video-bold"
          tab-id="videos-tab"
          aria-controls="videos-panel"
        >
          <mdc-badge slot="badge" type="counter" counter="5" aria-label="5 New videos"></mdc-badge>
        </mdc-tab>
        <mdc-tab
          variant=\${args.tabvariant}
          text="Music"
          icon-name="file-music-bold"
          tab-id="music-tab"
          aria-controls="music-panel"
        >
        </mdc-tab>
        <mdc-tab
          variant=\${args.tabvariant}
          text="Documents"
          icon-name="document-bold"
          tab-id="documents-tab"
          aria-controls="documents-panel"
        >
        </mdc-tab>
        <mdc-tab
          variant=\${args.tabvariant}
          text="Meetings"
          icon-name="calendar-month-bold"
          tab-id="meetings-tab"
          aria-controls="meetings-panel"
        >
        </mdc-tab>
      </mdc-tablist>

      <!-- The following is an example of the markup for the tab panels.
This markup is not part of the component and is only provided for context. -->
      <div id="calls-panel" role="tabpanel" hidden>
        <p>Calls panel</p>
      </div>
      <div id="videos-panel" role="tabpanel" hidden>
        <p>Videos panel</p>
      </div>
      <div id="music-panel" role="tabpanel" hidden>
        <p>Music panel</p>
      </div>
      <div id="documents-panel" role="tabpanel">
        <p>Documents panel</p>
      </div>
      <div id="meetings-panel" role="tabpanel" hidden>
        <p>Meetings panel</p>
      </div>
      <!-- End of example markup for the tab panels -->\`;
  },
  args: {
    tabvariant: 'glass',
    'active-tab-id': 'documents-tab',
    'data-aria-label': 'Media types'
  }
}`,...(E=(C=p.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var S,F,k;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => html\`
    <div role="\${ROLE.MAIN}">
      <mdc-tablist active-tab-id="tab-2" data-aria-label="Tablist with a lot of tabs">
        \${new Array(100).fill(undefined).map((_, i) => html\`<mdc-tab text="Tab #\${i + 1}" tab-id="tab-\${i + 1}"></mdc-tab>\`)}
      </mdc-tablist>
    </div>
  \`,
  ...describeStory(html\`<p role="\${ROLE.REGION}">
      When the tabs overflow the available space, arrow buttons appear at the left and right ends of the tablist. These
      buttons allow users to scroll through the tabs horizontally. The arrow buttons are automatically shown or hidden
      based on the scroll position.
    </p>\`)
}`,...(k=(F=u.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};const Et=["Example","TablistWithPanels","TablistWithButtons"];export{h as Example,u as TablistWithButtons,p as TablistWithPanels,Et as __namedExportsOrder,Ct as default};
