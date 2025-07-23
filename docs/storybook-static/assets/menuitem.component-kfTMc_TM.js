import{i as T,k as e,D as E}from"./lit-element-D5KKan5q.js";import{u,n}from"./index-C9z9WAEj.js";import{R as y}from"./roles-BH_hBfTz.js";import{a as g,K as h,L as v}from"./listitem.component-B4xe0EG5.js";const L=u.constructTagName("menuitem"),i={LEFT:"arrow-left-bold",RIGHT:"arrow-right-bold"},I={POSITIVE:"positive",NEGATIVE:"negative"},m={LEADING:"leading",TRAILING:"trailing"},w=T`
  :host(:dir(rtl))::part(trailing-arrow),
  :host(:dir(rtl))::part(leading-arrow) {
    transform: rotate(180deg);
  }
  :host::part(trailing-arrow),
  :host::part(leading-arrow) {
    --mdc-icon-size: 1.25rem;
  }
`,f=[w];var R=Object.defineProperty,a=(c,t,p,A)=>{for(var r=void 0,s=c.length-1,d;s>=0;s--)(d=c[s])&&(r=d(t,p,r)||r);return r&&R(t,p,r),r};const l=class l extends g{constructor(){super(),this.name=void 0,this.value=void 0,this.addEventListener("keyup",this.handleKeyUp)}handleKeyDown(t){t.key===h.ENTER&&(this.triggerClickEvent(),t.preventDefault())}handleKeyUp(t){t.key===h.SPACE&&(this.triggerClickEvent(),t.preventDefault())}connectedCallback(){super.connectedCallback(),this.role=y.MENUITEM,this.variant=v.INSET_RECTANGLE}renderTrailingControls(){const t=this.arrowDirection===I.NEGATIVE?i.LEFT:i.RIGHT;return e`
      <slot
        name="trailing-controls"
        @click=${this.stopEventPropagation}
        @keyup=${this.stopEventPropagation}
        @keydown=${this.stopEventPropagation}
      ></slot>
      ${this.arrowPosition===m.TRAILING?e`<mdc-icon name="${t}" length-unit="rem" part="trailing-arrow"></mdc-icon>`:E}
    `}renderLeadingControls(){const t=this.arrowDirection===I.POSITIVE?i.RIGHT:i.LEFT;return e`
      <slot
        name="leading-controls"
        @click=${this.stopEventPropagation}
        @keyup=${this.stopEventPropagation}
        @keydown=${this.stopEventPropagation}
      ></slot>
      ${this.arrowPosition===m.LEADING?e`<mdc-icon name="${t}" length-unit="rem" part="leading-arrow"></mdc-icon>`:E}
    `}};l.styles=[...g.styles,...f];let o=l;a([n({type:String,reflect:!0,attribute:"arrow-position"})],o.prototype,"arrowPosition");a([n({type:String,reflect:!0,attribute:"arrow-direction"})],o.prototype,"arrowDirection");a([n({type:String,reflect:!0})],o.prototype,"name");a([n({type:String,reflect:!0})],o.prototype,"value");export{m as A,o as M,L as T,I as a};
