import{i as h,D as u,k as p}from"./lit-element-D5KKan5q.js";import{u as y,C as g,n as l}from"./index-C9z9WAEj.js";import{o as b}from"./query-assigned-elements-uEuc3rg8.js";import{D as x}from"./DisabledMixin-BZruwOeC.js";import{T as v}from"./TabIndexMixin-CsrHswKP.js";import{V as f,T as o}from"./text.constants-ZF0jM5wn.js";import{a as T}from"./index-CcXofQbA.js";const G=y.constructTagName("listitem"),S={FULL_WIDTH:"full-width",INSET_PILL:"inset-pill",INSET_RECTANGLE:"inset-rectangle"},A={VARIANT:S.FULL_WIDTH},L=h`
  :host {
    --mdc-listitem-default-background-color: var(--mds-color-theme-background-primary-ghost);
    --mdc-listitem-background-color-hover: var(--mds-color-theme-background-primary-hover);
    --mdc-listitem-background-color-active: var(--mds-color-theme-background-primary-active);
    --mdc-listitem-primary-label-color: var(--mds-color-theme-text-primary-normal);
    --mdc-listitem-secondary-label-color: var(--mds-color-theme-text-secondary-normal);
    --mdc-listitem-disabled-color: var(--mds-color-theme-text-primary-disabled);
    --mdc-listitem-column-gap: 0.75rem;
  }
  :host {
    background-color: var(--mdc-listitem-default-background-color);
    column-gap: var(--mdc-listitem-column-gap);
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
    column-gap: var(--mdc-listitem-column-gap);
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
    column-gap: var(--mdc-listitem-column-gap);
    display: flex;
    flex-direction: row;
  }
`,_=[L,...T()];var k=Object.defineProperty,r=(c,t,i,s)=>{for(var a=void 0,d=c.length-1,m;d>=0;d--)(m=c[d])&&(a=m(t,i,a)||a);return a&&k(t,i,a),a};const n=class n extends x(v(g)){constructor(){super(...arguments),this.variant=A.VARIANT}connectedCallback(){super.connectedCallback(),this.role=this.role||"listitem"}getText(t,i,s){return s?p`
      <slot name="${t}">
        <mdc-text part="${t}" type="${i}" tagname="${f.SPAN}">${s}</mdc-text>
      </slot>
    `:u}disableSlottedChildren(t){[...this.leadingControlsSlot,...this.trailingControlsSlot].forEach(i=>{t?i.setAttribute("disabled",""):i.removeAttribute("disabled")})}update(t){super.update(t),t.has("disabled")&&(this.tabIndex=this.disabled?-1:0,this.disableSlottedChildren(this.disabled),this.setAttribute("aria-disabled",`${this.disabled}`))}render(){return p`
      <div part="leading">
        <slot name="leading-controls"></slot>
        <div part="leading-text">
          ${this.getText("leading-text-primary-label",o.BODY_MIDSIZE_REGULAR,this.label)}
          ${this.getText("leading-text-secondary-label",o.BODY_SMALL_REGULAR,this.secondaryLabel)}
          ${this.getText("leading-text-tertiary-label",o.BODY_SMALL_REGULAR,this.tertiaryLabel)}
        </div>
      </div>
      <div part="trailing">
        <div part="trailing-text">
          ${this.getText("trailing-text-side-header",o.BODY_MIDSIZE_REGULAR,this.sideHeaderText)}
          ${this.getText("trailing-text-subline",o.BODY_SMALL_REGULAR,this.sublineText)}
        </div>
        <slot name="trailing-controls"></slot>
      </div>
    `}};n.styles=[...g.styles,..._];let e=n;r([b({slot:"leading-controls"})],e.prototype,"leadingControlsSlot");r([b({slot:"trailing-controls"})],e.prototype,"trailingControlsSlot");r([l({type:String,reflect:!0})],e.prototype,"variant");r([l({type:String,reflect:!0})],e.prototype,"label");r([l({type:String,reflect:!0,attribute:"secondary-label"})],e.prototype,"secondaryLabel");r([l({type:String,reflect:!0,attribute:"tertiary-label"})],e.prototype,"tertiaryLabel");r([l({type:String,reflect:!0,attribute:"side-header-text"})],e.prototype,"sideHeaderText");r([l({type:String,reflect:!0,attribute:"subline-text"})],e.prototype,"sublineText");export{S as L,G as T,e as a};
