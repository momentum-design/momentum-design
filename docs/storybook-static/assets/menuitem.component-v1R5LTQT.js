import{i as E,k as o,D as I}from"./lit-element-D5KKan5q.js";import{u as w,n as p}from"./index-C9z9WAEj.js";import{R}from"./roles-DMFGbP5t.js";import{a as d,L as h}from"./listitem.component-CJpRoKE-.js";const _=w.constructTagName("menuitem"),i={LEFT:"arrow-left-bold",RIGHT:"arrow-right-bold"},T={POSITIVE:"positive",NEGATIVE:"negative"},m={LEADING:"leading",TRAILING:"trailing"},A=E`
  :host(:dir(rtl))::part(trailing-arrow),
  :host(:dir(rtl))::part(leading-arrow) {
      transform: rotate(180deg);
  }
  :host::part(trailing-arrow), :host::part(leading-arrow) {
    --mdc-icon-size: 1.25rem;
  }
`,N=[A];var f=Object.defineProperty,g=(s,r,l,u)=>{for(var t=void 0,n=s.length-1,c;n>=0;n--)(c=s[n])&&(t=c(r,l,t)||t);return t&&f(r,l,t),t};const e=class e extends d{connectedCallback(){super.connectedCallback(),this.role=R.MENUITEM,this.variant=h.INSET_RECTANGLE}renderTrailingControls(){const r=this.arrowDirection===T.NEGATIVE?i.LEFT:i.RIGHT;return o`
      <slot name="trailing-controls"></slot>
      ${this.arrowPosition===m.TRAILING?o`<mdc-icon name="${r}" length-unit="rem" part="trailing-arrow"></mdc-icon>`:I}
    `}renderLeadingControls(){const r=this.arrowDirection===T.POSITIVE?i.RIGHT:i.LEFT;return o`
      <slot name="leading-controls"></slot>
      ${this.arrowPosition===m.LEADING?o`<mdc-icon name="${r}" length-unit="rem" part="leading-arrow"></mdc-icon>`:I}
    `}};e.styles=[...d.styles,...N];let a=e;g([p({type:String,reflect:!0,attribute:"arrow-position"})],a.prototype,"arrowPosition");g([p({type:String,reflect:!0,attribute:"arrow-direction"})],a.prototype,"arrowDirection");export{m as A,a as M,_ as T,T as a};
