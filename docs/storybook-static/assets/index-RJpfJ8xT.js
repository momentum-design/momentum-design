import{S as p,U as u,u as v,q as g,V as y,h,k as t,E as b,n as c}from"./iframe-DWK8UCtP.js";import{D as E}from"./DisabledMixin-BRiIDRqE.js";import{I as T}from"./IconNameMixin-BjulLWXA.js";import"./index-C89dEGRO.js";import"./index-W2b61mwu.js";const A=p`
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
`,_=[u,A],f=v.constructTagName("inputchip"),a={TEXT_TYPE:g.BODY_MIDSIZE_REGULAR,TAG_NAME:y.SPAN,CLOSE_ICON:"cancel-bold"};var k=Object.defineProperty,l=(s,d,n,$)=>{for(var r=void 0,o=s.length-1,m;o>=0;o--)(m=s[o])&&(r=m(d,n,r)||r);return r&&k(d,n,r),r};const i=class i extends T(E(b)){constructor(){super(...arguments),this.label="",this.error=!1,this.clearAriaLabel=""}renderIcon(){return this.iconName?t` <mdc-icon part="icon" name="${this.iconName}" length-unit="rem" size="1"></mdc-icon> `:h}handleClose(){this.dispatchEvent(new CustomEvent("remove",{bubbles:!0,composed:!0}))}render(){return t`
      ${this.renderIcon()}
      ${this.label?t`<mdc-text part="label" type="${a.TEXT_TYPE}" tagname="${a.TAG_NAME}"
            >${this.label}</mdc-text
          >`:h}
      <mdc-button
        ?disabled="${this.disabled}"
        variant="tertiary"
        part="close-icon"
        aria-label="${this.clearAriaLabel}"
        prefix-icon="${a.CLOSE_ICON}"
        size="20"
        @click="${this.handleClose}"
      ></mdc-button>
    `}};i.styles=[...b.styles,..._];let e=i;l([c({type:String})],e.prototype,"label");l([c({type:Boolean})],e.prototype,"error");l([c({type:String,attribute:"clear-aria-label"})],e.prototype,"clearAriaLabel");e.register(f);export{f as T};
