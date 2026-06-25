import"./index-C658QqKz.js";import{a4 as u,C as d,z as l,k as o,n as g}from"./iframe-CeAfCu9I.js";import{D as r,a as p,T as f}from"./statusmessage.constants-DfVAETh_.js";const v=u`
  :host {
    --mdc-statusmessage-color: var(--mds-color-theme-text-secondary-normal);
    --mdc-statusmessage-font-size: var(--mds-font-apps-body-midsize-regular-font-size);
    --mdc-statusmessage-font-weight: var(--mds-font-apps-body-midsize-regular-font-weight);
    --mdc-statusmessage-line-height: var(--mds-font-apps-body-midsize-regular-line-height);
    --mdc-statusmessage-gap: 0.5rem;
    --mdc-statusmessage-icon-size: 1rem;

    display: block;
    width: fit-content;
    color: var(--mdc-statusmessage-color);
    font-size: var(--mdc-statusmessage-font-size);
    font-weight: var(--mdc-statusmessage-font-weight);
    line-height: var(--mdc-statusmessage-line-height);
  }

  :host([severity='error']) {
    --mdc-statusmessage-color: var(--mds-color-theme-text-error-normal);
  }

  :host([severity='warning']) {
    --mdc-statusmessage-color: var(--mds-color-theme-text-warning-normal);
  }

  :host([severity='success']) {
    --mdc-statusmessage-color: var(--mds-color-theme-text-success-normal);
  }

  :host([severity='priority']) {
    --mdc-statusmessage-color: var(--mds-color-theme-text-accent-normal);
  }

  [part='container'] {
    display: flex;
    align-items: center;
    gap: var(--mdc-statusmessage-gap);
    width: 100%;
    color: var(--mdc-statusmessage-color);
    font-size: var(--mdc-statusmessage-font-size);
    font-weight: var(--mdc-statusmessage-font-weight);
    line-height: var(--mdc-statusmessage-line-height);
  }

  [part='icon'],
  ::slotted([slot='icon']) {
    --mdc-icon-size: var(--mdc-statusmessage-icon-size);

    align-self: flex-start;
    flex-shrink: 0;
    height: var(--mdc-statusmessage-icon-size);
    margin-block-start: 0.125rem;
  }

  [part='text'],
  ::slotted(*) {
    color: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
  }
`,y=[v];var z=Object.defineProperty,h=(n,t,m,E)=>{for(var e=void 0,a=n.length-1,c;a>=0;a--)(c=n[a])&&(e=c(t,m,e)||e);return e&&z(t,m,e),e};const i=class i extends d{constructor(){super(...arguments),this.severity=r.SEVERITY}renderIcon(){const t=p[this.severity||r.SEVERITY];return t?o`<mdc-icon part="icon" name="${t}"></mdc-icon>`:l}renderMessage(){return this.message?o`
      <mdc-text part="text" tagname="${r.TEXT_TAGNAME}" type="${r.TEXT_TYPE}">${this.message}</mdc-text>
    `:l}render(){return o`
      <div part="container">
        <slot name="icon" part="icon">${this.renderIcon()}</slot>
        <slot part="text">${this.renderMessage()}</slot>
      </div>
    `}};i.styles=[...d.styles,...y];let s=i;h([g({type:String,reflect:!0})],s.prototype,"severity");h([g({type:String,reflect:!0})],s.prototype,"message");s.register(f);
