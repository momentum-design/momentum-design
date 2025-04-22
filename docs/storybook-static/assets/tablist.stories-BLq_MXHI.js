import{a as f}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{i as N,k as p,D as M}from"./lit-element-D5KKan5q.js";import{u as V,C as R,n as g}from"./index-C9z9WAEj.js";import{r as O}from"./state-CSSggq2n.js";import{e as S}from"./query-DXShiZ7f.js";import{o as W}from"./query-assigned-elements-uEuc3rg8.js";import{b as _}from"./index-MA1r3zrt.js";import{a as d,T as P}from"./index-DmWJC0Jc.js";import{B as H}from"./index-txyUwIhY.js";import{h as z,d as K}from"./utils-CO8B6ZcN.js";import"./index-ulKcsJDO.js";import"./v4-CQkTLCs1.js";import"./base-DIkkzJ-c.js";import"./button.utils-rNW36Ji7.js";import"./buttonsimple.component-9hW3yvQZ.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./text.constants-ZF0jM5wn.js";import"./IconNameMixin-CujGSn0t.js";import"./index-C_rAiH13.js";import"./iframe-BYx2IeOk.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./index-D3DhXfcW.js";import"./button.constants-Bfip8hYE.js";import"./class-map-BcCVsMyu.js";import"./directive-Ctav8iJK.js";import"./if-defined-D5BV9-c0.js";const G=[_,N`
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
`],j=[...G],q=V.constructTagName("tablist"),u={LEFT:"ArrowLeft",RIGHT:"ArrowRight",HOME:"Home",END:"End"},b={FORWARD:"forward",BACKWARD:"backward"},v=e=>e[0],x=e=>e[e.length-1],U=(e,t)=>{const a=e.findIndex(i=>t===i)-1;return e[(a+e.length)%e.length]},Y=(e,t)=>{const a=e.findIndex(i=>t===i)+1;return e[a%e.length]},J=(e,t)=>e.find(a=>a.tabId===t),E=e=>e.find(t=>t.active);var Q=Object.defineProperty,l=(e,t,a,i)=>{for(var s=void 0,o=e.length-1,r;o>=0;o--)(r=e[o])&&(s=r(t,a,s)||s);return s&&Q(t,a,s),s};const A=class A extends R{constructor(){super(),this.showForwardArrowButton=!1,this.showBackwardArrowButton=!1,this.isRtl=()=>{var t;return((t=document.querySelector("html"))==null?void 0:t.getAttribute("dir"))==="rtl"||window.getComputedStyle(this).direction==="rtl"},this.setAriaLabelledByOrAriaLabel=()=>{var t,a,i,s;this.dataAriaLabelledby?((t=this.tabsContainer)==null||t.setAttribute("aria-labelledby",this.dataAriaLabelledby),(a=this.tabsContainer)==null||a.removeAttribute("aria-label")):((i=this.tabsContainer)==null||i.setAttribute("aria-label",this.dataAriaLabel||"Tab List"),(s=this.tabsContainer)==null||s.removeAttribute("aria-labelledby"))},this.fireTabChangeEvent=t=>{const a=new CustomEvent("change",{detail:t.tabId});this.dispatchEvent(a)},this.handleFocus=async t=>{if(t.relatedTarget instanceof d||!(t.target instanceof d))return;const a=E(this.tabs||[]);a instanceof d&&await this.focusTab(a)},this.handleMousedown=t=>{t.target instanceof d&&t.preventDefault()},this.handleNestedTabActiveChange=async t=>{const a=t.target;a instanceof d&&(this.setActiveTab(a),await this.focusTab(a),this.activeTabId=a.tabId)},this.resetTabIndexAndSetNewTabIndex=t=>{var a;(a=this.tabs)==null||a.forEach(i=>{i.setAttribute("tabindex",i===t?"0":"-1")})},this.setActiveTab=t=>{var a;(a=this.tabs)==null||a.forEach(i=>{i===t?i.setAttribute("active",""):i.removeAttribute("active")})},this.focusTab=async t=>{var a;t instanceof d&&(t!==((a=this.shadowRoot)==null?void 0:a.activeElement)&&(this.resetTabIndexAndSetNewTabIndex(t),t.focus()),t.scrollIntoView({behavior:"instant",block:"start",inline:"center"}),await this.handleArrowButtonVisibility())},this.handleKeydown=async t=>{const a=t.target;if(!(a instanceof d)||!this.tabs)return;const i=U(this.tabs,a),s=Y(this.tabs,a),o=v(this.tabs),r=x(this.tabs);switch(t.code){case u.LEFT:t.preventDefault(),await this.focusTab(this.isRtl()?s:i);break;case u.RIGHT:t.preventDefault(),await this.focusTab(this.isRtl()?i:s);break;case u.HOME:await this.focusTab(o);break;case u.END:await this.focusTab(r);break}},this.shouldShowArrowButton=t=>t===b.FORWARD?this.showForwardArrowButton:this.showBackwardArrowButton,this.switchFocus=async()=>{var t,a;await this.updateComplete,!this.showBackwardArrowButton&&!this.showForwardArrowButton?(t=E(this.tabs||[]))==null||t.focus():(this.showBackwardArrowButton&&!this.showForwardArrowButton||this.showForwardArrowButton&&!this.showBackwardArrowButton)&&((a=this.notFocusedArrowButton)==null||a.focus())},this.handleArrowButtonVisibility=async()=>{var T,y,B;if(!this.tabs||!this.tabsContainer)return;let t=!1;((T=this.shadowRoot)==null?void 0:T.activeElement)instanceof H&&(t=!0);const a=v(this.tabs),i=x(this.tabs),s=a.getBoundingClientRect().left,o=(y=this.tabsContainer)==null?void 0:y.getBoundingClientRect().left,r=i.getBoundingClientRect().right,c=(B=this.tabsContainer)==null?void 0:B.getBoundingClientRect().right,h=a.getBoundingClientRect().right,$=i.getBoundingClientRect().left;if(!this.isRtl()){s<=o?this.showBackwardArrowButton=!0:this.showBackwardArrowButton=!1,r>c?this.showForwardArrowButton=!0:this.showForwardArrowButton=!1,t&&await this.switchFocus();return}h>c?this.showBackwardArrowButton=!0:this.showBackwardArrowButton=!1,$<o?this.showForwardArrowButton=!0:this.showForwardArrowButton=!1,t&&await this.switchFocus()},this.scrollTabs=async t=>{var s;const a=this.isRtl()?-1:1,i=this.isRtl()?1:-1;(s=this.tabsContainer)==null||s.scrollBy({left:this.tabsContainer.clientWidth*(t===b.FORWARD?a:i),behavior:"instant"}),await this.handleArrowButtonVisibility()},this.addEventListener("keydown",this.handleKeydown),this.addEventListener("activechange",this.handleNestedTabActiveChange)}async firstUpdated(){var i,s,o;if(!this.tabs)return;if(Array.isArray(this.tabs)&&this.tabs.length===0){this.onerror&&this.onerror("The tablist component must have at least one child tab");return}const t=this.tabs.map(r=>r.tabId);new Set(t).size!==this.tabs.length&&this.onerror&&this.onerror("The tabs inside the tab list must have unique tab ids"),this.setAriaLabelledByOrAriaLabel(),new ResizeObserver(async()=>{var c,h;const r=(h=(c=this.tabsContainer)==null?void 0:c.shadowRoot)==null?void 0:h.activeElement;r instanceof d&&r.scrollIntoView({behavior:"instant",block:"start",inline:"center"}),await this.handleArrowButtonVisibility()}).observe(this),this.activeTabId||(this.activeTabId=(i=v(this.tabs))==null?void 0:i.tabId),(s=this.tabsContainer)==null||s.addEventListener("focusin",this.handleFocus),(o=this.tabsContainer)==null||o.addEventListener("mousedown",this.handleMousedown)}async update(t){if(super.update(t),(t.has("dataAriaLabelledby")||t.has("dataAriaLabel"))&&this.setAriaLabelledByOrAriaLabel(),t.has("activeTabId")){if(!this.tabs||!this.activeTabId)return;const a=J(this.tabs,this.activeTabId);if(!(a instanceof d))return;this.setActiveTab(a),t.get("activeTabId")?(this.fireTabChangeEvent(a),await this.focusTab(a)):this.resetTabIndexAndSetNewTabIndex(a)}}render(){const t=this.isRtl()?"left":"right",a=this.isRtl()?"right":"left",i=s=>p` ${this.shouldShowArrowButton(s)?p`<mdc-button
            variant="tertiary"
            prefix-icon="arrow-${s===b.FORWARD?t:a}-regular"
            aria-label="Scroll tabs ${s===b.FORWARD?t:a}"
            @click="${()=>this.scrollTabs(s)}"
          ></mdc-button>`:M}`;return p` ${i("backward")}
      <div class="container" role="tablist" tabindex="-1">
        <slot></slot>
      </div>
      ${i(b.FORWARD)}`}};A.styles=[...R.styles,...j];let n=A;l([g({type:String,attribute:"active-tab-id",reflect:!0})],n.prototype,"activeTabId");l([g({type:String,attribute:"data-aria-labelledby"})],n.prototype,"dataAriaLabelledby");l([g({type:String,attribute:"data-aria-label"})],n.prototype,"dataAriaLabel");l([S(".container")],n.prototype,"tabsContainer");l([S("mdc-button:not(:focus-visible)")],n.prototype,"notFocusedArrowButton");l([W({selector:"mdc-tab"})],n.prototype,"tabs");l([O()],n.prototype,"showForwardArrowButton");l([O()],n.prototype,"showBackwardArrowButton");n.register(q);const X=e=>p`
<mdc-tablist
  @change="${f("onchange")}"
  @keyup="${f("onkeyup")}"
  @keydown="${f("onkeydown")}"
  active-tab-id="${e["active-tab-id"]}"
  data-aria-labelledby=${e["data-aria-labelledby"]}
  data-aria-label=${e["data-aria-label"]}>
  <mdc-tab
    variant=${e.tabvariant}
    text="Photos"
    icon-name="add-photo-bold"
    tab-id="photos-tab"
    aria-controls="photos-panel">
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
    text="Downloads"
    icon-name="cloud-download-bold"
    tab-id="downloads-tab"
    aria-controls="downloads-panel">
  </mdc-tab>
</mdc-tablist>

<!-- The following is an example of the markup for the tab panels.
This markup is not part of the component and is only provided for context. -->
  <div id="photos-panel" role="tabpanel" aria-labelledby="photos-tab" hidden>
    <p>Photos panel</p>
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
  <div id="downloads-panel" role="tabpanel" aria-labelledby="downloads-tab" hidden>
    <p>Downloads panel</p>
  </div>
<!-- End of example markup for the tab panels -->`,It={title:"Work in Progress/tablist",tags:["autodocs"],component:"mdc-tablist",render:X,parameters:{badges:["wip"]},argTypes:{"active-tab-id":{control:"text"},"data-aria-labelledby":{control:"text"},"data-aria-label":{control:"text"},tabvariant:{control:"select",description:"Set the variant of tab inside the tablist",options:Object.values(P)},...z(["tabvariant"]),...K(["--mdc-tablist-gap","--mdc-tablist-width","--mdc-tablist-arrow-button-margin","change","Default"])}},w={args:{tabvariant:"line"}},m={args:{tabvariant:"glass","active-tab-id":"documents-tab","data-aria-label":"Media types"}};var C,k,I;w.parameters={...w.parameters,docs:{...(C=w.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    tabvariant: 'line'
  }
}`,...(I=(k=w.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var F,L,D;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    tabvariant: 'glass',
    'active-tab-id': 'documents-tab',
    'data-aria-label': 'Media types'
  }
}`,...(D=(L=m.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};const Ft=["Example","ActiveTabAttributeSet"];export{m as ActiveTabAttributeSet,w as Example,Ft as __namedExportsOrder,It as default};
