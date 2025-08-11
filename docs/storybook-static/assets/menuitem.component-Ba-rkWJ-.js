import{i as T,k as e,D as E}from"./lit-element-D5KKan5q.js";import{u,n}from"./provider.component-BaQC7CJH.js";import{R as y}from"./roles-DU0xbrD4.js";import{a as g,L as v}from"./listitem.component-BeuoLqO-.js";import{K as h}from"./keys-hFXe221I.js";const C=u.constructTagName("menuitem"),i={LEFT:"arrow-left-bold",RIGHT:"arrow-right-bold"},m={POSITIVE:"positive",NEGATIVE:"negative"},I={LEADING:"leading",TRAILING:"trailing"},w=T`
  :host(:dir(rtl))::part(trailing-arrow),
  :host(:dir(rtl))::part(leading-arrow) {
    transform: rotate(180deg);
  }
  :host::part(trailing-arrow),
  :host::part(leading-arrow) {
    --mdc-icon-size: 1.25rem;
  }
`,f=[w];var R=Object.defineProperty,a=(p,t,c,A)=>{for(var r=void 0,s=p.length-1,d;s>=0;s--)(d=p[s])&&(r=d(t,c,r)||r);return r&&R(t,c,r),r};const l=class l extends g{constructor(){super(),this.name=void 0,this.value=void 0,this.addEventListener("keyup",this.handleKeyUp.bind(this))}handleKeyDown(t){t.key===h.ENTER&&(this.triggerClickEvent(),t.preventDefault())}handleKeyUp(t){t.key===h.SPACE&&(this.triggerClickEvent(),t.preventDefault())}connectedCallback(){super.connectedCallback(),this.role=y.MENUITEM,this.variant=v.INSET_RECTANGLE}renderTrailingControls(){const t=this.arrowDirection===m.NEGATIVE?i.LEFT:i.RIGHT;return e`
      <slot
        name="trailing-controls"
        @click=${this.stopEventPropagation}
        @keyup=${this.stopEventPropagation}
        @keydown=${this.stopEventPropagation}
      ></slot>
      ${this.arrowPosition===I.TRAILING?e`<mdc-icon name="${t}" length-unit="rem" part="trailing-arrow"></mdc-icon>`:E}
    `}renderLeadingControls(){const t=this.arrowDirection===m.POSITIVE?i.RIGHT:i.LEFT;return e`
      <slot
        name="leading-controls"
        @click=${this.stopEventPropagation}
        @keyup=${this.stopEventPropagation}
        @keydown=${this.stopEventPropagation}
      ></slot>
      ${this.arrowPosition===I.LEADING?e`<mdc-icon name="${t}" length-unit="rem" part="leading-arrow"></mdc-icon>`:E}
    `}};l.styles=[...g.styles,...f];let o=l;a([n({type:String,reflect:!0,attribute:"arrow-position"})],o.prototype,"arrowPosition");a([n({type:String,reflect:!0,attribute:"arrow-direction"})],o.prototype,"arrowDirection");a([n({type:String,reflect:!0})],o.prototype,"name");a([n({type:String,reflect:!0})],o.prototype,"value");export{I as A,o as M,C as T,m as a};
