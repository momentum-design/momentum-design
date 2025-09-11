import{i as g,k as p,D as f}from"./lit-element-D5KKan5q.js";import{n as c}from"./property-Bj3TGwkg.js";import{t}from"./if-defined-D5BV9-c0.js";import{I as u}from"./IconNameMixin-Bk-Z_FTS.js";import{L as h}from"./linksimple.component-NGz6eGkj.js";import{D as z,a as s,L as m,T as v}from"./link.constants-DNTydABS.js";import"./index-XT4ftmUQ.js";const y=g`
  :host::part(anchor) {
    display: flex;
    align-items: center;
    gap: 0.25rem;
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
`,b=[y];var x=Object.defineProperty,w=(i,n,l,I)=>{for(var e=void 0,a=i.length-1,d;a>=0;a--)(d=i[a])&&(e=d(n,l,e)||e);return e&&x(n,l,e),e};const o=class o extends u(h){constructor(){super(...arguments),this.size=z.LINK_SIZE}getIconSize(){switch(this.size){case m.SMALL:return s.SMALL;case m.MIDSIZE:return s.MIDSIZE;default:return s.LARGE}}render(){return p`
      <a
        class="mdc-focus-ring"
        part="anchor"
        href="${this.href}"
        target="${this.target}"
        rel="${t(this.rel)}"
        download="${t(this.download)}"
        ping="${t(this.ping)}"
        hreflang="${t(this.hreflang)}"
        type="${t(this.type)}"
        referrerpolicy="${t(this.referrerpolicy)}"
        aria-label="${this.dataAriaLabel??""}"
        tabindex="${this.disabled?-1:0}"
      >
        <slot></slot>
        ${this.iconName?p`<mdc-icon
              part="icon"
              name="${this.iconName}"
              size="${this.getIconSize()}"
              length-unit="rem"
            ></mdc-icon>`:f}
      </a>
    `}};o.styles=[...h.styles,...b];let r=o;w([c({type:String,reflect:!0})],r.prototype,"size");r.register(v);
