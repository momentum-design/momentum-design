import{i as p,k as m,D as f}from"./lit-element-D5KKan5q.js";import{u as h,n as u}from"./index-C9z9WAEj.js";import{I as c}from"./IconNameMixin-CujGSn0t.js";import{L as g}from"./linksimple.component-CZN2acD1.js";import"./index-BR-zbXcK.js";const z=h.constructTagName("link"),a={LARGE:"large",MIDSIZE:"midsize",SMALL:"small"},s={LARGE:1,MIDSIZE:.875,SMALL:.75},v={LINK_SIZE:a.LARGE},y=p`
  :host {
    gap: 0.25rem;
  }

  :host([size="large"]) {
    font-size: var(--mds-font-apps-body-large-regular-font-size);
    font-weight: var(--mds-font-apps-body-large-regular-font-weight);
    line-height: var(--mds-font-apps-body-large-regular-line-height);
    text-decoration: var(--mds-font-apps-body-large-regular-text-decoration);
    text-transform: var(--mds-font-apps-body-large-regular-text-case);
  }

  :host([size="midsize"]) {
    font-size: var(--mds-font-apps-body-midsize-regular-font-size);
    font-weight: var(--mds-font-apps-body-midsize-regular-font-weight);
    line-height: var(--mds-font-apps-body-midsize-regular-line-height);
    text-decoration: var(--mds-font-apps-body-midsize-regular-text-decoration);
    text-transform: var(--mds-font-apps-body-midsize-regular-text-case);
  }

  :host([size="small"]) {
    font-size: var(--mds-font-apps-body-small-regular-font-size);
    font-weight: var(--mds-font-apps-body-small-regular-font-weight);
    line-height: var(--mds-font-apps-body-small-regular-line-height);
    text-decoration: var(--mds-font-apps-body-small-regular-text-decoration);
    text-transform: var(--mds-font-apps-body-small-regular-text-case);
  }

  :host([size="large"]:hover),
  :host([size="large"]:active),
  :host([size="large"][inline]) {
    font-size: var(--mds-font-apps-body-large-regular-underline-font-size);
    font-weight: var(--mds-font-apps-body-large-regular-underline-font-weight);
    line-height: var(--mds-font-apps-body-large-regular-underline-line-height);
    text-decoration: var(--mds-font-apps-body-large-regular-underline-text-decoration);
    text-transform: var(--mds-font-apps-body-large-regular-underline-text-case);
  }

  :host([size="midsize"]:hover),
  :host([size="midsize"]:active),
  :host([size="midsize"][inline]) {
    font-size: var(--mds-font-apps-body-midsize-regular-underline-font-size);
    font-weight: var(--mds-font-apps-body-midsize-regular-underline-font-weight);
    line-height: var(--mds-font-apps-body-midsize-regular-underline-line-height);
    text-decoration: var(--mds-font-apps-body-midsize-regular-underline-text-decoration);
    text-transform: var(--mds-font-apps-body-midsize-regular-underline-text-case);
  }

  :host([size="small"]:hover),
  :host([size="small"]:active),
  :host([size="small"][inline]) {
    font-size: var(--mds-font-apps-body-small-regular-underline-font-size);
    font-weight: var(--mds-font-apps-body-small-regular-underline-font-weight);
    line-height: var(--mds-font-apps-body-small-regular-underline-line-height);
    text-decoration: var(--mds-font-apps-body-small-regular-underline-text-decoration);
    text-transform: var(--mds-font-apps-body-small-regular-underline-text-case);
  }
`,b=[y];var x=Object.defineProperty,I=(i,n,l,L)=>{for(var e=void 0,r=i.length-1,d;r>=0;r--)(d=i[r])&&(e=d(n,l,e)||e);return e&&x(n,l,e),e};const o=class o extends c(g){constructor(){super(...arguments),this.size=v.LINK_SIZE}getIconSize(){switch(this.size){case a.SMALL:return s.SMALL;case a.MIDSIZE:return s.MIDSIZE;default:return s.LARGE}}render(){return m`
      <slot></slot>
      ${this.iconName?m`
        <mdc-icon
          name=${this.iconName}
          size=${this.getIconSize()}
          length-unit="rem"
        ></mdc-icon>
      `:f}
    `}};o.styles=[...g.styles,...b];let t=o;I([u({type:String,reflect:!0})],t.prototype,"size");t.register(z);export{v as D,a as L};
