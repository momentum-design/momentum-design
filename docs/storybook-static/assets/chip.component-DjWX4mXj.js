import{i as b,D as m,k as a}from"./lit-element-D5KKan5q.js";import{u as v,n as h}from"./provider.component-BaQC7CJH.js";import{I as u}from"./IconNameMixin-CRlZlTtq.js";import{B as p}from"./buttonsimple.component-CKyEWPbX.js";import{C as g,S as k}from"./staticchip.component-XdZoYH6n.js";import{R as T}from"./roles-CJI3JVG-.js";import{a as f}from"./buttonsimple.constants-An7St6B1.js";import{T as E,V as y}from"./index-DHsMOcdX.js";import{h as S,a as O}from"./index-CqVtAZCJ.js";const M=v.constructTagName("chip"),r={COLOR:g.DEFAULT,TEXT_TYPE:E.BODY_MIDSIZE_REGULAR,TAG_NAME:y.SPAN,SIZE:f[24],ROLE:T.BUTTON},_=b`
  :host {
    cursor: pointer;
    height: 1.5rem;
  }

  :host([color='default']:hover) {
    --mdc-chip-background-color: var(--mds-color-theme-background-label-default-hover);
  }

  :host([color='default']:active) {
    --mdc-chip-background-color: var(--mds-color-theme-background-label-default-active);
  }

  :host([color='cobalt']:hover) {
    --mdc-chip-background-color: var(--mds-color-theme-background-label-cobalt-hover);
  }

  :host([color='cobalt']:active) {
    --mdc-chip-background-color: var(--mds-color-theme-background-label-cobalt-active);
  }

  :host([color='gold']:hover) {
    --mdc-chip-background-color: var(--mds-color-theme-background-label-gold-hover);
  }

  :host([color='gold']:active) {
    --mdc-chip-background-color: var(--mds-color-theme-background-label-gold-active);
  }

  :host([color='lime']:hover) {
    --mdc-chip-background-color: var(--mds-color-theme-background-label-lime-hover);
  }

  :host([color='lime']:active) {
    --mdc-chip-background-color: var(--mds-color-theme-background-label-lime-active);
  }

  :host([color='mint']:hover) {
    --mdc-chip-background-color: var(--mds-color-theme-background-label-mint-hover);
  }

  :host([color='mint']:active) {
    --mdc-chip-background-color: var(--mds-color-theme-background-label-mint-active);
  }

  :host([color='pink']:hover) {
    --mdc-chip-background-color: var(--mds-color-theme-background-label-pink-hover);
  }

  :host([color='pink']:active) {
    --mdc-chip-background-color: var(--mds-color-theme-background-label-pink-active);
  }

  :host([color='purple']:hover) {
    --mdc-chip-background-color: var(--mds-color-theme-background-label-purple-hover);
  }

  :host([color='purple']:active) {
    --mdc-chip-background-color: var(--mds-color-theme-background-label-purple-active);
  }

  :host([color='orange']:hover) {
    --mdc-chip-background-color: var(--mds-color-theme-background-label-orange-hover);
  }

  :host([color='orange']:active) {
    --mdc-chip-background-color: var(--mds-color-theme-background-label-orange-active);
  }

  :host([color='slate']:hover) {
    --mdc-chip-background-color: var(--mds-color-theme-background-label-slate-hover);
  }

  :host([color='slate']:active) {
    --mdc-chip-background-color: var(--mds-color-theme-background-label-slate-active);
  }

  :host([color='violet']:hover) {
    --mdc-chip-background-color: var(--mds-color-theme-background-label-violet-hover);
  }

  :host([color='violet']:active) {
    --mdc-chip-background-color: var(--mds-color-theme-background-label-violet-active);
  }

  :host([disabled]),
  :host([disabled]:hover),
  :host([disabled]:active) {
    --mdc-chip-border-color: var(--mds-color-theme-outline-primary-disabled);
    --mdc-chip-background-color: var(--mds-color-theme-background-primary-disabled);
    --mdc-chip-color: var(--mds-color-theme-text-primary-disabled);
    cursor: auto;
  }
`,A=[S,_,...O()];var I=Object.defineProperty,n=(t,d,i,L)=>{for(var o=void 0,e=t.length-1,s;e>=0;e--)(s=t[e])&&(o=s(d,i,o)||o);return o&&I(d,i,o),o};const l=class l extends u(p){constructor(){super(...arguments),this.color=r.COLOR,this.label=""}connectedCallback(){super.connectedCallback(),this.role=r.ROLE,this.size=r.SIZE,this.active=void 0,this.softDisabled=void 0}renderIcon(){return this.iconName?a` <mdc-icon name="${this.iconName}" length-unit="rem" size="1"></mdc-icon> `:m}render(){return a`
      ${this.renderIcon()}
      ${this.label?a`<mdc-text part="label" type="${r.TEXT_TYPE}" tagname="${r.TAG_NAME}"
            >${this.label}</mdc-text
          >`:m}
    `}};l.styles=[...k.styles,...A];let c=l;n([h({type:String,reflect:!0})],c.prototype,"color");n([h({type:String})],c.prototype,"label");export{c as C,M as T};
