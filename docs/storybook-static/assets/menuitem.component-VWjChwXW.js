import{u as m,i as u,k as e,D as E,n}from"./iframe-BG4I9E_r.js";import{R as y}from"./roles-CJI3JVG-.js";import{L as g,a as w}from"./listitem.component-CRjYG4AU.js";import{K as h}from"./keys-hFXe221I.js";const L=m.constructTagName("menuitem"),i={LEFT:"arrow-left-bold",RIGHT:"arrow-right-bold"},I={POSITIVE:"positive",NEGATIVE:"negative"},T={LEADING:"leading",TRAILING:"trailing"},f=u`
  :host(:dir(rtl))::part(trailing-arrow),
  :host(:dir(rtl))::part(leading-arrow) {
    transform: rotate(180deg);
  }
  :host::part(trailing-arrow),
  :host::part(leading-arrow) {
    --mdc-icon-size: 1.25rem;
  }
`,v=[f];var R=Object.defineProperty,a=(c,t,p,A)=>{for(var r=void 0,s=c.length-1,d;s>=0;s--)(d=c[s])&&(r=d(t,p,r)||r);return r&&R(t,p,r),r};const l=class l extends g{constructor(){super(),this.addEventListener("keyup",this.handleKeyUp.bind(this))}handleKeyDown(t){t.key===h.ENTER&&(this.triggerClickEvent(),t.preventDefault())}handleKeyUp(t){t.key===h.SPACE&&(this.triggerClickEvent(),t.preventDefault())}connectedCallback(){super.connectedCallback(),this.role=y.MENUITEM,this.variant=w.INSET_RECTANGLE}renderTrailingControls(){const t=this.arrowDirection===I.NEGATIVE?i.LEFT:i.RIGHT;return e`
      <slot
        name="trailing-controls"
        @click=${this.stopEventPropagation}
        @keyup=${this.stopEventPropagation}
        @keydown=${this.stopEventPropagation}
      ></slot>
      ${this.arrowPosition===T.TRAILING?e`<mdc-icon name="${t}" length-unit="rem" part="trailing-arrow"></mdc-icon>`:E}
    `}renderLeadingControls(){const t=this.arrowDirection===I.POSITIVE?i.RIGHT:i.LEFT;return e`
      <slot
        name="leading-controls"
        @click=${this.stopEventPropagation}
        @keyup=${this.stopEventPropagation}
        @keydown=${this.stopEventPropagation}
      ></slot>
      ${this.arrowPosition===T.LEADING?e`<mdc-icon name="${t}" length-unit="rem" part="leading-arrow"></mdc-icon>`:E}
    `}};l.styles=[...g.styles,...v];let o=l;a([n({type:String,reflect:!0,attribute:"arrow-position"})],o.prototype,"arrowPosition");a([n({type:String,reflect:!0,attribute:"arrow-direction"})],o.prototype,"arrowDirection");a([n({type:String,reflect:!0})],o.prototype,"name");a([n({type:String,reflect:!0})],o.prototype,"value");export{T as A,o as M,L as T,I as a};
