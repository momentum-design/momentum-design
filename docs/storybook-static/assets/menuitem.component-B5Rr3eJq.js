import{u,U as m,R as y,k as e,h as E,n}from"./iframe-LsDyd5eA.js";import{L as d,a as w}from"./listitem.component-DZQu-qJw.js";import{A as h}from"./KeyToActionMixin-CoSo1tIm.js";const L=u.constructTagName("menuitem"),i={LEFT:"arrow-left-bold",RIGHT:"arrow-right-bold"},I={POSITIVE:"positive",NEGATIVE:"negative"},T={LEADING:"leading",TRAILING:"trailing"},A=m`
  :host(:dir(rtl))::part(trailing-arrow),
  :host(:dir(rtl))::part(leading-arrow) {
    transform: rotate(180deg);
  }
  :host::part(trailing-arrow),
  :host::part(leading-arrow) {
    --mdc-icon-size: 1rem;
  }
`,f=[A];var v=Object.defineProperty,a=(c,t,p,N)=>{for(var r=void 0,s=c.length-1,g;s>=0;s--)(g=c[s])&&(r=g(t,p,r)||r);return r&&v(t,p,r),r};const l=class l extends d{constructor(){super(),this.addEventListener("keyup",this.handleKeyUp.bind(this))}handleKeyDown(t){this.getActionForKeyEvent(t)===h.ENTER&&(this.triggerClickEvent(t),t.preventDefault())}handleKeyUp(t){this.getActionForKeyEvent(t)===h.SPACE&&(this.triggerClickEvent(t),t.preventDefault())}connectedCallback(){super.connectedCallback(),this.role=y.MENUITEM,this.variant=w.INSET_RECTANGLE}renderTrailingControls(){const t=this.arrowDirection===I.NEGATIVE?i.LEFT:i.RIGHT;return e`
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
    `}};l.styles=[...d.styles,...f];let o=l;a([n({type:String,reflect:!0,attribute:"arrow-position"})],o.prototype,"arrowPosition");a([n({type:String,reflect:!0,attribute:"arrow-direction"})],o.prototype,"arrowDirection");a([n({type:String,reflect:!0})],o.prototype,"name");a([n({type:String,reflect:!0})],o.prototype,"value");export{T as A,o as M,L as T,I as a};
