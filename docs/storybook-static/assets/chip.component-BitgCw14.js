import{i as n,D as b,k as i}from"./lit-element-D5KKan5q.js";import{u,C as v,n as h}from"./index-C9z9WAEj.js";import{a as p,h as g}from"./index-MA1r3zrt.js";import{I as k}from"./IconNameMixin-CujGSn0t.js";import{b as T,a as E}from"./buttonsimple.component-PSrQpcnn.js";import{T as f,V as L}from"./text.constants-ZF0jM5wn.js";const y=n`
  :host {
    height: 1.5rem;
    gap: 0.25rem;
    padding: 0 0.5rem;
    border-radius: 0.25rem;
    border: 1px solid;
    cursor: pointer;
    white-space: nowrap;
    
    --mdc-chip-color: var(--mds-color-theme-text-primary-normal);
    --mdc-chip-border-color: var(--mds-color-theme-outline-button-normal);
    --mdc-chip-background-color: var(--mds-color-theme-background-label-default-normal);

    color: var(--mdc-chip-color);
    border-color: var(--mdc-chip-border-color);
    background-color: var(--mdc-chip-background-color);
  }

  :host([color='default']:hover) {
    --mdc-chip-background-color: var(--mds-color-theme-background-label-default-hover);
  }

  :host([color='default']:active) {
    --mdc-chip-background-color: var(--mds-color-theme-background-label-default-active);
  }

  :host([color='cobalt']) {
    --mdc-chip-border-color: var(--mds-color-theme-outline-theme-normal);
    --mdc-chip-background-color: var(--mds-color-theme-background-label-cobalt-normal);
  }

  :host([color='cobalt']:hover) {
    --mdc-chip-background-color: var(--mds-color-theme-background-label-cobalt-hover);
  }

  :host([color='cobalt']:active) {
    --mdc-chip-background-color: var(--mds-color-theme-background-label-cobalt-active);
  }

  :host([color='gold']) {
    --mdc-chip-border-color: var(--mds-color-theme-outline-label-gold);
    --mdc-chip-background-color: var(--mds-color-theme-background-label-gold-normal);
  }

  :host([color='gold']:hover) {
    --mdc-chip-background-color: var(--mds-color-theme-background-label-gold-hover);
  }

  :host([color='gold']:active) {
    --mdc-chip-background-color: var(--mds-color-theme-background-label-gold-active);
  }

  :host([color='lime']) {
    --mdc-chip-border-color: var(--mds-color-theme-outline-label-lime);
    --mdc-chip-background-color: var(--mds-color-theme-background-label-lime-normal);
  }

  :host([color='lime']:hover) {
    --mdc-chip-background-color: var(--mds-color-theme-background-label-lime-hover);
  }

  :host([color='lime']:active) {
    --mdc-chip-background-color: var(--mds-color-theme-background-label-lime-active);
  }

  :host([color='mint']) {
    --mdc-chip-border-color: var(--mds-color-theme-outline-label-mint);
    --mdc-chip-background-color: var(--mds-color-theme-background-label-mint-normal);
  }

  :host([color='mint']:hover) {
    --mdc-chip-background-color: var(--mds-color-theme-background-label-mint-hover);
  }

  :host([color='mint']:active) {
    --mdc-chip-background-color: var(--mds-color-theme-background-label-mint-active);
  }

  :host([color='pink']) {
    --mdc-chip-border-color: var(--mds-color-theme-outline-label-pink);
    --mdc-chip-background-color: var(--mds-color-theme-background-label-pink-normal);
  }

  :host([color='pink']:hover) {
    --mdc-chip-background-color: var(--mds-color-theme-background-label-pink-hover);
  }

  :host([color='pink']:active) {
    --mdc-chip-background-color: var(--mds-color-theme-background-label-pink-active);
  }

  :host([color='purple']) {
    --mdc-chip-border-color: var(--mds-color-theme-outline-label-purple);
    --mdc-chip-background-color: var(--mds-color-theme-background-label-purple-normal);
  }

  :host([color='purple']:hover) {
    --mdc-chip-background-color: var(--mds-color-theme-background-label-purple-hover);
  }

  :host([color='purple']:active) {
    --mdc-chip-background-color: var(--mds-color-theme-background-label-purple-active);
  }

  :host([color='slate']) {
    --mdc-chip-border-color: var(--mds-color-theme-outline-label-slate);
    --mdc-chip-background-color: var(--mds-color-theme-background-label-slate-normal);
  }

  :host([color='slate']:hover) {
    --mdc-chip-background-color: var(--mds-color-theme-background-label-slate-hover);
  }

  :host([color='slate']:active) {
    --mdc-chip-background-color: var(--mds-color-theme-background-label-slate-active);
  }

  :host([color='violet']) {
    --mdc-chip-border-color: var(--mds-color-theme-outline-label-violet);
    --mdc-chip-background-color: var(--mds-color-theme-background-label-violet-normal);
  }

  :host([color='violet']:hover) {
    --mdc-chip-background-color: var(--mds-color-theme-background-label-violet-hover);
  }

  :host([color='violet']:active) {
    --mdc-chip-background-color: var(--mds-color-theme-background-label-violet-active);
  }

  :host([disabled]), :host([disabled]:hover), :host([disabled]:active) {
    --mdc-chip-border-color: var(--mds-color-theme-outline-primary-disabled);
    --mdc-chip-background-color: var(--mds-color-theme-background-primary-disabled);
    --mdc-chip-color: var(--mds-color-theme-text-primary-disabled);
    cursor: auto;
  }
`,A=[p,y,...g()],x=u.constructTagName("chip"),I={DEFAULT:"default",COBALT:"cobalt",GOLD:"gold",LIME:"lime",MINT:"mint",PINK:"pink",PURPLE:"purple",SLATE:"slate",VIOLET:"violet"},r={COLOR:I.DEFAULT,TEXT_TYPE:f.BODY_MIDSIZE_REGULAR,TAG_NAME:L.SPAN,SIZE:T[24],ROLE:"button"};var O=Object.defineProperty,s=(a,t,d,S)=>{for(var o=void 0,e=a.length-1,m;e>=0;e--)(m=a[e])&&(o=m(t,d,o)||o);return o&&O(t,d,o),o};const l=class l extends k(E){constructor(){super(...arguments),this.color=r.COLOR,this.label=""}connectedCallback(){super.connectedCallback(),this.role=r.ROLE,this.size=r.SIZE,this.active=void 0,this.softDisabled=void 0}renderIcon(){return this.iconName?i`
      <mdc-icon 
        name="${this.iconName}" 
        length-unit="rem" 
        size="1"></mdc-icon>
    `:b}render(){return i`
        ${this.renderIcon()}
        <mdc-text type="${r.TEXT_TYPE}" tagname="${r.TAG_NAME}">${this.label}</mdc-text>
      `}};l.styles=[...v.styles,...A];let c=l;s([h({type:String,reflect:!0})],c.prototype,"color");s([h({type:String})],c.prototype,"label");export{I as C,x as T,c as a};
