import{aa as P,U as V,u as W,F as y,k as h,R as H,n as D,$ as O,h as q}from"./iframe-Dihsx-NL.js";import{e as L}from"./query-BPxBhMfF.js";import{o as K}from"./query-assigned-elements-uEuc3rg8.js";import{t as z}from"./if-defined-D-bzpMf3.js";import{a as d,T as U}from"./index-0-PKjGEA.js";import{B as G}from"./button.component-DOxkaYeg.js";import"./index-CPsnPSUU.js";import{d as j}from"./utils-D6nie9pS.js";import"./index-vsoyOVpU.js";import"./preload-helper-C1FmrZbK.js";import"./base-DIkkzJ-c.js";import"./button.utils-rNW36Ji7.js";import"./buttonsimple.component-D3KCa39w.js";import"./TabIndexMixin-B9Csws3O.js";import"./DisabledMixin-BvD2odSx.js";import"./IconNameMixin-lWfER01s.js";import"./index-DAxnXaXz.js";import"./index-CGtjRWZl.js";import"./index-DTrDRi1E.js";import"./badge.constants-CbKWigRi.js";const Y=[P,V`
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
  `],J=[...Y],Q=W.constructTagName("tablist"),p={LEFT:"ArrowLeft",RIGHT:"ArrowRight",HOME:"Home",END:"End"},b={FORWARD:"forward",BACKWARD:"backward"},f=e=>e[0],B=e=>e[e.length-1],X=(e,t)=>{const a=e.findIndex(i=>t===i)-1;return e[(a+e.length)%e.length]},Z=(e,t)=>{const a=e.findIndex(i=>t===i)+1;return e[a%e.length]},tt=(e,t)=>e.find(a=>a.tabId===t),x=e=>e.find(t=>t.active);var at=Object.defineProperty,l=(e,t,a,i)=>{for(var n=void 0,o=e.length-1,s;o>=0;o--)(s=e[o])&&(n=s(t,a,n)||n);return n&&at(t,a,n),n};const w=class w extends y{constructor(){super(),this.showForwardArrowButton=!1,this.showBackwardArrowButton=!1,this.addEventListener("keydown",this.handleKeydown.bind(this)),this.addEventListener("activechange",this.handleNestedTabActiveChange)}isRtl(){var t;return((t=document.querySelector("html"))==null?void 0:t.getAttribute("dir"))==="rtl"||window.getComputedStyle(this).direction==="rtl"}async firstUpdated(){var i,n,o;if(!this.tabs)return;if(Array.isArray(this.tabs)&&this.tabs.length===0){this.onerror&&this.onerror("The tablist component must have at least one child tab");return}const t=this.tabs.map(s=>s.tabId);new Set(t).size!==this.tabs.length&&this.onerror&&this.onerror("The tabs inside the tab list must have unique tab ids"),new ResizeObserver(async()=>{await this.handleArrowButtonVisibility()}).observe(this),this.activeTabId||(this.activeTabId=(i=f(this.tabs))==null?void 0:i.tabId),(n=this.tabsContainer)==null||n.addEventListener("focusin",this.handleFocus.bind(this)),(o=this.tabsContainer)==null||o.addEventListener("mousedown",this.handleMousedown.bind(this))}disconnectedCallback(){var t,a;super.disconnectedCallback(),(t=this.tabsContainer)==null||t.removeEventListener("focusin",this.handleFocus),(a=this.tabsContainer)==null||a.removeEventListener("mousedown",this.handleMousedown)}async update(t){if(super.update(t),t.has("activeTabId")){if(!this.tabs||!this.activeTabId)return;const a=tt(this.tabs,this.activeTabId);if(!(a instanceof d))return;this.setActiveTab(a),t.get("activeTabId")?(this.fireTabChangeEvent(a),await this.focusTab(a)):this.resetTabIndexAndSetNewTabIndex(a)}}fireTabChangeEvent(t){const a=new CustomEvent("change",{detail:{tabId:t.tabId}});this.dispatchEvent(a)}async handleFocus(t){if(t.relatedTarget instanceof d||!(t.target instanceof d))return;const a=x(this.tabs||[]);a instanceof d&&await this.focusTab(a)}handleMousedown(t){t.target instanceof d&&t.preventDefault()}async handleNestedTabActiveChange(t){t.stopPropagation();const a=t.target;a instanceof d&&(this.setActiveTab(a),await this.focusTab(a),this.activeTabId=a.tabId)}resetTabIndexAndSetNewTabIndex(t){var a;(a=this.tabs)==null||a.forEach(i=>{i.setAttribute("tabindex",i===t?"0":"-1")})}setActiveTab(t){var a;(a=this.tabs)==null||a.forEach(i=>{i===t?i.setAttribute("active",""):i.removeAttribute("active")})}async focusTab(t){t instanceof d&&(t!==(document==null?void 0:document.activeElement)&&(this.resetTabIndexAndSetNewTabIndex(t),t.focus()),await this.handleArrowButtonVisibility())}async handleKeydown(t){const a=t.target;if(!(a instanceof d)||!this.tabs)return;const i=X(this.tabs,a),n=Z(this.tabs,a),o=f(this.tabs),s=B(this.tabs);switch(t.code){case p.LEFT:t.preventDefault(),await this.focusTab(this.isRtl()?n:i);break;case p.RIGHT:t.preventDefault(),await this.focusTab(this.isRtl()?i:n);break;case p.HOME:await this.focusTab(o);break;case p.END:await this.focusTab(s);break}}shouldShowArrowButton(t){return t===b.FORWARD?this.showForwardArrowButton:this.showBackwardArrowButton}async switchFocus(){var t,a;await this.updateComplete,!this.showBackwardArrowButton&&!this.showForwardArrowButton?(t=x(this.tabs||[]))==null||t.focus():(this.showBackwardArrowButton&&!this.showForwardArrowButton||this.showForwardArrowButton&&!this.showBackwardArrowButton)&&((a=this.notFocusedArrowButton)==null||a.focus())}async handleArrowButtonVisibility(){var g,T,A;if(!this.tabs||!this.tabsContainer)return;let t=!1;((g=this.shadowRoot)==null?void 0:g.activeElement)instanceof G&&(t=!0);const a=f(this.tabs),i=B(this.tabs),n=a.getBoundingClientRect().left,o=(T=this.tabsContainer)==null?void 0:T.getBoundingClientRect().left,s=i.getBoundingClientRect().right,c=(A=this.tabsContainer)==null?void 0:A.getBoundingClientRect().right,N=a.getBoundingClientRect().right,_=i.getBoundingClientRect().left;if(!this.isRtl()){n<=o?this.showBackwardArrowButton=!0:this.showBackwardArrowButton=!1,s>c?this.showForwardArrowButton=!0:this.showForwardArrowButton=!1,t&&await this.switchFocus();return}N>c?this.showBackwardArrowButton=!0:this.showBackwardArrowButton=!1,_<o?this.showForwardArrowButton=!0:this.showForwardArrowButton=!1,t&&await this.switchFocus()}async scrollTabs(t){var n;const a=this.isRtl()?-1:1,i=this.isRtl()?1:-1;(n=this.tabsContainer)==null||n.scrollBy({left:this.tabsContainer.clientWidth*(t===b.FORWARD?a:i),behavior:"instant"}),await this.handleArrowButtonVisibility()}render(){const t=this.isRtl()?"left":"right",a=this.isRtl()?"right":"left",i=n=>h` ${this.shouldShowArrowButton(n)?h`<mdc-button
            variant="tertiary"
            prefix-icon="arrow-${n===b.FORWARD?t:a}-regular"
            aria-label="Scroll tabs ${n===b.FORWARD?t:a}"
            @click="${()=>this.scrollTabs(n)}"
          ></mdc-button>`:q}`;return h` ${i("backward")}
      <div part="container" role="${H.TABLIST}" tabindex="-1" aria-label="${z(this.dataAriaLabel)}">
        <slot></slot>
      </div>
      ${i(b.FORWARD)}`}};w.styles=[...y.styles,...J];let r=w;l([D({type:String,attribute:"active-tab-id",reflect:!0})],r.prototype,"activeTabId");l([D({type:String,attribute:"data-aria-label"})],r.prototype,"dataAriaLabel");l([L('[part="container"]')],r.prototype,"tabsContainer");l([L("mdc-button:not(:focus-visible)")],r.prototype,"notFocusedArrowButton");l([K({selector:"mdc-tab"})],r.prototype,"tabs");l([O()],r.prototype,"showForwardArrowButton");l([O()],r.prototype,"showBackwardArrowButton");r.register(Q);const{action:et}=__STORYBOOK_MODULE_ACTIONS__,it=e=>h` <mdc-tablist
      @change="${et("onchange")}"
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
    <!-- End of example markup for the tab panels -->`,xt={title:"Components/tablist",tags:["autodocs"],component:"mdc-tablist",render:it,argTypes:{"active-tab-id":{control:"text"},"data-aria-label":{control:"text"},tabvariant:{control:"select",description:"Set the variant of tab inside the tablist",options:Object.values(U)},...j(["Default"])}},u={args:{tabvariant:"line"}},m={args:{tabvariant:"glass","active-tab-id":"documents-tab","data-aria-label":"Media types"}},v={render:e=>h` <mdc-tablist
        @change="${a=>{const i=document.querySelector(`mdc-tab[tab-id="${a.detail.tabId}"]`),n=i==null?void 0:i.getAttribute("aria-controls");document.querySelectorAll('[role="tabpanel"]').forEach(s=>{const c=s;c.hidden=c.id!==n})}}"
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
      <!-- End of example markup for the tab panels -->
      <br />
      <br />
      <p>
        <b>Note:</b> This logic of updating the tab panels based on the active tab has been added only on this storybook
        example. <code>mdc-tablist</code> component does not control this logic. This implementation has to be added on
        the consumer's side
      </p>`,args:{tabvariant:"glass","active-tab-id":"documents-tab","data-aria-label":"Media types"}};var E,R,C;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    tabvariant: 'line'
  }
}`,...(C=(R=u.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var I,$,k;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    tabvariant: 'glass',
    'active-tab-id': 'documents-tab',
    'data-aria-label': 'Media types'
  }
}`,...(k=($=m.parameters)==null?void 0:$.docs)==null?void 0:k.source}}};var F,S,M;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
      <!-- End of example markup for the tab panels -->
      <br />
      <br />
      <p>
        <b>Note:</b> This logic of updating the tab panels based on the active tab has been added only on this storybook
        example. <code>mdc-tablist</code> component does not control this logic. This implementation has to be added on
        the consumer's side
      </p>\`;
  },
  args: {
    tabvariant: 'glass',
    'active-tab-id': 'documents-tab',
    'data-aria-label': 'Media types'
  }
}`,...(M=(S=v.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};const Et=["Example","ActiveTabAttributeSet","TablistWithPanels"];export{m as ActiveTabAttributeSet,u as Example,v as TablistWithPanels,Et as __namedExportsOrder,xt as default};
