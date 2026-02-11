import{a2 as h,k as d,h as g,n as f}from"./iframe-DdxUAY1B.js";import{I as c}from"./IconNameMixin-CVdU3l_W.js";import{L as p}from"./linksimple.component-CpufjmN0.js";import{D as u,a,L as m,T as z}from"./link.constants-DL-uaoRL.js";import"./index-D1jPjw4Q.js";const v=h`
  :host([icon-name])::part(text) {
    margin-inline-end: 0.25rem;
  }

  :host::part(icon) {
    display: inline-flex;
  }

  :host([size='large'])::part(icon) {
    vertical-align: -0.125rem;
  }

  :host([size='midsize'])::part(icon),
  :host([size='small'])::part(icon) {
    vertical-align: -0.1rem;
  }

  :host([size='large'])::part(anchor) {
    font-size: var(--mds-font-apps-body-large-regular-font-size);
    font-weight: var(--mds-font-apps-body-large-regular-font-weight);
    line-height: var(--mds-font-apps-body-large-regular-line-height);
    text-decoration: var(--mds-font-apps-body-large-regular-text-decoration);
    text-transform: var(--mds-font-apps-body-large-regular-text-case);
  }

  :host([size='midsize'])::part(anchor) {
    font-size: var(--mds-font-apps-body-midsize-regular-font-size);
    font-weight: var(--mds-font-apps-body-midsize-regular-font-weight);
    line-height: var(--mds-font-apps-body-midsize-regular-line-height);
    text-decoration: var(--mds-font-apps-body-midsize-regular-text-decoration);
    text-transform: var(--mds-font-apps-body-midsize-regular-text-case);
  }

  :host([size='small'])::part(anchor) {
    font-size: var(--mds-font-apps-body-small-regular-font-size);
    font-weight: var(--mds-font-apps-body-small-regular-font-weight);
    line-height: var(--mds-font-apps-body-small-regular-line-height);
    text-decoration: var(--mds-font-apps-body-small-regular-text-decoration);
    text-transform: var(--mds-font-apps-body-small-regular-text-case);
  }

  :host([size='large']:hover)::part(anchor),
  :host([size='large']:active)::part(anchor),
  :host([size='large'][inline])::part(anchor) {
    font-size: var(--mds-font-apps-body-large-regular-underline-font-size);
    font-weight: var(--mds-font-apps-body-large-regular-underline-font-weight);
    line-height: var(--mds-font-apps-body-large-regular-underline-line-height);
    text-decoration: var(--mds-font-apps-body-large-regular-underline-text-decoration);
    text-transform: var(--mds-font-apps-body-large-regular-underline-text-case);
  }

  :host([size='midsize']:hover)::part(anchor),
  :host([size='midsize']:active)::part(anchor),
  :host([size='midsize'][inline])::part(anchor) {
    font-size: var(--mds-font-apps-body-midsize-regular-underline-font-size);
    font-weight: var(--mds-font-apps-body-midsize-regular-underline-font-weight);
    line-height: var(--mds-font-apps-body-midsize-regular-underline-line-height);
    text-decoration: var(--mds-font-apps-body-midsize-regular-underline-text-decoration);
    text-transform: var(--mds-font-apps-body-midsize-regular-underline-text-case);
  }

  :host([size='small']:hover)::part(anchor),
  :host([size='small']:active)::part(anchor),
  :host([size='small'][inline])::part(anchor) {
    font-size: var(--mds-font-apps-body-small-regular-underline-font-size);
    font-weight: var(--mds-font-apps-body-small-regular-underline-font-weight);
    line-height: var(--mds-font-apps-body-small-regular-underline-line-height);
    text-decoration: var(--mds-font-apps-body-small-regular-underline-text-decoration);
    text-transform: var(--mds-font-apps-body-small-regular-underline-text-case);
  }
`,y=[v];var b=Object.defineProperty,x=(o,n,i,I)=>{for(var e=void 0,r=o.length-1,l;r>=0;r--)(l=o[r])&&(e=l(n,i,e)||e);return e&&b(n,i,e),e};const s=class s extends c(p){constructor(){super(...arguments),this.size=u.LINK_SIZE}getIconSize(){switch(this.size){case m.SMALL:return a.SMALL;case m.MIDSIZE:return a.MIDSIZE;default:return a.LARGE}}renderAnchorContent(){return d`<span part="text"><slot></slot></span>${this.iconName?d`<mdc-icon part="icon" name="${this.iconName}" size="${this.getIconSize()}" length-unit="rem"></mdc-icon>`:g}`}};s.styles=[...p.styles,...y];let t=s;x([f({type:String,reflect:!0})],t.prototype,"size");t.register(z);
