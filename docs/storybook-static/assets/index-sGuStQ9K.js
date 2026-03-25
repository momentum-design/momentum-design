import{a2 as v,a3 as p,a8 as u,k as s,h as g,C as b,n as m}from"./iframe-eduPLbBc.js";import{B as k}from"./buttonsimple.component-DGAFLjmv.js";import{I as f}from"./IconNameMixin-C-sJwElH.js";import{V as o,D as a,T as w}from"./alertchip.constants-BtgGvUwE.js";import"./index-NqmhigYf.js";const x=v`
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
    --mdc-chip-background-color: var(--mds-color-theme-background-alert-default-normal);
    --mdc-chip-icon-color: var(--mds-color-theme-text-secondary-normal);

    border-color: var(--mdc-chip-border-color);
    background: var(--mdc-chip-background-color);
  }

  :host::part(label) {
    color: var(--mdc-chip-color);
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  :host::part(icon) {
    color: var(--mdc-chip-icon-color);
    flex-shrink: 0;
  }

  :host([variant='neutral']:hover) {
    --mdc-chip-background-color: var(--mds-color-theme-background-alert-default-hover);
  }

  :host([variant='neutral']:active) {
    --mdc-chip-background-color: var(--mds-color-theme-background-alert-default-active);
  }

  :host([variant='error'])::part(icon) {
    --mdc-chip-icon-color: var(--mds-color-theme-text-error-normal);
  }

  :host([variant='error']) {
    --mdc-chip-border-color: var(--mds-color-theme-outline-cancel-normal);
    --mdc-chip-background-color: var(--mds-color-theme-background-alert-error-normal);
  }

  :host([variant='error']:hover) {
    --mdc-chip-background-color: var(--mds-color-theme-background-alert-error-hover);
  }

  :host([variant='error']:active) {
    --mdc-chip-background-color: var(--mds-color-theme-background-alert-error-active);
  }

  :host([variant='warning'])::part(icon) {
    --mdc-chip-icon-color: var(--mds-color-theme-text-warning-normal);
  }

  :host([variant='warning']) {
    --mdc-chip-border-color: var(--mds-color-theme-outline-warning-normal);
    --mdc-chip-background-color: var(--mds-color-theme-background-alert-warning-normal);
  }

  :host([variant='warning']:hover) {
    --mdc-chip-background-color: var(--mds-color-theme-background-alert-warning-hover);
  }

  :host([variant='warning']:active) {
    --mdc-chip-background-color: var(--mds-color-theme-background-alert-warning-active);
  }

  :host([variant='success'])::part(icon) {
    --mdc-chip-icon-color: var(--mds-color-theme-text-success-normal);
  }

  :host([variant='success']) {
    --mdc-chip-border-color: var(--mds-color-theme-outline-join-normal);
    --mdc-chip-background-color: var(--mds-color-theme-background-alert-success-normal);
  }

  :host([variant='success']:hover) {
    --mdc-chip-background-color: var(--mds-color-theme-background-alert-success-hover);
  }

  :host([variant='success']:active) {
    --mdc-chip-background-color: var(--mds-color-theme-background-alert-success-active);
  }

  :host([variant='informational'])::part(icon) {
    --mdc-chip-icon-color: var(--mds-color-theme-text-accent-normal);
  }

  :host([variant='informational']) {
    --mdc-chip-border-color: var(--mds-color-theme-outline-theme-normal);
    --mdc-chip-background-color: var(--mds-color-theme-background-alert-theme-normal);
  }

  :host([variant='informational']:hover) {
    --mdc-chip-background-color: var(--mds-color-theme-background-alert-theme-hover);
  }

  :host([variant='informational']:active) {
    --mdc-chip-background-color: var(--mds-color-theme-background-alert-theme-active);
  }

  /* High Contrast Mode */
  @media (forced-colors: active) {
    :host([variant='neutral'])::part(icon) {
      --mdc-chip-icon-color: ButtonText;
    }
  }
`,y=[p,x,...u()],A=e=>({[o.ERROR]:"error-legacy-badge-filled",[o.INFORMATIONAL]:"info-badge-filled",[o.NEUTRAL]:"dnd-presence-badge-filled",[o.SUCCESS]:"check-circle-badge-filled",[o.WARNING]:"warning-badge-filled"})[e];var T=Object.defineProperty,h=(e,t,l,I)=>{for(var r=void 0,n=e.length-1,d;n>=0;n--)(d=e[n])&&(r=d(t,l,r)||r);return r&&T(t,l,r),r};const i=class i extends f(k){constructor(){super(...arguments),this.variant=a.VARIANT}connectedCallback(){super.connectedCallback(),this.disabled=void 0,this.softDisabled=void 0,this.active=void 0,this.size=a.SIZE,this.role=a.ROLE}render(){return s`
      <mdc-icon part="icon" name="${this.iconName||A(this.variant)}" length-unit="rem" size="1"></mdc-icon>
      ${this.label?s`<mdc-text part="label" type="${a.TEXT_TYPE}" tagname="${a.TAG_NAME}"
            >${this.label}</mdc-text
          >`:g}
    `}};i.styles=[...b.styles,...y];let c=i;h([m({type:String,reflect:!0})],c.prototype,"variant");h([m({type:String})],c.prototype,"label");c.register(w);
