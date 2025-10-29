import"./index-cng3JtU0.js";import{u as N,S as A,E as u,h as o,k as l,q as h,V as v,n as d}from"./iframe-C8zHd0pv.js";const I=N.constructTagName("banner"),n={CUSTOM:"custom",INFORMATIONAL:"informational",WARNING:"warning",ERROR:"error",SUCCESS:"success"},c={INFORMATIONAL_ICON_NAME:"info-circle-bold",SUCCESS_ICON_NAME:"check-circle-bold",WARNING_ICON_NAME:"warning-bold",ERROR_ICON_NAME:"error-legacy-bold"},i={VARIANT:n.CUSTOM,PREFIX_ICON_SIZE:1.5},R=A`
  :host {
    --mdc-banner-background-color: var(--mds-color-theme-background-solid-primary-normal);
    --mdc-banner-border-color: var(--mds-color-theme-outline-secondary-normal);
    --mdc-banner-icon-color: var(--mds-color-theme-text-primary-normal);
    --mdc-banner-elevation: var(--mds-elevation-3);
    --mdc-banner-padding: 0.75rem;
    --mdc-banner-gap: 0.5rem;

    display: flex;
    padding: var(--mdc-banner-padding);
    align-items: flex-start;
    gap: var(--mdc-banner-gap);
    align-self: stretch;
    width: 100%;
    background-color: var(--mdc-banner-background-color);
    border: 1px solid var(--mdc-banner-border-color);
    border-radius: 0.5rem;
    filter: var(--mdc-banner-elevation);
  }

  :host([variant='success']) {
    --mdc-banner-icon-color: var(--mds-color-theme-text-success-normal);
    --mdc-banner-background-color: var(--mds-color-theme-background-alert-success-normal);
    --mdc-banner-border-color: var(--mds-color-theme-outline-join-normal);
  }

  :host([variant='warning']) {
    --mdc-banner-icon-color: var(--mds-color-theme-text-warning-normal);
    --mdc-banner-background-color: var(--mds-color-theme-background-alert-warning-normal);
    --mdc-banner-border-color: var(--mds-color-theme-outline-warning-normal);
  }

  :host([variant='error']) {
    --mdc-banner-icon-color: var(--mds-color-theme-text-error-normal);
    --mdc-banner-background-color: var(--mds-color-theme-background-alert-error-normal);
    --mdc-banner-border-color: var(--mds-color-theme-outline-cancel-normal);
  }

  :host([variant='informational']) {
    --mdc-banner-icon-color: var(--mds-color-theme-text-accent-normal);
    --mdc-banner-background-color: var(--mds-color-theme-background-alert-theme-normal);
    --mdc-banner-border-color: var(--mds-color-theme-outline-theme-normal);
  }

  :host::part(leading) {
    display: flex;
    align-items: flex-start;
    gap: var(--mdc-banner-gap);
    align-self: stretch;
    flex: 1 0 0;
  }

  :host::part(leading-text) {
    flex: 1 0 0;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  :host(:not([secondary-label]))::part(leading) {
    align-items: center;
  }

  :host::part(leading-icon) {
    color: var(--mdc-banner-icon-color);
    padding: 0.25rem 0;
  }

  :host::part(trailing) {
    display: flex;
    align-items: center;
    gap: var(--mdc-banner-gap);
    align-self: stretch;
    flex-wrap: wrap;
  }

  ::slotted([slot='trailing-actions']) {
    display: flex;
    align-items: center;
    gap: var(--mdc-banner-gap);
    flex-wrap: wrap;
  }
`,_=[R],f=t=>{switch(t){case n.INFORMATIONAL:return c.INFORMATIONAL_ICON_NAME;case n.SUCCESS:return c.SUCCESS_ICON_NAME;case n.WARNING:return c.WARNING_ICON_NAME;case n.ERROR:return c.ERROR_ICON_NAME;default:return null}};var E=Object.defineProperty,m=(t,a,b,x)=>{for(var r=void 0,s=t.length-1,p;s>=0;s--)(p=t[s])&&(r=p(a,b,r)||r);return r&&E(a,b,r),r};const g=class g extends u{constructor(){super(...arguments),this.variant=i.VARIANT,this.label=""}renderIcon(a){return a?l`
      <mdc-icon
        name="${a}"
        size="${i.PREFIX_ICON_SIZE}"
        part="leading-icon"
        length-unit="rem"
      ></mdc-icon>
    `:o}getTextLabel(){return this.label?l`
      <mdc-text part="leading-label" type="${h.BODY_LARGE_REGULAR}" tagname="${v.SPAN}"
        >${this.label}</mdc-text
      >
      ${this.secondaryLabel?l`<mdc-text part="leading-secondary-label" type="${h.BODY_MIDSIZE_REGULAR}" tagname="${v.SPAN}"
            >${this.secondaryLabel}</mdc-text
          >`:o}
    `:o}render(){return l`
      <slot name="content">
        <div part="leading">
          <slot name="leading-icon">
            ${this.variant!==i.VARIANT?this.renderIcon(f(this.variant)??""):o}
          </slot>
          <slot name="leading-text">
            <div part="leading-text">${this.getTextLabel()}</div>
          </slot>
        </div>
        <div part="trailing">
          <slot name="trailing-actions"></slot>
        </div>
      </slot>
    `}};g.styles=[...u.styles,..._];let e=g;m([d({type:String,reflect:!0})],e.prototype,"variant");m([d({type:String,reflect:!0})],e.prototype,"label");m([d({type:String,reflect:!0,attribute:"secondary-label"})],e.prototype,"secondaryLabel");e.register(I);export{n as B};
