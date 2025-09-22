import{i as f,k as p,D as u}from"./lit-element-D5KKan5q.js";import{u as v,n as a}from"./provider.component-BaQC7CJH.js";import{I as g}from"./IconNameMixin-CRlZlTtq.js";import{B as b}from"./buttonsimple.component-CKyEWPbX.js";import{D as h,L as z}from"./linksimple.component-BhKRWe-u.js";import{R as y}from"./roles-CJI3JVG-.js";import{a as x}from"./index-CqVtAZCJ.js";import"./index-DhIhdWNp.js";const E=v.constructTagName("linkbutton"),i={12:12,14:14,16:16},r={SIZE:i[16],ROLE:y.BUTTON,INLINE:h.INLINE,INVERTED:h.INVERTED},N=s=>{switch(s){case i[12]:return .75;case i[14]:return .875;default:return 1}},I=f`
  :host {
    gap: 0.25rem;
    cursor: pointer;
    text-decoration: none;
    outline: none;
    display: inline-flex;
    align-items: center;
    color: var(--mdc-link-color-normal);
  }

  :host([inverted]) {
    color: var(--mdc-link-inverted-color-normal);
  }

  :host([size='16']) {
    font-size: var(--mds-font-apps-body-large-regular-font-size);
    font-weight: var(--mds-font-apps-body-large-regular-font-weight);
    line-height: var(--mds-font-apps-body-large-regular-line-height);
    text-decoration: var(--mds-font-apps-body-large-regular-text-decoration);
    text-transform: var(--mds-font-apps-body-large-regular-text-case);
  }

  :host([size='14']) {
    font-size: var(--mds-font-apps-body-midsize-regular-font-size);
    font-weight: var(--mds-font-apps-body-midsize-regular-font-weight);
    line-height: var(--mds-font-apps-body-midsize-regular-line-height);
    text-decoration: var(--mds-font-apps-body-midsize-regular-text-decoration);
    text-transform: var(--mds-font-apps-body-midsize-regular-text-case);
  }

  :host([size='12']) {
    font-size: var(--mds-font-apps-body-small-regular-font-size);
    font-weight: var(--mds-font-apps-body-small-regular-font-weight);
    line-height: var(--mds-font-apps-body-small-regular-line-height);
    text-decoration: var(--mds-font-apps-body-small-regular-text-decoration);
    text-transform: var(--mds-font-apps-body-small-regular-text-case);
  }

  :host([size='16']:hover),
  :host([size='16']:active),
  :host([size='16'][inline]) {
    font-size: var(--mds-font-apps-body-large-regular-underline-font-size);
    font-weight: var(--mds-font-apps-body-large-regular-underline-font-weight);
    line-height: var(--mds-font-apps-body-large-regular-underline-line-height);
    text-decoration: var(--mds-font-apps-body-large-regular-underline-text-decoration);
    text-transform: var(--mds-font-apps-body-large-regular-underline-text-case);
  }

  :host([size='14']:hover),
  :host([size='14']:active),
  :host([size='14'][inline]) {
    font-size: var(--mds-font-apps-body-midsize-regular-underline-font-size);
    font-weight: var(--mds-font-apps-body-midsize-regular-underline-font-weight);
    line-height: var(--mds-font-apps-body-midsize-regular-underline-line-height);
    text-decoration: var(--mds-font-apps-body-midsize-regular-underline-text-decoration);
    text-transform: var(--mds-font-apps-body-midsize-regular-underline-text-case);
  }

  :host([size='12']:hover),
  :host([size='12']:active),
  :host([size='12'][inline]) {
    font-size: var(--mds-font-apps-body-small-regular-underline-font-size);
    font-weight: var(--mds-font-apps-body-small-regular-underline-font-weight);
    line-height: var(--mds-font-apps-body-small-regular-underline-line-height);
    text-decoration: var(--mds-font-apps-body-small-regular-underline-text-decoration);
    text-transform: var(--mds-font-apps-body-small-regular-underline-text-case);
  }

  :host(:not([disabled]):hover) {
    color: var(--mdc-link-color-hover);
  }

  :host(:not([disabled]):active) {
    color: var(--mdc-link-color-active);
  }

  :host([inverted]:not([disabled]):hover) {
    color: var(--mdc-link-inverted-color-hover);
  }

  :host([inverted]:not([disabled]):active) {
    color: var(--mdc-link-inverted-color-active);
  }

  :host([disabled]) {
    color: var(--mdc-link-color-disabled);
    pointer-events: none;
    text-decoration: none;
  }

  :host([inverted][disabled]) {
    color: var(--mdc-link-inverted-color-disabled);
  }

  :host([soft-disabled]) {
    color: var(--mdc-link-color-disabled);
    pointer-events: none;
  }
`,k=[I,...x()];var w=Object.defineProperty,l=(s,e,m,S)=>{for(var t=void 0,n=s.length-1,c;n>=0;n--)(c=s[n])&&(t=c(e,m,t)||t);return t&&w(e,m,t),t};const d=class d extends g(b){constructor(){super(...arguments),this.size=r.SIZE,this.inline=r.INLINE,this.inverted=r.INVERTED}connectedCallback(){super.connectedCallback(),this.active=void 0,this.role=r.ROLE}update(e){super.update(e),e.has("size")&&this.setSize(this.size)}setSize(e){this.setAttribute("size",Object.values(i).includes(e)?`${e}`:r.SIZE.toString())}render(){return p`
      <slot></slot>
      ${this.iconName?p` <mdc-icon name=${this.iconName} size=${N(this.size)} length-unit="rem"></mdc-icon> `:u}
    `}};d.styles=[...z.styles,...k];let o=d;l([a({type:Number,reflect:!0})],o.prototype,"size");l([a({type:Boolean,reflect:!0})],o.prototype,"inline");l([a({type:Boolean,reflect:!0})],o.prototype,"inverted");o.register(E);export{r as D,i as L};
