import{al as N,a2 as V,u as W,k as s,R as v,C as $,n as P,t as M,a4 as O,h as q}from"./iframe-BMQAO-1d.js";import{t as U}from"./if-defined-DjrVqlJq.js";import{c as K,b as c,a as G,T as f}from"./index-ftzgobA6.js";import{B as j}from"./button.component-BKfCPW1e.js";import{K as H,a as Z}from"./KeyDownHandledMixin-D5ID8XRZ.js";import{L as Y}from"./ListNavigationMixin-DzKNxM46.js";import{C as J,E as Q}from"./CaptureDestroyEventForChildElement-aVAGlOWN.js";import{T as X,g as B,a as y,b as tt}from"./TabListComponentMixin-BrCkSuYQ.js";import"./index-D7xTBYHY.js";import{h as at,d as D}from"./utils-B5QUENNQ.js";import"./index-D9gI0NS0.js";import"./preload-helper-C1FmrZbK.js";import"./button.utils-rNW36Ji7.js";import"./buttonsimple.component-CywH7ZQb.js";import"./DisabledMixin-B6ArWvcr.js";import"./IconNameMixin-5UtXPSY7.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./index-Ty40rxEB.js";import"./index-DzaT7ri-.js";import"./index-DTrDRi1E.js";import"./badge.constants-FD7lZVje.js";const et=[N,V`
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
  `],it=[...et],nt=W.constructTagName("tablist"),b={FORWARD:"forward",BACKWARD:"backward"};var ot=Object.defineProperty,m=(e,t,i,n)=>{for(var a=void 0,o=e.length-1,d;o>=0;o--)(d=e[o])&&(a=d(t,i,a)||a);return a&&ot(t,i,a),a};const w=class w extends Y(J(H(Z(X($))))){constructor(){super(),this.orientation="horizontal",this.showForwardArrowButton=!1,this.showBackwardArrowButton=!1,this.itemsStore=new Q(this,{isValidItem:this.isValidItem,onStoreUpdate:this.onElementStoreUpdate.bind(this)})}get navItems(){return this.itemsStore.items}isRtl(){var t;return((t=document.querySelector("html"))==null?void 0:t.getAttribute("dir"))==="rtl"||window.getComputedStyle(this).direction==="rtl"}isValidItem(t){return t.matches(`${K}:not([disabled])`)}onElementStoreUpdate(t,i,n){if(i==="added")t.tabIndex=-1,this.navItems.length===0&&(t.tabIndex=0);else if(i==="removed"&&t.tabIndex===0){let a=n+1;a>=this.navItems.length&&(a=n-1);const o=this.navItems.at(a);o instanceof c&&o.focus(),this.resetTabIndexes(a,!1)}}resetTabIndexAndSetFocus(t,i){var o;const n=super.resetTabIndexAndSetFocus(t,i,!1,!1),a=(o=this.navItems)==null?void 0:o.at(t);return a instanceof c&&a.focus(),this.handleArrowButtonVisibility(),n}async firstUpdated(){var n,a;if(!this.navItems)return;if(Array.isArray(this.navItems)&&this.navItems.length===0){this.onerror&&this.onerror("The tablist component must have at least one child tab");return}const t=this.navItems.map(o=>o.tabId);new Set(t).size!==this.navItems.length&&this.onerror&&this.onerror("The tabs inside the tab list must have unique tab ids"),new ResizeObserver(async()=>{this.handleArrowButtonVisibility()}).observe(this),this.activeTabId||(this.activeTabId=(n=B(this.navItems))==null?void 0:n.tabId),(a=this.tabsContainer)==null||a.addEventListener("focusin",this.handleFocus.bind(this))}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.tabsContainer)==null||t.removeEventListener("focusin",this.handleFocus)}async handleFocus(t){if(t.relatedTarget instanceof c||!(t.target instanceof c))return;const i=y(this.navItems||[]);if(!(i instanceof c))return;const n=this.navItems.findIndex(a=>a===i);this.resetTabIndexAndSetFocus(n,void 0)}shouldShowArrowButton(t){return t===b.FORWARD?this.showForwardArrowButton:this.showBackwardArrowButton}switchFocus(){var t,i;!this.showBackwardArrowButton&&!this.showForwardArrowButton?(t=y(this.navItems||[]))==null||t.focus():(this.showBackwardArrowButton&&!this.showForwardArrowButton||this.showForwardArrowButton&&!this.showBackwardArrowButton)&&((i=this.notFocusedArrowButton)==null||i.focus())}handleArrowButtonVisibility(){var g,A,T;if(!this.navItems||!this.tabsContainer)return;let t=!1;((g=this.shadowRoot)==null?void 0:g.activeElement)instanceof j&&(t=!0);const i=B(this.navItems),n=tt(this.navItems);if(!i||!n)return;const a=i.getBoundingClientRect().left,o=(A=this.tabsContainer)==null?void 0:A.getBoundingClientRect().left,d=n.getBoundingClientRect().right,l=(T=this.tabsContainer)==null?void 0:T.getBoundingClientRect().right,_=i.getBoundingClientRect().right,L=n.getBoundingClientRect().left;if(!this.isRtl()){a<=o?this.showBackwardArrowButton=!0:this.showBackwardArrowButton=!1,d>l?this.showForwardArrowButton=!0:this.showForwardArrowButton=!1,t&&this.switchFocus();return}_>l?this.showBackwardArrowButton=!0:this.showBackwardArrowButton=!1,L<o?this.showForwardArrowButton=!0:this.showForwardArrowButton=!1,t&&this.switchFocus()}async scrollTabs(t){var a;const i=this.isRtl()?-1:1,n=this.isRtl()?1:-1;(a=this.tabsContainer)==null||a.scrollBy({left:this.tabsContainer.clientWidth*(t===b.FORWARD?i:n),behavior:"instant"}),this.handleArrowButtonVisibility()}render(){const t=this.isRtl()?"left":"right",i=this.isRtl()?"right":"left",n=a=>s` ${this.shouldShowArrowButton(a)?s`<mdc-button
            variant="tertiary"
            prefix-icon="arrow-${a===b.FORWARD?t:i}-regular"
            aria-label="Scroll tabs ${a===b.FORWARD?t:i}"
            @click="${()=>this.scrollTabs(a)}"
          ></mdc-button>`:q}`;return s` ${n("backward")}
      <div part="container" role="${v.TABLIST}" tabindex="-1" aria-label="${U(this.dataAriaLabel)}">
        <slot></slot>
      </div>
      ${n(b.FORWARD)}`}};w.styles=[...$.styles,...it];let r=w;m([P({type:String,attribute:"data-aria-label"})],r.prototype,"dataAriaLabel");m([M('[part="container"]')],r.prototype,"tabsContainer");m([M("mdc-button:not(:focus-visible)")],r.prototype,"notFocusedArrowButton");m([O()],r.prototype,"showForwardArrowButton");m([O()],r.prototype,"showBackwardArrowButton");r.register(nt);const{action:st}=__STORYBOOK_MODULE_ACTIONS__,rt=e=>s` <mdc-tablist
      @change="${st("onchange")}"
      active-tab-id="${e["active-tab-id"]}"
      data-aria-label=${e["data-aria-label"]}
    >
      <mdc-tab
        size=${e.tabsize}
        variant=${e.tabvariant}
        text="Calls"
        icon-name="audio-call-bold"
        tab-id="calls-tab"
        aria-controls="calls-panel"
      >
      </mdc-tab>
      <mdc-tab
        size=${e.tabsize}
        variant=${e.tabvariant}
        text="Videos"
        icon-name="video-bold"
        tab-id="videos-tab"
        aria-controls="videos-panel"
      >
        <mdc-badge slot="postfix" type="counter" counter="5" aria-label="5 New videos"></mdc-badge>
      </mdc-tab>
      <mdc-tab
        size=${e.tabsize}
        variant=${e.tabvariant}
        text="Music"
        icon-name="file-music-bold"
        tab-id="music-tab"
        aria-controls="music-panel"
      >
      </mdc-tab>
      <mdc-tab
        size=${e.tabsize}
        variant=${e.tabvariant}
        text="Documents"
        icon-name="document-bold"
        tab-id="documents-tab"
        aria-controls="documents-panel"
      >
      </mdc-tab>
      <mdc-tab
        size=${e.tabsize}
        variant=${e.tabvariant}
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
    <!-- End of example markup for the tab panels -->`,St={title:"Components/tablist",tags:["autodocs"],component:"mdc-tablist",render:rt,argTypes:{"active-tab-id":{control:"select",description:"ID of the active tab. Defaults to the first tab if not provided.",options:["calls-tab","videos-tab","music-tab","documents-tab","meetings-tab"]},"data-aria-label":{control:"text"},tabvariant:{control:"select",description:"Set the variant of tab inside the tablist",options:Object.values(G)},tabsize:{control:"select",description:"Set the size of tabs inside the tablist",options:Object.values(f)},...at(["itemsStore"])}},h={args:{"active-tab-id":"documents-tab","data-aria-label":"Media types",tabsize:f[32],tabvariant:"line"}},p={parameters:{...D(s` <b>Note:</b> This logic of updating the tab panels based on the active tab has been added only on this
        storybook example. <code>mdc-tablist</code> component does not control this logic. This implementation has to be
        added on the consumer's side`,!0)},render:e=>s` <mdc-tablist
        @change="${i=>{const n=document.querySelector(`mdc-tab[tab-id="${i.detail.tabId}"]`),a=n==null?void 0:n.getAttribute("aria-controls");document.querySelectorAll('[role="tabpanel"]').forEach(d=>{const l=d;l.hidden=l.id!==a})}}"
        active-tab-id="${e["active-tab-id"]}"
        data-aria-label=${e["data-aria-label"]}
      >
        <mdc-tab
          size=${e.tabsize}
          variant=${e.tabvariant}
          text="Calls"
          icon-name="audio-call-bold"
          tab-id="calls-tab"
          aria-controls="calls-panel"
        >
        </mdc-tab>
        <mdc-tab
          size=${e.tabsize}
          variant=${e.tabvariant}
          text="Videos"
          icon-name="video-bold"
          tab-id="videos-tab"
          aria-controls="videos-panel"
        >
          <mdc-badge slot="badge" type="counter" counter="5" aria-label="5 New videos"></mdc-badge>
        </mdc-tab>
        <mdc-tab
          size=${e.tabsize}
          variant=${e.tabvariant}
          text="Music"
          icon-name="file-music-bold"
          tab-id="music-tab"
          aria-controls="music-panel"
        >
        </mdc-tab>
        <mdc-tab
          size=${e.tabsize}
          variant=${e.tabvariant}
          text="Documents"
          icon-name="document-bold"
          tab-id="documents-tab"
          aria-controls="documents-panel"
        >
        </mdc-tab>
        <mdc-tab
          size=${e.tabsize}
          variant=${e.tabvariant}
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
      <!-- End of example markup for the tab panels -->`,args:{tabvariant:"glass",tabsize:f[32],"active-tab-id":"documents-tab","data-aria-label":"Media types"}},u={render:()=>s`
    <div role="${v.MAIN}">
      <mdc-tablist active-tab-id="tab-2" data-aria-label="Tablist with a lot of tabs">
        ${new Array(100).fill(void 0).map((e,t)=>s`<mdc-tab text="Tab #${t+1}" tab-id="tab-${t+1}"></mdc-tab>`)}
      </mdc-tablist>
    </div>
  `,...D(s`<p role="${v.REGION}">
      When the tabs overflow the available space, arrow buttons appear at the left and right ends of the tablist. These
      buttons allow users to scroll through the tabs horizontally. The arrow buttons are automatically shown or hidden
      based on the scroll position.
    </p>`)};var x,I,z;h.parameters={...h.parameters,docs:{...(x=h.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    'active-tab-id': 'documents-tab',
    'data-aria-label': 'Media types',
    tabsize: TAB_SIZES[32],
    tabvariant: 'line'
  }
}`,...(z=(I=h.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};var R,S,E;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
          size=\${args.tabsize}
          variant=\${args.tabvariant}
          text="Calls"
          icon-name="audio-call-bold"
          tab-id="calls-tab"
          aria-controls="calls-panel"
        >
        </mdc-tab>
        <mdc-tab
          size=\${args.tabsize}
          variant=\${args.tabvariant}
          text="Videos"
          icon-name="video-bold"
          tab-id="videos-tab"
          aria-controls="videos-panel"
        >
          <mdc-badge slot="badge" type="counter" counter="5" aria-label="5 New videos"></mdc-badge>
        </mdc-tab>
        <mdc-tab
          size=\${args.tabsize}
          variant=\${args.tabvariant}
          text="Music"
          icon-name="file-music-bold"
          tab-id="music-tab"
          aria-controls="music-panel"
        >
        </mdc-tab>
        <mdc-tab
          size=\${args.tabsize}
          variant=\${args.tabvariant}
          text="Documents"
          icon-name="document-bold"
          tab-id="documents-tab"
          aria-controls="documents-panel"
        >
        </mdc-tab>
        <mdc-tab
          size=\${args.tabsize}
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
    tabsize: TAB_SIZES[32],
    'active-tab-id': 'documents-tab',
    'data-aria-label': 'Media types'
  }
}`,...(E=(S=p.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var C,F,k;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(k=(F=u.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};const Et=["Example","TablistWithPanels","TablistWithButtons"];export{h as Example,u as TablistWithButtons,p as TablistWithPanels,Et as __namedExportsOrder,St as default};
