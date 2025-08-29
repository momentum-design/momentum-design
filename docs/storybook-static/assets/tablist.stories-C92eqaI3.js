import{a as $}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{i as M,k as m,D as N}from"./lit-element-D5KKan5q.js";import{n as k}from"./property-Bj3TGwkg.js";import{r as D}from"./state-CmYk530Z.js";import{e as S}from"./query-DXShiZ7f.js";import{o as W}from"./query-assigned-elements-uEuc3rg8.js";import{t as _}from"./if-defined-D5BV9-c0.js";import{u as P,C as A}from"./provider.component-DrWB4byV.js";import{a as d,T as V}from"./index-UsJpFGP-.js";import{B as H}from"./button.component-DXfxhmBS.js";import{R as z}from"./roles-CJI3JVG-.js";import{b as K}from"./index-B-GnYs90.js";import"./index-Cytpp1Wt.js";import{a as G,d as j,t as q}from"./utils-CFOyPOhY.js";import"./index-B7lDG4Cs.js";import"./v4-CQkTLCs1.js";import"./base-DIkkzJ-c.js";import"./button.utils-rNW36Ji7.js";import"./buttonsimple.component-jROCF6tv.js";import"./keys-hFXe221I.js";import"./DisabledMixin-B-Cnza7-.js";import"./TabIndexMixin-DEwGeIeI.js";import"./buttonsimple.constants-CVV9o_W6.js";import"./index-D2VIkDCb.js";import"./IconNameMixin-Bk-Z_FTS.js";import"./index-_kMBtIzS.js";import"./iframe-k7_Ory2_.js";import"../sb-preview/runtime.js";import"./index-CwZu4Wnd.js";import"./iconprovider.component-BtAZSWEH.js";import"./create-context-89xeped_.js";import"./button.constants-BBlkZKjZ.js";import"./class-map-BcCVsMyu.js";import"./directive-Ctav8iJK.js";import"./badge.constants-C6WKiCnx.js";const U=[K,M`
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

    :host .container {
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
  `],Y=[...U],J=P.constructTagName("tablist"),b={LEFT:"ArrowLeft",RIGHT:"ArrowRight",HOME:"Home",END:"End"},l={FORWARD:"forward",BACKWARD:"backward"},p=e=>e[0],B=e=>e[e.length-1],Q=(e,t)=>{const a=e.findIndex(i=>t===i)-1;return e[(a+e.length)%e.length]},X=(e,t)=>{const a=e.findIndex(i=>t===i)+1;return e[a%e.length]},Z=(e,t)=>e.find(a=>a.tabId===t),y=e=>e.find(t=>t.active);var tt=Object.defineProperty,c=(e,t,a,i)=>{for(var s=void 0,r=e.length-1,n;r>=0;r--)(n=e[r])&&(s=n(t,a,s)||s);return s&&tt(t,a,s),s};const w=class w extends A{constructor(){super(),this.showForwardArrowButton=!1,this.showBackwardArrowButton=!1,this.addEventListener("keydown",this.handleKeydown.bind(this)),this.addEventListener("activechange",this.handleNestedTabActiveChange)}isRtl(){var t;return((t=document.querySelector("html"))==null?void 0:t.getAttribute("dir"))==="rtl"||window.getComputedStyle(this).direction==="rtl"}async firstUpdated(){var i,s,r;if(!this.tabs)return;if(Array.isArray(this.tabs)&&this.tabs.length===0){this.onerror&&this.onerror("The tablist component must have at least one child tab");return}const t=this.tabs.map(n=>n.tabId);new Set(t).size!==this.tabs.length&&this.onerror&&this.onerror("The tabs inside the tab list must have unique tab ids"),new ResizeObserver(async()=>{await this.handleArrowButtonVisibility()}).observe(this),this.activeTabId||(this.activeTabId=(i=p(this.tabs))==null?void 0:i.tabId),(s=this.tabsContainer)==null||s.addEventListener("focusin",this.handleFocus.bind(this)),(r=this.tabsContainer)==null||r.addEventListener("mousedown",this.handleMousedown.bind(this))}disconnectedCallback(){var t,a;super.disconnectedCallback(),(t=this.tabsContainer)==null||t.removeEventListener("focusin",this.handleFocus),(a=this.tabsContainer)==null||a.removeEventListener("mousedown",this.handleMousedown)}async update(t){if(super.update(t),t.has("activeTabId")){if(!this.tabs||!this.activeTabId)return;const a=Z(this.tabs,this.activeTabId);if(!(a instanceof d))return;this.setActiveTab(a),t.get("activeTabId")?(this.fireTabChangeEvent(a),await this.focusTab(a)):this.resetTabIndexAndSetNewTabIndex(a)}}fireTabChangeEvent(t){const a=new CustomEvent("change",{detail:{tabId:t.tabId}});this.dispatchEvent(a)}async handleFocus(t){if(t.relatedTarget instanceof d||!(t.target instanceof d))return;const a=y(this.tabs||[]);a instanceof d&&await this.focusTab(a)}handleMousedown(t){t.target instanceof d&&t.preventDefault()}async handleNestedTabActiveChange(t){t.stopPropagation();const a=t.target;a instanceof d&&(this.setActiveTab(a),await this.focusTab(a),this.activeTabId=a.tabId)}resetTabIndexAndSetNewTabIndex(t){var a;(a=this.tabs)==null||a.forEach(i=>{i.setAttribute("tabindex",i===t?"0":"-1")})}setActiveTab(t){var a;(a=this.tabs)==null||a.forEach(i=>{i===t?i.setAttribute("active",""):i.removeAttribute("active")})}async focusTab(t){t instanceof d&&(t!==(document==null?void 0:document.activeElement)&&(this.resetTabIndexAndSetNewTabIndex(t),t.focus()),await this.handleArrowButtonVisibility())}async handleKeydown(t){const a=t.target;if(!(a instanceof d)||!this.tabs)return;const i=Q(this.tabs,a),s=X(this.tabs,a),r=p(this.tabs),n=B(this.tabs);switch(t.code){case b.LEFT:t.preventDefault(),await this.focusTab(this.isRtl()?s:i);break;case b.RIGHT:t.preventDefault(),await this.focusTab(this.isRtl()?i:s);break;case b.HOME:await this.focusTab(r);break;case b.END:await this.focusTab(n);break}}shouldShowArrowButton(t){return t===l.FORWARD?this.showForwardArrowButton:this.showBackwardArrowButton}async switchFocus(){var t,a;await this.updateComplete,!this.showBackwardArrowButton&&!this.showForwardArrowButton?(t=y(this.tabs||[]))==null||t.focus():(this.showBackwardArrowButton&&!this.showForwardArrowButton||this.showForwardArrowButton&&!this.showBackwardArrowButton)&&((a=this.notFocusedArrowButton)==null||a.focus())}async handleArrowButtonVisibility(){var v,g,T;if(!this.tabs||!this.tabsContainer)return;let t=!1;((v=this.shadowRoot)==null?void 0:v.activeElement)instanceof H&&(t=!0);const a=p(this.tabs),i=B(this.tabs),s=a.getBoundingClientRect().left,r=(g=this.tabsContainer)==null?void 0:g.getBoundingClientRect().left,n=i.getBoundingClientRect().right,f=(T=this.tabsContainer)==null?void 0:T.getBoundingClientRect().right,O=a.getBoundingClientRect().right,L=i.getBoundingClientRect().left;if(!this.isRtl()){s<=r?this.showBackwardArrowButton=!0:this.showBackwardArrowButton=!1,n>f?this.showForwardArrowButton=!0:this.showForwardArrowButton=!1,t&&await this.switchFocus();return}O>f?this.showBackwardArrowButton=!0:this.showBackwardArrowButton=!1,L<r?this.showForwardArrowButton=!0:this.showForwardArrowButton=!1,t&&await this.switchFocus()}async scrollTabs(t){var s;const a=this.isRtl()?-1:1,i=this.isRtl()?1:-1;(s=this.tabsContainer)==null||s.scrollBy({left:this.tabsContainer.clientWidth*(t===l.FORWARD?a:i),behavior:"instant"}),await this.handleArrowButtonVisibility()}render(){const t=this.isRtl()?"left":"right",a=this.isRtl()?"right":"left",i=s=>m` ${this.shouldShowArrowButton(s)?m`<mdc-button
            variant="tertiary"
            prefix-icon="arrow-${s===l.FORWARD?t:a}-regular"
            aria-label="Scroll tabs ${s===l.FORWARD?t:a}"
            @click="${()=>this.scrollTabs(s)}"
          ></mdc-button>`:N}`;return m` ${i("backward")}
      <div class="container" role="${z.TABLIST}" tabindex="-1" aria-label="${_(this.dataAriaLabel)}">
        <slot></slot>
      </div>
      ${i(l.FORWARD)}`}};w.styles=[...A.styles,...Y];let o=w;c([k({type:String,attribute:"active-tab-id",reflect:!0})],o.prototype,"activeTabId");c([k({type:String,attribute:"data-aria-label"})],o.prototype,"dataAriaLabel");c([S(".container")],o.prototype,"tabsContainer");c([S("mdc-button:not(:focus-visible)")],o.prototype,"notFocusedArrowButton");c([W({selector:"mdc-tab"})],o.prototype,"tabs");c([D()],o.prototype,"showForwardArrowButton");c([D()],o.prototype,"showBackwardArrowButton");o.register(J);const at=e=>m` <mdc-tablist
      @change="${$("onchange")}"
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
    <div id="calls-panel" role="tabpanel" aria-labelledby="calls-tab" hidden>
      <p>Calls panel</p>
    </div>
    <div id="videos-panel" role="tabpanel" aria-labelledby="videos-tab" hidden>
      <p>Videos panel</p>
    </div>
    <div id="music-panel" role="tabpanel" aria-labelledby="music-tab" hidden>
      <p>Music panel</p>
    </div>
    <div id="documents-panel" role="tabpanel" aria-labelledby="documents-tab" hidden>
      <p>Documents panel</p>
    </div>
    <div id="meetings-panel" role="tabpanel" aria-labelledby="meetings-tab" hidden>
      <p>Meetings panel</p>
    </div>
    <!-- End of example markup for the tab panels -->`,Nt={title:"Components/tablist",tags:["autodocs"],component:"mdc-tablist",render:at,parameters:{badges:["stable"]},argTypes:{"active-tab-id":{control:"text"},"data-aria-label":{control:"text"},tabvariant:{control:"select",description:"Set the variant of tab inside the tablist",options:Object.values(V)},...G(["tabvariant"]),...j(["change","Default"]),...q(["--mdc-tablist-gap","--mdc-tablist-width","--mdc-tablist-arrow-button-margin"])}},h={args:{tabvariant:"line"}},u={args:{tabvariant:"glass","active-tab-id":"documents-tab","data-aria-label":"Media types"}};var R,C,x;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    tabvariant: 'line'
  }
}`,...(x=(C=h.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var E,I,F;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    tabvariant: 'glass',
    'active-tab-id': 'documents-tab',
    'data-aria-label': 'Media types'
  }
}`,...(F=(I=u.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};const Wt=["Example","ActiveTabAttributeSet"];export{u as ActiveTabAttributeSet,h as Example,Wt as __namedExportsOrder,Nt as default};
