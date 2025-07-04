import{i as p,k as d,D as f}from"./lit-element-D5KKan5q.js";import{n as h}from"./index-C9z9WAEj.js";import{I as u}from"./IconNameMixin-CujGSn0t.js";import{L as m}from"./linksimple.component-C-I9azzj.js";import{D as z,a as s,L as g,T as v}from"./link.constants-CqyNsepP.js";import"./index-DlFkXpCE.js";const c=p`
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
`,y=[c];var b=Object.defineProperty,x=(i,o,n,I)=>{for(var e=void 0,r=i.length-1,l;r>=0;r--)(l=i[r])&&(e=l(o,n,e)||e);return e&&b(o,n,e),e};const a=class a extends u(m){constructor(){super(...arguments),this.size=z.LINK_SIZE}getIconSize(){switch(this.size){case g.SMALL:return s.SMALL;case g.MIDSIZE:return s.MIDSIZE;default:return s.LARGE}}render(){return d`
      <slot></slot>
      ${this.iconName?d` <mdc-icon name=${this.iconName} size=${this.getIconSize()} length-unit="rem"></mdc-icon> `:f}
    `}};a.styles=[...m.styles,...y];let t=a;x([h({type:String,reflect:!0})],t.prototype,"size");t.register(v);
