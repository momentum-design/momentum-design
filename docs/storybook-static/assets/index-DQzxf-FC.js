import{S as b,U as u,u as v,q as g,V as y,k as o,h,E as p,n as c}from"./iframe-CUMIo5cM.js";import{D as E}from"./DisabledMixin-B8BxQdXB.js";import{I as T}from"./IconNameMixin-BeNxCs2I.js";import"./index-CdRouVd5.js";import"./index-CD5HQPCr.js";const f=b`
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

  ::slotted(mdc-avatar[slot='prefix']){
    width: 1.25rem;
    height: 1.25rem;
  }
`,x=[u,f],A=v.constructTagName("inputchip"),a={TEXT_TYPE:g.BODY_MIDSIZE_REGULAR,TAG_NAME:y.SPAN,CLOSE_ICON:"cancel-bold"};var _=Object.defineProperty,l=(s,d,m,$)=>{for(var r=void 0,t=s.length-1,n;t>=0;t--)(n=s[t])&&(r=n(d,m,r)||r);return r&&_(d,m,r),r};const i=class i extends T(E(p)){constructor(){super(...arguments),this.label="",this.error=!1,this.clearAriaLabel=""}renderPrefix(){return o`
      <slot name="prefix">
        ${this.iconName?o`<mdc-icon part="icon" name="${this.iconName}" length-unit="rem" size="1"></mdc-icon>`:h}
      </slot>
    `}handleClose(){this.dispatchEvent(new CustomEvent("remove",{bubbles:!0,composed:!0}))}render(){return o`
      ${this.renderPrefix()}
      ${this.label?o`<mdc-text part="label" type="${a.TEXT_TYPE}" tagname="${a.TAG_NAME}"
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
    `}};i.styles=[...p.styles,...x];let e=i;l([c({type:String})],e.prototype,"label");l([c({type:Boolean})],e.prototype,"error");l([c({type:String,attribute:"clear-aria-label"})],e.prototype,"clearAriaLabel");e.register(A);export{A as T};
