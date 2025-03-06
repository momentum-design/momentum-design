import{i as T,k as g,D as A}from"./lit-element-CHllvULs.js";import{u as I,C as p,n as d}from"./index-HW6KrQZO.js";import{D as S}from"./DataAriaLabelMixin-vs_lw9aw.js";import{T as c,V as _}from"./text.constants-DJu2q-6E.js";import"./index-BGkqZMsC.js";import{e as R}from"./FormInternalsMixin-Ch02HUy5.js";import{D as $}from"./DisabledMixin-DBt9didn.js";import{c as k}from"./buttonsimple.component-BPMM56DO.js";import{a as O}from"./index-BGjwsboe.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function b(o){return(t,e)=>{const{slot:i,selector:r}=o??{},s="slot"+(i?`[name=${i}]`:":not([name])");return R(t,e,{get(){var v;const l=(v=this.renderRoot)==null?void 0:v.querySelector(s),y=(l==null?void 0:l.assignedElements(o))??[];return r===void 0?y:y.filter(D=>D.matches(r))}})}}const E=I.constructTagName("listitem"),N={FULL_WIDTH:"full-width",INSET_PILL:"inset-pill",INSET_RECTANGLE:"inset-rectangle"},M={VARIANT:N.FULL_WIDTH},w=I.constructTagName("list"),h={ARROW_DOWN:"ArrowDown",ARROW_UP:"ArrowUp",HOME:"Home",END:"End"},f="header-id",C=T`
  :host::part(header-text) {
    padding: 0.5rem 0.75rem;
  }
`,U=[C];var B=Object.defineProperty,L=(o,t,e,i)=>{for(var r=void 0,s=o.length-1,l;s>=0;s--)(l=o[s])&&(r=l(t,e,r)||r);return r&&B(t,e,r),r};const u=class u extends S(p){constructor(){super(),this.addEventListener("keydown",this.handleKeyDown)}handleKeyDown(t){var r;const e=this.getCurrentIndex(t.target),i=this.getNewIndexBasedOnKey(t.key,e,this.listItems.length);i!==void 0&&((r=this.listItems[i])==null||r.focus(),this.resetTabIndexAndSetActiveTabIndex(i))}getCurrentIndex(t){return this.listItems.findIndex(e=>e===t||e===t.parentElement)}getNewIndexBasedOnKey(t,e,i){switch(t){case h.ARROW_DOWN:return(e+1)%i;case h.ARROW_UP:return(e-1+i)%i;case h.HOME:return 0;case h.END:return i-1;default:return}}handleMouseClick(t){const e=this.getCurrentIndex(t.target);this.resetTabIndexAndSetActiveTabIndex(e)}resetTabIndexAndSetActiveTabIndex(t){this.listItems.forEach((e,i)=>{const r=t===i?"0":"-1";e==null||e.setAttribute("tabindex",r)})}firstUpdated(){this.resetTabIndexAndSetActiveTabIndex(0)}render(){const t=this.headerText?g`
      <mdc-text
        id="${f}"
        part="header-text"
        type="${c.BODY_MIDSIZE_BOLD}"
        tagname="${_.SPAN}"
      >${this.headerText}</mdc-text>
    `:A;return g`
      <div
        role="list"
        aria-labelledby="${this.headerText?f:""}"
        aria-label="${this.dataAriaLabel??""}"
      >
        ${t}
        <slot role="presentation" @click="${this.handleMouseClick}"></slot>
      </div>
    `}};u.styles=[...p.styles,...U];let m=u;L([b({selector:E})],m.prototype,"listItems");L([d({type:String,attribute:"header-text",reflect:!0})],m.prototype,"headerText");m.register(w);const G=T`
  :host {
    --mdc-listitem-default-background-color: var(--mds-color-theme-background-primary-ghost);
    --mdc-listitem-background-color-hover: var(--mds-color-theme-background-primary-hover);
    --mdc-listitem-background-color-active: var(--mds-color-theme-background-primary-active);
    --mdc-listitem-primary-label-color: var(--mds-color-theme-text-primary-normal);
    --mdc-listitem-secondary-label-color: var(--mds-color-theme-text-secondary-normal);
    --mdc-listitem-disabled-color: var(--mds-color-theme-text-primary-disabled);
  }
  :host {
    background-color: var(--mdc-listitem-default-background-color);
    column-gap: 0.75rem;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    padding: 0.5rem 0.75rem;
    width: 100%;
  }
  :host([variant="inset-rectangle"]) {
    border-radius: 0.5rem;
  }
  :host([variant="inset-pill"]) {
    border-radius: 3.125rem;
  }
  :host([disabled]),
  :host([disabled])::part(leading-text-secondary-label),
  :host([disabled])::part(leading-text-tertiary-label),
  :host([disabled])::part(leading-text-primary-label),
  :host([disabled])::part(trailing-text-side-header),
  :host([disabled])::part(trailing-text-subline) {
    color: var(--mdc-listitem-disabled-color);
    cursor: default;
  }
  :host(:hover) {
    background-color: var(--mdc-listitem-background-color-hover);
  }
  :host(:active) {
    background-color: var(--mdc-listitem-background-color-active);
  }
  :host::part(trailing) {
    margin-left: auto;
  }
  :host::part(trailing):dir(rtl) {
    margin-left: unset;
    margin-right: auto;
  }
  :host::part(leading), :host::part(trailing) {
    align-items: center;
    column-gap: 0.75rem;
    display: flex;
  }
  :host::part(leading-text-secondary-label), :host::part(leading-text-tertiary-label) {
    color: var(--mdc-listitem-secondary-label-color);
  }
  :host::part(leading-text-primary-label), :host::part(trailing-text-side-header), :host::part(trailing-text-subline) {
    color: var(--mdc-listitem-primary-label-color);
  }
  :host::part(trailing-text) {
    text-align: right;
  }
  ::slotted([slot="leading-controls"]), ::slotted([slot="trailing-controls"]) {
    align-items: center;
    column-gap: 0.75rem;
    display: flex;
    flex-direction: row;
  }
