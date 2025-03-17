import{i as x,D as v,k as b}from"./lit-element-D5KKan5q.js";import{u as f,C as h,n as s}from"./index-C9z9WAEj.js";import{e as T}from"./v4-BnQ50LvX.js";import{D as S}from"./FormInternalsMixin-BezuNa1f.js";import{D as L}from"./DisabledMixin-CizxPH9K.js";import{T as A}from"./TabIndexMixin-CsrHswKP.js";import{V as _,T as c}from"./text.constants-ZF0jM5wn.js";import{a as E}from"./index-BX3Tn-Br.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function u(d){return(t,r)=>{const{slot:l,selector:i}=d??{},n="slot"+(l?`[name=${l}]`:":not([name])");return T(t,r,{get(){var p;const o=(p=this.renderRoot)==null?void 0:p.querySelector(n),g=(o==null?void 0:o.assignedElements(d))??[];return i===void 0?g:g.filter(y=>y.matches(i))}})}}const V=f.constructTagName("listitem"),D={FULL_WIDTH:"full-width",INSET_PILL:"inset-pill",INSET_RECTANGLE:"inset-rectangle"},R={VARIANT:D.FULL_WIDTH},k=x`
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
  :host([disabled]:hover),
  :host([disabled]:active),
  :host([disabled])::part(leading-text-secondary-label),
  :host([disabled])::part(leading-text-tertiary-label),
  :host([disabled])::part(leading-text-primary-label),
  :host([disabled])::part(trailing-text-side-header),
  :host([disabled])::part(trailing-text-subline) {
    background-color: unset;
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
`,I=[k,...E()];var $=Object.defineProperty,a=(d,t,r,l)=>{for(var i=void 0,n=d.length-1,o;n>=0;n--)(o=d[n])&&(i=o(t,r,i)||i);return i&&$(t,r,i),i};const m=class m extends S(L(A(h))){constructor(){super(),this.variant=R.VARIANT,this.role=this.role||"listitem"}getText(t,r,l){return l?b`
      <slot name="${t}">
        <mdc-text part="${t}" type="${r}" tagname="${_.SPAN}">${l}</mdc-text>
      </slot>
    `:v}disableSlottedChildren(t){[...this.leadingControlsSlot,...this.trailingControlsSlot].forEach(r=>{t?r.setAttribute("disabled",""):r.removeAttribute("disabled")})}update(t){super.update(t),t.has("disabled")&&(this.tabIndex=this.disabled?-1:0,this.disableSlottedChildren(this.disabled))}render(){return b`
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
    `}};m.styles=[...h.styles,...I];let e=m;a([u({slot:"leading-controls"})],e.prototype,"leadingControlsSlot");a([u({slot:"trailing-controls"})],e.prototype,"trailingControlsSlot");a([s({type:String,reflect:!0})],e.prototype,"variant");a([s({type:String,reflect:!0})],e.prototype,"label");a([s({type:String,reflect:!0,attribute:"secondary-label"})],e.prototype,"secondaryLabel");a([s({type:String,reflect:!0,attribute:"tertiary-label"})],e.prototype,"tertiaryLabel");a([s({type:String,reflect:!0,attribute:"side-header-text"})],e.prototype,"sideHeaderText");a([s({type:String,reflect:!0,attribute:"subline-text"})],e.prototype,"sublineText");export{D as L,V as T,e as a,u as o};
