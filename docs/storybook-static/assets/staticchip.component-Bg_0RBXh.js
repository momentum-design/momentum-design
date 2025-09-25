import{u as p,i as u,D as i,k as l,C as s,n as h}from"./iframe-CXwaMhTJ.js";import{I as g}from"./IconNameMixin-CCAHuPWp.js";import{T as v,V as k}from"./index-DSOBsR-q.js";import{h as T}from"./index-BH7b8QFc.js";const P=p.constructTagName("staticchip"),E={DEFAULT:"default",COBALT:"cobalt",GOLD:"gold",LIME:"lime",MINT:"mint",ORANGE:"orange",PINK:"pink",PURPLE:"purple",SLATE:"slate",VIOLET:"violet"},c={COLOR:E.DEFAULT,TEXT_TYPE:v.BODY_MIDSIZE_REGULAR,TAG_NAME:k.SPAN},A=u`
  :host {
    height: 1.5rem;
    gap: 0.25rem;
    padding: 0 0.5rem;
    border-radius: 0.25rem;
    border: 1px solid;
    white-space: nowrap;

    --mdc-chip-color: var(--mds-color-theme-text-primary-normal);
    --mdc-chip-border-color: var(--mds-color-theme-outline-button-normal);
    --mdc-chip-background-color: var(--mds-color-theme-background-label-default-normal);

    color: var(--mdc-chip-color);
    border-color: var(--mdc-chip-border-color);
    background-color: var(--mdc-chip-background-color);
  }

  :host([color='cobalt']) {
    --mdc-chip-border-color: var(--mds-color-theme-outline-theme-normal);
    --mdc-chip-background-color: var(--mds-color-theme-background-label-cobalt-normal);
  }

  :host([color='gold']) {
    --mdc-chip-border-color: var(--mds-color-theme-outline-label-gold);
    --mdc-chip-background-color: var(--mds-color-theme-background-label-gold-normal);
  }

  :host([color='lime']) {
    --mdc-chip-border-color: var(--mds-color-theme-outline-label-lime);
    --mdc-chip-background-color: var(--mds-color-theme-background-label-lime-normal);
  }

  :host([color='mint']) {
    --mdc-chip-border-color: var(--mds-color-theme-outline-label-mint);
    --mdc-chip-background-color: var(--mds-color-theme-background-label-mint-normal);
  }

  :host([color='pink']) {
    --mdc-chip-border-color: var(--mds-color-theme-outline-label-pink);
    --mdc-chip-background-color: var(--mds-color-theme-background-label-pink-normal);
  }

  :host([color='purple']) {
    --mdc-chip-border-color: var(--mds-color-theme-outline-label-purple);
    --mdc-chip-background-color: var(--mds-color-theme-background-label-purple-normal);
  }

  :host([color='orange']) {
    --mdc-chip-border-color: var(--mds-color-theme-outline-label-orange);
    --mdc-chip-background-color: var(--mds-color-theme-background-label-orange-normal);
  }

  :host([color='slate']) {
    --mdc-chip-border-color: var(--mds-color-theme-outline-label-slate);
    --mdc-chip-background-color: var(--mds-color-theme-background-label-slate-normal);
  }

  :host([color='violet']) {
    --mdc-chip-border-color: var(--mds-color-theme-outline-label-violet);
    --mdc-chip-background-color: var(--mds-color-theme-background-label-violet-normal);
  }
`,L=[T,A];var f=Object.defineProperty,b=(t,m,d,O)=>{for(var o=void 0,e=t.length-1,n;e>=0;e--)(n=t[e])&&(o=n(m,d,o)||o);return o&&f(m,d,o),o};const a=class a extends g(s){constructor(){super(...arguments),this.color=c.COLOR,this.label=""}renderIcon(){return this.iconName?l` <mdc-icon name="${this.iconName}" length-unit="rem" size="1"></mdc-icon> `:i}render(){return l`
      ${this.renderIcon()}
      ${this.label?l`<mdc-text part="label" type="${c.TEXT_TYPE}" tagname="${c.TAG_NAME}"
            >${this.label}</mdc-text
          >`:i}
    `}};a.styles=[...s.styles,...L];let r=a;b([h({type:String,reflect:!0})],r.prototype,"color");b([h({type:String})],r.prototype,"label");export{E as C,r as S,P as T};