`,P=[G,...O()];var H=Object.defineProperty,n=(o,t,e,i)=>{for(var r=void 0,s=o.length-1,l;s>=0;s--)(l=o[s])&&(r=l(t,e,r)||r);return r&&H(t,e,r),r};const x=class x extends S($(k(p))){constructor(){super(),this.variant=M.VARIANT,this.role="listitem"}getText(t,e,i){return i?g`
      <slot name="${t}">
        <mdc-text part="${t}" type="${e}" tagname="${_.SPAN}">${i}</mdc-text>
      </slot>
    `:A}disableSlottedChildren(t){[...this.leadingControlsSlot,...this.trailingControlsSlot].forEach(e=>{t?e.setAttribute("disabled",""):e.removeAttribute("disabled")})}update(t){super.update(t),t.has("disabled")&&(this.tabIndex=this.disabled?-1:0,this.disableSlottedChildren(this.disabled))}render(){return g`
      <div part="leading">
        <slot name="leading-controls"></slot>
        <div part="leading-text">
          ${this.getText("leading-text-primary-label",c.BODY_MIDSIZE_REGULAR,this.label)}
          ${this.getText("leading-text-secondary-label",c.BODY_SMALL_REGULAR,this.secondaryLabel)}
          ${this.getText("leading-text-tertiary-label",c.BODY_SMALL_REGULAR,this.tertiaryLabel)}
        </div>
      </div>
      <div part="trailing">
        <div part="trailing-text">
          ${this.getText("trailing-text-side-header",c.BODY_MIDSIZE_REGULAR,this.sideHeaderText)}
          ${this.getText("trailing-text-subline",c.BODY_SMALL_REGULAR,this.sublineText)}
        </div>
        <slot name="trailing-controls"></slot>
      </div>
    `}};x.styles=[...p.styles,...P];let a=x;n([b({slot:"leading-controls"})],a.prototype,"leadingControlsSlot");n([b({slot:"trailing-controls"})],a.prototype,"trailingControlsSlot");n([d({type:String,reflect:!0})],a.prototype,"variant");n([d({type:String,reflect:!0})],a.prototype,"label");n([d({type:String,reflect:!0,attribute:"secondary-label"})],a.prototype,"secondaryLabel");n([d({type:String,reflect:!0,attribute:"tertiary-label"})],a.prototype,"tertiaryLabel");n([d({type:String,reflect:!0,attribute:"side-header-text"})],a.prototype,"sideHeaderText");n([d({type:String,reflect:!0,attribute:"subline-text"})],a.prototype,"sublineText");a.register(E);export{N as L};
