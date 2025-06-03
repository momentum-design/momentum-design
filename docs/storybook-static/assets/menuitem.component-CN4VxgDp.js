import{i as m,k as o,D as p}from"./lit-element-D5KKan5q.js";import{u as h,n as I}from"./index-C9z9WAEj.js";import{R as w}from"./roles-DMFGbP5t.js";import{a as d,L as R}from"./listitem.component-Czrm8EVj.js";const G=h.constructTagName("menuitem"),i={LEFT:"arrow-left-bold",RIGHT:"arrow-right-bold"},g={POSITIVE:"positive",NEGATIVE:"negative"},E={LEADING:"leading",TRAILING:"trailing"},u=m`
  :host(:dir(rtl))::part(trailing-arrow),
  :host(:dir(rtl))::part(leading-arrow) {
      transform: rotate(180deg);
  }
  :host::part(trailing-arrow), :host::part(leading-arrow) {
    --mdc-icon-size: 1.25rem;
  }
`,A=[u];var N=Object.defineProperty,T=(s,t,l,v)=>{for(var r=void 0,n=s.length-1,c;n>=0;n--)(c=s[n])&&(r=c(t,l,r)||r);return r&&N(t,l,r),r};const e=class e extends d{connectedCallback(){super.connectedCallback(),this.role=w.MENUITEM,this.variant=R.INSET_RECTANGLE}renderTrailingControls(){const t=this.arrowDirection===g.NEGATIVE?i.LEFT:i.RIGHT;return o`
      <slot name="trailing-controls"
      @click=${this.stopEventPropagation}
      @keyup=${this.stopEventPropagation}
      @keydown=${this.stopEventPropagation}></slot>
      ${this.arrowPosition===E.TRAILING?o`<mdc-icon name="${t}" length-unit="rem" part="trailing-arrow"></mdc-icon>`:p}
    `}renderLeadingControls(){const t=this.arrowDirection===g.POSITIVE?i.RIGHT:i.LEFT;return o`
      <slot name="leading-controls"
      @click=${this.stopEventPropagation}
      @keyup=${this.stopEventPropagation}
      @keydown=${this.stopEventPropagation}></slot>
      ${this.arrowPosition===E.LEADING?o`<mdc-icon name="${t}" length-unit="rem" part="leading-arrow"></mdc-icon>`:p}
    `}};e.styles=[...d.styles,...A];let a=e;T([I({type:String,reflect:!0,attribute:"arrow-position"})],a.prototype,"arrowPosition");T([I({type:String,reflect:!0,attribute:"arrow-direction"})],a.prototype,"arrowDirection");export{E as A,a as M,G as T,g as a};
