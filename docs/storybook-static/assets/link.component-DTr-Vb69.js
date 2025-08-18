import{i as p,k as d,D as f}from"./lit-element-D5KKan5q.js";import{n as h}from"./property-Bj3TGwkg.js";import{I as u}from"./IconNameMixin-Bk-Z_FTS.js";import{L as m}from"./linksimple.component-DbI0pHK9.js";import{D as z,a as r,L as g}from"./link.constants-DNTydABS.js";const v=p`
  :host {
    gap: 0.25rem;
  }

  :host([size='large']) {
    font-size: var(--mds-font-apps-body-large-regular-font-size);
    font-weight: var(--mds-font-apps-body-large-regular-font-weight);
    line-height: var(--mds-font-apps-body-large-regular-line-height);
    text-decoration: var(--mds-font-apps-body-large-regular-text-decoration);
    text-transform: var(--mds-font-apps-body-large-regular-text-case);
  }

  :host([size='midsize']) {
    font-size: var(--mds-font-apps-body-midsize-regular-font-size);
    font-weight: var(--mds-font-apps-body-midsize-regular-font-weight);
    line-height: var(--mds-font-apps-body-midsize-regular-line-height);
    text-decoration: var(--mds-font-apps-body-midsize-regular-text-decoration);
    text-transform: var(--mds-font-apps-body-midsize-regular-text-case);
  }

  :host([size='small']) {
    font-size: var(--mds-font-apps-body-small-regular-font-size);
    font-weight: var(--mds-font-apps-body-small-regular-font-weight);
    line-height: var(--mds-font-apps-body-small-regular-line-height);
    text-decoration: var(--mds-font-apps-body-small-regular-text-decoration);
    text-transform: var(--mds-font-apps-body-small-regular-text-case);
  }

  :host([size='large']:hover),
  :host([size='large']:active),
  :host([size='large'][inline]) {
    font-size: var(--mds-font-apps-body-large-regular-underline-font-size);
    font-weight: var(--mds-font-apps-body-large-regular-underline-font-weight);
    line-height: var(--mds-font-apps-body-large-regular-underline-line-height);
    text-decoration: var(--mds-font-apps-body-large-regular-underline-text-decoration);
    text-transform: var(--mds-font-apps-body-large-regular-underline-text-case);
  }

  :host([size='midsize']:hover),
  :host([size='midsize']:active),
  :host([size='midsize'][inline]) {
    font-size: var(--mds-font-apps-body-midsize-regular-underline-font-size);
    font-weight: var(--mds-font-apps-body-midsize-regular-underline-font-weight);
    line-height: var(--mds-font-apps-body-midsize-regular-underline-line-height);
    text-decoration: var(--mds-font-apps-body-midsize-regular-underline-text-decoration);
    text-transform: var(--mds-font-apps-body-midsize-regular-underline-text-case);
  }

  :host([size='small']:hover),
  :host([size='small']:active),
  :host([size='small'][inline]) {
    font-size: var(--mds-font-apps-body-small-regular-underline-font-size);
    font-weight: var(--mds-font-apps-body-small-regular-underline-font-weight);
    line-height: var(--mds-font-apps-body-small-regular-underline-line-height);
    text-decoration: var(--mds-font-apps-body-small-regular-underline-text-decoration);
    text-transform: var(--mds-font-apps-body-small-regular-underline-text-case);
  }
`,c=[v];var y=Object.defineProperty,b=(o,i,n,x)=>{for(var e=void 0,t=o.length-1,l;t>=0;t--)(l=o[t])&&(e=l(i,n,e)||e);return e&&y(i,n,e),e};const a=class a extends u(m){constructor(){super(...arguments),this.size=z.LINK_SIZE}getIconSize(){switch(this.size){case g.SMALL:return r.SMALL;case g.MIDSIZE:return r.MIDSIZE;default:return r.LARGE}}render(){return d`
      <slot></slot>
      ${this.iconName?d` <mdc-icon name=${this.iconName} size=${this.getIconSize()} length-unit="rem"></mdc-icon> `:f}
    `}};a.styles=[...m.styles,...c];let s=a;b([h({type:String,reflect:!0})],s.prototype,"size");export{s as L};
