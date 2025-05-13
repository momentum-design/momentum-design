import{a as N}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{i as L,k as m,D as M}from"./lit-element-D5KKan5q.js";import{u as V,C as T,n as F}from"./index-C9z9WAEj.js";import{r as D}from"./state-CSSggq2n.js";import{e as S}from"./query-DXShiZ7f.js";import{o as W}from"./query-assigned-elements-uEuc3rg8.js";import{t as _}from"./if-defined-D5BV9-c0.js";import{b as P}from"./index-CcXofQbA.js";import{a as c,T as H}from"./index-ijDB2Zm1.js";import{B as z}from"./button.component-DuJ_hCOI.js";import"./index-DgQEO3E-.js";import{h as K,d as G}from"./utils-CO8B6ZcN.js";import"./index-y8I7Hvul.js";import"./v4-CQkTLCs1.js";import"./base-DIkkzJ-c.js";import"./button.utils-rNW36Ji7.js";import"./buttonsimple.component-C1CVlJGY.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./text.constants-ZF0jM5wn.js";import"./IconNameMixin-CujGSn0t.js";import"./index-DIzwCcxP.js";import"./iframe-D4BPjjRP.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./index-D3DhXfcW.js";import"./button.constants-D0QAbDxL.js";import"./class-map-BcCVsMyu.js";import"./directive-Ctav8iJK.js";const j=[P,L`
  :host {
    --mdc-tablist-focus-ring-outer-width: var(--mdc-focus-ring-outer-width);
    --mdc-tablist-gap: 0.5rem;
    --mdc-tablist-width: 100%;
    --mdc-tablist-arrow-button-margin: 0.75rem;

    width: var(--mdc-tablist-width);
    display: flex;
    align-items: center;

    ::slotted(mdc-tab) {
      width: initial;
    }
  }

  :host .container {
    display: flex;
    overflow-x: hidden;
    gap: var(--mdc-tablist-gap);
    padding: var(--mdc-tablist-focus-ring-outer-width);
  }

  :host mdc-button[prefix-icon="arrow-left-regular"] {
    margin-right: var(--mdc-tablist-arrow-button-margin);
  }

  :host mdc-button[prefix-icon="arrow-right-regular"] {
    margin-left: var(--mdc-tablist-arrow-button-margin);
  }
`],q=[...j],U=V.constructTagName("tablist"),b={LEFT:"ArrowLeft",RIGHT:"ArrowRight",HOME:"Home",END:"End"},l={FORWARD:"forward",BACKWARD:"backward"},p=e=>e[0],B=e=>e[e.length-1],Y=(e,t)=>{const a=e.findIndex(i=>t===i)-1;return e[(a+e.length)%e.length]},J=(e,t)=>{const a=e.findIndex(i=>t===i)+1;return e[a%e.length]},Q=(e,t)=>e.find(a=>a.tabId===t),y=e=>e.find(t=>t.active);var X=Object.defineProperty,d=(e,t,a,i)=>{for(var s=void 0,r=e.length-1,o;r>=0;r--)(o=e[r])&&(s=o(t,a,s)||s);return s&&X(t,a,s),s};const w=class w extends T{constructor(){super(),this.showForwardArrowButton=!1,this.showBackwardArrowButton=!1,this.isRtl=()=>{var t;return((t=document.querySelector("html"))==null?void 0:t.getAttribute("dir"))==="rtl"||window.getComputedStyle(this).direction==="rtl"},this.fireTabChangeEvent=t=>{const a=new CustomEvent("change",{detail:{tabId:t.tabId}});this.dispatchEvent(a)},this.handleFocus=async t=>{if(t.relatedTarget instanceof c||!(t.target instanceof c))return;const a=y(this.tabs||[]);a instanceof c&&await this.focusTab(a)},this.handleMousedown=t=>{t.target instanceof c&&t.preventDefault()},this.handleNestedTabActiveChange=async t=>{t.stopPropagation();const a=t.target;a instanceof c&&(this.setActiveTab(a),await this.focusTab(a),this.activeTabId=a.tabId)},this.resetTabIndexAndSetNewTabIndex=t=>{var a;(a=this.tabs)==null||a.forEach(i=>{i.setAttribute("tabindex",i===t?"0":"-1")})},this.setActiveTab=t=>{var a;(a=this.tabs)==null||a.forEach(i=>{i===t?i.setAttribute("active",""):i.removeAttribute("active")})},this.focusTab=async t=>{t instanceof c&&(t!==(document==null?void 0:document.activeElement)&&(this.resetTabIndexAndSetNewTabIndex(t),t.focus()),t.scrollIntoView({behavior:"instant",block:"start",inline:"center"}),await this.handleArrowButtonVisibility())},this.handleKeydown=async t=>{const a=t.target;if(!(a instanceof c)||!this.tabs)return;const i=Y(this.tabs,a),s=J(this.tabs,a),r=p(this.tabs),o=B(this.tabs);switch(t.code){case b.LEFT:t.preventDefault(),await this.focusTab(this.isRtl()?s:i);break;case b.RIGHT:t.preventDefault(),await this.focusTab(this.isRtl()?i:s);break;case b.HOME:await this.focusTab(r);break;case b.END:await this.focusTab(o);break}},this.shouldShowArrowButton=t=>t===l.FORWARD?this.showForwardArrowButton:this.showBackwardArrowButton,this.switchFocus=async()=>{var t,a;await this.updateComplete,!this.showBackwardArrowButton&&!this.showForwardArrowButton?(t=y(this.tabs||[]))==null||t.focus():(this.showBackwardArrowButton&&!this.showForwardArrowButton||this.showForwardArrowButton&&!this.showBackwardArrowButton)&&((a=this.notFocusedArrowButton)==null||a.focus())},this.handleArrowButtonVisibility=async()=>{var v,g,A;if(!this.tabs||!this.tabsContainer)return;let t=!1;((v=this.shadowRoot)==null?void 0:v.activeElement)instanceof z&&(t=!0);const a=p(this.tabs),i=B(this.tabs),s=a.getBoundingClientRect().left,r=(g=this.tabsContainer)==null?void 0:g.getBoundingClientRect().left,o=i.getBoundingClientRect().right,f=(A=this.tabsContainer)==null?void 0:A.getBoundingClientRect().right,O=a.getBoundingClientRect().right,$=i.getBoundingClientRect().left;if(!this.isRtl()){s<=r?this.showBackwardArrowButton=!0:this.showBackwardArrowButton=!1,o>f?this.showForwardArrowButton=!0:this.showForwardArrowButton=!1,t&&await this.switchFocus();return}O>f?this.showBackwardArrowButton=!0:this.showBackwardArrowButton=!1,$<r?this.showForwardArrowButton=!0:this.showForwardArrowButton=!1,t&&await this.switchFocus()},this.scrollTabs=async t=>{var s;const a=this.isRtl()?-1:1,i=this.isRtl()?1:-1;(s=this.tabsContainer)==null||s.scrollBy({left:this.tabsContainer.clientWidth*(t===l.FORWARD?a:i),behavior:"instant"}),await this.handleArrowButtonVisibility()},this.addEventListener("keydown",this.handleKeydown),this.addEventListener("activechange",this.handleNestedTabActiveChange)}async firstUpdated(){var i,s,r;if(!this.tabs)return;if(Array.isArray(this.tabs)&&this.tabs.length===0){this.onerror&&this.onerror("The tablist component must have at least one child tab");return}const t=this.tabs.map(o=>o.tabId);new Set(t).size!==this.tabs.length&&this.onerror&&this.onerror("The tabs inside the tab list must have unique tab ids"),new ResizeObserver(async()=>{const{activeElement:o}=document;o instanceof c&&o.scrollIntoView({behavior:"instant",block:"start",inline:"center"}),await this.handleArrowButtonVisibility()}).observe(this),this.activeTabId||(this.activeTabId=(i=p(this.tabs))==null?void 0:i.tabId),(s=this.tabsContainer)==null||s.addEventListener("focusin",this.handleFocus),(r=this.tabsContainer)==null||r.addEventListener("mousedown",this.handleMousedown)}async update(t){if(super.update(t),t.has("activeTabId")){if(!this.tabs||!this.activeTabId)return;const a=Q(this.tabs,this.activeTabId);if(!(a instanceof c))return;this.setActiveTab(a),t.get("activeTabId")?(this.fireTabChangeEvent(a),await this.focusTab(a)):this.resetTabIndexAndSetNewTabIndex(a)}}render(){const t=this.isRtl()?"left":"right",a=this.isRtl()?"right":"left",i=s=>m` ${this.shouldShowArrowButton(s)?m`<mdc-button
            variant="tertiary"
            prefix-icon="arrow-${s===l.FORWARD?t:a}-regular"
            aria-label="Scroll tabs ${s===l.FORWARD?t:a}"
            @click="${()=>this.scrollTabs(s)}"
          ></mdc-button>`:M}`;return m` ${i("backward")}
      <div 
      class="container" 
      role="tablist" 
      tabindex="-1" 
      aria-label="${_(this.dataAriaLabel)}">
        <slot></slot>
      </div>
      ${i(l.FORWARD)}`}};w.styles=[...T.styles,...q];let n=w;d([F({type:String,attribute:"active-tab-id",reflect:!0})],n.prototype,"activeTabId");d([F({type:String,attribute:"data-aria-label"})],n.prototype,"dataAriaLabel");d([S(".container")],n.prototype,"tabsContainer");d([S("mdc-button:not(:focus-visible)")],n.prototype,"notFocusedArrowButton");d([W({selector:"mdc-tab"})],n.prototype,"tabs");d([D()],n.prototype,"showForwardArrowButton");d([D()],n.prototype,"showBackwardArrowButton");n.register(U);const Z=e=>m`
<mdc-tablist
  @change="${N("onchange")}"
  active-tab-id="${e["active-tab-id"]}"
  data-aria-label=${e["data-aria-label"]}>
  <mdc-tab
    variant=${e.tabvariant}
    text="Calls"
    icon-name="audio-call-bold"
    tab-id="calls-tab"
    aria-controls="calls-panel">
  </mdc-tab>
  <mdc-tab variant=${e.tabvariant}
    text="Videos"
    icon-name="video-bold"
    tab-id="videos-tab"
    aria-controls="videos-panel">
    <mdc-badge slot="badge" type="counter" counter="5" aria-label="5 New videos"></mdc-badge>
  </mdc-tab>
  <mdc-tab variant=${e.tabvariant}
    text="Music"
    icon-name="file-music-bold"
    tab-id="music-tab"
    aria-controls="music-panel">
  </mdc-tab>
  <mdc-tab
    variant=${e.tabvariant}
    text="Documents"
    icon-name="document-bold"
    tab-id="documents-tab"
    aria-controls="documents-panel">
  </mdc-tab>
  <mdc-tab
    variant=${e.tabvariant}
    text="Meetings"
    icon-name="calendar-month-bold"
    tab-id="meetings-tab"
    aria-controls="meetings-panel">
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
<!-- End of example markup for the tab panels -->`,St={title:"Components/tablist",tags:["autodocs"],component:"mdc-tablist",render:Z,parameters:{badges:["stable"]},argTypes:{"active-tab-id":{control:"text"},"data-aria-label":{control:"text"},tabvariant:{control:"select",description:"Set the variant of tab inside the tablist",options:Object.values(H)},...K(["tabvariant"]),...G(["--mdc-tablist-gap","--mdc-tablist-width","--mdc-tablist-arrow-button-margin","change","Default"])}},h={args:{tabvariant:"line"}},u={args:{tabvariant:"glass","active-tab-id":"documents-tab","data-aria-label":"Media types"}};var R,x,E;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    tabvariant: 'line'
  }
}`,...(E=(x=h.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var C,I,k;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    tabvariant: 'glass',
    'active-tab-id': 'documents-tab',
    'data-aria-label': 'Media types'
  }
}`,...(k=(I=u.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};const Ot=["Example","ActiveTabAttributeSet"];export{u as ActiveTabAttributeSet,h as Example,Ot as __namedExportsOrder,St as default};
