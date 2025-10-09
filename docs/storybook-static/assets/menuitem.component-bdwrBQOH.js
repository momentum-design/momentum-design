import{u,S as m,W as y,k as e,h as E,n as a}from"./iframe-gl2AV23u.js";import{L as g,a as w}from"./listitem.component-BMxKNAok.js";import{K as h}from"./keys-hFXe221I.js";const P=u.constructTagName("menuitem"),i={LEFT:"arrow-left-bold",RIGHT:"arrow-right-bold"},I={POSITIVE:"positive",NEGATIVE:"negative"},T={LEADING:"leading",TRAILING:"trailing"},f=m`
  :host(:dir(rtl))::part(trailing-arrow),
  :host(:dir(rtl))::part(leading-arrow) {
    transform: rotate(180deg);
  }
  :host::part(trailing-arrow),
  :host::part(leading-arrow) {
    --mdc-icon-size: 1.25rem;
  }
`,v=[f];var A=Object.defineProperty,n=(c,t,p,N)=>{for(var r=void 0,s=c.length-1,d;s>=0;s--)(d=c[s])&&(r=d(t,p,r)||r);return r&&A(t,p,r),r};const l=class l extends g{constructor(){super(),this.addEventListener("keyup",this.handleKeyUp.bind(this))}handleKeyDown(t){t.key===h.ENTER&&(this.triggerClickEvent(t),t.preventDefault())}handleKeyUp(t){t.key===h.SPACE&&(this.triggerClickEvent(t),t.preventDefault())}connectedCallback(){super.connectedCallback(),this.role=y.MENUITEM,this.variant=w.INSET_RECTANGLE}renderTrailingControls(){const t=this.arrowDirection===I.NEGATIVE?i.LEFT:i.RIGHT;return e`
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
    `}};l.styles=[...g.styles,...v];let o=l;n([a({type:String,reflect:!0,attribute:"arrow-position"})],o.prototype,"arrowPosition");n([a({type:String,reflect:!0,attribute:"arrow-direction"})],o.prototype,"arrowDirection");n([a({type:String,reflect:!0})],o.prototype,"name");n([a({type:String,reflect:!0})],o.prototype,"value");export{T as A,o as M,P as T,I as a};
