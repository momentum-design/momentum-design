import{i as h,D as b,k as n}from"./lit-element-D5KKan5q.js";import{u,C as p,n as a}from"./index-C9z9WAEj.js";import{D as v}from"./DisabledMixin-BZruwOeC.js";import{I as g}from"./IconNameMixin-CujGSn0t.js";import{a as y}from"./index-Cx7wvr8C.js";import{T,V as E}from"./index-BrLJ_9IK.js";import"./index-DgVPg-O5.js";import"./index-C0S93Icn.js";const f=h`
  :host {
    height: 1.5rem;
    gap: 0.25rem;
    padding: 0 0.25rem 0 0.5rem;
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

  :host([error]) {
    --mdc-chip-border-color: var(--mds-color-theme-outline-cancel-normal);
    --mdc-chip-background-color: var(--mds-color-theme-background-label-error-normal);
  }

  :host([disabled]),
  :host([disabled]:hover),
  :host([disabled]:active) {
    --mdc-chip-border-color: var(--mds-color-theme-common-outline-primary-disabled);
    --mdc-chip-background-color: var(--mds-color-theme-background-primary-disabled);
    --mdc-chip-color: var(--mds-color-theme-text-primary-disabled);
    cursor: auto;
  }
`,A=[y,f],_=u.constructTagName("inputchip"),t={TEXT_TYPE:T.BODY_MIDSIZE_REGULAR,TAG_NAME:E.SPAN,CLOSE_ICON:"cancel-bold"};var k=Object.defineProperty,c=(l,s,m,x)=>{for(var r=void 0,e=l.length-1,d;e>=0;e--)(d=l[e])&&(r=d(s,m,r)||r);return r&&k(s,m,r),r};const i=class i extends g(v(p)){constructor(){super(...arguments),this.label="",this.error=!1,this.clearAriaLabel=""}renderIcon(){return this.iconName?n` <mdc-icon name="${this.iconName}" length-unit="rem" size="1"></mdc-icon> `:b}handleClose(){this.dispatchEvent(new CustomEvent("remove",{bubbles:!0,composed:!0}))}render(){return n`
      ${this.renderIcon()}
      <mdc-text part="label" type="${t.TEXT_TYPE}" tagname="${t.TAG_NAME}">${this.label}</mdc-text>
      <mdc-button
        ?disabled="${this.disabled}"
        variant="tertiary"
        part="close-icon"
        aria-label="${this.clearAriaLabel}"
        prefix-icon="${t.CLOSE_ICON}"
        size="20"
        @click="${this.handleClose}"
      ></mdc-button>
    `}};i.styles=[...p.styles,...A];let o=i;c([a({type:String})],o.prototype,"label");c([a({type:Boolean})],o.prototype,"error");c([a({type:String,attribute:"clear-aria-label"})],o.prototype,"clearAriaLabel");o.register(_);export{_ as T};
