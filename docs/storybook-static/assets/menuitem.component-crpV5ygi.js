import{u,a2 as y,R as m,k as e,h as E,n}from"./iframe-DoNkonBK.js";import{L as g,b as w}from"./listitem.component-CSKpMlhF.js";import{A as h}from"./KeyDownHandledMixin-CHVndGqH.js";const k=u.constructTagName("menuitem"),i={LEFT:"arrow-left-bold",RIGHT:"arrow-right-bold"},I={POSITIVE:"positive",NEGATIVE:"negative"},T={LEADING:"leading",TRAILING:"trailing"},A=y`
  :host(:dir(rtl))::part(trailing-arrow),
  :host(:dir(rtl))::part(leading-arrow) {
    transform: rotate(180deg);
  }
  :host::part(trailing-arrow),
  :host::part(leading-arrow) {
    --mdc-icon-size: 1rem;
  }
`,v=[A];var f=Object.defineProperty,a=(c,t,p,N)=>{for(var r=void 0,s=c.length-1,d;s>=0;s--)(d=c[s])&&(r=d(t,p,r)||r);return r&&f(t,p,r),r};const l=class l extends g{constructor(){super(),this.addEventListener("keyup",this.handleKeyUp.bind(this))}handleKeyDown(t){this.getActionForKeyEvent(t)===h.ENTER&&(this.triggerClickEvent(t),t.preventDefault(),this.keyDownEventHandled())}handleKeyUp(t){this.getActionForKeyEvent(t)===h.SPACE&&(this.triggerClickEvent(t),t.preventDefault())}connectedCallback(){super.connectedCallback(),this.role=m.MENUITEM,this.variant=w.INSET_RECTANGLE}renderTrailingControls(){const t=this.arrowDirection===I.NEGATIVE?i.LEFT:i.RIGHT;return e`
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
    `}};l.styles=[...g.styles,...v];let o=l;a([n({type:String,reflect:!0,attribute:"arrow-position"})],o.prototype,"arrowPosition");a([n({type:String,reflect:!0,attribute:"arrow-direction"})],o.prototype,"arrowDirection");a([n({type:String,reflect:!0})],o.prototype,"name");a([n({type:String,reflect:!0})],o.prototype,"value");export{T as A,o as M,k as T,I as a};
