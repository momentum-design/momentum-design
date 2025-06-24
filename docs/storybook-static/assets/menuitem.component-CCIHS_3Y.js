import{i as m,k as o,D as p}from"./lit-element-D5KKan5q.js";import{u as w,n as I}from"./index-C9z9WAEj.js";import{R as u}from"./roles-BH_hBfTz.js";import{a as E,K as d,L as y}from"./listitem.component-Beyfi_1H.js";const S=w.constructTagName("menuitem"),i={LEFT:"arrow-left-bold",RIGHT:"arrow-right-bold"},g={POSITIVE:"positive",NEGATIVE:"negative"},h={LEADING:"leading",TRAILING:"trailing"},f=m`
  :host(:dir(rtl))::part(trailing-arrow),
  :host(:dir(rtl))::part(leading-arrow) {
      transform: rotate(180deg);
  }
  :host::part(trailing-arrow), :host::part(leading-arrow) {
    --mdc-icon-size: 1.25rem;
  }
`,v=[f];var R=Object.defineProperty,T=(s,t,l,A)=>{for(var r=void 0,n=s.length-1,c;n>=0;n--)(c=s[n])&&(r=c(t,l,r)||r);return r&&R(t,l,r),r};const a=class a extends E{constructor(){super(),this.addEventListener("keyup",this.handleKeyUp)}handleKeyDown(t){t.key===d.ENTER&&(this.triggerClickEvent(),t.preventDefault())}handleKeyUp(t){t.key===d.SPACE&&(this.triggerClickEvent(),t.preventDefault())}connectedCallback(){super.connectedCallback(),this.role=u.MENUITEM,this.variant=y.INSET_RECTANGLE}renderTrailingControls(){const t=this.arrowDirection===g.NEGATIVE?i.LEFT:i.RIGHT;return o`
      <slot name="trailing-controls"
      @click=${this.stopEventPropagation}
      @keyup=${this.stopEventPropagation}
      @keydown=${this.stopEventPropagation}></slot>
      ${this.arrowPosition===h.TRAILING?o`<mdc-icon name="${t}" length-unit="rem" part="trailing-arrow"></mdc-icon>`:p}
    `}renderLeadingControls(){const t=this.arrowDirection===g.POSITIVE?i.RIGHT:i.LEFT;return o`
      <slot name="leading-controls"
      @click=${this.stopEventPropagation}
      @keyup=${this.stopEventPropagation}
      @keydown=${this.stopEventPropagation}></slot>
      ${this.arrowPosition===h.LEADING?o`<mdc-icon name="${t}" length-unit="rem" part="leading-arrow"></mdc-icon>`:p}
    `}};a.styles=[...E.styles,...v];let e=a;T([I({type:String,reflect:!0,attribute:"arrow-position"})],e.prototype,"arrowPosition");T([I({type:String,reflect:!0,attribute:"arrow-direction"})],e.prototype,"arrowDirection");export{h as A,e as M,S as T,g as a};
