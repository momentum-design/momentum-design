import{al as k,a2 as M,u as D,k as d,R as O,C as g,a4 as C,h as _,n as L,t as E}from"./iframe-Cbrh-sUn.js";import{t as V}from"./if-defined-C8uxVHlc.js";import{b as P,a as c,T as N}from"./index-Dlne2dwD.js";import{B as W}from"./button.component-FZQK40Ue.js";import{K as q,a as U}from"./KeyDownHandledMixin-B7vGZBpX.js";import{L as z}from"./ListNavigationMixin-CLoUKFvR.js";import{C as K,E as H}from"./CaptureDestroyEventForChildElement-Sp80iUfZ.js";import{T as j,g as A,a as T,b as G}from"./TabListComponentMixin-B-0twgeK.js";import"./index-YlVeS-Ks.js";import{h as Y,d as J}from"./utils-B5QUENNQ.js";import"./index-BeuU-wuM.js";import"./preload-helper-C1FmrZbK.js";import"./button.utils-rNW36Ji7.js";import"./buttonsimple.component-DV4247Hl.js";import"./DisabledMixin-DKrq-z8B.js";import"./IconNameMixin-J_vf2V4q.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./index-CaoLEN1R.js";import"./index-vz56whK2.js";import"./index-DTrDRi1E.js";import"./badge.constants-BgjQ_Swf.js";const Q=[k,M`
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
  `],X=[...Q],Z=D.constructTagName("tablist"),b={FORWARD:"forward",BACKWARD:"backward"};var tt=Object.defineProperty,m=(o,t,e,i)=>{for(var a=void 0,n=o.length-1,r;n>=0;n--)(r=o[n])&&(a=r(t,e,a)||a);return a&&tt(t,e,a),a};const u=class u extends z(K(q(U(j(g))))){constructor(){super(),this.orientation="horizontal",this.showForwardArrowButton=!1,this.showBackwardArrowButton=!1,this.itemsStore=new H(this,{isValidItem:this.isValidItem,onStoreUpdate:this.onElementStoreUpdate.bind(this)})}get navItems(){return this.itemsStore.items}isRtl(){var t;return((t=document.querySelector("html"))==null?void 0:t.getAttribute("dir"))==="rtl"||window.getComputedStyle(this).direction==="rtl"}isValidItem(t){return t.matches(`${P}:not([disabled])`)}onElementStoreUpdate(t,e,i){if(e==="added")t.tabIndex=-1,this.navItems.length===0&&(t.tabIndex=0);else if(e==="removed"&&t.tabIndex===0){let a=i+1;a>=this.navItems.length&&(a=i-1);const n=this.navItems.at(a);n instanceof c&&n.focus(),this.resetTabIndexes(a,!1)}}resetTabIndexAndSetFocus(t,e){var n;const i=super.resetTabIndexAndSetFocus(t,e,!1,!1),a=(n=this.navItems)==null?void 0:n.at(t);return a instanceof c&&a.focus(),this.handleArrowButtonVisibility(),i}async firstUpdated(){var i,a;if(!this.navItems)return;if(Array.isArray(this.navItems)&&this.navItems.length===0){this.onerror&&this.onerror("The tablist component must have at least one child tab");return}const t=this.navItems.map(n=>n.tabId);new Set(t).size!==this.navItems.length&&this.onerror&&this.onerror("The tabs inside the tab list must have unique tab ids"),new ResizeObserver(async()=>{this.handleArrowButtonVisibility()}).observe(this),this.activeTabId||(this.activeTabId=(i=A(this.navItems))==null?void 0:i.tabId),(a=this.tabsContainer)==null||a.addEventListener("focusin",this.handleFocus.bind(this))}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.tabsContainer)==null||t.removeEventListener("focusin",this.handleFocus)}async handleFocus(t){if(t.relatedTarget instanceof c||!(t.target instanceof c))return;const e=T(this.navItems||[]);if(!(e instanceof c))return;const i=this.navItems.findIndex(a=>a===e);this.resetTabIndexAndSetFocus(i,void 0)}shouldShowArrowButton(t){return t===b.FORWARD?this.showForwardArrowButton:this.showBackwardArrowButton}switchFocus(){var t,e;!this.showBackwardArrowButton&&!this.showForwardArrowButton?(t=T(this.navItems||[]))==null||t.focus():(this.showBackwardArrowButton&&!this.showForwardArrowButton||this.showForwardArrowButton&&!this.showBackwardArrowButton)&&((e=this.notFocusedArrowButton)==null||e.focus())}handleArrowButtonVisibility(){var v,f,w;if(!this.navItems||!this.tabsContainer)return;let t=!1;((v=this.shadowRoot)==null?void 0:v.activeElement)instanceof W&&(t=!0);const e=A(this.navItems),i=G(this.navItems),a=e.getBoundingClientRect().left,n=(f=this.tabsContainer)==null?void 0:f.getBoundingClientRect().left,r=i.getBoundingClientRect().right,l=(w=this.tabsContainer)==null?void 0:w.getBoundingClientRect().right,F=e.getBoundingClientRect().right,S=i.getBoundingClientRect().left;if(!this.isRtl()){a<=n?this.showBackwardArrowButton=!0:this.showBackwardArrowButton=!1,r>l?this.showForwardArrowButton=!0:this.showForwardArrowButton=!1,t&&this.switchFocus();return}F>l?this.showBackwardArrowButton=!0:this.showBackwardArrowButton=!1,S<n?this.showForwardArrowButton=!0:this.showForwardArrowButton=!1,t&&this.switchFocus()}async scrollTabs(t){var a;const e=this.isRtl()?-1:1,i=this.isRtl()?1:-1;(a=this.tabsContainer)==null||a.scrollBy({left:this.tabsContainer.clientWidth*(t===b.FORWARD?e:i),behavior:"instant"}),this.handleArrowButtonVisibility()}render(){const t=this.isRtl()?"left":"right",e=this.isRtl()?"right":"left",i=a=>d` ${this.shouldShowArrowButton(a)?d`<mdc-button
            variant="tertiary"
            prefix-icon="arrow-${a===b.FORWARD?t:e}-regular"
            aria-label="Scroll tabs ${a===b.FORWARD?t:e}"
            @click="${()=>this.scrollTabs(a)}"
          ></mdc-button>`:_}`;return d` ${i("backward")}
      <div part="container" role="${O.TABLIST}" tabindex="-1" aria-label="${V(this.dataAriaLabel)}">
        <slot></slot>
      </div>
      ${i(b.FORWARD)}`}};u.styles=[...g.styles,...X];let s=u;m([L({type:String,attribute:"data-aria-label"})],s.prototype,"dataAriaLabel");m([E('[part="container"]')],s.prototype,"tabsContainer");m([E("mdc-button:not(:focus-visible)")],s.prototype,"notFocusedArrowButton");m([C()],s.prototype,"showForwardArrowButton");m([C()],s.prototype,"showBackwardArrowButton");s.register(Z);const{action:at}=__STORYBOOK_MODULE_ACTIONS__,et=o=>d` <mdc-tablist
      @change="${at("onchange")}"
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
    <div id="documents-panel" role="tabpanel" hidden>
      <p>Documents panel</p>
    </div>
    <div id="meetings-panel" role="tabpanel" hidden>
      <p>Meetings panel</p>
    </div>
    <!-- End of example markup for the tab panels -->`,yt={title:"Components/tablist",tags:["autodocs"],component:"mdc-tablist",render:et,argTypes:{"active-tab-id":{control:"select",description:"ID of the active tab. Defaults to the first tab if not provided.",options:["calls-tab","videos-tab","music-tab","documents-tab","meetings-tab"]},"data-aria-label":{control:"text"},tabvariant:{control:"select",description:"Set the variant of tab inside the tablist",options:Object.values(N)},...Y(["itemsStore"])}},p={args:{"active-tab-id":"documents-tab","data-aria-label":"Media types",tabvariant:"line"}},h={parameters:{...J(d` <b>Note:</b> This logic of updating the tab panels based on the active tab has been added only on this
        storybook example. <code>mdc-tablist</code> component does not control this logic. This implementation has to be
        added on the consumer's side`,!0)},render:o=>d` <mdc-tablist
        @change="${e=>{const i=document.querySelector(`mdc-tab[tab-id="${e.detail.tabId}"]`),a=i==null?void 0:i.getAttribute("aria-controls");document.querySelectorAll('[role="tabpanel"]').forEach(r=>{const l=r;l.hidden=l.id!==a})}}"
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
      <!-- End of example markup for the tab panels -->`,args:{tabvariant:"glass","active-tab-id":"documents-tab","data-aria-label":"Media types"}};var B,x,y;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    'active-tab-id': 'documents-tab',
    'data-aria-label': 'Media types',
    tabvariant: 'line'
  }
}`,...(y=(x=p.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var I,R,$;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...($=(R=h.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};const It=["Example","TablistWithPanels"];export{p as Example,h as TablistWithPanels,It as __namedExportsOrder,yt as default};
