import{i as b,D as p,k as t}from"./lit-element-D5KKan5q.js";import{n as c}from"./property-Bj3TGwkg.js";import{u,C as h}from"./provider.component-DrWB4byV.js";import{D as v}from"./DisabledMixin-B-Cnza7-.js";import{I as g}from"./IconNameMixin-Bk-Z_FTS.js";import{h as y}from"./index-CqVtAZCJ.js";import{T,V as f}from"./index-D2VIkDCb.js";import"./index-Bld5fWmj.js";import"./index-Dcns-nwy.js";const E=b`
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
`,A=[y,E],_=u.constructTagName("inputchip"),a={TEXT_TYPE:T.BODY_MIDSIZE_REGULAR,TAG_NAME:f.SPAN,CLOSE_ICON:"cancel-bold"};var k=Object.defineProperty,i=(s,m,d,$)=>{for(var r=void 0,e=s.length-1,n;e>=0;e--)(n=s[e])&&(r=n(m,d,r)||r);return r&&k(m,d,r),r};const l=class l extends g(v(h)){constructor(){super(...arguments),this.label="",this.error=!1,this.clearAriaLabel=""}renderIcon(){return this.iconName?t` <mdc-icon part="icon" name="${this.iconName}" length-unit="rem" size="1"></mdc-icon> `:p}handleClose(){this.dispatchEvent(new CustomEvent("remove",{bubbles:!0,composed:!0}))}render(){return t`
      ${this.renderIcon()}
      ${this.label?t`<mdc-text part="label" type="${a.TEXT_TYPE}" tagname="${a.TAG_NAME}"
            >${this.label}</mdc-text
          >`:p}
      <mdc-button
        ?disabled="${this.disabled}"
        variant="tertiary"
        part="close-icon"
        aria-label="${this.clearAriaLabel}"
        prefix-icon="${a.CLOSE_ICON}"
        size="20"
        @click="${this.handleClose}"
      ></mdc-button>
    `}};l.styles=[...h.styles,...A];let o=l;i([c({type:String})],o.prototype,"label");i([c({type:Boolean})],o.prototype,"error");i([c({type:String,attribute:"clear-aria-label"})],o.prototype,"clearAriaLabel");o.register(_);export{_ as T};
