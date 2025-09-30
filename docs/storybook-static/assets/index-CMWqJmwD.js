import{i as b,u,D as h,k as t,C as p,n as c}from"./iframe-DSSNydaC.js";import{D as v}from"./DisabledMixin-CVvLVeWc.js";import{I as g}from"./IconNameMixin-DYZzuQwH.js";import{h as y}from"./index-CrzoWpsH.js";import{T,V as E}from"./index-CqfQTe1K.js";import"./index-D-FiYTdm.js";import"./index-BSPq_17-.js";const f=b`
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
`,A=[y,f],_=u.constructTagName("inputchip"),a={TEXT_TYPE:T.BODY_MIDSIZE_REGULAR,TAG_NAME:E.SPAN,CLOSE_ICON:"cancel-bold"};var k=Object.defineProperty,i=(s,d,m,$)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(d,m,r)||r);return r&&k(d,m,r),r};const l=class l extends g(v(p)){constructor(){super(...arguments),this.label="",this.error=!1,this.clearAriaLabel=""}renderIcon(){return this.iconName?t` <mdc-icon part="icon" name="${this.iconName}" length-unit="rem" size="1"></mdc-icon> `:h}handleClose(){this.dispatchEvent(new CustomEvent("remove",{bubbles:!0,composed:!0}))}render(){return t`
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
    `}};l.styles=[...p.styles,...A];let e=l;i([c({type:String})],e.prototype,"label");i([c({type:Boolean})],e.prototype,"error");i([c({type:String,attribute:"clear-aria-label"})],e.prototype,"clearAriaLabel");e.register(_);export{_ as T};
