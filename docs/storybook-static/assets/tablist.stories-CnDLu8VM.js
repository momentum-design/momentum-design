import{al as P,a2 as V,u as W,k as h,R as K,C as B,a5 as N,h as H,n as L,t as _}from"./iframe-lqtK641B.js";import{o as q}from"./query-assigned-elements-CgmFqUSx.js";import{t as z}from"./if-defined-B9Bf-iG8.js";import{a as d,T as U}from"./index-CAKl0bJl.js";import{B as j}from"./button.component-C6ft3dfF.js";import{K as G,a as Y,N as J,A as u}from"./KeyDownHandledMixin-U8QDj86m.js";import"./index-sox3K26K.js";import{b as Q,d as X}from"./utils-B5QUENNQ.js";import"./index-B2AMldNV.js";import"./preload-helper-C1FmrZbK.js";import"./button.utils-rNW36Ji7.js";import"./buttonsimple.component-Bsurvu8q.js";import"./DisabledMixin-X-8L2ccJ.js";import"./IconNameMixin-CWG3I-1A.js";import"./index-CKP4Olr3.js";import"./index-IC5axiHf.js";import"./index-DTrDRi1E.js";import"./badge.constants-D3CRhKp6.js";const Z=[P,V`
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
  `],tt=[...Z],at=W.constructTagName("tablist"),p={FORWARD:"forward",BACKWARD:"backward"},g=e=>e[0],E=e=>e[e.length-1],et=(e,t,a)=>{const i=e.findIndex(s=>t===s)-1,n=a?(i+e.length)%e.length:Math.max(0,i);return e[n]},it=(e,t,a)=>{const i=e.findIndex(s=>t===s)+1,n=a?i%e.length:Math.min(i,e.length-1);return e[n]},nt=(e,t)=>e.find(a=>a.tabId===t),C=e=>e.find(t=>t.active);var st=Object.defineProperty,b=(e,t,a,i)=>{for(var n=void 0,s=e.length-1,o;s>=0;s--)(o=e[s])&&(n=o(t,a,n)||n);return n&&st(t,a,n),n};const T=class T extends G(Y(B)){constructor(){super(),this.showForwardArrowButton=!1,this.showBackwardArrowButton=!1,this.addEventListener("keydown",this.handleKeydown.bind(this)),this.addEventListener("activechange",this.handleNestedTabActiveChange)}isRtl(){var t;return((t=document.querySelector("html"))==null?void 0:t.getAttribute("dir"))==="rtl"||window.getComputedStyle(this).direction==="rtl"}async firstUpdated(){var i,n,s;if(!this.tabs)return;if(Array.isArray(this.tabs)&&this.tabs.length===0){this.onerror&&this.onerror("The tablist component must have at least one child tab");return}const t=this.tabs.map(o=>o.tabId);new Set(t).size!==this.tabs.length&&this.onerror&&this.onerror("The tabs inside the tab list must have unique tab ids"),new ResizeObserver(async()=>{await this.handleArrowButtonVisibility()}).observe(this),this.activeTabId||(this.activeTabId=(i=g(this.tabs))==null?void 0:i.tabId),(n=this.tabsContainer)==null||n.addEventListener("focusin",this.handleFocus.bind(this)),(s=this.tabsContainer)==null||s.addEventListener("mousedown",this.handleMousedown.bind(this))}disconnectedCallback(){var t,a;super.disconnectedCallback(),(t=this.tabsContainer)==null||t.removeEventListener("focusin",this.handleFocus),(a=this.tabsContainer)==null||a.removeEventListener("mousedown",this.handleMousedown)}async update(t){if(super.update(t),t.has("activeTabId")){if(!this.tabs||!this.activeTabId)return;const a=nt(this.tabs,this.activeTabId);if(!(a instanceof d))return;this.setActiveTab(a),t.get("activeTabId")?(this.fireTabChangeEvent(a),await this.focusTab(a)):this.resetTabIndexAndSetNewTabIndex(a)}}fireTabChangeEvent(t){const a=new CustomEvent("change",{detail:{tabId:t.tabId}});this.dispatchEvent(a)}async handleFocus(t){if(t.relatedTarget instanceof d||!(t.target instanceof d))return;const a=C(this.tabs||[]);a instanceof d&&await this.focusTab(a)}handleMousedown(t){t.target instanceof d&&t.preventDefault()}async handleNestedTabActiveChange(t){t.stopPropagation();const a=t.target;a instanceof d&&(this.setActiveTab(a),await this.focusTab(a),this.activeTabId=a.tabId)}resetTabIndexAndSetNewTabIndex(t){var a;(a=this.tabs)==null||a.forEach(i=>{i.setAttribute("tabindex",i===t?"0":"-1")})}setActiveTab(t){var a;(a=this.tabs)==null||a.forEach(i=>{i===t?i.setAttribute("active",""):i.removeAttribute("active")})}async focusTab(t){return t instanceof d?(t!==(document==null?void 0:document.activeElement)&&(this.resetTabIndexAndSetNewTabIndex(t),t.focus()),await this.handleArrowButtonVisibility(),!0):!1}async handleKeydown(t){const a=t.target;if(!(a instanceof d)||!this.tabs)return;const i=this.getActionForKeyEvent(t,!0),n=this.getKeyboardNavMode()===J.DEFAULT,s=et(this.tabs,a,n),o=it(this.tabs,a,n),l=g(this.tabs),w=E(this.tabs);let c=!1;switch(i){case u.LEFT:t.preventDefault(),c=s!==a&&await this.focusTab(s);break;case u.RIGHT:t.preventDefault(),c=o!==a&&await this.focusTab(o);break;case u.HOME:c=await this.focusTab(l);break;case u.END:c=await this.focusTab(w);break}c&&this.keyDownEventHandled()}shouldShowArrowButton(t){return t===p.FORWARD?this.showForwardArrowButton:this.showBackwardArrowButton}async switchFocus(){var t,a;await this.updateComplete,!this.showBackwardArrowButton&&!this.showForwardArrowButton?(t=C(this.tabs||[]))==null||t.focus():(this.showBackwardArrowButton&&!this.showForwardArrowButton||this.showForwardArrowButton&&!this.showBackwardArrowButton)&&((a=this.notFocusedArrowButton)==null||a.focus())}async handleArrowButtonVisibility(){var A,y,x;if(!this.tabs||!this.tabsContainer)return;let t=!1;((A=this.shadowRoot)==null?void 0:A.activeElement)instanceof j&&(t=!0);const a=g(this.tabs),i=E(this.tabs),n=a.getBoundingClientRect().left,s=(y=this.tabsContainer)==null?void 0:y.getBoundingClientRect().left,o=i.getBoundingClientRect().right,l=(x=this.tabsContainer)==null?void 0:x.getBoundingClientRect().right,w=a.getBoundingClientRect().right,c=i.getBoundingClientRect().left;if(!this.isRtl()){n<=s?this.showBackwardArrowButton=!0:this.showBackwardArrowButton=!1,o>l?this.showForwardArrowButton=!0:this.showForwardArrowButton=!1,t&&await this.switchFocus();return}w>l?this.showBackwardArrowButton=!0:this.showBackwardArrowButton=!1,c<s?this.showForwardArrowButton=!0:this.showForwardArrowButton=!1,t&&await this.switchFocus()}async scrollTabs(t){var n;const a=this.isRtl()?-1:1,i=this.isRtl()?1:-1;(n=this.tabsContainer)==null||n.scrollBy({left:this.tabsContainer.clientWidth*(t===p.FORWARD?a:i),behavior:"instant"}),await this.handleArrowButtonVisibility()}render(){const t=this.isRtl()?"left":"right",a=this.isRtl()?"right":"left",i=n=>h` ${this.shouldShowArrowButton(n)?h`<mdc-button
            variant="tertiary"
            prefix-icon="arrow-${n===p.FORWARD?t:a}-regular"
            aria-label="Scroll tabs ${n===p.FORWARD?t:a}"
            @click="${()=>this.scrollTabs(n)}"
          ></mdc-button>`:H}`;return h` ${i("backward")}
      <div part="container" role="${K.TABLIST}" tabindex="-1" aria-label="${z(this.dataAriaLabel)}">
        <slot></slot>
      </div>
      ${i(p.FORWARD)}`}};T.styles=[...B.styles,...tt];let r=T;b([L({type:String,attribute:"active-tab-id",reflect:!0})],r.prototype,"activeTabId");b([L({type:String,attribute:"data-aria-label"})],r.prototype,"dataAriaLabel");b([_('[part="container"]')],r.prototype,"tabsContainer");b([_("mdc-button:not(:focus-visible)")],r.prototype,"notFocusedArrowButton");b([q({selector:"mdc-tab"})],r.prototype,"tabs");b([N()],r.prototype,"showForwardArrowButton");b([N()],r.prototype,"showBackwardArrowButton");r.register(at);const{action:ot}=__STORYBOOK_MODULE_ACTIONS__,rt=e=>h` <mdc-tablist
      @change="${ot("onchange")}"
      active-tab-id="${e["active-tab-id"]}"
      data-aria-label=${e["data-aria-label"]}
    >
      <mdc-tab
        variant=${e.tabvariant}
        text="Calls"
        icon-name="audio-call-bold"
        tab-id="calls-tab"
        aria-controls="calls-panel"
      >
      </mdc-tab>
      <mdc-tab
        variant=${e.tabvariant}
        text="Videos"
        icon-name="video-bold"
        tab-id="videos-tab"
        aria-controls="videos-panel"
      >
        <mdc-badge slot="badge" type="counter" counter="5" aria-label="5 New videos"></mdc-badge>
      </mdc-tab>
      <mdc-tab
        variant=${e.tabvariant}
        text="Music"
        icon-name="file-music-bold"
        tab-id="music-tab"
        aria-controls="music-panel"
      >
      </mdc-tab>
      <mdc-tab
        variant=${e.tabvariant}
        text="Documents"
        icon-name="document-bold"
        tab-id="documents-tab"
        aria-controls="documents-panel"
      >
      </mdc-tab>
      <mdc-tab
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
    <!-- End of example markup for the tab panels -->`,Ct={title:"Components/tablist",tags:["autodocs"],component:"mdc-tablist",render:rt,argTypes:{"active-tab-id":{control:"text"},"data-aria-label":{control:"text"},tabvariant:{control:"select",description:"Set the variant of tab inside the tablist",options:Object.values(U)},...Q(["Default"])}},m={args:{tabvariant:"line"}},v={args:{tabvariant:"glass","active-tab-id":"documents-tab","data-aria-label":"Media types"}},f={parameters:{...X(h` <b>Note:</b> This logic of updating the tab panels based on the active tab has been added only on this
        storybook example. <code>mdc-tablist</code> component does not control this logic. This implementation has to be
        added on the consumer's side`,!0)},render:e=>h` <mdc-tablist
        @change="${a=>{const i=document.querySelector(`mdc-tab[tab-id="${a.detail.tabId}"]`),n=i==null?void 0:i.getAttribute("aria-controls");document.querySelectorAll('[role="tabpanel"]').forEach(o=>{const l=o;l.hidden=l.id!==n})}}"
        active-tab-id="${e["active-tab-id"]}"
        data-aria-label=${e["data-aria-label"]}
      >
        <mdc-tab
          variant=${e.tabvariant}
          text="Calls"
          icon-name="audio-call-bold"
          tab-id="calls-tab"
          aria-controls="calls-panel"
        >
        </mdc-tab>
        <mdc-tab
          variant=${e.tabvariant}
          text="Videos"
          icon-name="video-bold"
          tab-id="videos-tab"
          aria-controls="videos-panel"
        >
          <mdc-badge slot="badge" type="counter" counter="5" aria-label="5 New videos"></mdc-badge>
        </mdc-tab>
        <mdc-tab
          variant=${e.tabvariant}
          text="Music"
          icon-name="file-music-bold"
          tab-id="music-tab"
          aria-controls="music-panel"
        >
        </mdc-tab>
        <mdc-tab
          variant=${e.tabvariant}
          text="Documents"
          icon-name="document-bold"
          tab-id="documents-tab"
          aria-controls="documents-panel"
        >
        </mdc-tab>
        <mdc-tab
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
      <!-- End of example markup for the tab panels -->`,args:{tabvariant:"glass","active-tab-id":"documents-tab","data-aria-label":"Media types"}};var R,k,I;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    tabvariant: 'line'
  }
}`,...(I=(k=m.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var $,M,S;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    tabvariant: 'glass',
    'active-tab-id': 'documents-tab',
    'data-aria-label': 'Media types'
  }
}`,...(S=(M=v.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};var F,D,O;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(O=(D=f.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};const Rt=["Example","ActiveTabAttributeSet","TablistWithPanels"];export{v as ActiveTabAttributeSet,m as Example,f as TablistWithPanels,Rt as __namedExportsOrder,Ct as default};
