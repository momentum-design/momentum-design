import{i as u,k as f,D as h}from"./lit-element-D5KKan5q.js";import{n}from"./property-Bj3TGwkg.js";import{I as c}from"./IconNameMixin-Bk-Z_FTS.js";import{B as v}from"./buttonsimple.component-UJ4pbvCi.js";import{L as z}from"./link.component-DTr-Vb69.js";import{R as b}from"./roles-CJI3JVG-.js";import{u as y}from"./provider.component-DrWB4byV.js";import{D as g}from"./linksimple.component-DbI0pHK9.js";import"./index-C4hiRl7R.js";const x=y.constructTagName("linkbutton"),i={12:12,14:14,16:16},s={SIZE:i[16],ROLE:b.BUTTON,INLINE:g.INLINE,INVERTED:g.INVERTED},E=o=>{switch(o){case i[12]:return .75;case i[14]:return .875;default:return 1}},N=u`
  :host {
    --mdc-link-color-disabled: var(--mds-color-theme-text-primary-disabled);
    gap: 0.25rem;
  }

  :host([size='16']) {
    font-size: var(--mds-font-apps-body-large-regular-font-size);
    font-weight: var(--mds-font-apps-body-large-regular-font-weight);
    line-height: var(--mds-font-apps-body-large-regular-line-height);
    text-decoration: var(--mds-font-apps-body-large-regular-text-decoration);
    text-transform: var(--mds-font-apps-body-large-regular-text-case);
  }

  :host([size='14']) {
    font-size: var(--mds-font-apps-body-midsize-regular-font-size);
    font-weight: var(--mds-font-apps-body-midsize-regular-font-weight);
    line-height: var(--mds-font-apps-body-midsize-regular-line-height);
    text-decoration: var(--mds-font-apps-body-midsize-regular-text-decoration);
    text-transform: var(--mds-font-apps-body-midsize-regular-text-case);
  }

  :host([size='12']) {
    font-size: var(--mds-font-apps-body-small-regular-font-size);
    font-weight: var(--mds-font-apps-body-small-regular-font-weight);
    line-height: var(--mds-font-apps-body-small-regular-line-height);
    text-decoration: var(--mds-font-apps-body-small-regular-text-decoration);
    text-transform: var(--mds-font-apps-body-small-regular-text-case);
  }

  :host([size='16']:hover),
  :host([size='16']:active),
  :host([size='16'][inline]) {
    font-size: var(--mds-font-apps-body-large-regular-underline-font-size);
    font-weight: var(--mds-font-apps-body-large-regular-underline-font-weight);
    line-height: var(--mds-font-apps-body-large-regular-underline-line-height);
    text-decoration: var(--mds-font-apps-body-large-regular-underline-text-decoration);
    text-transform: var(--mds-font-apps-body-large-regular-underline-text-case);
  }

  :host([size='14']:hover),
  :host([size='14']:active),
  :host([size='14'][inline]) {
    font-size: var(--mds-font-apps-body-midsize-regular-underline-font-size);
    font-weight: var(--mds-font-apps-body-midsize-regular-underline-font-weight);
    line-height: var(--mds-font-apps-body-midsize-regular-underline-line-height);
    text-decoration: var(--mds-font-apps-body-midsize-regular-underline-text-decoration);
    text-transform: var(--mds-font-apps-body-midsize-regular-underline-text-case);
  }

  :host([size='12']:hover),
  :host([size='12']:active),
  :host([size='12'][inline]) {
    font-size: var(--mds-font-apps-body-small-regular-underline-font-size);
    font-weight: var(--mds-font-apps-body-small-regular-underline-font-weight);
    line-height: var(--mds-font-apps-body-small-regular-underline-line-height);
    text-decoration: var(--mds-font-apps-body-small-regular-underline-text-decoration);
    text-transform: var(--mds-font-apps-body-small-regular-underline-text-case);
  }

  :host([soft-disabled]) {
    color: var(--mdc-link-color-disabled);
  }
`,I=[N];var w=Object.defineProperty,l=(o,e,m,S)=>{for(var t=void 0,a=o.length-1,p;a>=0;a--)(p=o[a])&&(t=p(e,m,t)||t);return t&&w(e,m,t),t};const d=class d extends c(v){constructor(){super(...arguments),this.size=s.SIZE,this.inline=s.INLINE,this.inverted=s.INVERTED}connectedCallback(){super.connectedCallback(),this.active=void 0,this.role=s.ROLE}update(e){super.update(e),e.has("size")&&this.setSize(this.size)}setSize(e){this.setAttribute("size",Object.values(i).includes(e)?`${e}`:s.SIZE.toString())}render(){return f`
      <slot></slot>
      ${this.iconName?f` <mdc-icon name=${this.iconName} size=${E(this.size)} length-unit="rem"></mdc-icon> `:h}
    `}};d.styles=[...z.styles,...I];let r=d;l([n({type:Number,reflect:!0})],r.prototype,"size");l([n({type:Boolean,reflect:!0})],r.prototype,"inline");l([n({type:Boolean,reflect:!0})],r.prototype,"inverted");r.register(x);export{s as D,i as L};
