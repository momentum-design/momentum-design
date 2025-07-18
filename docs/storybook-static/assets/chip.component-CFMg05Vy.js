import{i as b,D as h,k as l}from"./lit-element-D5KKan5q.js";import{u,C as v,n}from"./index-C9z9WAEj.js";import{I as p}from"./IconNameMixin-CujGSn0t.js";import{B as g}from"./buttonsimple.component-DTw2LNsX.js";import{a as k}from"./buttonsimple.constants-CGc1uJX6.js";import{T,V as E}from"./index-BrLJ_9IK.js";import{a as f,h as A}from"./index-Cx7wvr8C.js";const G=u.constructTagName("chip"),L={DEFAULT:"default",COBALT:"cobalt",GOLD:"gold",LIME:"lime",MINT:"mint",ORANGE:"orange",PINK:"pink",PURPLE:"purple",SLATE:"slate",VIOLET:"violet"},r={COLOR:L.DEFAULT,TEXT_TYPE:T.BODY_MIDSIZE_REGULAR,TAG_NAME:E.SPAN,SIZE:k[24],ROLE:"button"},y=b`
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

  :host([color='orange']) {
    --mdc-chip-border-color: var(--mds-color-theme-outline-label-orange);
    --mdc-chip-background-color: var(--mds-color-theme-background-label-orange-normal);
  }

  :host([color='orange']:hover) {
    --mdc-chip-background-color: var(--mds-color-theme-background-label-orange-hover);
  }

  :host([color='orange']:active) {
    --mdc-chip-background-color: var(--mds-color-theme-background-label-orange-active);
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

  :host([disabled]),
  :host([disabled]:hover),
  :host([disabled]:active) {
    --mdc-chip-border-color: var(--mds-color-theme-outline-primary-disabled);
    --mdc-chip-background-color: var(--mds-color-theme-background-primary-disabled);
    --mdc-chip-color: var(--mds-color-theme-text-primary-disabled);
    cursor: auto;
  }
`,O=[f,y,...A()];var I=Object.defineProperty,s=(t,d,m,S)=>{for(var o=void 0,e=t.length-1,i;e>=0;e--)(i=t[e])&&(o=i(d,m,o)||o);return o&&I(d,m,o),o};const a=class a extends p(g){constructor(){super(...arguments),this.color=r.COLOR,this.label=""}connectedCallback(){super.connectedCallback(),this.role=r.ROLE,this.size=r.SIZE,this.active=void 0,this.softDisabled=void 0}renderIcon(){return this.iconName?l` <mdc-icon name="${this.iconName}" length-unit="rem" size="1"></mdc-icon> `:h}render(){return l`
      ${this.renderIcon()}
      ${this.label?l`<mdc-text part="label" type="${r.TEXT_TYPE}" tagname="${r.TAG_NAME}"
            >${this.label}</mdc-text
          >`:h}
    `}};a.styles=[...v.styles,...O];let c=a;s([n({type:String,reflect:!0})],c.prototype,"color");s([n({type:String})],c.prototype,"label");export{L as C,G as T,c as a};
