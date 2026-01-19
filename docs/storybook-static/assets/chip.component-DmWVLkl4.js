import{u as b,T as v,V as u,a as g,R as p,U as k,W as T,X as E,h,k as a,n as m}from"./iframe-LsDyd5eA.js";import{I as f}from"./IconNameMixin-DgzH4N3i.js";import{B as y}from"./buttonsimple.component-D9fAeCTo.js";import{C as S,S as O}from"./staticchip.component-DZpJWiKa.js";const $=b.constructTagName("chip"),r={COLOR:S.DEFAULT,TEXT_TYPE:v.BODY_MIDSIZE_REGULAR,TAG_NAME:u.SPAN,SIZE:g[24],ROLE:p.BUTTON},_=k`
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
`,A=[T,_,...E()];var I=Object.defineProperty,n=(t,d,s,L)=>{for(var o=void 0,e=t.length-1,i;e>=0;e--)(i=t[e])&&(o=i(d,s,o)||o);return o&&I(d,s,o),o};const l=class l extends f(y){constructor(){super(...arguments),this.color=r.COLOR}connectedCallback(){super.connectedCallback(),this.role=r.ROLE,this.size=r.SIZE,this.active=void 0,this.softDisabled=void 0}renderIcon(){return this.iconName?a` <mdc-icon part="icon" name="${this.iconName}" length-unit="rem" size="1"></mdc-icon> `:h}render(){return a`
      ${this.renderIcon()}
      ${this.label?a`<mdc-text part="label" type="${r.TEXT_TYPE}" tagname="${r.TAG_NAME}"
            >${this.label}</mdc-text
          >`:h}
    `}};l.styles=[...O.styles,...A];let c=l;n([m({type:String,reflect:!0})],c.prototype,"color");n([m({type:String})],c.prototype,"label");export{c as C,$ as T};
