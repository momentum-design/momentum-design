import{i as m,k as r,D as a}from"./lit-element-D5KKan5q.js";import{C as h,n as i,u as x}from"./provider.component-BaQC7CJH.js";import"./index-ibTCk7Bz.js";import"./index-DHsMOcdX.js";const f=m`
  :host {
    --mdc-listheader-padding: 0.5rem 0.75rem;
    --mdc-listheader-gap: 0.5rem;
    --mdc-listheader-color-disabled: var(--mds-color-theme-text-primary-disabled);

    display: flex;
    align-items: center;
    padding: var(--mdc-listheader-padding);
    gap: var(--mdc-listheader-gap);
  }

  :host([disabled]) {
    color: var(--mdc-listheader-color-disabled);
  }

  ::slotted(*) {
    flex-shrink: 0;
  }

  :host::part(header-text) {
    width: 100%;
  }
  :host::part(prefix-icon),
  :host::part(postfix-icon) {
    flex-shrink: 0;
  }
`,u=[f];var g=Object.defineProperty,s=(n,p,c,b)=>{for(var e=void 0,o=n.length-1,l;o>=0;o--)(l=n[o])&&(e=l(p,c,e)||e);return e&&g(p,c,e),e};const d=class d extends h{constructor(){super(...arguments),this.disabled=!1}render(){return r`
      ${this.prefixIcon?r`<mdc-icon
            part="prefix-icon"
            name="${this.prefixIcon}"
            aria-hidden="true"
            size="1"
            length-unit="rem"
          ></mdc-icon>`:a}
      ${this.headerText?r`<mdc-text part="header-text" type="body-midsize-bold" tagname="span" aria-hidden="true"
            >${this.headerText}</mdc-text
          >`:a}
      <slot></slot>
      ${this.postfixIcon?r`<mdc-icon
            part="postfix-icon"
            name="${this.postfixIcon}"
            aria-hidden="true"
            size="1"
            length-unit="rem"
          ></mdc-icon>`:a}
    `}};d.styles=[...h.styles,...u];let t=d;s([i({type:String,attribute:"prefix-icon"})],t.prototype,"prefixIcon");s([i({type:String,attribute:"postfix-icon"})],t.prototype,"postfixIcon");s([i({type:String,attribute:"header-text"})],t.prototype,"headerText");s([i({type:Boolean,reflect:!0})],t.prototype,"disabled");const y=x.constructTagName("listheader");t.register(y);
